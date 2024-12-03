import { Card } from "../Card/Card";
import { useState } from "react";
import "./CardList.css";

export function CardList (){

    const [isActive, setIsActive] = useState(0); //дефолтное состояние ноль 
    return (
        <div className="cardList">
        <Card 
        price="300" 
        speed = "до 10 Мбит/сек"
        color="1" 
        isActive={isActive==="1"} 
        onButtonClick = {setIsActive}
        />
        <Card 
        price="400" 
        color="2" 
        speed = "до 50 Мбит/сек"
        isActive={isActive==="2"} 
        onButtonClick = {setIsActive}
        />
        <Card 
        price="550" 
        color="3" 
        speed = "до 100 Мбит/сек"
        isActive={isActive==="3" }
        onButtonClick = {setIsActive}
        />
        <Card 
        price="1000" 
        color="4" 
        speed = "до 200 Мбит/сек"
        isActive={isActive==="4" } 
        onButtonClick = {setIsActive}
        />
        </div>
      );    
}
    