import Image from "next/image";
import React from "react";

const Galley = () => {
  const images = [
    "1HD_nWnKKYHuTsDcCypedkQUIwn4P4y7K",
    "1Ji0a_sNceXEZw4wjTzLkXv6DxajMRPYI",
    "1bqpnr5U4l4n2l9i4HPX1-Xv5xAAw9Iin",
    "1qSsmLovtTLpv1k-kJy1Br4B7689fP2AX",
    "1NF2eHAJjhMwGEqJ-Ncy0Ojv-gcUJdZqF",
    "16MpVe3xEfjPAd1u0XNPh3UFcG-12zA2Q"
  ];

  const ImageComponent = ({ id }: { id: string }) => (
    <div className="m-2">
      <Image
        width={250}
        height={100}
        style={{ objectFit: "cover" }}
        src={`https://drive.google.com/uc?export=view&id=${id}`}
        alt="Gallery image"
      />
    </div>
  );

  return (
    <div className="w-screen bg-lightblue relative overflow-hidden">
      <section className="mx-auto py-24">
        <h2 className="container mx-auto text-3xl px-4 font-bold text-white font-transforma mb-12">
          <p>Moments of Learning and Collaboration</p>
        </h2>
        <div className="space-y-2">
          {/* First Marquee */}
          <div className="bg-white bg-opacity-10 w-full">
            <div className="overflow-hidden before-marquee">
              <div className="flex w-fit space-x-3 animate-marquee">
                {images.map((id, index) => (
                  <ImageComponent key={`marquee1-${index}`} id={id} />
                ))}
                {/* Keep existing commented code blocks */}
              </div>
              <div aria-hidden="true" className="flex w-fit space-x-3 animate-marquee">
                {images.map((id, index) => (
                  <ImageComponent key={`marquee1-clone-${index}`} id={id} />
                ))}
              </div>
            </div>
          </div>

          {/* Second Marquee (Reverse) */}
          <div className="bg-white bg-opacity-10 w-full">
            <div className="overflow-hidden before-marquee-reverse">
              <div className="w-fit animate-marquee-reverse">
                {images.map((id, index) => (
                  <ImageComponent key={`marquee2-${index}`} id={id} />
                ))}
              </div>
              <div aria-hidden="true" className="w-fit animate-marquee-reverse">
                {images.map((id, index) => (
                  <ImageComponent key={`marquee2-clone-${index}`} id={id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galley;