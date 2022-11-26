import './App.css';
import Carousel from './carousel/index';


const mockImagenes =[
  "https://picsum.photos/id/111/800",
  "https://picsum.photos/id/133/800",
  "https://picsum.photos/id/514/800",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"
]; 

function App() {
  return (<Carousel imagenes={mockImagenes} />);
}

export default App;
