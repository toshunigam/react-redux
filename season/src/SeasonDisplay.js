import React from "react";
import './SeasonDisplay.css'

const seasonConfig = {
    summer:{
        text:"let's hit the beach!",
        iconName:'sun'
    },
    winter:{
        text:"Burr, its the chilly!",
        iconName:'snowflake'
    }
}

const getSeason = (lat, month)=>{
    if(month>2 & month<9){
        return lat > 0 ? 'summer':'winter'
    }else{
        return lat < 0 ? 'summer':'winter'
    }
}
const SeasonDisplay = (props)=>{
    console.log(props.lat)
    const season = getSeason(props.lat,10)
    
    console.log(season)
    const {text, iconName} = seasonConfig[season]
    return( 
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} icon massive`} />
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} icon massive`} />
        </div>
    )
}

export default SeasonDisplay