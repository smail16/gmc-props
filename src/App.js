import logo from './logo.svg';
import './App.css';
import Header from './Head/Header';
import Comp from './competence/Comp';
import Cards from './competence/cards/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
const nav =   {
    image:"gmc.png",
    cours:"Course",
    check: "Checkpoint",
    one: "One To 0ne",
    resume:"Resume course",
  }
  const level =
    {
      titre :"skills",
      compet1 : "CSS",
      compet2 :"HTML",
      compet3 : "GIT",
      compet4 : "DOM",
      compet5 :"react js",
    }
   
    const liste =[
      {
          id: Math.random(),
          image:"av.jpg",
          nom :"Ismail",
          age : "28",
          score : "5450",
      },
      {
          id: Math.random(),
          image:"va.jpg",
          nom :"Racem",
          age : "50",
          score : "5250",
      },
      {
          id: Math.random(),
          image:"avvv.png",
          nom :"Marie",
          age : "30",
          score : "5050",
      },
      {
          id: Math.random(),
          image:"av.jpg",
          nom :"Yacine",
          age : "28",
          score:"2000"
      },
      {
          id: Math.random(),
          image:"vaa.jpg",
          nom :"Jean",
          age : "45",
          score : "4350",
      },
      {
          id: Math.random(),
          image:"avvv.png",
          nom :"Virginie",
          age : "60",
          score : "2250",
      },
      {
          id: Math.random(),
          image:"va.jpg",
          nom :"Ayman",
          age : "12",
          score : "2250",
      },
      {
          id: Math.random(),
          image:"vaa.jpg",
          nom :"Louis",
          age : "32",
          score : "2250",
      }
  ]
  const champ = (name, age) => {alert(`my name is ${name} i'm ${age} years old`)}


function App() {
  
  return (
    <div className="App">
      <Header  nav={nav}/>
      <Comp level={level}/>
      <Cards liste={liste} champ={champ}/>
      
    </div>
  );
}

export default App;
