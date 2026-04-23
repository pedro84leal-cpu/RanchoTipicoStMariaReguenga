import styles from '../Galeria/galeria.module.css'
import Menu from '../../Components/Menu/Menu'
import Slides from '../Galeria/Components/Slides/Slides'
import Destaques from './Components/Destaques/Destaques';

function Galeria() {

  return (
    <>
      <Menu />
      <div className={styles.container}>
        <h1 className={styles.textGal}>Últimas actuações</h1>
        
        <div className={styles.layoutTresColunas}>
          <Slides />
          <Destaques />
        </div>
        <div>
        <h2>
          Galinheira
        </h2>
        </div>

        

      </div>
    </>
  );
}

export default Galeria;