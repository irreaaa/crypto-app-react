import './App.css';
import Axios from 'axios';
import {useState, useEffect} from 'react';




function App() {
const [search, setSearch] = useState("");
const [crypto, setCrypto] = useState([]);


  return (


    <div className="App">
      <h1 className="title">Cryptocurrency Finder</h1>
      <input className="text">
      placeholder ='search (only small letters)...'
      onChange={(e) => {
        setSearch(e.target.value)
      }}</input> 
      
      {}
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Price</td> 
          </tr>
        </thead>
      </table>


    </div>
  );
}

export default App;
