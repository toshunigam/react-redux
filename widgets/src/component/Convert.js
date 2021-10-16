import React, { useEffect, useState } from "react";
import axios from 'axios'

// const key = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({ language, text })=>{
    const [] = useState()

    useEffect(()=>{
        axios.post(`https://translation.googleapis.com/language/translate/v2`,{},{
            params:{
                q:text,
                target:language.value,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })

    },[language,text])

    return(
        <div>Convert</div>
    )
}

export default Convert