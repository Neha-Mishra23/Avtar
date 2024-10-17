import React from "react";
import "./Avtar";
import Avtar from "./Avtar";
import "./style.css"

export default function App () {
    const data =[
        {
            image:"https://cdn.pixabay.com/photo/2023/09/01/14/24/boy-avtar-8227084_1280.png",
            Name:"Avtar",
        },
        {
            image:"https://i.pinimg.com/736x/33/ba/df/33badf7bd7e2bd56b21e3d972fe3ed5a.jpg",
            Name:"Sneh",
        },
    ];
    return(
        <div className="App">
            {data.map ((el)=> (
                <Avtar image={el.image}
            Name={el.Name}/>
        
            ))}
        </div>

    );
}