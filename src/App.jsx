import "./App.css";
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="col-12">
          <Navbar />
          <div class="container">
            <div class="col-12">
              <section class="seccion-general">
                {/* aqui va el carrousel */}
              </section>
              <section class="seccion-general">
                {/* aqui van los tabs */}
              </section>
              <section>{/* aqui va el footer */}</section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
