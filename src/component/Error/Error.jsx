import { useRouteError } from "react-router-dom";

const Error = () => {
    let errorReason = useRouteError();
    console.log("error reason is:", errorReason.data)
    console.log("error reason is:", errorReason.status)
    console.log("error reason is:", errorReason.statusText)

    return (
        
        <h1>Error Page: Your hitting url was :-  </h1>
    )
}

export default Error;