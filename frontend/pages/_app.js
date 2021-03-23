import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
import Page from '../components/Page';

// customize transition progress bar styling
import '../components/styles/nprogress.css';
// attach progress bar to router page transition events
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

// tell nextjs to get the inital data call for a page, if applicable
MyApp.getInitalProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitalProps) {
    pageProps = await Component.getInitalProps(ctx);
  }

  pageProps.query = ctx.query;
  return { pageProps };
};

// inject app with custom Apollo client setup
export default withData(MyApp);

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  apollo: PropTypes.object,
};
