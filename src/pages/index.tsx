// import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";


import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <div className='text-2xl text-red-200'>Hello world</div>
    // <div className="h-screen w-screen flex flex-col">
    //   <div className=""></div>
    //   <div className=""></div>
    // </div>

    <div className="h-screen w-screen flex flex-col justify-between items-center relative">
      <Head>
        <title>Roundest Pokemon</title>
      </Head>
      <div className="text-2xl text-center pt-8">Which Pokémon is Rounder?</div>
      
        <div className="p-8 flex justify-between items-center max-w-2xl flex-col md:flex-row animate-fade-in">
         
          <div className="p-8 italic text-xl">{"or"}</div>
          
          <div className="p-2" />
        </div>
      
      
      <div className="w-full text-xl text-center pb-2">
        <a href="https://twitter.com/t3dotgg">Twitter</a>
        <span className="p-4">{"-"}</span>
        {/* <Link href="/results">
          <a>Results</a>
        </Link> */}
        <span className="p-4">{"-"}</span>
        {/* <Link href="/about">
          <a>About</a>
        </Link> */}
      </div>
    </div>
  );
}
