import React from 'react';
import axios from 'axios';
import rewards from './rewards.css'

let Rewards = () => {
    return(
        <div className={rewards.grid}>
            <div className={rewards.header}>AutoZone <br/> Rewards</div>
            <div>
                <span className={rewards.link1}>Join</span>
                <span className={rewards.or}>or</span>
                <span className={rewards.link2}>Register</span>
            </div>
        </div>
    )
}


export default Rewards;