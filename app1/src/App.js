import React, { Component } from 'react';

class App extends Component {
    // state = {  }

    render() { 
        const name= "Giridhar";

        return ( 
            <div className="App">
                React Rocks!!
                {console.log(this)}
            </div>
         );
    }
}

const AppInstance = new App();
console.log(AppInstance.name)
 
export default App;