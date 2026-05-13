
import { Component } from "react";
class DigitalClock extends Component {
    constructor(props) {
        super(props)
        this.state = ({ date: new Date() })

    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date() }),
                1000
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
export default DigitalClock; 