import React,{useState} from 'react';
import { useDrag } from 'react-dnd'



const Element=(props)=>{
  const {pIcon,pName,pType,pIndex}=props;
  const [isDropped,setIsDropped]=useState();
  
  const [,drag] = useDrag({
      item: { name: pName, type: pType },
      
      end: (item, monitor) => {
        console.log(monitor.getDropResult)
        const dropResult = monitor.getDropResult()

        if (item && dropResult) {
          setIsDropped(true);
          alert(`You dropped ${item.name} into ${dropResult.name}!`) 
        }
      },

      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    })

    let display;
    if(isDropped){
      display='none';
    }

  return(
    <div>      
      <span key={`label${pIndex}`}><img ref={drag} alt=''  className="trashElement" id={`trashEle${pIndex}`} src={pIcon} style={{display}} ></img></span>                     
    </div>       
  );
}
export default Element


/*
return(          
      <div  className='row justify-content-center'>
       
        {elementsData.elements.map((iconInfo,index)=>{
          return(           
              <span key={`label${index}`}><img ref={drag}  className="trashElement" id={`trashEle${index}`} src={iconInfo.icon} style={{display}} ></img></span>                             
          )
      })}
      </div>       
  );
*/