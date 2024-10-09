import {useState} from 'react'

import './index.css'

const list = [
  {
    QN: 'First Question',
    Question: 'Who is the first Prime Minister of India?',
    answer: 'Jawaharlal Nehru',
    opt1: 'Rajiv Gandhi',
    opt2: 'Manmohan Sing',
    opt3: 'Narendra Modi',
    opt4: 'Jawaharlal Nehru',
  },
  {
    QN: 'Second Question',
    Question: 'Who is the First President of India?',
    answer: 'Dr B Rajendra Prasad',
    opt1: 'Droupadi Murmu',
    opt2: 'Ram Nath Kovind',
    opt3: 'Pranab Mukherjee',
    opt4: 'Dr B Rajendra Prasad',
  },
  {
    QN: 'Third Question',
    Question: 'Who is the Current Prime Minister of India?',
    answer: 'Narendra Modi',
    opt1: 'Manmohan Sing',
    opt2: 'Rahul Gandi',
    opt3: 'Narendra Modi',
    opt4: 'Indra Gandi',
  },
  {
    QN: 'Fourth Question',
    Question: 'Who is the Chief Minister of Telangan?',
    answer: 'Revanth Reddy',
    opt1: 'KCR',
    opt2: 'Chandra Babu Naidu',
    opt3: 'Raja Shekar Reddy',
    opt4: 'Revanth Reddy',
  },
  {
    QN: 'Fifth Question',
    Question: 'Who is the President of America?',
    answer: 'Joe Biden',
    opt1: 'Joe Biden',
    opt2: 'Barak Obama',
    opt3: 'Donald Trump',
    opt4: 'Modi',
  },
]
const Game = () => {
  const [value, setValue] = useState(true)
  const [count, setCount] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const changeStateValue = () => {
    console.log(value)
    setValue(!value)
  }

  const defaultScreen = () => (
    <div className="container">
      <h1 className="heading">Hello User!</h1>

      <p className="para"> Welcome to the Game, Click to Start the Game</p>
      <button type="button" className="button" onClick={changeStateValue}>
        Start
      </button>
    </div>
  )

  const timer = () => {
    setTimeout(() => {
      console.log('timer is started')
      setShowAnswer(false)
      if (count < 4) {
        setCount(count => count + 1)
      }
    }, 3000)
  }

  const itemClick = event => {
    const {answer} = list[count]
    console.log(event.target.textContent)
    if (event.target.textContent === answer) {
      setShowAnswer(true)
      timer()
    } else {
      console.log('You are Wrong')
    }
  }

  const gameStart = () => {
    const {QN, Question, opt1, opt2, opt3, opt4} = list[count]
    const resultContent = count === 4 ? 'You won the Game' : 'You are Correct.'

    return (
      <div className="container">
        <h1 className="heading-question-number">{QN}</h1>

        <p className="question">{Question}</p>
        <ul className="options-list">
          <li className="list-item">
            <button
              id="1"
              type="button"
              onClick={itemClick}
              className="button btn"
            >
              {opt1}
            </button>
          </li>
          <li className="list-item">
            <button
              id="2"
              onClick={itemClick}
              type="button"
              className="button btn"
            >
              {opt2}
            </button>
          </li>
          <li className="list-item">
            <button
              id="3"
              onClick={itemClick}
              type="button"
              className="button btn"
            >
              {opt3}
            </button>
          </li>
          <li className="list-item">
            <button
              id="4"
              onClick={itemClick}
              type="button"
              className="button btn"
            >
              {opt4}
            </button>
          </li>
        </ul>
        {showAnswer ? (
          <button type="button" className="button">
            {resultContent}
          </button>
        ) : (
          ''
        )}
      </div>
    )
  }

  return <>{value ? defaultScreen() : gameStart()}</>
}

export default Game
