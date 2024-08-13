import React, { useState, lazy, Suspense, useEffect } from "react"
import ReactDOM from "react-dom/client"
import ResCardProvider from "./src/component/Provider/ResCardProvider"
import FilterCardProvider from "./src/component/Provider/FilterCardProvider"
import Header from "./src/component/Header/Header"
import Body from "./src/component/Body/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
// import Contact from "./src/component/Contact/Contact"
// import About from "./src/component/About/About"
import Error from "./src/component/Error/Error"
import Summary from "./src/component/Summary/Summary"
import RestaurantDetailCard from "./src/component/RestaurantDetailCard/RestaurantDetailCard"

const box = document.querySelector("#box")

const AboutLazy = lazy(() => {
  return import("./src/component/About/About");
});
const ContactLazy = lazy(() => {
  return import("./src/component/Contact/Contact");
});

const Root = () => {
    
    const [allList, setAllList] = useState([])
    const [filterList, setFilterList] = useState([])

    return (
        <>
        <h1>Hello vishnu from root Folder</h1>
         <ResCardProvider.Provider value={{allList, setAllList}}>
             <FilterCardProvider.Provider value={{filterList, setFilterList}}>
             
                    <Header />
                    <Outlet /> 
            </FilterCardProvider.Provider>

        </ResCardProvider.Provider>

        
        </>
    );

};
const allRoutes = createBrowserRouter([
    {
        path: "/", 
        element: <Root />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (<Suspense fallback={<h3>Data is laoding..</h3>}>
                            <AboutLazy />
                        </Suspense>)
            },
            {
                path: "/contact",
                element: (<Suspense fallback={<h3>Data is laoding..</h3>}>
                            <ContactLazy />
                        </Suspense>)
            },
            {
                path: "/resDetail/:id",
                element: <RestaurantDetailCard />
            },

        ],
        // errorElement: <Error />
    },
    {
        path: "/summary",
        element: <Summary />
    },

])


const root = ReactDOM.createRoot(box)
root.render( <RouterProvider  router={allRoutes}/>);





