import { Component } from "react";
import "../App.css"
class StopWatch extends Component {
    state = { isClick: false,color:"white", hours: 0, min: 0, sec: 0 }
    //    stBtn =()=>{

    //      clearInterval(this.stTimer1)
    //     clearInterval(this.stTimer2)
    //     clearInterval(this.stTimer3)

    //      this.stTimer1=setInterval(()=>{
    //          console.log("sec");
    //         this.setState({sec:this.state.sec+1})
    //         if(this.state.sec===59){
    //             this.setState({sec:0})

    //         }
    //      },1000)
    //      this.stTimer2=setInterval(()=>{
    //          console.log("min");
    //         this.setState({min:this.state.min+1})
    //         if(this.state.min===60){
    //             this.setState({min:0})
    //         }
    //      },60000)
    //      this.stTimer3=setInterval(()=>{
    //          console.log("hours");
    //         this.setState({hours:this.state.hours+1})
    //         if(this.state.hours===24){
    //             this.setState({hours:0})
    //         }
    //      },3600000)
    //    }

       restBtn =()=>{
        this.setState({isClick:true,color:"yellow"})
        
        clearInterval(this.stTimer1)
        this.setState({hours:0,min:0,sec:0})
       }
       stopBtn=()=>{
        this.setState({isClick:true,color:"red"})
        clearInterval(this.stTimer1)
        // clearInterval(this.stTimer2)
        // clearInterval(this.stTimer3)

       }


    stBtn = () => {
        this.setState({isClick:false,color:"white"})
        
        clearInterval(this.stTimer1)
      this.stTimer1= setInterval(() => {
            this.setState((prev)=>{
               let {hours,min,sec}=prev
                sec++
                console.log("sec");
                
        if (sec === 60) {
                sec = 0
                min++
                 console.log("min");
                if (min === 60) {
                    min = 0
                    hours++
                     console.log("hours");
                    if (hours === 24) {
                        hours = 0

                    }
                }
            }
            
            return { hours, min, sec }
        })


    }, 1000);
}

render() {
    return (
        <div>
            <h1 style={{color:this.state.color}} >{this.state.hours} h : {this.state.min} m : {this.state.sec} s</h1>
            <button onClick={this.stopBtn} id="stob" >Stop</button>
            <button onClick={this.restBtn} id="rstb">Reset</button>
            <button onClick={this.stBtn} id="stb">Start</button>
        </div>
    )
}

}
export default StopWatch;