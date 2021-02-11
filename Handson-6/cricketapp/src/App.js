import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { ListOfPlayers,players,Scorebelow70 } from './Components/ListOfPlayers';
import {IndianTeam,EvenPlayers,OddPlayers,IndianPlayers,ListOfIndianPlayers} from './Components/IndianPlayers';

function App() {
 render()
 {
   var flag=false;
   if(flag===true)
   {
     return(
       <div>
         <h1>List of players</h1>
         <ListOfPlayers players={players}/>
         <h1>List of Players having Scores Less than 70</h1>
         <Scorebelow70 players={players}/>
       </div>
     )
   }
   else{
     return(
       <div>
         <div>
           <h1>Indian Team</h1>
           <h1>Odd Players</h1>
           { OddPlayers(IndianTeam)}
           <h1>EvenPlayers</h1>
           {EvenPlayers(IndianTeam)}
         </div>
         <div>
           <h1>List of Indian Players Merged:</h1>
           <ListOfIndianPlayers IndianPlayers={IndianPlayers}/>
         </div>

       </div>
     )
   }
 }
}

export default App;
