import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [Names,setNames]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setNames(data))
  },[])

  // const Names=[{name: 'Joshim', age: 45}, {name:'Depjol',age:34},{name:'Bapparaz',age:54},{name:'Sakib',age:87},{name: 'Alamgir', age: 45},{name:'Omor Sani',age:90}]

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        Names.map(NK=><li><Name name={NK.name} key={NK.id} age={NK.age}></Name></li>)
      }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount]= useState(0);
  const handleClick = () => setCount(count+1);
  const handleDecrease = () => setCount(count-1);
  return(
    <div>
      <button onClick={handleClick}>Add Movies</button>
      <button onClick={handleDecrease}>Decrease Movie</button>
      <h3>Numbers of movies: {count} </h3>
      <MovieDisplay movies={count}></MovieDisplay>
      
    </div>
  )
}
function MovieDisplay(props){
  return(
    <div>
      <h4>Movies I have acted:{props.movies} </h4>
    </div>
  )
}
function Name(props){
  const Style ={
    border: '2px solid gray',
    borderRadius: '5px',
    margin: '20px'
  }
  return(
    <div style={Style}>
      <h1>My Name Is {props.name}</h1>
      <h3>I don't have any job  within {props.age||'Undefine'} years</h3>
    </div>
  )
}

export default App;
