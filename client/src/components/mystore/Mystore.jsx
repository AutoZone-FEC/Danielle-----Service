import React from 'react';
import mystore from './mystore.css'

let Mystore = () => {

    return(
        <div className={mystore.grid}>
            <div className={mystore.header}>
                <span className={mystore.mystore}>My Store</span>
                <img src="https://www.autozone.com/images/common/arrow-dwn-orange-sm.gif" className={mystore.image}
                type="button" data-container="body" 
                data-html="true"
                data-toggle="popover" data-placement="bottom"
                title="
                <div>
                    <div class='header'>
                        <span class='myStore'> MY STORE: </span>
                        <img src='https://www.autozone.com/images/common/dropDown_close.png' class='closeBox'></img>
                    </div>
                    <div>
                        <span class='address'>2602 S CONGRESS AV <br/> AUSTIN, TX 78704 <br/> (512) 447-7078 <br/> STORE # 1320 </br>
                        <span class='directions'>Get Directions</span>
                    <div>
                </div>
                "
                
                data-content="
                <div>
                    <div class='hoursRow'>
                        <span class='hoursWord'>HOURS:</span>
                        <span class='todaysHours'><b>OPEN</b> 'TIL 10:00 PM TODAY</span>
                    </div>
                    <div class='hoursRow'>
                        Sunday
                        <span class='hours'>7:30 AM - 10:00 PM</span>
                    </div>
                    <div class='hoursRow'>    
                        <span class='day'>Monday</span>
                        <span class='hours'> 7:30 AM - 10:00 PM</span>
                    </div>
                    <div class='hoursRow'>  
                        <span class='day'>Tuesday</span>
                        <span class='hours'> 7:30 AM - 10:00 PM</span>
                    </div>
                    <div class='hoursRow'>  
                        <span class='day'>Wednesday</span>
                        <span class='hours'> 7:30 AM - 10:00 PM</span>
                    </div>
                    <div class='hoursRow'>   
                        <span class='day'>Thursday</span>
                        <span class='hours'> 7:30 AM - 10:00 PM</span>
                    </div>
                    <div class='hoursRow'>    
                        <span class='day'>Friday</span>
                        <span class='hours'> 7:30 AM - 10:00 PM</span>
                    </div>    
                    <div class='hoursRow'>
                        <span class='day'>Saturday</span>
                        <span class='hours'> 7:30 AM - 10:00 PM</span>
                    </div>
                    <div class='footer'>
                        <span class='changeStore v1'>Change Store</span>
                        <span class='storeSpecials'>See Store Specials</span>
                    <div>
                </div>"
                ></img>               
               

            </div>
            <div className={mystore.address}>2602 S CONGRESS AV <br/> AUSTIN, TX 78704 <br/>(512) 447-7078</div>
            <div className={mystore.open}>OPEN
                <span className={mystore.openuntil}>
                    until 10:00 PM today
                </span>
            </div>
        </div> 
    )
}


export default Mystore;

