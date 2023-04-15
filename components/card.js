export default function Card(props) {
    return (
        <div className={props.className + " border-2 border-black relative"}>
            <div className="absolute 
                            top-0 
                            left-0
                            border-l-[0px] border-l-transparent
                            border-t-[25px] border-t-black
                            border-r-[25px] border-r-transparent">

            </div>
            <div className="flex flex-col p-4 gap-4">
                <div className="w-full h-32 border-2 border-black"></div>
                {props.children}
            </div>
        </div>
    );
}