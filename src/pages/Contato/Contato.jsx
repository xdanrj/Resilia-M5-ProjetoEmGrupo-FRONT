import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import "./style.css"
import "./icons/email.png"
import "./icons/facebook.png"
import "./icons/twitter.png"
import "./icons/zap.png"

const Contato = () => {
  return (
    <main>
      <div className="esquerda">
        <div className="containerEndereco">
          <h1>Contate-nos</h1>
          <h3>Nossa localização:</h3>
          <p>R. Barcelos Domingos, 58 - Campo Grande, Rio de Janeiro - RJ, 23080-020</p>
        </div>
        <div className="containderRedeSocial">
          <h1>Siga-nos</h1>
          <div className="links">
            <a href="#"><img className="icone" src="./icons/email.png" alt="" /></a>
            <a href="#"><img className="icone" src="./icons/facebook.png" alt="" /></a>
            <a href="#"><img className="icone" src="./icons/twitter.png" alt="" /></a>
            <a href="#"><img className="icone" src="./icons/zap.png" alt="" /></a>
          </div>

        </div>
      </div>

      <div className="direita">
        <form>
          <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label custom-label">Email:</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adicione seu Email" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label custom-label">Mande sua mensagem:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" />
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </main>
  );
};

export default Contato;
