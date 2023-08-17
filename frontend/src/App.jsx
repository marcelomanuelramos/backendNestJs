import { useState,useEffect } from 'react'
import '../src/styles/App.css'
import { getShoes } from './api/getShoes'
import Card from './Card'


function App() {
  const [shoes, setShoes] = useState([])

  useEffect(() =>{
      getShoes()
      .then(res => res.json())
      .then(data => setShoes(data))
  }, [])

  return (
    <>
     {
      shoes.map(shoe => <Card shoe ={shoe} key={shoe.id}/>)
     }
    </>
  )
}

export default App
