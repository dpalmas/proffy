import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/45605787?s=460&u=58e8dda9306b389b4635832ec6731fbc2c57f87c&v=4" alt="Davi Palmas"/>
      <div>
        <strong>Davi Palmas</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada
      <br /> <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
      Mais de 200.000 pessoas já passaram por uma das minhas explosões.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;