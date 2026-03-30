import styles from '../Agenda/agenda.module.css'
import Menu from '../../Components/Menu/Menu'
import { SlCalender } from "react-icons/sl";
import { FcClock } from "react-icons/fc";



function Agenda(){

    const eventos = [
        {
            id: 1,
            dia: "31",
            mes: "Maio",
            titulo: "Festival Internacional",
            local: "Lisboa",
            hora: "16:30",
        },
        {
            id: 2,
            dia: "27",
            mes: "Jun",
            titulo: "68º Festival ",
            local: "Santo Tirso",
            hora: "21:00",
        },
        {
            id: 3,
            dia: "18",
            mes: "Jul",
            titulo: "Festival",
            local: "Viseu",
            hora: "22:00",
        },
        {
            id: 4,
            dia: "1",
            mes: "Ago",
            titulo: "Festival",
            local: "S. Mamede Infesta",
            hora: "22:00",
        },
        {
            id: 5,
            dia: "15",
            mes: "Ago",
            titulo: "Festival",
            local: "Apúlia",
            hora: "22:00",
        },
        {
            id: 6,
            dia: "20 a 24",
            mes: "Ago",
            titulo: "Festival",
            local: "Madeira",
            hora: "22:00",
        },
    ];

    return(
        <>
            <Menu />

            <div className={styles.container}>
                <h2>Próximas actuações</h2>
            <div className={styles.cards}>
                {eventos.map((e) => (
                <div key={e.id} className={styles.card}>
                    <div className={styles.data}>
                    <span className={styles.dia}>{e.dia} <SlCalender size={20} color='white' /> </span>
                    <span className={styles.mes}>{e.mes}</span>
                    </div>
                    <div className={styles.info}>
                    <h3>{e.titulo}</h3>
                    <p>{e.local}</p>
                    <p className={styles.hora}><FcClock size={18} /> {e.hora}</p>
                    </div>
                </div>
                ))}
            </div>

            </div>
        
        </>


    )
}

export default Agenda