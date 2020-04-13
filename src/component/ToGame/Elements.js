import React from 'react';
//import { useDragLayer } from 'react-dnd'

import Element from './Element';
import elementsData from './elementsData';

const Elements=(props)=>{
    return(
        //const collectedProps = useDragLayer(spec)
        <div  className='row justify-content-center'>
            <Element
                pIcon={elementsData.elements[0].icon}
                pName={elementsData.elements[0].name}
                pType={elementsData.elements[0].type}
                pIndex={0}
            />
            <Element
                pIcon={elementsData.elements[1].icon}
                pName={elementsData.elements[1].name}
                pType={elementsData.elements[1].type}
                pIndex={1}
            />
            <Element
                pIcon={elementsData.elements[2].icon}
                pName={elementsData.elements[2].name}
                pType={elementsData.elements[2].type}
                pIndex={2}
            />
            <Element
                pIcon={elementsData.elements[3].icon}
                pName={elementsData.elements[3].name}
                pType={elementsData.elements[3].type}
                pIndex={3}
            />
            <Element
                pIcon={elementsData.elements[4].icon}
                pName={elementsData.elements[4].name}
                pType={elementsData.elements[4].type}
                pIndex={4}
            />
            <Element
                pIcon={elementsData.elements[5].icon}
                pName={elementsData.elements[5].name}
                pType={elementsData.elements[5].type}
                pIndex={5}
            />
        </div>
    )
}
export default Elements