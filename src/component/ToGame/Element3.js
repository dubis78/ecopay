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
          setIsDropped(true);
          cont++;
          if ( pCorrect.includes(pType) ) {
            pPuntaje+=5;            
          alert(`You dropped ${item.name} into ${dropResult.name}! PUNTAJE: ${pPuntaje}`);  
          }
          else {
            pPuntaje-=3;
          }
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
    if (pPuntaje>9){         
      cont=0;
      pPuntaje=0;   
      return(  
        <div className='win'>
          <b>
            ¡GANASTE!
            <br/>            
              Tienes 10 puntos para redimir
            </b>
            <div className='redimir'>
              <Link to="/redimir" >
                <button id="bntGame" className="nav-item text-white btn rounded-pill mr-1">
                    Redimir
                </button>
              </Link>        
            </div>
        </div>   
      )   
    }
    else if (cont>5 && pPuntaje<10){         
      cont=0;
      pPuntaje=0;    
      return(
        <div className='lose'>
          <Link to="/game" >
            <button id="bntGame" className="nav-item text-white btn rounded-pill mr-1">
                Perdiste
            </button>
          </Link>        
        </div>
      )  
    }
  
  return(
    <div>      
      <span key={`label${pIndex}`}><img ref={drag} alt=''  className="trashElement mt-5" id={`trashEle${pIndex}`} src={pIcon} style={{display}} ></img></span>                        
    </div>       
  );
}
export default Element