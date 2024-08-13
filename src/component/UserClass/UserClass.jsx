import { Component } from "react";

class UserClass extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 100,
            count2: 200,
            name: "Vishnu",
        }
        console.log("Inside Constructor", this.props.city)
    }
    componentDidMount() {
        // setTimeout(() => {
            console.log("Inside componentDidMount", this.props.city);
            // this.setState((preProps) => {
            //     return {
            //         count : preProps.count + 100,
            //         count2: preProps.count2 + 200,
            //     }
            // })
        // }, 1000)
    }

    componentDidUpdate(preProps, preState) {
        console.log("preProps, preState:->", preProps, preState)
        if(preState.count2 != this.state.count2){

            console.log("Inside componentDidUpdate");
        }
    }

    componentWillUnmount() {
        console.log("Component will unmount called in class component")
    }
    render() {
        // const {city} = this.props;
        console.log("Inside Render Method", this.props.city)
        const {count, name, count2} = this.state;
        return (
            <>
            
            <h1> {name}:- Class Component: - {count} : {count2}</h1>
            <button
            onClick={() => (
                this.setState((preProps) => {
                    return {
                        count: preProps.count+100,
                        count2: preProps.count2+200
                    }
                })
                // this.state.count = this.state.count + 100,
                // console.log("this.state.count", this.state.count)
            )}
            >Click</button>
            </>
        )
    }
}

export default UserClass;
