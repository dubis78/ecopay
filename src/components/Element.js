import React,{useEffect,useState} from 'react';
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'
 
import elementsData from './elementsData';


const Element=(props)=>{
  const [isDropped,setIsDropped]=useState(null);
  const [colletedProps, drag] = useDrag({
      item: { name:'1', type: 'glass' },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult()
        console.log(item)
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
      display='none'
    }
  return(          
      <div  className='row justify-content-center'>
        {console.log(isDropped)}  
          {elementsData.elements.map((iconInfo,index)=>{
          return(           
              <span><img ref={drag} key={`label${index}`} className="trashElement" id={`trashEle${index}`} src={iconInfo.icon} style={{display}} ></img></span>                             
          )
      })}
      </div>       
  );
}
export default Element



/*
 const [colletedProps, drag] = useDrag({
        item: { name:'1', type: 'glass' },
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult()
          if (item && dropResult) {
            alert(`You dropped ${item.name} into ${dropResult.name}!`)
          }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      })



    return(        
        <div className='row justify-content-center'>
            {console.log(elementsData.elements)}
            {elementsData.elements.map((iconInfo,index)=>{
            return(           
                <span><img ref={drag} key={`label${index}`} className="trashElement" id={`trashEle${index}`} src={iconInfo.icon}></img></span> 
                              
            )
        })}
        </div>       
    );
}
*/