import logo from '../../assets/img/logo.svg'
import './styles.css'
function Header() {  
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="Logo loja"/>
            <h1>Vendas anuais</h1>
            <p>
              Desenvolvido por
              <a href="https://github.com/HarukaIonaSao"> Roberta Ribeiro</a>
            </p>
        </div>
    </header>
    
    )  
  }
  
  export default Header
  