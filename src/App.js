import React from 'react';
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter} from "react-router-dom";



const App = ()=> {
    return (

        <BrowserRouter >

            <MainPage  />

        </BrowserRouter>


    );
};

export default App;



