import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbarup bg-dark navbar-dark d-flex">
            <div className="logo"><img src="./src/img/ztechLOGO.png" width="50%" height="50%" alt="Ztech Logo" /></div>
            <div><a className="navbar-brand" href="/home">Inicio</a></div>
            <div><a className="navbar-brand" href="/produtos">Produtos</a></div>
            <div><a className="navbar-brand" href="/addprodutos">Cadastro</a></div>
            <div><a className="navbar-brand" href="/Contato">Contato</a></div>


        </nav>
    );
};

export default Navbar;