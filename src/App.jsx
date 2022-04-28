import React, { Component, Fragment } from 'react'
import './App.css'

// Class based components
class App extends Component {
    // method: function inside a class
    // render() class cycle method... it's require because it renders the output
    render() {
        // What is being returned is JSX, which is JavaScript under the Hood
        // basiccally seudo HTML code
        return (
            // like ghost element
            // <Fragment> this will be the same as the empty --> brackets <>
            <>
                {/* <div className="App"> */}
                <h1>GIthub Finder</h1>
                {/* </div> */}
            </>
            // </Fragment>
        )
    }
}

export default App
