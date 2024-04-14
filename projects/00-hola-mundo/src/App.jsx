// import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        id: 1,
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        id: 2,
        userName: 'johndoe',
        name: 'John Doe',
        isFollowing: false
    },
    {
        id: 3,
        userName: 'janedoe',
        name: 'Jane Doe',
        isFollowing: true
    },
    {
        id: 4,
        userName: 'codingmaster',
        name: 'Coding Master',
        isFollowing: false
    },
    {
        id: 5,
        userName: 'webdevguy',
        name: 'Web Dev Guy',
        isFollowing: true
    },
    {
        id: 6,
        userName: 'javascriptlover',
        name: 'JavaScript Lover',
        isFollowing: true
    },
    {
        id: 7,
        userName: 'techgeek',
        name: 'Tech Geek',
        isFollowing: false
    },
    {
        id: 8,
        userName: 'designguru',
        name: 'Design Guru',
        isFollowing: true
    },
    {
        id: 9,
        userName: 'datascientist',
        name: 'Data Scientist',
        isFollowing: false
    },
    {
        id: 10,
        userName: 'rojasmario',
        name: 'Mario Rojas',
        isFollowing: true
    }
];

console.log(users);




export function App() {
    return (
        <section className='App'>

            {users.map(user => (
                <TwitterFollowCard
                    key={user.id}
                    userName={user.userName}
                    initialIsFollowing={user.isFollowing}>
                    {user.name}
                </TwitterFollowCard>
            ))

            }


        </section>

    )
}
