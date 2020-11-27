import "../styles/global.css"

// グローバルcssを効かせるための設定
export default function App({Component, pageProps}) {
  return <Component {...pageProps} />
}