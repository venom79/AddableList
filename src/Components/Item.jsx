import React from 'react'
import styles from "./Item.module.css"

const Item = ({item,done,onDone}) => {
  return (
    <div className={styles.flex}>
        <li className={`${styles.adLi} list-group-item ${done&&"active"}`}>{item}</li>
        <button className={` ${styles.adButton} btn btn-primary`} onClick={()=>onDone(item)}>done</button>
    </div>
  )
}

export default Item