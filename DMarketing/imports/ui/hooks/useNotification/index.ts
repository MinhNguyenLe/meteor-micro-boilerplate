import notification, { ArgsProps } from 'antd/lib/notification';
import { useTranslator } from 'hooks/useTranslator';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface NotificationOptionsProps extends Omit<ArgsProps, 'message'> {
  message?: ArgsProps['message'];
}

const useNotification = () => {
  const showNotification = (type: NotificationType, options: ArgsProps) => {
    notification[type]({
      placement: 'bottomRight',
      ...options,
    });
  };

  const t = useTranslator('common.NOTIFICATION');

  return {
    showSuccess: (options: NotificationOptionsProps = {}) =>
      showNotification('success', { message: t('SUCCESS'), ...options }),
    showInfo: (options: NotificationOptionsProps = {}) =>
      showNotification('info', { message: t('INFO'), ...options }),
    showWarning: (options: NotificationOptionsProps = {}) =>
      showNotification('warning', { message: t('WARNING'), ...options }),
    showError: (options: NotificationOptionsProps = {}) =>
      showNotification('error', { message: t('ERROR'), ...options }),
    onDestroy(key: string) {
      notification.close(key);
    },
  };
};

export default useNotification;
