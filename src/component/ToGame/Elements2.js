import React from 'react';
//import { useDragLayer } from 'react-dnd'

import Element from './Element2';
import elementsData from './elementsData';
import correct from './trashData';

const Elements=(props)=>{
    return(
        //const collectedProps = useDragLayer(spec)
        <div  className='row justify-content-center'>
            <Element
                pIcon={elementsData.elements[1].icon}
                pName={elementsData.elements[1].name}
                pType={elementsData.elements[1].type}                
                pCorrect={correct.trashCan[1].acepts}
                pIndex={0}
            />
            <Element
                pIcon={elementsData.elements[3].icon}
                pName={elementsData.elements[3].name}
                pType={elementsData.elements[3].type}
                pCorrect={correct.trashCan[1].acepts}
                pIndex={1}
            />
            <Element
                pIcon={elementsData.elements[7].icon}
                pName={elementsData.elements[7].name}
                pType={elementsData.elements[7].type}
                pCorrect={correct.trashCan[1].acepts}
                pIndex={2}
            />
            <Element
                pIcon={elementsData.elements[9].icon}
                pName={elementsData.elements[9].name}
                pType={elementsData.elements[9].type}
                pCorrect={correct.trashCan[1].acepts}
                pIndex={3}
            />
            <Element
                pIcon={elementsData.elements[11].icon}
                pName={elementsData.elements[11].name}
                pType={elementsData.elements[11].type}
                pCorrect={correct.trashCan[1].acepts}
                pIndex={4}
            />
            <Element
                pIcon={elementsData.elements[13].icon}
                pName={elementsData.elements[13].name}
                pType={elementsData.elements[13].type}
                pCorrect={correct.trashCan[1].acepts}
                pIndex={5}
            />
        </div>
    )
}
export default Elements