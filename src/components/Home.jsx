import { useEffect, useState } from 'react'

const Home = () => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data.quotes))
      .catch((error) => console.error("Error fetching quotes:", error))
  }, []) 

  return (
    <div className='container'>
      <h2>List of Quotes</h2>
      <table className='table table-dark'>
        <thead className='text-center'>
          <tr>
            <th>ID</th>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody className='table table-warning'>
          {quotes.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.quote}</td>
              <td>{row.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home