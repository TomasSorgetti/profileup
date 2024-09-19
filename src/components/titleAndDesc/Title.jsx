// Crucial
import React from 'react'

// Component CSS
import styles from './Title.module.css'

const Title = ({title, description}) => {
  return (
    <div className={styles.titleDesc_container}>
        <h2>
            {title}
        </h2>
        <p>
            {description}
        </p>
    </div>
  )
}

export default Title
