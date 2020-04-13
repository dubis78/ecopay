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



/*
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
                <span key={`label${index}`}><img ref={drop} className="trashCan" id={`trashCan${index}`} src={info.trash}></img></span>                                 
            )
        })}
        </div>        
    );
}
export default Trash


*/








/*

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: trashData.trashCan[0].acepts,    //llamar de trasData los tipos de materiales q acepta
        drop: () => ({name: trashData.trashCan[0].name}),   //llamar de trasData el nombre
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })

    return(
        <div className='row justify-content-center'>            
            {trashData.trashCan.map((info,index)=>{
            return(           
                <span key={`label${index}`}><img ref={drop} className="trashCan" id={`trashCan${index}`} src={info.trashIcon}></img></span>                                 
            )
        })}
        </div>        
    );
}
export default Trash

*/