import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(-1)

  useEffect(() => {
    const higherAmountOfVotes = Math.max(...votes)
    const mostVotedIndex = (el) => el === higherAmountOfVotes
    setMostVoted(votes.findIndex(mostVotedIndex))
    console.log(votes)
    console.log(mostVoted)
  }, [votes]);

  const getNextAnecdote = () => {
    const min = Math.ceil(0);
    const max = Math.floor(anecdotes.length - 1);
    let newSelection = Math.floor(Math.random() * (max - min + 1) + min)
    while (selected == newSelection) {
      newSelection = Math.floor(Math.random() * (max - min + 1) + min)
    }
    setSelected(newSelection);
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div className='app'>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={getNextAnecdote}>next</button>
      <button onClick={vote}>vote</button>

      <h2>Most voted anecdote</h2>
      <p>{anecdotes[mostVoted]}</p>
    </div>
  )
}

export default App
