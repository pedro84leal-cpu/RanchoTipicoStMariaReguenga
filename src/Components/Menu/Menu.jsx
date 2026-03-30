import { Link } from 'react-router-dom'; 
import styles from './Menu.module.css';
import cd from '../../assets/Images/cd.png'
import face from '../../assets/Images/face.png'
import email from '../../assets/Images/email.png'

function Menu() {
  return (
    <>
      <div className={styles.menu}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>Home</Link>    
          <Link to="/contactos" className={styles.link}>Contactos</Link>
          <Link to="/historia" className={styles.link}>Historia</Link>
          <Link to="/galeria" className={styles.link}>Galeria</Link>
          <Link to="/agenda" className={styles.link}>Agenda</Link>
          <Link to="ouvir" className={styles.link}>
              <img src={cd} alt="ouvir" className={styles.icon} />
          </Link> 

          <a href="https://www.facebook.com/profile.php?id=100039534404150&locale=pt_PT" 
              target="_blank" rel="noopener noreferrer" className={styles.link}>
            <img src={face} alt="Facebook" className={styles.icon} />
          </a>

          <a href="mailto:teste@exemplo.com" className={styles.link}>
            <img src={email} alt="Email" className={styles.icon} />
          </a>          
        </nav>
      </div>
    </>
  );
}

export default Menu;