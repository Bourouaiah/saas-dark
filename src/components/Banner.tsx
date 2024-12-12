function Banner() {
  return (
    <div
      className="py-3 text-center bg-[linear-gradient(to_right,_rgba(254,236,255),_rgba(254,202,255),_rgba(254,181,255),_rgba(255,219,231),_rgba(255,244,214),_rgba(243,252,215),_rgba(210,245,238),_rgba(195,239,255),_rgba(251,239,255))]"
    >
      <div className="container">
        <p>
          <span className="hidden sm:inline">
            This page is included in a free SaaS Website Kit.{" "}
          </span>
          <a href="#" className="font-medium underline underline-offset-4">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
}

export default Banner;
