import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {lat:null,long:null,errorMessage:''}
        window.navigator.geolocation.getCurrentPosition(position=>{
            this.setState({
                lat:position.coords.latitude,
                long:position.coords.longitude
            })
        },err=>{
            this.setState({
                errorMessage:err.message
            })
        })
    }



    // This render() method must be invoked while working into react class based component
    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat} , Longitude: {this.state.long}</div>
        }

        return <div>Loading...</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))