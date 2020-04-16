import React,{useState} from 'react';
import { useDrag } from 'react-dnd'
import { Link } from "react-router-dom";

let pPuntaje=0,cont=0;
const Element=(props)=>{
  const {pIcon,pName,pType,pCorrect,pIndex}=props;
  const [isDropped,setIsDropped]=useState();
  
  const [,drag] = useDrag({
      item: { name: pName, type: pType },
      
      end: (item, monitor) => {
        console.log(monitor.getDropResult)
        const dropResult = monitor.getDropResult()

        if (item && dropResult) {
          cont++;
          if ( pCorrect.includes(pType) ) {
            pPuntaje+=5;            
          alert(`You dropped ${item.name} into ${dropResult.name}! PUNTAJE: ${pPuntaje}`);  
          }
          else {
            pPuntaje-=3;
          }
        }
          setIsDropped(true);        
      },

      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    })

    let display;
    if(isDropped){
      display='none';
    }
    if (pPuntaje>9){      
      return(  
        <div className='win'>¡GANASTE!, registrate para acumular puntos por ganar</div>   
      )
      cont=0;
      pPuntaje=0;   
    }
    if (cont>4 && pPuntaje<10){      
      return(
        <div className='lose'>
          <Link to='/prueba'>
            <button id="bntGame" className="nav-item text-white btn rounded-pill mr-1">
                Perdiste
            </button>
            </Link>
        </div>
      )
      cont=0;
      pPuntaje=0;   
    }
  
  return(
    <div>      
      <span key={`label${pIndex}`}><img ref={drag} alt=''  className="trashElement mt-5" id={`trashEle${pIndex}`} src={pIcon} style={{display}} ></img></span>                        
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