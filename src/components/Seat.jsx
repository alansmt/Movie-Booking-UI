import { useState } from "react"

export default function Seat( { reserveHandler, reserve, id } ) {
  const [select, setSelect] = useState(false)

  const selectHandler = (id) => {
    setSelect(!select)
    reserveHandler(id, select)
    // console.log(reserve)
  }

  return (  
    <div 
      className={`seat ${select ? 'reserved' : ""}`} 
      id={id}
      onClick={() => selectHandler(id)}
      >
      </div>
  )
}
