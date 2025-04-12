import React, { useEffect } from 'react'
import Image from 'next/image'
import Styles from './card.module.css'
import { GuessedPlayer} from '@/app/models/guessResponse'

const player = ({guessResponse, minAgeRange = null, maxAgeRange = null} : {guessResponse: GuessedPlayer, minAgeRange: number | null, maxAgeRange: number | null}) => {
  const imageUrl = "https://img.a.transfermarkt.technology/portrait/header/28396-1728391796.JPG?lm=1";
  return (
    <div className={Styles.playerCard}>
    {guessResponse.imageUrl !== null ? <img src={guessResponse.imageUrl} className={Styles.playerPhoto} /> : <div className={Styles.nullPlayerPhoto}><label>?</label></div>}
    <div className={Styles.playerInfo}>
      <h2 className={Styles.playerName}>{guessResponse.name ?? "?"}</h2>
      <p className={Styles.playerPosition}>{guessResponse.position ?? "?"} • {guessResponse.foot ?? "?"}</p>
      <div className={Styles.playerStats}>
        <div><strong>Age:</strong> 32</div>
        <div><strong>Goals:</strong> 10</div>
        <div><strong>Assists:</strong> 5</div>
        <div><strong>Matches:</strong> 38</div>
      </div>
    </div>
</div>
    
  )
}

export default player