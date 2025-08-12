import videoSrc from "../../assets/videoSrc.mp4";
const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16" id="about-us">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Left side: Title + Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-left">About Us</h2>
          <p className="text-gray-700 text-sm leading-relaxed text-left sm:text-3xl">
            We are a passionate team dedicated to delivering top-notch digital
            solutions that drive success and innovation. Our expertise spans web
            development, UI/UX design, app development, and more.
          </p>
        </div>

        {/* Right side: Vertical image */}
        <div className="md:w-1/2 flex justify-end border-2 border-black rounded-lg p-[5px] shadow-lg shadow-black/20">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="h-[400px] w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
