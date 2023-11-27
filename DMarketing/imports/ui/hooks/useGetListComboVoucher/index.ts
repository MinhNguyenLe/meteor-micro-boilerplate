// import useErrorHandler, {
//   ERROR_HANDLER_ACTION_KEY,
//   ERROR_HANDLER_ALERT_KEY,
// } from 'hooks/useErrorHandler';
import useLoading from 'hooks/useLoading';
import { useEffect, useState } from 'react';

const useGetListComboVoucher = () => {
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<any>(0);

  const [pagination, setPagination] = useState<any>({
    current: 1,
    pageSize: 10,
  });
  // const { btaskeeCatchError } = useErrorHandler();

  const { isLoading, fetch } = useLoading({
    query: 'promotion.getListComboWithPagination',
    callbackQuery: (result) => {
      if (result) {
        setData(result?.data || []);

        setTotal(result?.total || 0);
      }
    },
    callbackError: (error) => {
      console.log(error, 'error !! ');
      // btaskeeCatchError({
      //   error,
      //   alertKey: ERROR_HANDLER_ALERT_KEY.SERVER_ERROR_COMMON,
      //   actionKey: ERROR_HANDLER_ACTION_KEY.SEND_MSG_TO_DEV_TEAM,
      // });
    },
  });

  useEffect(() => {
    fetch({
      pageNumber: pagination.current,
      pageSize: pagination.pageSize,
    });
  }, []);

  const onPagination = (newPagination: any) => {
    setPagination(newPagination);

    fetch({
      pageNumber: newPagination.current,
      pageSize: newPagination.pageSize,
    });
  };

  const refetch = async () => {
    if (total === 1) {
      setData([]);
      setPagination({
        current: 1,
        pageSize: 10,
      });

      return;
    }

    if (
      total &&
      total % 10 === 1 &&
      pagination.current &&
      pagination.current >= 1
    ) {
      setPagination({ ...pagination, current: pagination.current - 1 });

      await fetch({
        pageNumber: pagination.current - 1,
        pageSize: pagination.pageSize,
      });

      return;
    }

    await fetch({
      pageNumber: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  return {
    data,
    total,
    pagination,
    isLoading,
    onPagination,
    refetch,
  };
};

export default useGetListComboVoucher;
