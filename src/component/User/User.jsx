import { useEffect, useState } from "react";

const User = () => {

    let [count, setCount] = useState(100)
    const [count2, setCount2] = useState(200)
    const [name] = useState("Vishnu")

    useEffect(() => {
        console.log("Inside UseEffect ");
        return () => {
            console.log("Clean Up function called!")
        }

    }, [count])

    console.log("Inside Body or render");
    return (
        <>
            <h1>{name}:- Functional Component :- {count} : {count2}</h1>
            <button
            onClick={() => {
                setCount((count) => {
                    return count+100
                })
                // setCount2((count2) => {
                //     return count2+200
                // })
                // count = count + 100;
                // console.log("count", count)
            }
            }
            >Click</button>
        </>
    )
}

export default User;