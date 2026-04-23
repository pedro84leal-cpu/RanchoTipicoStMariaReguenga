import styles from '../Galeria/galeria.module.css'
import Menu from '../../Components/Menu/Menu'
import Slides from '../Galeria/Components/Slides/Slides'
import Destaques from './Components/Destaques/Destaques';
import Galinheira from './Components/Trajes/Galinheira/galinheira';
import Lavradeira from './Components/Trajes/Lavradeira/lavradeira';

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
        <div >
          <Galinheira />
        </div>
        <div >
          <Lavradeira />
        </div>

     

        

      </div>
    </>
  );
}

export default Galeria;