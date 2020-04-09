import React from 'react';
import Backend from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd';
import { useDragLayer } from 'react-dnd'

import Element from './Element';
import Trash from './Trash';



const Board=(props)=>{
    //const collectedProps = useDragLayer(spec)
    return(
        <DndProvider backend={Backend}>
            <Trash/>  
            <Element
            name='toalla'
            />
        </DndProvider>
    )
}
export default Board



