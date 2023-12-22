import HyperLink from "../Components/HyperLink";

export default function Home() {
    const data = {
        name: "Abid",
        from: "bogor",
    };
    const data2 = ['tidur', 'hitam', 'kucing'];

    const data3 = [
        {
            name: "Abid",
            from: "bogor",
        },
        {
            name: "ahmad",
            from: "jakarta",
        },
        {
            name: "aqil",
            from: "banten",
        },
    ]

    const angka = [1,2,3,4,5,6,7,8,9,10];

    return (
        
        <div className="container mx-auto py-20">
            <h1 className="text-3xl text-cyan-500 text-center font-teko" >Home Page</h1>
                <div className="flex gap-8 justify-center my-6">

            <HyperLink to="/about">
                <p>Go to about</p>
            </HyperLink>
            <HyperLink to="/cuaca">
                <p>Go to cuaca</p>
            </HyperLink>
            <HyperLink to="/portofolio">
                <p>Go to Portofolio</p>
            </HyperLink>
                </div>
            <div className="text-3xl">
                <h2>Nama saya  <span className="text-red-500">{data.name}</span> </h2>
                <h2>saya dari  <span className="text-red-500">{data.from}</span> </h2>
            </div>
            <div className="text-3xl">
                <p>Hobi : {data2[0]}</p>
                <p>Warna kesukaan : {data2[1]}</p>
                <p>hewan peliharaan : {data2[2]}</p>
            </div>            
            <div className="text-3xl bg-sky-500">
                {data3.map((bio) => (
                    <p key={bio.name}>{bio.name} dari {bio.from} </p>
                
                ))}

            </div>
            
            <div className="text-3xl bg-gray-500">
                {data3.filter((bio) => bio.from === "jakarta") .map((bio) => (
                   <p>{bio.name} dari {bio.from} </p> 
                ))}
            </div>
            <div className="text-3xl bg-red-800">
                {angka.reduce ((a, b) => a + b, 0)}
            </div>
        </div>


                
        
        );
}