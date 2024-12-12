/* eslint-disable react/no-unescaped-entities */

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

function LogoTicker() {
  return (
    <div className="bg-black text-white py-[72px]">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">Trusted by the world's most innovative teams</h2>
        <div className="overflow-hidden mt-9">
          <div className="flex gap-16">
            {images.map(({ src, alt }) => (
              <Image key={alt} src={src} alt={alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
