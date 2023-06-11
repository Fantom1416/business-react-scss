import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Container from './Components/Container/Container';
import BigCard from './Components/BigCard/BigCard';
import Container2 from './Components/Container2/Container2';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <BigCard />
      <Container2 />
    </div>
  );
}

export default App;
