import styles from "./layout.module.css";

function Layout({children}) {
  // コンソールで見るとdivタグにクラス名が付与されている。CSS モジュールは自動的に一意のクラス名を生成します。CSS モジュールを使っているかぎりは、クラス名の衝突を気にする必要はないのです。
  return <div className={styles.container}>{children}</div>
}

export default Layout;