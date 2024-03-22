import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className={"navbar  w-full flex justify-between p-4 "}>
                <img className={"menu"} src="./menu.png" alt=""/>
                <img className={"logo"} src="./logo.png" alt=""/>
            </div>    
            <div className={"flex"}>
                <div className={"products w-full"}>
                    <Link href={"/product"}>
                    <div className={"product bg-c-blue w-full"}>
                        <img src="americano.png" alt=""/>
                        <div className={"content"}>
                            <div className={"coffee-title"}>
                                اسپرسو
                            </div>
                            <div className={"pb-2"}>
                                <div className={"text-white"}>
                                    قیمت پایه:
                                    <span className={""}>۲۰,۰۰۰ تومان</span>
                                </div>
                            </div>
                            <button className="bg-white text-black  font-bold py-2 px-4 rounded create-button p-32 w-full" >
                                بساز
                            </button>    
                        </div>
                    </div>
                    </Link>
                    <div className={"product bg-c-yellow w-full"}>
                        <div className={"h1"}>
                            <img src="latte.png" alt=""/>
                        </div>
                    </div>
                    <div className={"product bg-c-brown w-full"}>
                        <div className={"h1"}>
                            <img style={{height:'280px'}} src="Mocka.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}