import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div>by { props.author }</div>
          <div className={ styles.type}>{ props.type }</div>
          <div><img src={`/images/${props.rating}`} /> </div>
          <div className= {styles.price}>{ props.price } €</div>
        </div>
    </div>
  )
}
