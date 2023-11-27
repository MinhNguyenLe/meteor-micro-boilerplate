/* eslint-disable @typescript-eslint/no-empty-interface */
// TODO will export package @types/meteor-dburles-factory
// https://github.com/versolearning/meteor-factory/blob/master/factory.js

declare module 'meteor/dburles:factory' {
  type Hook = () => void;

  interface Attributes {}
  interface UserOptions {}
  interface Options {}

  type MongoCollection = Mongo.Collection<Document, Document>;

  namespace Factory {
    const name: string;
    const collection: Mongo.Collection<Document, Document>;
    const attributes: Attributes;
    const afterHooks: Array<Hook>;
    const sequence: number;

    function define(
      name: string,
      collection: MongoCollection,
      attributes: Attributes
    ): string;

    function get(name: string): Factory;

    function create(
      name: string,
      attributes: Attributes = {},
      userOptions: UserOptions = {}
    ): Mongo.Collection<Document, Document>['findOne'];

    function createAsync(
      name: string,
      attributes: Attributes = {},
      userOptions: UserOptions = {}
    ): Promise<Mongo.Collection<Document, Document>['findOne']>;

    function extend(
      name: string,
      attributes: Attributes
      // eslint-disable-next-line no-undef
    ): LoDashStatic['extend'];

    function build(
      name: string,
      attributes: Attributes = {},
      userOptions: UserOptions = {}
    ): void;
    function buildAsync(
      name: string,
      attributes: Attributes = {},
      userOptions: UserOptions = {}
    ): void;
    function tree(
      name: string,
      attributes: Attributes = {},
      userOptions: UserOptions = {}
    ): void;
    function treeAsync(
      name: string,
      attributes: Attributes = {},
      userOptions: UserOptions = {}
    ): void;

    function _build(
      name: string,
      attributes: Attributes = {},
      userOptions: UserOptions = {},
      options: Options = {}
    ): void;
    function _buildAsync(
      name: string,
      attributes: Attributes = {},
      userOptions: UserOptions = {},
      options: Options = {}
    ): Promise<void>;
  }
}
