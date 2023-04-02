import "./Rodape.css"; 

const Rodape = () => {
  return (
    <footer className="bd-footer py-4 py-md-2 mt-5 bg-dark fixed-bottom">
      <div className="ctnrfoot py-1 px-4 text-body-secondary">
        <div className="row">
          <div className="col-lg-12 mb-3 text-center">
            <a className="text-align-center text-decoration-none" aria-label="Bootstrap">
              <h3 style={{ color: "#ffffff" }}>2023 © ZTECH - Todos os direitos reservados</h3>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
