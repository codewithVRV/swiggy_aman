
import { Link } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import ResCardProvider from "../Provider/ResCardProvider";
import FilterCardProvider from "../Provider/FilterCardProvider";
import { SWIGGY_LOGO } from "../MockData/MockData";
const Header = () => {
    const [inputValue, setInputValue] = useState("")

    const {allList, setAllList} = useContext(ResCardProvider)
    const {filterList, setFilterList} = useContext(FilterCardProvider)

    function handleFilterCard () {
        let filteredCardList = allList.filter((item) => {
            return item.info.name.toLowerCase().includes(inputValue.toLowerCase())
        })
        setFilterList(filteredCardList)
    }

    return (

        <>
            <div className="header-parent">
                <div className="header-left">
                    <Link to={"/"}>
                    <div className="logo-parent"><img src={SWIGGY_LOGO} alt="Swiggy Logo" /></div>
                    </Link>
                    <input type="text"  placeholder="Enter Your Text."
                        value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="btn" onClick={handleFilterCard}>Search</button>
                </div>
                <div className="header-right">
                    <Link to={"/"}>
                    <h3>Home</h3>
                    </Link>
                    <Link to={"/about"}>
                    <h3>About</h3>
                    </Link>
                    <Link to={"/contact"}>
                    <h3>Contact</h3>
                    </Link>
                    <Link to={"/summary"}>
                    <h3>Summary</h3>
                    </Link>


                </div>
            </div>
        </>
    )
}

export default Header;