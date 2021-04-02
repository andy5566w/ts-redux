import { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  )

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
        {error && <h3>{error}</h3>}
        {loading && 'Loading'}
        {data.length > 0 && (
          <ul>
            {data.map((string) => (
              <li key={string}>{string}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  )
}

export default RepositoriesList
