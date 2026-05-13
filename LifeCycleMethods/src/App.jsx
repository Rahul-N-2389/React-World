import { Component } from "react";
import StopWatch from "./Components/StopWatch";
import DigitalClock from "./Components/DigitalClock"

class App extends Component{
  render(){
    return(
      <div>
        {/* <DigitalClock/> */}
        <StopWatch/>
      </div>
    )
  }
}
export default App