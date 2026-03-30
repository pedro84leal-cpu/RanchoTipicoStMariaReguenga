import styles from '../Historia/historia.module.css'
import Menu from '../../Components/Menu/Menu' 
import imagem1 from '../../assets/Images/rancho.jpg'



function Historia(){

    return(

        <>
        <Menu />
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <img src={imagem1} alt='imagem' className={styles.img1} />
            </div>

            <div className={styles.text}>
                <header>
                    <h1 className={styles.title}>
                    Rancho Típico de Santa Maria da Regenga
                    </h1>
                </header>

                <p className={styles.p}>
                    Fundado em 1956 na Freguesia da Reguenga do Concelho de Santo Tirso
                    o Rancho Típico de Santa Maria da Reguenga é uma das coletividades mais
                    típicas e características da sua Região.
                </p>

                 <p className={styles.p}>
                   Situado no Vale do Leça o seu folclore foi nitidamente influenciado pelo Folclore Minhoto e Maiato.
                   Mantendo-se inalteráveis ao longo dos anos, os seus trajes remontam aos finais do século XVIII, 
                   destacando-se os de Galinheira e Lavradeira Rica.
                </p>

                 <p className={styles.p}>
                    Mantendo-se inalteráveis ao longo dos anos, os seus trajes remontam aos finais do século XVIII, 
                   destacando-se os de Galinheira e Lavradeira Rica.
                </p>

                 <p className={styles.p}>
                    Com atuações de Norte a Sul de Portugal incluindo Açores e Madeira 
                    este grupo efetuou já digressões por Espanha, França, Alemanha, Inglaterra e Brasil.
                </p>

                <p className={styles.p}>
                   Membro fundador da Federação de Folclore Português e organizador de um 
                   elevado número de iniciativas de carácter Etnográfico e Folclórico o 
                   Rancho Típico de Santa Maria da Reguenga, tem, contudo, como primordial objetivo
                    a preservação e divulgação genuína do Folclore do Vale do Leça
                </p>


            </div>


        </div>

        
        
        </>


    )
}

export default Historia