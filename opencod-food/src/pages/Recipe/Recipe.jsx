import { useParams } from 'react-router'
import { useFetch } from '../../hooks/useFetch'


import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = `http://localhost:3000/recipes/${id}`
  const { data: recipe, isLoading, error } = useFetch(url)


  return (
    <div className='recipe'>

      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='Loading'>Loding ...</p>}
      {recipe && (
        <>
          <h2 className='page-title'> {recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cooke </p>
          <ul>
            {recipe.ingredients.map(item => (
              <li key={item.id}>{item}</li>
            ))}
          </ul>
          <p className='method'>{ recipe.method}</p>

        </>
      )}
    </div>
  )
}
