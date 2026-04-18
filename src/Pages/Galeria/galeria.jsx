import styles from '../Galeria/galeria.module.css'
import img1 from '../../assets/Images/imagem1.webp'
import img2 from '../../assets/Images/imagem2.webp'
import img3 from '../../assets/Images/imagem3.webp'
import img4 from '../../assets/Images/imagem6.webp'
import img5 from '../../assets/Images/imagem7.webp'
import img6 from '../../assets/Images/imagem8.webp'
import img7 from '../../assets/Images/imagem10.webp'
import img8 from '../../assets/Images/imagem14.webp'
import img9 from '../../assets/Images/img22.jpeg'
import img10 from '../../assets/Images/img24.jpeg'
import img11 from '../../assets/Images/img26.jpeg'
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Menu from '../../Components/Menu/Menu'

function Galeria() {
  const [lightboxAberto, setLightboxAberto] = useState(false);
  const [imagemIndex, setImagemIndex] = useState(0);

  const slides = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 },
  ];

  const abrirLightbox = (index) => {
    setImagemIndex(index);
    setLightboxAberto(true);
  };

  return (
    <>
      <Menu />
      <div className={styles.container}>
        <h1 className={styles.textGal}>Últimas actuações</h1>
        
        <div className={styles.layoutTresColunas}>
          
          {/* Coluna 1 - Grid */}
          <div className={styles.colunaGrid}>
            <div className={styles.grid}>
              {slides.map((slide, index) => (
                <img 
                  key={index} 
                  src={slide.src} 
                  alt={`Foto ${index + 1}`}
                  onClick={() => abrirLightbox(index)} 
                  className={styles.gridImg}
                />
              ))}
            </div>
          </div>

          {/* Coluna 2 - Imagem destaque 1 */}
          <div className={styles.colunaDestaque1}>
            <img 
              src={img11}
              alt="Destaque 1"
              className={styles.imgDestaque1}
              onClick={() => abrirLightbox(6)}
            />
          </div>

          {/* Coluna 3 - Imagem destaque 2 */}
          <div className={styles.colunaDestaque2}>
            <img 
              src={img10}
              alt="Destaque 2"
              className={styles.imgDestaque2}
              onClick={() => abrirLightbox(7)}
            />
          </div>

        </div>

        <Lightbox 
          open={lightboxAberto} 
          close={() => setLightboxAberto(false)} 
          slides={slides} 
          index={imagemIndex}
        />
      </div>
    </>
  );
}

export default Galeria;