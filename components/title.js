import Image from 'next/image';
import MagicButton from './magicbutton.js';

export default function Title() {
    return (
        <div className="relative bg-main-purple flex items-center justify-center overflow-hidden h-screen" >
            {/* Circle/Oval Animation */}
            <div className="animate-slide-in-right absolute -right-1/2 md:right-0 top-28 w-96 h-96 bg-no-repeat bg-contain z-1" style={{ backgroundImage: "url('/oval.png')" }}></div>
            <div className="animate-slide-in-right absolute bottom-24 left-2/3 w-64 h-64 bg-no-repeat bg-contain z-1" style={{ backgroundImage: "url('/oval.png')" }}></div>
            {/* Star Image */}
            <Image src="/star.png" alt="Star" className="absolute top-[37vh] right-[67vh]" width={50} height={50} />

            {/* Text Content */}
            <div className="z-10 absolute text-white w-2/3 text-left left-10 bottom-64">
                <div className="text-6xl font-ClashSemiBold tracking-wide relative left-4">Crafting Productive Environments</div>
                <div className="text-xl my-4 text-secondary-purple font-InterMedium relative left-4">Automate your business and boost your operations easily</div>
                <div className="w-1/4 flex justify-center">
                    <MagicButton className="mt-4"
                        gradientColor="linear-gradient(90deg, #FFFFFF, #FFFFFF)"
                        textColor="#4517FE"
                        text="Free Consultation !"
                    />
                </div>
            </div>
        </div>
    );
}