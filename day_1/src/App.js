import './App.css';
import User from './Components/User';
import Planet from './Components/Planet';

function App() {
  // const names = [
  //   {name:"bhargavi",age:21},
  //   {name:"bhargavi1",age:22},
  //   {name:"bhargavi2",age:23}
  // ];
  // return (
  //   <div className="App">
  //     {
  //       names.map((user,key)=>{
  //         return (<User name={user.name} age={user.age}/>);
  //       })
  //     }
  //     </div>
  // );
  const planets = [
    {name:"Mars",isGasPlanet:false},
    {name:"Earth",isGasPlanet:false},
    {name:"Jupiter",isGasPlanet:true},
    {name:"Venus",isGasPlanet:false},
    {name:"Neptune",isGasPlanet:true},
    {name:"Uranus",isGasPlanet:true},
];
return (
    <div className="App">{
     planets.map((planet,key)=>{
          return (
              //  <div>{planet.isGasPlanet?planet.name:""}</div>
              <Planet name={planet.isGasPlanet?planet.name:""}/>
          );
     })}
    </div>
);
}


export default App;
