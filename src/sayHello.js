// eslint-disable-next-line no-unused-vars
import React from 'react';

function Hello() {

    const sayHello =() => {
        console.log("hello");
    };
    return (
        <div>
            <h1>THIS HELLO COMPONET</h1>
            <button onClick={sayHello}>say hello </button>
        </div>
    );
}

export default Hello;

 
// const sayHello =() => {
//     console.log("hello");
// };
// const counter = 0;


// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }