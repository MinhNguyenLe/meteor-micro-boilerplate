import { i18n } from 'meteor/universe:i18n';
import React from 'react';

function useTranslator(prefix = '') {
  return React.useCallback(
    (key: string, ...args: any[]) => i18n.getTranslation(prefix, key, ...args),
    []
  );
}

export { useTranslator };
