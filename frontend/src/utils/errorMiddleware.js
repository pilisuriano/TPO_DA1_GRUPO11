import { router } from 'expo-router';
import { isRejectedWithValue } from '@reduxjs/toolkit';

const errorMiddleware = ({ dispatch }) => next => action => {
  if (isRejectedWithValue(action)) {
    const error = action.payload;
		const errorMessage = error.data.message;
    
    if (error.isNetworkError) {
      console.log('No internet connection');
      router.push('/error/internetConnection');
    } else if (error.status) {
      const statusCode = error.status;

      if (statusCode === 400) {
        // action.payload.showInUI = true;
				dispatch({
          type: `${action.type.split('/')[0]}/setError`,
          payload: { message: errorMessage, showInUI: true },
        });
      } else if (statusCode === 500 || statusCode === 404) {
        // router.push('/error/server')
				console.log('Unexpected error: 500, 404');
      }
      // Otros casos según el status code
    } else {
      // router.push('/error/server')
    }
  }
  return next(action);
};

export default errorMiddleware;