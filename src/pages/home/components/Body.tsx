import { Button } from "../../../components/shared/button";
import image from "../../../assets/image.png";

export function Body() {
    return (
        <section className="flex items-center justify-between px-[6%]">
            <div>
                <h1 className="text-[70px] font-bold text-white [&_span]:text-[#853030] animate-scroll-right" style={{animationDelay: "0.3s"}}>
                    Brewing <span>Moments</span>, <br/>
                    <span>One Cup</span> at a Time.
                </h1>
                <p className="mb-5 text-[16px] font-medium max-w-175 text-[#999] animate-scroll-left" style={{animationDelay: "0.3s"}}>
                    Nestled in the heart of the community, our coffee shop is more than just a place to grab a cup—it's a cozy escape, a place to connect, and a destination for handcrafted, specialty coffee.
                </p>
                <div className="animate-scroll-top" style={{animationDelay: "0.8s"}}>
                    <Button>Catalogue</Button>
                </div>
            </div>
            <div className="max-w-150 animate-scroll-left" style={{animationDelay: "0.3s"}}>
                <img src={image} alt="Image" className="w-full"/>
            </div>
        </section>
    );
}