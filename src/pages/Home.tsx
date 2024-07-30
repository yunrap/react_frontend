import { Link } from "react-router-dom";
import styles from "../components/layout/Header.module.scss"
import homeStyles from "./Home.module.scss"
const Home = () => {
  return (
    <section id="banner">
      <h2 className={styles.ir_so}>메인배너정보</h2>
        <div className={homeStyles.banner_menu}>
          <div className={homeStyles.container}>
            <div className={homeStyles.row}>
              <div className={homeStyles.bm_left}>
                <ul>
                  <li className={homeStyles.total}><Link to="">전체메뉴 1</Link></li>
                  <li className={homeStyles.line}><Link to="">전체메뉴 1-1</Link></li>
                  <li><Link to="">전체메뉴 1-2</Link></li>
                </ul>
              </div>
              <div className={homeStyles.bm_right}>
                <ul>
                  <li className={homeStyles.line}><Link to="">전체메뉴 2</Link></li>
                  <li className={homeStyles.line}><Link to="">전체메뉴 2-1</Link></li>
                  <li><Link to="">전체메뉴 2-2</Link></li>
                </ul>
                <ul>
                  <li className={homeStyles.white}><Link to="">전체메뉴 3</Link></li>
                  <li className={homeStyles.purple}><Link to="">전체메뉴 3-1</Link></li>
                  <li><Link to="">전체메뉴 3-2</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className={homeStyles.slider}>
          <img src="banner.jpg" alt="대체이미지" />
        </div>

    </section>
  );
};

export default Home;
