import React from 'react';
import { useDrop } from 'react-dnd'

const TrashBin=(props)=>{  
  const {pIcon,pName,pAcepts,pIndex}=props;
  
  const [,drop] = useDrop({
      accept: pAcepts,    //llamar de trasData los tipos de materiales q acepta
      drop: () => ({name: pName}),   //llamar de trasData el nombre           
    })

    /*
    const [{ canDrop, isOver }, drop] = useDrop({
      accept: pAcepts,    //llamar de trasData los tipos de materiales q acepta
      drop: () => ({name: pName}),   //llamar de trasData el nombre
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    })
    */
  
  return(
      <div>         
              <span key={`label${pIndex}`}><img ref={drop} alt='' className="trashCan" id={`trashCan${pIndex}`} src={pIcon}></img></span>                       
      </div>        
  );
}
export default TrashBin


