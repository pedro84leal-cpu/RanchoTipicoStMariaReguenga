import styles from '../Galeria/galeria.module.css'
import Menu from '../../Components/Menu/Menu'
import img1 from '../../assets/Images/imagem1.jpg'
import img2 from '../../assets/Images/imagem2.jpg'
import img3 from '../../assets/Images/imagem3.jpg'
import img4 from '../../assets/Images/imagem6.jpg'
import img5 from '../../assets/Images/imagem7.jpg'
import img6 from '../../assets/Images/imagem8.jpg'
import img7 from '../../assets/Images/imagem10.jpg'
import img8 from '../../assets/Images/imagem14.jpg'



function Galeria(){

    return(
        <>
        <Menu />
        <div className={styles.container}>
            <div className={styles.content}>            
                <div className={styles.wrapper}>
                    <img src={img1} alt="img1" />
                    <img src={img2} alt="img2" />
                    <img src={img3} alt="img3" />
                    <img src={img4} alt="img4" />
                    <img src={img5} alt="img5" />
                    <img src={img6} alt="img6" />
                    <img src={img7} alt="img7" />
                    <img src={img8} alt="img8" />

                    <img src={img1} aria-hidden="true" />
                    <img src={img2} aria-hidden="true" />
                    <img src={img3} aria-hidden="true" />
                    <img src={img4} aria-hidden="true" />
                    <img src={img5} aria-hidden="true" />
                    <img src={img6} aria-hidden="true" />
                    <img src={img7} aria-hidden="true" />
                    <img src={img8} aria-hidden="true" />                          
                </div>
            </div>
        </div>
        </>


    )
}

export default Galeria