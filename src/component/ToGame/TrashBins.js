import React from 'react';
//import { useDragLayer } from 'react-dnd'

import TrashBin from './TrashBin';
import trashData from './trashData';

const TrashBins=()=>{
    return(
        //const collectedProps = useDragLayer(spec)
    <div  className='row justify-content-center'>
        <TrashBin
            pIcon={trashData.trashCan[0].icon}
            pName={trashData.trashCan[0].name}
            pAcepts={['glass','plastic','organic','paper','ordinary','paperboard']}
            pIndex={0}            
        />
        
    </div>
    );
}
export default TrashBins