import styles from './index.less';
import { NavLink } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <NavLink to="/test">测试页面</NavLink>
    </div>
  );
}
