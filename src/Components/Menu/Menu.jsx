import { Link } from 'react-router-dom'; 
import styles from './Menu.module.css';
import { FaFacebook } from "react-icons/fa";
import { TbPlaylist } from "react-icons/tb";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState } from 'react';

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
                
          {mostrarMusica && (
            <div className={styles.playerContainer}>
              <iframe src="https://open.spotify.com/embed/artist/5qvv0E5A6cnZ9Yt4zkI6AA"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    style={{ borderRadius: '12px', marginTop: '1rem' }}
                    title="Spotify Player" />
            </div>
          )}

          <a href="https://www.facebook.com/profile.php?id=100039534404150&locale=pt_PT" 
              target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FaFacebook  className={styles.icon} />
          </a>

          <a href="mailto:ranchotipicoreguenga@sapo.pt" className={styles.link}>
            <MdOutlineAlternateEmail className={styles.icon} />
          </a>          
        </nav>
      </div>
    </>
  );
}

export default Menu;