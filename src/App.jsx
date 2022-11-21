import logo from './logo.svg';
import './App.css';
import Carousel from './carousel/carousel';

function App() {
  
  const mockImagenes =[
    "https://picsum.photos/id/111/300/300/",
    "https://picsum.photos/id/133/300/300/",
    "https://picsum.photos/id/514/300/300/",
  ]; 
  return (
    <Carousel imagenes={mockImagenes}/>
  );
}
export default App;
