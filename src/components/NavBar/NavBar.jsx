import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

 const NavBar = () => {
 return (
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
   
    <div className="navbar-container">
       <div className="container-logo"><h2>Electrotienda</h2>
       </div>
       <ul className="navbar">  
       <li className ="navbar-item">
         <a class="nav-link" href="nosotros">Nosotros</a></li>
        <li className ="navbar-item">
        <a class="nav-link" href="productos">Productos</a></li> 
        <li className ="navbar-item">
        <a class="nav-link" href="contacto">Contactos</a></li>
    </ul>

    <div className="container-cart"><CartWidget/>     
     </div>
    
    </div>
      </nav> 
 )
} 
 export default NavBar;