import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom"
import Header from './Component/Header/Header';
import Card from './Component/Card/Card';

function App() {
  return (
    <div className=''>
     {/* <h1 className='text-red-400 ml-[30px]'> hekko prom </h1>
     <Link to = "/about">about</Link> */}
     <Header/>
    <Card/>
     
     
    </div>
  );
}

export default App;
