import React from 'react'
import styles from "./ErrorMessage.module.css"

const ErrorMessage = ({list}) => {
    return <>{list.length === 0 && <h5 className={styles.error} >Nothing added in the list</h5>}</>;
}

export default ErrorMessage