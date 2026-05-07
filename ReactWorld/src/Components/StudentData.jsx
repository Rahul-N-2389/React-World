import React from "react";

class StudentData extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:"skyblue",width:"500px",padding:"20px",margin:"10px"}}>
                {/* <h1>Name : {this.props.Name}</h1>
                <h1>Age : {this.props.Age}</h1>
                <h1>City : {this.props.City}</h1>
                <h1>is Student : {this.props.isStudent?"true":"false"}</h1> */}

                <h1>Name : {this.props.Name}</h1>
                <h1>Age : {this.props.Age}</h1>
                <h1>Score : {this.props.Score}</h1>
            </div>
        )
    }
}
export default StudentData