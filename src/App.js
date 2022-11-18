import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';


function App() {
  return (
    <div className="App">
      <section>
        <div className='navbar'>
      <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item className="texto1">
        <Nav.Link eventKey="disabled" disabled>
        AVISOS DESTACADOS
      </Nav.Link>
      
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">AUTOS NUEVOS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">AUTOS USADOS</Nav.Link>
      </Nav.Item>
      


      
      <Nav.Item>
        <Nav.Link eventKey="link-3">MOTOS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">BUSES Y CAMIONES</Nav.Link>
      </Nav.Item>
      
      </Nav>



        </div>
      
      

    </section>




  </div>
  );
}

export default App;
