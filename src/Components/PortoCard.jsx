export default function PortoCard( {gambar, title, description}) {
    return(
        
            <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-white rounded-lg overflow-hidden border-3 border-black hover-card">
        <div className="h-40">
          <img src={ gambar } alt="portofolio" className="object-cover h-full w-full" />
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold">Web Design</h1>
          <div className="w-24 h-1 bg-sky-500 my-4" />
          <p>
           {  description }
          </p>
        </div>
        </div>
    );
}