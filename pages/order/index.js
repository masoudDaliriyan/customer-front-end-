import Link from "next/link";

export default function Order(){
    return  (
       <>
        <div className={"p-8 bg-c-blue w-full h-full"}>
            <div className={"flex justify-between w-full"}>
                <Link href={"/home"}>
                    <img src="close.png" alt=""/>
                </Link>
                <Link href={"/home"}>
                    <img src="back.png" alt=""/>
                </Link>
            </div>
            <div className={"text-white text-lg"}>
                در حال آماده سازی سفارش
            </div>
            <div className={"p-2"}></div>
            <div className={"text-white text-lg"}>
                ۰۳:۲۰:۳۳ مانده
            </div>
            <div className={"p-2"}></div>
            <div className={"text-white text-lg"}>
                آدرس: تهران قنات کوثر شهرک امید بلوک ۲۰
            </div>
            <div className={"p-2"}></div>
            <Link href={"/basket"}>
                <button className="bg-white text-black  font-bold py-2 px-4 rounded create-button p-32 w-full" >
                    مشاهده جزیات سفارش
                </button>
            </Link>
        </div>
       </> 
    ) 
}