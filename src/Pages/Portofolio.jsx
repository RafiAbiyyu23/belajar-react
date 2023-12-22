import { useState } from "react";
import PortoCard from "../Components/PortoCard";

export default function Portofolio() {
    const [show, setShow ] = useState(false);
    const toggleMenu = () => {
      setShow(!show);
    }  
    const PortoGambar = [
      "./public/isiBiodata.png",
      "./public/Resepayam.png",
      "./public/Login.png",
  ]
  return (
        <div>
            <div>
  <header className="px-8 md:px-20 py-6 bg-sky-100 bg-opacity-70 backdrop-blur fixed w-full z-50">
    <nav className="flex justify-between items-center">
      <div className="text-4xl font-teko hover:text-sky-700 select-none">
        FXKL
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-12">
          <li>
            <a className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium" href="#home">home</a>
          </li>
          <li>
            <a className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium" href="#portofolio">portofolio</a>
          </li>
          <li>
            <a className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium" href="#skills">skills</a>
          </li>
          <li>
            <a className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium" href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 0 448 512" className={show ? "hidden" : ""}>
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height={20} width={20} viewBox="0 0 384 512" className={show ? "" : "hidden"} >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
    </nav>
    <div className={"absolute right-16 " + (show ? "" : "hidden")}>
      <ul className="rounded-lg bg-white">
        <li><a className="py-4 px-6 hover:bg-slate-300" href>home</a></li>
        <li>
          <a className="py-4 px-6 hover:bg-slate-300" href>portofolio</a>
        </li>
        <li><a className="py-4 px-6 hover:bg-slate-300" href>skills</a></li>
        <li><a className="py-4 px-6 hover:bg-slate-300" href>contact</a></li>
      </ul>
    </div>
  </header>
  <section className="pt-20 pb-12" id="home">
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-6 flex flex-col justify-center space-y-4 px-8 md:px-20">
        <p className="text-xl">hi, i'm</p>
        <h1 className="text-3xl md:text-5xl font-bold">
          Rafi Muhammad
          <span className="text-sky-500 block">Abiyyu</span>
        </h1>
        <p className="text-xl">
          i'm a <span className="text-sky-500">Frontend Developer</span>
          with 2 years of experience
        </p>
        <div className="flex items-center justify-start text-gray-700 gap-4">
          <a href="https://youtu.be/n8JkLyzJIy8?si=NY-vxqgGXbQeVH6P" target="_blank" className="w-6 h-6 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current w-full h-full">
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </a>
          <a href="https://youtu.be/qQwv0DkHS-M?si=At3dx9TQ3qjTjpAK" target="_blank" className="w-6 h-6 hover:text-fuchsia-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current w-full h-full">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a href="https://youtu.be/pJDOQZKFMzU?si=BkTmGbrtJXJr3h5p" target="_blank" className="w-6 h-6 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current w-full h-full">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
          <a href="https://youtu.be/KQpHWAxRA_8?si=WLWSbBwacKOb6mKv" target="_blank" className="w-6 h-6 hover:text-blue-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current w-full h-full">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="col-span-12 -order-1 md:order-1 md:col-span-6 p-20 md:p-28">
        <div className="rounded-full border-8 hover:scale-110 overflow-hidden w-fit">
          <img src="./public/1.png" alt="Abiyyu" />
        </div>
      </div>
    </div>
  </section>
  <section className="p-12 md:p-20 bg-slate-700" id="portofolio">
    <div className="text-center text-white">
      <h2 className="text-3xl md:text-5xl font-poppins font-bold">portofolio</h2>
      <div className="w-full h-1 bg-sky-400 my-4" />
    </div>
    <div className="grid grid-cols-12 gap-6">
      <PortoCard gambar={ PortoGambar[0]} title="web design" description="random text disini" />
      <PortoCard gambar={ PortoGambar[1]} title="web design" description="random text disini" />
      <PortoCard gambar={ PortoGambar[2]} title="web design" description="random text disini" />
    </div>
  </section>
  <section className="p-12 md:p-20" id="skills">
    <div>
      <h2 className="text-3xl md:text-5xl font-poppins font-bold">My Skills</h2>
      <div className="w-2/12 h-2 bg-green-500 my-4" />
    </div>
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-6 md:col-span-3 border-2 bg-white rounded-lg overflow-hidden border-3 border-black hover-card">
        <div className="flex justify-center pt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="fill-orange-500 w-20 h-20">
            <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
          </svg>
        </div>
        <div className="p-6 text-center">
          <h1 className="text-xl font-semibold">HTML5</h1>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3 border-2 bg-white rounded-lg overflow-hidden border-3 border-black hover-card">
        <div className="flex justify-center pt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="fill-blue-500 w-20 h-20">
            <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
          </svg>
        </div>
        <div className="p-6 text-center">
          <h1 className="text-xl font-semibold">CSS</h1>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3 border-2 bg-white rounded-lg overflow-hidden border-3 border-black hover-card">
        <div className="flex justify-center pt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-yellow-500 w-20 h-20">
            <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
          </svg>
        </div>
        <div className="p-6 text-center">
          <h1 className="text-xl font-semibold">JAVASCRIPT</h1>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3 border-2 bg-white rounded-lg overflow-hidden border-3 border-black hover-card">
        <div className="flex justify-center pt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-blue-300 w-20 h-20">
            <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
          </svg>
        </div>
        <div className="p-6 text-center">
          <h1 className="text-xl font-semibold">REACT</h1>
        </div>
      </div>
    </div>
  </section>
  <section className="p-12 md:p-20 bg-slate-700" id="contact">
    <div className="flex flex-col justify-center items-center">
      <div className="text-white text-center pb-10">
        <h1 className="text-3xl font-bold">Contact Me</h1>
      </div>
      <div className="rounded-2xl overflow-hidden border-[3px] border-white hover:scale-105">
        <a href="https://wa.me/6285714618280" target="_blank" className="flex items-center gap-6 text-xl font-semibold px-6 py-3 text-white bg-[#11B517] hover:bg-[#1a901e]">
          <svg xmlns="http://www.w3.org/2000/svg" height={60} width={60} viewBox="0 0 448 512" className="fill-current">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <p className="hidden sm:block">Contact Me on WhatsApp</p>
        </a>
      </div>
    </div>
  </section>
  <footer className="p-4 md:p-8 bg-slate-900">
    <div className="flex items-center justify-center text-white gap-4">
      <a href="https://youtu.be/n8JkLyzJIy8?si=NY-vxqgGXbQeVH6P" target="_blank" className="w-6 h-6 hover:text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current w-full h-full">
          <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
        </svg>
      </a>
      <a href="https://youtu.be/qQwv0DkHS-M?si=At3dx9TQ3qjTjpAK" target="_blank" className="w-6 h-6 hover:text-fuchsia-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current w-full h-full">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </a>
      <a href="https://youtu.be/pJDOQZKFMzU?si=BkTmGbrtJXJr3h5p" target="_blank" className="w-6 h-6 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current w-full h-full">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      </a>
      <a href="https://youtu.be/KQpHWAxRA_8?si=WLWSbBwacKOb6mKv" target="_blank" className="w-6 h-6 hover:text-blue-900">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current w-full h-full">
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>
      </a>
    </div>
    <p className="text-center text-white">
      copyright © 2023 - all right reserved <br />
      Made By *****
    </p>
  </footer>
  <a href="#home" className="fixed bg-white bg-opacity-70 backdrop-blur rounded-full bottom-7 right-7 p-4">
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 512 512">
      <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </svg>
  </a>
</div>
        </div>
    );
}