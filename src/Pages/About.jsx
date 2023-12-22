
import { useState } from "react";
import HyperLink from "../Components/HyperLink";

export default function About () {
    const [data, setData] = useState("sky");
    const [gambar, setGambar] = useState();

    const color = ["sky", "red", "green"];

    const picture = [
        "./1.png",
        "./2.jpeg",
        "./3.jpeg"
    ];


    return (
        <div>
            <h1 >About</h1>
            <HyperLink to={"/"}>
                <p>Go To Home</p>
            </HyperLink>
            <div className={"h-20 w-20b bg-" + data + "-500"}></div>
            <div>{data}</div>
            <button onClick={() => setData(color[0])}>sky</button>
            <button onClick={() => setData(color[1])}>red</button>
            <button onClick={() => setData(color[2])}>green</button>
            <br />
            <img src={gambar} alt={gambar} className="w-32 h-32 "/>
            <select onChange={(e) => setGambar(picture[e.target.value])}>
            <option value="">Pilih Gambar</option>
            <option value={0}>Gambar 1</option>
            <option value={1}>Gambar 2</option>
            <option value={2}>Gambar 3</option>
            </select>
            
            
        </div>
    )
}