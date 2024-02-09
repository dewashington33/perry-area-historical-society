import "../components/section-styles.css";

function Hero() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font section-gradient bg-no-repeat bg-cover opacity-100 grayscale h-dvh lg:object-left md:object-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">
            Celebrating Perry&apos;s heritage and history
          </h1>
          <h2>Founded 1824</h2>
          <br />
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
