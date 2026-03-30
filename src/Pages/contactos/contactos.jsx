import { CiMobile4 } from "react-icons/ci";
import { Link } from 'react-router-dom'; 
import Menu from "../../Components/Menu/Menu"
import styles from './contactos.module.css'
import { useState } from 'react';
import { MdEmail, MdPerson, MdMessage } from 'react-icons/md';
import { FaFacebook } from "react-icons/fa";
import { LiaAddressCard } from "react-icons/lia";





function Contactos(){
    const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Enviar para API
  };



    return(
        <>

        <Menu/>
        <address class={styles.hero}>

        <div class={styles.contactCard}>
                <h3 class={styles.title}>Contactos</h3>
            <ul class={styles.ul}>
                <li>
                    <span class="contact-icon"><MdEmail size={20} color="#f3efef" /></span>
                    <a href="ranchotipicoreguenga@sapo.pt" class={styles.contactItem}>ranchotipicoreguenga@sapo.pt </a>
                </li>

                <li class="contact-item">
                    <span class="contact-icon"><FaFacebook size={20} color="#f7f4f4" /></span>
                    <a href="https://www.facebook.com/profile.php?id=100039534404150&locale=pt_PT" class={styles.contactItem}  target="_blank" 
                        rel="noopener noreferrer"> Facebook </a>
                </li>

                 <li class="contact-item">
                     <h1 class={styles.contactItem}>
                        Morada: 
                        Rua Rancho Típico (Quinta)<br></br>
                        4780-408 Reguenga 
                    </h1>           
                </li>

                <li class="contact-item">
                    <h1  class={styles.contactItem}>
                        Telm:
                        +351 919 740 908 
                    </h1>
                </li>



            </ul>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>

            <h3 className={styles.smsTitle}>
                Deixe-nos a sua mensagem
            </h3>

            <div className={styles.icon}><MdPerson/><input className={styles.formItens} type="text" name="nome" value={formData.nome} 
                onChange={handleChange} placeholder="Seu nome" required />
            </div>

            <div className={styles.icon}><MdEmail /><input className={styles.formItens} type="email" name="email" value={formData.email}
                onChange={handleChange} placeholder="Seu email" required/>
            </div>

            <div className={styles.icon}><MdMessage /> <textarea className={styles.formItens} name="mensagem" value={formData.mensagem} onChange={handleChange}
                placeholder="Sua mensagem" rows={10} maxLength={3000} required/>
            </div>

            <button type="submit" className={styles.formItens}>
                Enviar Mensagem
            </button>
        </form>
        </address>

    </>
       


    )
}

export default Contactos