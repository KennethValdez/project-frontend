import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import List from './list/list';
import Tabs from './tabmenu/tab';

function App() {
  return (
    <div className="App">
      <List />
      <Tabs/>
    </div>
  );
}
export default App;
