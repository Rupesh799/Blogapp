import React from 'react'
import styles from './Pagination.module.css'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
const Pagination = () => {
  return (
    <div className={styles.container}>
      
          <button className={styles.prev}>
            <span>
              <BiLeftArrow/>
            </span>
            Prev</button>
        <button className={styles.next}>Next
          <span>
            <BiRightArrow/>
          </span>

        </button>

    </div>
  )
}

export default Pagination