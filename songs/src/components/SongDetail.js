import React from "react";
import { connect } from "react-redux";

const SongDetail = (props)=>{
    if(!props.selectedSong){
        return <div>Select song</div>
    }
    console.log(props)
    return(
        <div className="">
            <h3>Song Detail:</h3>
            <div className="title">Title: {props.selectedSong.title}</div>
            <div className="title">Duration: {props.selectedSong.duration}</div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {selectedSong:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)