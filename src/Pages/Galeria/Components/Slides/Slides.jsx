import styles from '../Slides/Slides.module.css'
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galeriaImagens } from '../../../Galeria/Components/slides_destaques';





function Slides(){

    const [lightboxAberto, setLightboxAberto] = useState(false);
    const [imagemIndex, setImagemIndex] = useState(0);
    const abrirLightbox = (index) => {
        setImagemIndex(index);
        setLightboxAberto(true);
    };


    return(
        <>
        <div className={styles.colunaGrid}>
        <div className={styles.grid}>
            {galeriaImagens.map((slide, index) => (
                <img key={index} src={slide.src} 
                    alt={`Foto ${index + 1}`}
                    onClick={() => abrirLightbox(index)} 
                    className={styles.gridImg}
                />
            ))}
        </div>
        </div>
         <Lightbox open={lightboxAberto} close={() => setLightboxAberto(false)} 
          slides={galeriaImagens} index={imagemIndex}
        />
        </>
    )
}

export default Slides