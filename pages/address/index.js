import dynamic from 'next/dynamic';
import Link from "next/link";

const MapComponent = dynamic(() => import('../../components/map'), {
    ssr: false,
});
export default function Address(){
    
    return (
        <>
            <div className={"bg-c-blue p-8 w-full h-full"}>
                <MapComponent></MapComponent>
                <div className={"p-8"}></div>
                <Link href={"/basket"}>
                    <button className="bg-white text-black  font-bold py-2 px-4 rounded create-button p-32 w-full" >
                        تایید آدرس
                    </button>
                </Link>
            </div>
        </>
    )
}