import React,{Component} from 'react';

export const players = [
    { name: 'virat', score: 50 },
    { name: "Victor Wayne", score:70 },
    { name: 'vidsrat', score: 530 },
    { name: 'visdrat', score: 540 },
    { name: 'virasat', score: 550 },
    { name: 'virdfdat', score: 560 },
  ];
export class ListOfPlayers extends Component{
    render(){
        return(
            players.map((item)=>
            {
                return(
                    <div>
                        <li>Mr. {item.name}<span>{item.score}</span></li>
                    </div>
                )
            }
            )
        )
    }
}

export class Scorebelow70 extends Component{
    render(){
        return(
            players.map((item)=>
            {
               if(item.score<=70)
               {
                   return(
                    <div>
                        <li>Mr. {item.name}<span>{item.score}</span></li>
                     </div>)
               }
            }
            )
        )
    }
}
