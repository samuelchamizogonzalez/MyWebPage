import './Navbar.css';

function Navbar() {
  return (
    <div className="body">
      <nav id="Navbar">
        <a href="/MyCV/">Mi CV</a> 
        <a href="/Documentation/">Documentación</a>
        <a href="/Proyects/">Proyectos</a>
        <a href="/Resources/">Recursos</a>
        <a href="/AboutMe/">¿Quién soy?</a>
        <a href="/ExtraHoursCalculator/">Calculadora de horas</a>
      </nav>
    </div>
  );
}

export default Navbar;
