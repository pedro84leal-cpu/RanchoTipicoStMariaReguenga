import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import imagem1 from '../../../assets/Images/imagem2.jpg';
import imagem2 from '../../../assets/Images/rancho.jpg';
import imagem3 from '../../../assets/Images/rancho1.jpg';
import imagem4 from '../../../assets/Images/imagem3.jpg';
import imagem5 from '../../../assets/Images/imagem6.jpg';
import imagem6 from '../../../assets/Images/imagem7.jpg';   
import imagem7 from '../../../assets/Images/imagem8.jpg';
import imagem8 from '../../../assets/Images/imagem1.jpg'; 
import imagem9 from '../../../assets/Images/imagem10.jpg';
import imagem10 from '../../../assets/Images/imagem14.jpg';
  

function Slider() {
  const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10];

    const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % imagens.length); // ← usa prev
    }, 7000);

    return () => clearInterval(intervalo);
  }, [imagens.length]); // ← remove indiceAtual das dependências

  // Próxima imagem
  const proximaImagem = () => {
    setIndiceAtual((prev) => (prev + 1) % imagens.length);
  };

  // Imagem anterior
  const imagemAnterior = () => {
    setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  return (

    <div className={styles.carouselContainer}>
      <div className={styles.slider}>
        <img 
          src={imagens[indiceAtual]} 
          alt={`Slide ${indiceAtual + 1}`}
          className={styles.imagem}
        />
        
        <button 
          className={`${styles.button} ${styles.prev}`} 
          onClick={imagemAnterior}
        >
          ❮
        </button>
        <button 
          className={`${styles.button} ${styles.next}`} 
          onClick={proximaImagem}
        >
          ❯
        </button>
      </div>

      <div className={styles.dots}>
        {imagens.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === indiceAtual ? styles.active : ''}`}
            onClick={() => setIndiceAtual(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;