import { Link } from 'react-router-dom'; 
import Menu from "../../Components/Menu/Menu"
import styles from './contactos.module.css'
import { useState } from 'react';
import { MdEmail, MdPerson, MdMessage, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebook } from "react-icons/fa";




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
    alert('Mensagem enviada com sucesso!');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return(
    <>
      <Menu />
      
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Lado Esquerdo - Informações de Contacto */}
          <div className={styles.infoSection}>
            <h1 className={styles.title}>Contactos</h1>
            <p className={styles.subtitle}>
              Entre em contacto connosco através dos meios abaixo ou envie-nos uma mensagem.
            </p>

            <div className={styles.contactList}>
              {/* Email */}
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <MdEmail size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h4>Email</h4>
                  <a href="mailto:ranchotipicoreguenga@sapo.pt" className={styles.contactLink}>
                    ranchotipicoreguenga@sapo.pt
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <FaFacebook size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h4>Facebook</h4>
                  <a href="https://www.facebook.com/profile.php?id=100039534404150&locale=pt_PT" 
                     className={styles.contactLink}
                     target="_blank" 
                     rel="noopener noreferrer">
                    Rancho Típico Santa Maria da Reguenga
                  </a>
                </div>
              </div>

              {/* Morada */}
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <MdLocationOn size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h4>Morada</h4>
                  <p className={styles.contactText}>
                    Rua Rancho Típico (Quinta)<br />
                    4780-408 Reguenga
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <MdPhone size={24} />
                </div>
                <div className={styles.contactDetails}>
                  <h4>Telefone</h4>
                  <a href="tel:+351919740908" className={styles.contactLink}>
                    +351 919 740 908
                  </a>
                </div>
              </div>
            </div>
          </div>

        
          <div className={styles.formSection}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>
                Deixe-nos a sua mensagem
              </h3>

              <div className={styles.inputGroup}>
                <MdPerson className={styles.inputIcon} />
                <input 
                  className={styles.input} 
                  type="text" 
                  name="nome" 
                  value={formData.nome} 
                  onChange={handleChange} 
                  placeholder="Seu nome" 
                  required 
                />
              </div>

              <div className={styles.inputGroup}>
                <MdEmail className={styles.inputIcon} />
                <input 
                  className={styles.input} 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange} 
                  placeholder="Seu email" 
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <MdMessage className={styles.inputIcon} />
                <textarea 
                  className={styles.textarea} 
                  name="mensagem" 
                  value={formData.mensagem} 
                  onChange={handleChange}
                  placeholder="Sua mensagem" 
                  rows={6} 
                  maxLength={500} 
                  required
                />
              </div>

              <button type="submit" className={styles.button}>
                Enviar Mensagem →
              </button>
            </form>
          </div>
        </div>        
      </div>
    </>
  )
}

export default Contactos