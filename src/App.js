import React from 'react';
import axios from 'axios';


import './App.css';
import Board from './components/Board';
import { render } from '@testing-library/react';

function App() {
  render(){
    return (
      <main>
      <div className="App container">        
          <Board/>        
      </div>
    </main>   
    );
  }  
}
export default App;

/*
<DndProvider backend={Backend}>
            <Trash/>
            <Element/> 
        </DndProvider>
*/