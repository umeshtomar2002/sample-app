import { useCallback, useEffect, useState } from 'react';
import binahErrors from '../data/binahErrorCodes'

const useError = (alert) => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const displayError = useCallback((message: string) => {
    setErrorMessage(message);
  }, []);

  useEffect(() => {
    if (alert?.code === -1) {
      setErrorMessage('');
      return;
    }

    if (alert?.code) {
      let errObj = binahErrors.find(a => a.errorCode === alert.code);
      // let messageJsx = `<div>Error Code: ${errObj.errorCode}</div><div>Cause: ${errObj.cause}</div><div>Reslution: ${errObj.solution}</div>`
      displayError(`Resolution: ${errObj.solution}`);
    }
  }, [alert]);

  return errorMessage;
};
export default useError;
