import React from 'react';
import Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import {DndProvider} from 'react-dnd'
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

import Elements from './Elements1';
import TrashBins from './TrashBins';


const Board=(props)=>{    
  return(
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <TrashBins/>   
        <Elements/>              
    </DndProvider>
  )
}
export default Board