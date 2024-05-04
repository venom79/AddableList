import React from 'react'
import styles from "./Input.module.css"


const Input = ({handleKeyDown}) => {
  return (
    <input className={styles.input} type="text" placeholder='Enter into the list' onKeyDown={(e)=>handleKeyDown(e)}/>
  )
}

export default Input