
import styles from "./Header.module.scss"
import globalStyles from "../../App.module.scss"
import { Link } from "react-router-dom"

const Header = () => {
    return (
       <header id={styles.header}>
            <div className={styles.container}>
                <div className="row">
                    <div className={`${styles.header} ${globalStyles.clearfix}` } >
                        <h1>
                            <Link to="">
                                <em><img src="" alt="check"></img></em>
                                <strong><img src="" alt='dd'></img></strong>
                            </Link>
                        </h1>
                        <nav className={styles.nav}>
                            <ul className={globalStyles.clearfix}>
                                <li><Link to="">안녕</Link></li>
                                <li><Link to="">하세</Link></li>
                                <li><Link to="">요용</Link></li>
                                <li><Link to="">링크</Link></li>
                                <li><Link to="">링크1</Link></li>
                                <li><Link to="">링크2</Link></li>
                                <li><Link to="">링크3</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
       </header>
        // header
    );
};

export default Header;