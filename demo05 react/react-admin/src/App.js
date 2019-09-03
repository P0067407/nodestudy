import React, { Component } from 'react';  
// import logo from './logo.svg';
import './App.css';
// import {Button,message} from 'antd';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
class App extends Component {
  // handleClick =()=>{
  //   message.success('成功了...')
  // }
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Admin}></Route>
      </Switch>
      </BrowserRouter>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Button type='primary'>Test</Button>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

export default App;
