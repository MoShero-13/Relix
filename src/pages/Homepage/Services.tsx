import { useState } from "react";
import type { FC, MouseEvent } from "react";
import image1 from "../../assets/S1.jpg";
import image2 from "../../assets/S2.jpg";
import image3 from "../../assets/S3.jpg";
import image4 from "../../assets/S4.jpg";

interface Service {
  id: string;
  title: string;
  desc: string;
  imgSrc: string;
}

const ServiceRow: FC<{ service: Service }> = ({ service }) => {
  const [showImg, setShowImg] = useState(false);
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });

  const imgWidth = 300;
  const imgHeight = 300;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // نضبط الاحداثيات بحيث مركز الصورة يكون مكان الماوس
    setImgPos({
      x: e.clientX - imgWidth / 2,
      y: e.clientY - imgHeight / 2,
    });
  };

  const handleMouseEnter = () => setShowImg(true);
  const handleMouseLeave = () => setShowImg(false);

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center gap-6 py-6 border-b-2 border-gray-300  "
      >
        <div className="text-xl font-bold  min-w-[40px] ">{service.id}</div>

        <div className="flex flex-col w-1/4">
          <div className="text-2xl font-semibold text-gray-900">
            {service.title}
          </div>
        </div>

        <div className="text-sm text-white-600 w-1/4 hidden sm:block">
          <div>{service.desc}</div>
          <div className="absolute bottom-10 right-5 z-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* الصورة المتحركة مع الماوس */}
      {showImg && (
        <img
          src={service.imgSrc}
          alt={service.title}
          draggable={false}
          style={{
            position: "fixed",
            opacity: "0.8",
            objectFit: "cover",
            left: imgPos.x,
            top: imgPos.y,
            width: imgWidth,
            height: imgHeight,
            pointerEvents: "none",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transition: "transform 0.1s ease-out",
            zIndex: 9999,
            userSelect: "none",
          }}
        />
      )}
    </>
  );
};

const Services: FC = () => {
  const services: Service[] = [
    {
      id: "01",
      title: "Web Design",
      desc: "Creating visually appealing and user-friendly websites that engage visitors and enhance brand presence.",
      imgSrc: image1,
    },
    {
      id: "02",
      title: "App development",
      desc: "Building responsive and efficient mobile applications tailored to meet business and user needs.",
      imgSrc: image2,
    },
    {
      id: "03",
      title: "UI UX Design",
      desc: "Designing intuitive interfaces and seamless user experiences to maximize usability and satisfaction.",
      imgSrc: image3,
    },
    {
      id: "04",
      title: "Programming",
      desc: "Writing clean, efficient code to develop robust software solutions across various platforms and technologies.",
      imgSrc: image4,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col sm:flex-row justify-between mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mr-6">Services</h2>
        <p className="max-w-lg flex-grow leading-relaxed text-left text-2xl sm:text-3xl">
          We offer a wide range of digital services tailored to help your
          business thrive.
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        {services.map((service) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
