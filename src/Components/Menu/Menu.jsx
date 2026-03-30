import { Link } from 'react-router-dom'; 
import styles from './Menu.module.css';
import cd from '../../assets/Images/cd.png'
import face from '../../assets/Images/face.png'
import email from '../../assets/Images/email.png'
import logo from '../../assets/Images/logo.png';
import nomeImg from '../../assets/Images/nome.png'

function Menu() {
  return (
    <>
      <div className={styles.menu}>
        <nav>
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
        <div className={styles.hero2}>
          <img src={nomeImg} alt='nome' className={styles.hero2img}/>
        </div>

        <div className={styles.hero1}>
          <img src={logo} alt="Logo" className={styles.hero1img} />
        </div> 
      </div>  
    </>
  );
}

export default Menu;