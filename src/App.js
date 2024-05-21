import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom"

function App() {
  return (
    <div>
     <h1 className='text-red-400 ml-[30px]'> hekko prom </h1>
     <Link to = "/about">about</Link>
     
     
    </div>
  );
}

export default App;
