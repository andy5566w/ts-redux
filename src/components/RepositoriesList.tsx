import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(actionCreators.searchRepositories(term))
  }

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>search</button>
      </form>
    </div>
  )
}

export default RepositoriesList
