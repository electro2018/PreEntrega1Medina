import "./NavBar.css";
import CartWidget from "../CartWidget"; 

 const NavBar = () => {
 return (
    <div className="navbar-container">
       <div className="container-logo"><h2>Electrotienda</h2>
       </div>
       <ul className="navbar">  
       <li className ="navbar-item">
         <a class="nav-link" href="#">Nosotros</a></li>
        <li className ="navbar-item">
        <a class="nav-link" href="#">Productos</a></li> 
        <li className ="navbar-item">
        <a class="nav-link" href="#">Contactos</a></li>
    </ul>
    <div className="container-cart"><CartWidget/> </div>
    </div>
    
 )
} 
 export default NavBar;