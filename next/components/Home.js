import * as React from 'react';
import style from '@/styles/Home.module.css'


export function Home(){
  
    return(
      <>
      <div className={style.body}></div>
      <div className={style.firework}>
      <h1 className={style.gradient}>Hong's Blog!!</h1>
      </div>
      </>
    )
}