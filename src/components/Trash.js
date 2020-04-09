import React from 'react';
import trashData from './trashData';

import { useDrop } from 'react-dnd'

const Types = {
    TRASH: 'glass',
  }

const Trash=(props)=>{   

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'glass',
        drop: () => ({ name: 'Trash' }),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })

    return(
        <div className='row justify-content-center'>            
            {trashData.trashCan.map((info,index)=>{
            return(           
                <span><img ref={drop} key={`label${index}`} className="trashCan" id={`trashCan${index}`} src={info.trash}></img></span>                                 
            )
        })}
        </div>        
    );
}
export default Trash
/*



*/