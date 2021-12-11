import React, { useEffect, useState } from "react";
import axios from 'axios'

const Search = ()=>{
    const [term,setTerm] = useState('programming')
    const [debounceTerm, setDebounceTerm] = useState(term)
    const [results,setResults] = useState([])
    console.log('i run every render')

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebounceTerm(term)
        },1000)

        return ()=>{
            clearInterval(timerId)
        }
    },[term])


    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get(`https://en.wikipedia.org/w/api.php`,{
                params:{
                    action:'query',
                    list:'search',
                    format:'json',
                    origin:'*',
                    srsearch:debounceTerm
                }
            })

            setResults(data.query.search)
        }

        search()

    },[debounceTerm])
    
    const resultRenders = results.map((result,i)=>{
        return (
            <div className="item" key={i}>
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?currid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input className="input" value={term} onChange={e=>setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {resultRenders}
            </div>
        </div>
    )
}

export default Search