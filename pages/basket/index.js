import Link from "next/link";

export default function Basket() {
    return (
        <>
            <div className={" bg-c-yellow w-full h-full p-8"}>
                <div className={"flex justify-between w-full"}>
                    <Link href={"/home"}>
                        <img src="close.png" alt=""/>
                    </Link>
                    <Link href={"/home"}>
                        <img src="back.png" alt=""/>
                    </Link>
                </div>
                <div className={"basket text-white"}>
                    <div className={"basket-item flex w-full p-2"}>
                        <div className={"basket-item__image"}>
                            <img src="americano.png" alt=""/>
                        </div>
                        <div>
                            <div>
                                اسپرسو
                                (۲شات,کم شکر,کوچک)
                            </div>
                            <div>
                                قیمت : ۳۰۰,۰۰۰
                            </div>
                            <div>
                                تعداد:۳
                            </div>
                        </div>
                    </div>
                    <div className={"basket-item flex w-full p-2"}>
                        <div className={"basket-item__image"}>
                            <img src="latte.png" alt=""/>
                        </div>
                        <div>
                            <div>
                                موکا
                                (۲شات,کم شکر,کوچک)
                            </div>
                            <div>
                                قیمت : ۳۰۰,۰۰۰
                            </div>
                            <div>
                                تعداد:۳
                            </div>
                        </div>
                        
                    </div>
                    <div className={"basket-item flex w-full p-2"}>
                        <div className={"basket-item__image"}>
                            <img src="Mocka.png" alt="" style={{width:'60px',height:'70px',marginRight:'7px'}}/>
                        </div>
                        <div> 
                            اسپرسو
                            (۲شات,کم شکر,کوچک)
                        </div>
                    </div>
                    <div className={"pt-46"}></div>
                    <div style={{width:'150px'}}>
                        <Link href={"/address"}>
                            <button className="bg-white text-black  font-bold py-2 px-4 rounded create-button p-32 w-full" >
                                انتخاب آدرس
                            </button>
                        </Link>    
                    </div>
                    <div className={"p-8"}></div>
                    <Link href={"/order"}>
                        <button className="bg-white text-black  font-bold py-2 px-4 rounded create-button p-32 w-full" >
                            پرداخت
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}