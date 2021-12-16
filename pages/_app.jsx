import App from 'next/app'
import { Grommet } from 'grommet';
import LayoutPublic from '../containers/layouts/LayoutPublic';

function Quest({ Component, pageProps }) {
    return (
    <Grommet plain>
      <LayoutPublic>
      <Component {...pageProps} />
      </LayoutPublic>
 
    </Grommet>
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