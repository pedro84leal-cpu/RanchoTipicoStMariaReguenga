import { useNavigate } from 'react-router-dom';
import Menu from '../../Components/Menu/Menu';
import styles from './Home.module.css';
import hero from '../../assets/Images/rancho.jpg'

function Home() {
  const navigate = useNavigate();

  const handleSaberMais = () => {
    navigate('/historia');
  };

  return (
    <>
      <Menu />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>
              Rancho Típico de <br />
              <span className={styles.highlight}>Santa Maria da Reguenga</span>
            </h1>
            <p className={styles.year}>
              70 anos de história e tradição
            </p>
            <p className={styles.description}>
              Preservamos e celebramos a cultura, o folclore e as tradições 
              portuguesas, levando a alma do nosso povo a cada atuação.
            </p>
            <button className={styles.button} onClick={handleSaberMais}>
              Saber mais →
            </button>
          </div>

          <div className={styles.imageSection}>
            <img src={hero} alt="Rancho Típico" className={styles.heroImage} />
          <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home