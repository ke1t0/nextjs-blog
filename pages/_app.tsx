import '../styles/global.css';
import { AppProps } from 'next/app';

// グローバルcssを効かせるための設定
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
