import React from 'react';
//import { useDragLayer } from 'react-dnd'

import Element from './Element';
import elementsData from './elementsData';
import correct from './trashData';

const Elements=(props)=>{
    return(
        //const collectedProps = useDragLayer(spec)
        <div  className='row justify-content-center'>
            <Element
                pIcon={elementsData.elements[0].icon}
                pName={elementsData.elements[0].name}
                pType={elementsData.elements[0].type}                
                pCorrect={correct.trashCan[0].acepts}
                pIndex={0}
            />
            <Element
                pIcon={elementsData.elements[1].icon}
                pName={elementsData.elements[1].name}
                pType={elementsData.elements[1].type}
                pCorrect={correct.trashCan[0].acepts}
                pIndex={1}
            />
            <Element
                pIcon={elementsData.elements[2].icon}
                pName={elementsData.elements[2].name}
                pType={elementsData.elements[2].type}
                pCorrect={correct.trashCan[0].acepts}
                pIndex={2}
            />
            <Element
                pIcon={elementsData.elements[3].icon}
                pName={elementsData.elements[3].name}
                pType={elementsData.elements[3].type}
                pCorrect={correct.trashCan[0].acepts}
                pIndex={3}
            />
            <Element
                pIcon={elementsData.elements[4].icon}
                pName={elementsData.elements[4].name}
                pType={elementsData.elements[4].type}
                pCorrect={correct.trashCan[0].acepts}
                pIndex={4}
            />
            <Element
                pIcon={elementsData.elements[5].icon}
                pName={elementsData.elements[5].name}
                pType={elementsData.elements[5].type}
                pCorrect={correct.trashCan[0].acepts}
                pIndex={5}
            />
        </div>
    )
}
export default Elements