import { Link } from 'react-router-dom'; 
import styles from './Menu.module.css';
import { FaFacebook } from "react-icons/fa";
import { TbPlaylist } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState } from 'react';
import SpotifyPlayer from '../Music/SpotifyPlayer';
import { MdLightMode } from "react-icons/md";

function Menu() {

  const [mostrarMusica, setmostrarMusica] = useState(false);
  const abrirLeitor = () => {
    setmostrarMusica(!mostrarMusica);
  };

  
  return (
    <>
      <div className={styles.menu}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>Home</Link>    
          <Link to="/contactos" className={styles.link}>Contactos</Link>
          <Link to="/historia" className={styles.link}>Historia</Link>
          <Link to="/galeria" className={styles.link}>Galeria</Link>
          <button onClick={abrirLeitor} className={styles.button}>
              <TbPlaylist className={styles.icon}   />
          </button>
          <SpotifyPlayer mostrarMusica={mostrarMusica} />
              
          <a href="https://www.facebook.com/profile.php?id=100039534404150&locale=pt_PT" 
              target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FaFacebook  className={styles.icon} />
          </a>

          <a href="mailto:ranchotipicoreguenga@sapo.pt" className={styles.link}>
            <MdOutlineAlternateEmail className={styles.icon} />
          </a>          
        </nav>
      </div>
      <div className={styles.container}>
      </div>
    </>
  );
}

export default Menu;