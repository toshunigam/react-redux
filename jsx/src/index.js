import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import DisplayComment from './DisplayComment'

const App = () => {
    window.navigator.geolocation.getCurrentPosition(position=>console.log(position),err=>console.log(err))
    return (
        <div className="ui container comments">
            <h3 className="ui dividing header">Comments</h3>

            <DisplayComment image={faker.image.avatar()} author="Sam" comment="How artistic!" time="Today at 5:42PM" />
            <DisplayComment image={faker.image.avatar()} author="Elliot Fu" comment="This has been very useful for my research. Thanks as well!" time="Yesterday at 12:30AM" />
            <DisplayComment image={faker.image.avatar()} author="Toshu" comment="Dude, this is awesome. Thanks so much" time="5 days ago" />

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)