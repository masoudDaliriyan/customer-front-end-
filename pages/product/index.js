import Link from "next/link";

export default function Product(){
   return (
       <>
           <div className={"bg-c-blue h-full w-full p-8"}>
           <div className={"flex justify-between w-full"}>
               <Link href={"/home"}>
                   <img src="close.png" alt=""/>
               </Link>
               <Link href={"/home"}>
                   <img src="back.png" alt=""/>
               </Link>
               
           </div>
               <img src={"/americano.png"} style={{width:'200px',margin:'0 auto'}}/>
               <label htmlFor="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white customize-text">شکر</label>
               <input id="steps-range" type="range" min="0" max="5"  step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
               <div className={"pt-6"}></div>
               <label htmlFor="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white customize-text">شات قهوه</label>
               <input id="steps-range" type="range" min="0" max="5"  step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
               <div className={"pt-6"}></div>
               <label htmlFor="steps-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white customize-text">سایز</label>
               <input id="steps-range" type="range" min="0" max="5"  step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
               <div className={"pt-12"}></div>
               <Link href={"/basket"}>
                   <button className="bg-white text-black  font-bold py-2 px-4 rounded create-button p-32 w-full" >
                       اضافه به سبد خرید
                   </button>    
               </Link>
           </div>
       </>
   ) 
}