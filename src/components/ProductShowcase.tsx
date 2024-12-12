import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

function ProductShowcase() {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-xl text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <Image src={appScreen} alt="app-screen" className="mt-14 mx-auto" />
      </div>
    </div>
  );
}

export default ProductShowcase;
