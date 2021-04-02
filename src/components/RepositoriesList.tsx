import { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useSelector } from 'react-redux'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  const { data, error, message } = useSelector(
    (state: any) => state.repositories
  )
  console.table({ data, error, message })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    searchRepositories(term)
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
