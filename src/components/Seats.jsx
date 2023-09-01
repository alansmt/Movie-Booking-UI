import { useState, useEffect } from "react"
import Seat from "./Seat"

const seatNumbers = [...Array(50).keys()].slice(1, -1)
const seatsStates = []
for (let num of seatNumbers) {
  seatsStates.push({ id: num, isReserved: false })
}
// const saved = JSON.parse(localStorage.getItem('yo'))

export default function Seats({ counter }) {
  const [reserve, setReserve] = useState(seatsStates)
  // const [reserve, setReserve] = useState(saved === null ? seatsStates : saved)

  const reserveHandler = (id, select) => {
    setReserve(
      reserve.map((seat) => {
        if (seat.id === id) {
          return { ...seat, isReserved: !select }
        } else {
          return seat
        }
      })
    )
    console.log('upper', reserve)
  }
  
  useEffect(() => {
    counter(reserve)
    // localStorage.clear()
    // localStorage.setItem('yo', JSON.stringify(reserve))
  }, [reserve])

  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem('yo'))
  //   console.log(saved)
  //   setReserve(saved)
  // }, [])

  return (
    <div className="seats">
      <div className="row-1">
        {seatNumbers.slice(0, 8).map((e) => (
          <Seat reserveHandler={reserveHandler} reserve={reserve} key={e} id={e} />
        ))}
      </div>

      <div className="row-2">
        {seatNumbers.slice(8, 16).map((e) => (
          <Seat reserveHandler={reserveHandler} reserve={reserve} key={e} id={e} />
        ))}
      </div>

      <div className="row-3">
        {seatNumbers.slice(16, 24).map((e) => (
          <Seat reserveHandler={reserveHandler} reserve={reserve} key={e} id={e} />
        ))}
      </div>

      <div className="row-4">
        {seatNumbers.slice(24, 32).map((e) => (
          <Seat reserveHandler={reserveHandler} reserve={reserve} key={e} id={e} />
        ))}
      </div>

      <div className="row-5">
        {seatNumbers.slice(32, 40).map((e) => (
          <Seat reserveHandler={reserveHandler} reserve={reserve} key={e} id={e} />
        ))}
      </div>

      <div className="row-6">
        {seatNumbers.slice(40, 48).map((e) => (
          <Seat reserveHandler={reserveHandler} reserve={reserve} key={e} id={e} />
        ))}
      </div>

      <div className="screen"></div>
    </div>
  )
}
