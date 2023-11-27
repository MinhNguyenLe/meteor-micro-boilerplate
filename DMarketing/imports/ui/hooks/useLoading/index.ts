import React from 'react';
// import { IQueryName, MeteorMethod } from 'types-root/integration';
// import * as utils from 'utils-global/ui';
import { Meteor } from 'meteor/meteor';

type IQueryName = any;
type MeteorMethod = any;

const utils = {
  meteorMethodCall: (query: string, ...args: any) =>
    new Promise<any>((resolve, reject) =>
      Meteor.call(query, ...args, (error: any, result: any) => {
        if (error) reject(error);
        else resolve(result);
      })
    ),
};

export interface UseLoadingParams<TQueryName extends IQueryName> {
  defaultLoading?: boolean;
  query: TQueryName;
  callbackQuery?: (
    result: MeteorMethod[TQueryName]['return'],
    ...args: MeteorMethod[TQueryName]['params']
  ) => void;
  callbackAsyncQuery?: (
    result: MeteorMethod[TQueryName]['return'],
    ...args: MeteorMethod[TQueryName]['params']
  ) => Promise<void>;
  callbackError?: (error: any) => void;
}

export interface UseLoadingReturn<TQueryName extends IQueryName> {
  isLoading: boolean;
  fetch: (...args: MeteorMethod[TQueryName]['params']) => Promise<void>;
  fetchImmediately: (
    ...args: MeteorMethod[TQueryName]['params']
  ) => Promise<MeteorMethod[TQueryName]['return']>;
}

// Just use for Meteor.call
function useLoading<TQueryName extends IQueryName>({
  defaultLoading = false,
  query,
  callbackQuery,
  callbackAsyncQuery,
  callbackError,
}: UseLoadingParams<TQueryName>): UseLoadingReturn<TQueryName> {
  const [isLoading, setIsLoading] = React.useState<boolean>(defaultLoading);

  async function fetch(...args: MeteorMethod[TQueryName]['params']) {
    setIsLoading(true);

    await utils
      .meteorMethodCall<
        MeteorMethod[TQueryName]['return'],
        MeteorMethod[TQueryName]['params'],
        any
      >(query, ...args)
      .then(async (result) => {
        callbackQuery?.(result, ...args);
        await callbackAsyncQuery?.(result, ...args);

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);

        callbackError?.(error);
      });
  }

  function fetchImmediately(...args: MeteorMethod[TQueryName]['params']) {
    return utils.meteorMethodCall<
      MeteorMethod[TQueryName]['return'],
      MeteorMethod[TQueryName]['params'],
      any
    >(query, ...args);
  }

  return { isLoading, fetch, fetchImmediately };
}

export type UseFlexibleLoadingParams<TQueryName extends IQueryName> = Omit<
  UseLoadingParams<TQueryName>,
  'query'
>;
export function useFlexibleLoading<TQueryName extends IQueryName>({
  defaultLoading = false,
  callbackQuery,
  callbackAsyncQuery,
  callbackError,
}: UseFlexibleLoadingParams<TQueryName>) {
  const [isLoading, setIsLoading] = React.useState<boolean>(defaultLoading);

  async function fetch(
    query: TQueryName,
    ...args: MeteorMethod[TQueryName]['params']
  ) {
    setIsLoading(true);

    await utils
      .meteorMethodCall<
        MeteorMethod[TQueryName]['return'],
        MeteorMethod[TQueryName]['params'],
        any
      >(query, ...args)
      .then(async (result) => {
        callbackQuery?.(result, ...args);
        await callbackAsyncQuery?.(result, ...args);

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);

        callbackError?.(error);
      });
  }

  function fetchImmediately(
    query: TQueryName,
    ...args: MeteorMethod[TQueryName]['params']
  ) {
    return utils.meteorMethodCall<
      MeteorMethod[TQueryName]['return'],
      MeteorMethod[TQueryName]['params'],
      any
    >(query, ...args);
  }

  return { isLoading, fetch, fetchImmediately };
}

export default useLoading;
