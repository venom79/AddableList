import Container from "./Components/Container"
import styles from "./App.module.css"
import Input from "./Components/Input"
import ItemsContainer from "./Components/ItemsContainer"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import ErrorMessage from "./Components/ErrorMessage"

function App() {
  
  const [list,setList] = useState([])
  const [done,setDone] = useState([])

  const onKeyDown = (e)=>{
    if(e.key === 'Enter' && e.target.value){
      let newElement = e.target.value
      e.target.value=""
      let newList = [...list,newElement]
      setList(newList)
    }
  }
  const onDone = (element)=>{
    let newElement = element
    let newDone =  [...done,newElement]
    setDone(newDone)
}


  return (
    <>
      <Container>
        <h1 className={styles.heading}>Addable List</h1>
        <Input handleKeyDown={onKeyDown}/>
        <ErrorMessage list={list}/>
        <ItemsContainer list={list} done={done} handleClick={onDone}/>
      </Container>
    </>
  )
}

export default App
