import React from 'react';
import Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'
import {DndProvider} from 'react-dnd'
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

import Elements from './Elements';
import TrashBins from './TrashBins';


const Board=(props)=>{    
    return(        
        <DndProvider backend={Backend}>
            {/*<DndProvider backend={MultiBackend} options={HTML5toTouch}>*/}
            <TrashBins/>   
            <Elements/>           
        </DndProvider>
    )
}
export default Board


/*

const HTML5toTouch = {
    backends: [
      {
        backend: HTML5Backend
      },
      {
        backend: TouchBackend({enableMouseEvents: true}), // Note that you can call your backends with options
        preview: true,
        transition: TouchTransition
      }
    ]
  };
*/