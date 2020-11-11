import "@babel/polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
const app = document.querySelector('#app');
class App extends React.Component{
     render(){
         return(
             <div>hello world</div>
         )
     }
}
ReactDOM.render(<App/>,app);