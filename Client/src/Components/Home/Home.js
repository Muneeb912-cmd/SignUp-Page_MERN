import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import styles from './home.module.css'
const Home=()=>{
    return(
        <>
        <Link to={'/home'}></Link>
        <header className={styles.header}>
            <Header/>
        </header>
        </>
    );
}
export default Home;