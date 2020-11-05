import React, { Component } from 'react';
import './App.css'
import styles from  "./styles"
class App extends Component {
    // state = {  }

    render() { 
       const name= "Giridhar";
       
        return ( 
            <div className="App">
                <div style={styles.styles}>
                    Style
                </div>
                <button>Button 2 </button>                
                React Rocks!!
                {console.log(<div/>)}
                {name}
            </div>
         );
    }
}

const AppInstance = new App();
console.log(AppInstance)
 
export default App;