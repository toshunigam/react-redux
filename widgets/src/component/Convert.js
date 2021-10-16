import React, { useEffect, useState } from "react";
import axios from 'axios'

// const key = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({ language, text })=>{
    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedText(text)
        },500)

        return ()=>{
            clearInterval(timerId)
        }
    },[text])

    useEffect(()=>{
        const doTranslation = async () =>{
            const { data } = await axios.post(`https://translation.googleapis.com/language/translate/v2`,{},{
                params:{
                    q:debouncedText,
                    target:language.value,
                    key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            // console.log(data)
            // console.log(data.data.translations[0].translatedText)
            setTranslated(data.data.translations[0].translatedText)
        }

        doTranslation()

    },[language,debouncedText])

    return(
        <div>
            <h2 className="ui header">{translated}</h2>
        </div>
    )
}

export default Convert