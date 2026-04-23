import styles from '../../Trajes/trajes.module.css';


import foto1 from '../../../../../assets/Images/img23.webp';
import foto2 from '../../../../../assets/Images/img27.webp';
import foto3 from '../../../../../assets/Images/img100.webp';


const fotos = [
  { id: 1, src: foto1, alt: 'Descrição da foto 1' },
  { id: 2, src: foto2, alt: 'Descrição da foto 2' },
  { id: 3, src: foto3, alt: 'Descrição da foto 3' },
];

function Lavradeira() {
  return (
    <div className={styles.tContainer}>
      <h1 className={styles.tTitulo}>Traje...</h1>
      
      <div className={styles.tGrid}>
        {fotos.map(foto => (
          <img 
            key={foto.id}
            src={foto.src} 
            alt={foto.alt}
            className={styles.tFoto}
            loading="lazy"  
          />
        ))}
      </div>
    </div>
  );
}

export default Lavradeira;