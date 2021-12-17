import App from 'next/app'
import { RecoilRoot } from 'recoil';

import LayoutPublic from '../containers/layout/LayoutPublic';

function Quest({ Component, pageProps }) {
    return (
      <RecoilRoot>
      <LayoutPublic>
      <Component {...pageProps} />
      </LayoutPublic>
      </RecoilRoot>

)}
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  
  Quest.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
  
    return { ...appProps }
  }
  
  export default Quest