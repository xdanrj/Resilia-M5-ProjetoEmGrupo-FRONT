import "./Navbar.css"


const Navbar = () => {
    return(
       
        <nav class="navbar bg-dark navbar-dark d-flex  ">
    <div class="logo"><img src="src\img\ztechLOGO.png" width="50%" height="50%"/></div>
    <div class="nav navbar-nav navbar-right">
        <div class="d-flex mb-1 align-self-center">
           
            <div> <a class="navbar-brand" href="/produtos">Produtos</a></div>
            <div> <a class="navbar-brand" href="/addprodutos">Cadastro</a></div>
      
      
        </div>
    </div>
</nav>
    )

}


export default Navbar