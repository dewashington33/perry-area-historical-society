import { PiArrowFatLinesDown } from "react-icons/pi";
//import "../components/section-styles.css";

function Hero() {
  function handleScrollDown() {
    window.scrollTo({
      top: window.innerHeight / 4,
      behavior: "smooth",
    });
  }
  return (
    <section>
      <div className="bg-gradient-to-tl from-blue-900 to-gray-900 w-full relative min-h-screen">
        <img
          src="/images/PAHSMuseumbg.jpg"
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="z-0 p-24">
          <h1 className="text-white text-4xl font-bold">
            Celebrating Perry&apos;s heritage and history
          </h1>
          <h2 className="text-white font-medium text-2xl">Founded 1824</h2>
          <br />
          <p className="mb-8 leading-relaxed text-white text-lg text-wrap">
            Originally called Wattsville and founded in 1823 for the purpose of
            conducting the county`s legal affairs, the town was placed in the
            geographic center of Houston County, which was then much larger than
            it is today. The town`s name was changed to Perry in honor of
            Commodore Oliver Hazard Perry, a hero of the War of 1812 (1812-15).
            On December 9, 1824, the Georgia legislature approved the
            incorporation of Perry, the first official town in Houston County.
            Morris, Susan. &quot;Perry.&quot; New Georgia Encyclopedia, last
            modified Jul 12, 2022.
            <br />
            <br />
            <a
              className="text-white cursor-pointer hover:underline relative z-10"
              href="https://www.georgiaencyclopedia.org/articles/counties-cities-neighborhoods/perry/"
              onClick={(event) => {
                event.preventDefault();
                window.location.href =
                  "https://www.georgiaencyclopedia.org/articles/counties-cities-neighborhoods/perry/";
              }}
            >
              New Georgia Encyclopedia
            </a>
          </p>
          <div className="left-0 w-full flex justify-center items-end pb-1 relative z-10">
            <PiArrowFatLinesDown
              className="cursor-pointer text-white text-5xl"
              onClick={handleScrollDown}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
