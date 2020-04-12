import React from 'react';
import Backend from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd';

import Elements from './Elements';
import TrashBins from './TrashBins';
import elementsData from './elementsData';

const Board=(props)=>{    
    return(
        <DndProvider backend={Backend}>
            <TrashBins/>   
            <Elements/>           
        </DndProvider>
    )
}
export default Board