
import React from "react";

class StudentCard extends React.Component{
    css={
        color:"purple",
        fontSize:"60px"
    }
    render(){
        console.log(this.props);
        
        return(
            <div>
            <h1>Id : {this.props.ID}</h1>
            <h1>Name:{this.props.Name}</h1>
            <h1>Desg :{this.props.Desg}</h1>


            <br />
            <h1>Id : {420-20}</h1>  
             {/* js should be written b/w { } */}
            <h1 style={{color:"red"}}>Name:Robin Hood</h1>
            {/* CSS should be written b/w {{ }} */}
            <h1 style={this.css}>Name:Robin Hood</h1>
            {/*    mentin this. madatory */}


            </div>
        )
    }
}
export  default StudentCard