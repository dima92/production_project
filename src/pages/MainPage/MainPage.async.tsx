import {lazy} from 'react';

export const MainPageAsync = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1500)).then(() => import('./MainPage'))
});
