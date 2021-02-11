import React, { Component } from 'react';

export const players = [
    { name: 'Rohit', score: 70 },
    { name: 'Dhawan', score: 100 },
    { name: 'Virat', score: 60 },
    { name: 'Rahul', score: 150 },
    { name: 'Hardik', score: 50 },
    { name: 'Chahal', score: 60 },
    { name: 'Jadeja', score: 80 },
    { name: 'Bumrah', score: 90 },
];
export class ListOfPlayers extends Component {
    render() {
        return (
            players.map((item) => {
                return (
                    <div>
                        <li>Mr. {item.name}<span> {item.score}</span></li>
                    </div>
                )
            }
            )
        )
    }
}

export class Scorebelow70 extends Component {
    render() {
        return (
            players.map((item) => {
                if (item.score <= 70) {
                    return (
                        <div>
                            <li>Mr. {item.name}<span> {item.score}</span></li>
                        </div>)
                }
            }
            )
        )
    }
}
