import {Component} from "react";

class DemoState extends Component{
    constructor() {
        super();
        this.state = {
            num: 1,
            nameStudent: "HaiTT"
        }
    }

    incrementNum() {
        this.setState((previousState) => {
            return {
                num: previousState.num + 1
            }
        })
        this.setState((previousState) => {
            return {
                num: previousState.num + 1
            }
        })
    }

    render() {
        console.log(2)
        return (
            <>
                <h1>Tên: {this.state.nameStudent}</h1>
                <h1>Giá trị: {this.state.num}</h1>
                <button onClick={this.incrementNum.bind(this)}>+1</button>
            </>
        )
    }

    componentDidUpdate() {
        console.log(1)
    }
}
export default DemoState;