import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./Message";

function App() {
    //let firstValue: string = "Manny";
    //let firstValue: number = 34;
    //let firstValue: boolean = true;
    //let firstValue: number[] = [2, 3, 56];
    //let firstValue: Array<string> = ['2', '3', 'Manny'];

    //tuple
    let aTuple: [string, number] = ['Manny', 24];

    //enum
    enum Codes { first=1, second = 2 }

    //any
    let firstName: any = "Michelle";

    //void
    const warning = () : void => {
        console.log("warning")
    }

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <p>
                    The value {aTuple[0]} is of {typeof aTuple[0]} type!
                    The value {firstName} is of {typeof firstName} type!
               </p>
               <Message />
      </header>
    </div>
  );
}

export default App;
