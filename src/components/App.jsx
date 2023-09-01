import { useState } from "react";
import "./App.css";
import Seats from "./Seats";

const totalSeat = 48;

function App() {
  let available = totalSeat;
  const [count, setCount] = useState(totalSeat);

  const counter = (seats) => {
    seats.forEach((seat) => {
      seat.isReserved === true ? --available : available;
    })
    setCount(available)
  }

  return (
    <div className="app">
      <header>
        <h1>Select Your Seat</h1>
        <p className="availables">{count} seats available</p>
      </header>
      <Seats counter={counter} />
    </div>
  )
}

export default App;
