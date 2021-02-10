import React from 'react';

export default class CountPeople extends React.Component{
    constructor(){
        super();
        this.state={
            entrycount: 0,
            exitcount:0,
            c:0
        };
    
    }
    updateEntry(){
        this.setState((prevState,props)=>{
            return {entrycount: prevState.entrycount+1}
        });
    }
    updateExit(){
        this.setState((prevState, props)=>{
            return {exitcount: prevState.exitcount+1}
        });
    }

    render(){
        return(
            <div className="center">
                <button className="cendter"
                       onClick={this.updateEntry.bind(this)}>
                           Login</button>
                           <span>{this.state.entrycount} People Entered!!</span>

                <button className="cendter"
                       onClick={this.updateExit.bind(this)}>
                           Exit</button>
                           <span>{this.state.exitcount} People left!!</span>
        
            </div>)
    }
   
}

