import { Routes, Route, Router } from "react-router-dom"
import Home from "../Home"
import Card from "../carts/Card"

export default function Rou(){
    return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/eletronika" element={<Card />}/>
    </Routes>
    )
}