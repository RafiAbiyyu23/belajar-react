import { useEffect, useState } from "react"

export default function Cuaca() {
    const [weather, setWeather] = useState(null);

    const fetchCuaca = async () => {
        const response = await fetch(
        "https://ibnux.github.io/BMKG-importer/cuaca/501218.json"
        );
    
        const data = await response.json();
        setWeather(data);
    };

    useEffect(() => {
        fetchCuaca();
    }, []);

    const urlicon = "https://ibnux.github.io/BMKG-importer/icon/";

    const formatDateTime = (date) => {
        const dateObject = new Date(date);

        const months = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        const day = dateObject.getDate();
        const month = months[dateObject.getMonth()];
        const year = dateObject.getFullYear();
        const hours = ('0' + dateObject.getHours()).slice(-2);
        const minutes = ('0' + dateObject.getMinutes()).slice(-2);

        return `${day} ${month} ${year} ${hours}:${minutes}`;

    }

    // console.log(weather);
    return (
        <div className="container mx-auto py-20">
            <h1 className="text-6xl font-teko text-center"> Cuaca di Cibinong</h1>
            <div className="grid grid-cols-12 gap-8">
            {weather ? weather.map((cuaca) => (    
                <div key={cuaca.jamCuaca} className="col-span-3 border-2 p-6 rounded-2xl border-gray-700 hover-card group ">
                    <h2>{formatDateTime (cuaca.jamCuaca)}</h2>
                    <img src={urlicon + cuaca.kodeCuaca + ".png"} alt={cuaca.cuaca} className="mx-auto group-hover:animate-pulse " />
                    <h1>{cuaca.cuaca}</h1>
                    <p>kelembapan : {cuaca.humidity} %</p>
                    <p>
                        Suhu : {cuaca.tempC}  &deg;C / {cuaca.tempF} &deg;F
                    </p>
                    
                </div>
            )): "Loading..."}
            </div>

        </div>
    )
}