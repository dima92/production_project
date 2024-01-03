import {lazy} from "react";

export const AboutPageAsync = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1500)).then(() => import('./AboutPage'))
});
