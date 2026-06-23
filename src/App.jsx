import { useState } from 'react'

function Input({ onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search a name..."
        onChange={(e) => onSearch(e.target.value)}/>
    </div>
  )
}

function List({ searchTerm }) {
  const people = ['Roxy', 'Ram', 'Shyam', 'Rakshya', 'React']

  const filtered = people.filter((person) =>
    person.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <ul>
      {filtered.map((person, i) => (
        <li key={i}>{person}</li>
      ))}
    </ul>
  )
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <h1>Search People</h1>
      <Input onSearch={setSearchTerm}/>
      <List searchTerm={searchTerm}/>
    </div>
  )
}

export default App