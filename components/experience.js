import Image from 'next/image';
import submarineIcon from "../public/submarine.svg"
import satelliteIcon from "../public/satellite.svg"

export default function Experience() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <Image
                    className='w-16'
                    priority
                    src={submarineIcon}
                    alt="submarine"
                />
                <div className='w-[80%]'>
                    <h3 className="font-semibold">Babcock</h3>
                    <h4 className="font-semibold italic">Mechanical Engineer</h4>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Image
                    className='w-16'
                    priority
                    src={satelliteIcon}
                    alt="satellite"
                />
                <div div className='w-[80%]'>
                    <h3 className="font-semibold">
                        Defence Science and Technology Group
                    </h3>
                    <h4 className="font-semibold italic">Industry Experience Placement Student</h4>
                    <ul></ul>
                </div>
            </div>
        </div>
    );
}