import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const NOTES = gql`
  query getNotes {
  notes {
    author {
      id
      name
      age
    }
  }
}
`

function App() {
  const {loading, error, data} = useQuery(NOTES);
  
  if(loading) return 'Loading...';
  if(error) return `Error: ${error.message}`;

  console.log(data);
  
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
