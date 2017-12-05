import React, { Component } from 'react'
import config from './config.json'
import styles from './main.styl'
if(__DEV__=='dev') {
  console.log('123123123123')
}else {
  console.log(__DEV__)
}
export default class extends Component {
  render() {
    return (<div className={styles.test+' '+styles.kkk} id='test'>
      { config.greetText }
     </div>)
  }
}
