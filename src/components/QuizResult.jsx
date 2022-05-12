import React from 'react'

const QuizResult = ({result, retry}) => {
  return (
    <div className='result-screen flex items-center flex-col'>
        <h2 className='text-2xl font-bold h-[15vh] flex items-center'>Result: {result.percentage}%</h2>
        <p className="h-[10vh]">Selected {result.correct} correct options out of {result.total} questions.</p>
        <button onClick={retry} className="button">Retry</button>
    </div>
  )
}

export default QuizResult