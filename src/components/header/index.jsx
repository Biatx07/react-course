import './styles.css'
import Logo from "../../assets/img/Logo.svg";

export default function Header() {
    return(

        <Header>
            <img src={Logo} alt="Logo da Compainha" />
            <nav>
                <a href="">Link One</a>
                <a href="">Link Two</a>
                <a href="">Link Three</a>
                <a href="">Link Four</a>
            </nav>
            <button>Try it for free</button>  

        </Header>
        
    )
}