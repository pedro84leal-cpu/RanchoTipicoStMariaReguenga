import styles from '../Destaques/Destaques.module.css'
import { imagensDestaque } from '../../../Galeria/Components/slides_destaques';




function Destaques(){
    return(
        <>

        <div className={styles.colunaDestaque1}>
            <img src={imagensDestaque[0].src} // ✅ Pega do array (índice 9 = img11)
              alt="Destaque 1"
              className={styles.imgDestaque1}
            />
        </div>
        <div className={styles.colunaDestaque2}>
            <img 
              src={imagensDestaque[1].src} // ✅ Pega do array (índice 10 = img12)
              alt="Destaque 2"
              className={styles.imgDestaque2}
            />
        </div>
       
        </>
    )
}

export default Destaques