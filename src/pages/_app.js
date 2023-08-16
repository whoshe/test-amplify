import '@/styles/globals.css';
import {Amplify} from 'aws-amplify';
import awsConfigure from '@/aws-exports';

Amplify.configure(awsConfigure);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
