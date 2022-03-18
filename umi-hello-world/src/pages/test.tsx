import styles from './index.less';
import { NavLink } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page text</h1>
      <NavLink to="/">首页</NavLink>
    </div>
  );
}
