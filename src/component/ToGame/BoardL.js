import React from 'react';
import Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import {DndProvider} from 'react-dnd'
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { createTransition } from 'react-dnd-multi-backend';

import Elements from './ElementsL';
import TrashBins from './TrashBins';




const TouchTransition = createTransition('touchstart', (event) => {
  return event.touches != null;
});



const BoardL=(props)=>{  
    
  return(
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
          <TrashBins/>   
          <Elements/>  
          <br/>    
          <br/>    
          <br/>    
      </DndProvider>
  )
}
export default BoardL