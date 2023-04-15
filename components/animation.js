export default function Animation() {
    
    return (
        <div className="absolute
                        left-0
                        top-[10%]
                        md:right-[0%]
                        md:bottom-[88%]">
            <div className="triangle
                            absolute
                            top-0
                            left-0
                            md:top-[15%]
                            md:right-0
                            z-0">
                <div className="block
                            absolute
                            -left-[540px]
                            top-[250px]
                            z-10">
                </div>
                <div className="block
                            absolute
                            right-0
                            top-[900px]
                            z-10">
                </div>
                <div className="ball
                    absolute
                    top-0
                    left-[15px]
                    md:top-0
                    md:right-[35px]
                    z-10">
                    <div className="marker
                        absolute
                        top-[15%]
                        right-[15%]
                        z-20">
                    </div>
                </div>
            </div>        
        </div>
    );
}