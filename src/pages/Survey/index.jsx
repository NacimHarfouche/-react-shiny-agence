import { Link, useParams } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()

  const addOne = () => questionNumber + 1
  const removeOne = () => questionNumber - 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={'/survey/' + removeOne()}>Précédent</Link>
      <Link to={'/survey/' + addOne()}>Suivant</Link>
    </div>
  )
}

export default Survey
