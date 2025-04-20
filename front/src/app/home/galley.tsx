// import Image from "next/image";
// import React from "react";
// import TopArrow from "./Vector 2.png";

// const Galley = () => {
//   const images = [
//     "1HD_nWnKKYHuTsDcCypedkQUIwn4P4y7K",
//     "1Ji0a_sNceXEZw4wjTzLkXv6DxajMRPYI",
//     "1bqpnr5U4l4n2l9i4HPX1-Xv5xAAw9Iin",
//     "1qSsmLovtTLpv1k-kJy1Br4B7689fP2AX",
//     "1NF2eHAJjhMwGEqJ-Ncy0Ojv-gcUJdZqF",
//     "16MpVe3xEfjPAd1u0XNPh3UFcG-12zA2Q"
//   ];

//   const arrowContents = ["Cohort Meet", "Event", "Collab Event", "Learn", "Upskill"];

//   // const TopArrowContent = ({ content }: { content: string }) => (
//   //   <div className="m-2 bg-darkblue w-fit font-bold text-xl text-white flex justify-between align-middle relative">
//   //     <div className="bottom-0 left-0 absolute">
//   //       <Image alt="arrow" src={TopArrow} width={30} height={30} />
//   //     </div>
//   //     <div className="w-full ml-10 py-4">{content}</div>
//   //   </div>
//   // );

//   const TopArrowContent = ({ content }: { content: string }) => (
//     <div className="m-2 bg-darkblue w-fit font-bold text-xl text-white flex items-center relative px-4 py-2 whitespace-nowrap ">
//       <div className="absolute left-0 pl-0 bottom-0">
//         <Image alt="arrow" src={TopArrow} width={30} height={30} />
//       </div>
//       <div className="ml-10">{content}</div>
//     </div>
//   );
  

//   const ImageComponent = ({ id }: { id: string }) => (
//     <div className="m-2">
//       <Image
//         width={300}
//         height={200}
//         style={{
//           width: '300px',
//           height: '200px',
//           objectFit: 'cover',
          
//         }}
//         src={`https://drive.google.com/uc?export=view&id=${id}`}
//         alt="Gallery image"
//       />
//     </div>
//   );

//   const renderImagesWithTopArrow = (images: string[], prefix: string) => {
//     return images.map((id, index) => {
//       const elements = [
//         <ImageComponent key={`${prefix}-${index}`} id={id} />
//       ];
      
//       if ((index + 1) % 3 === 0) {
//         const contentIndex = Math.floor(index / 3) % arrowContents.length;
//         elements.push(
//           <TopArrowContent 
//             key={`${prefix}-arrow-${index}`} 
//             content={arrowContents[contentIndex]} 
//           />
//         );
//       }
      
//       return elements;
//     }).flat();
//   };

//   return (
//     <div className="w-screen bg-lightblue relative overflow-hidden">
//       <section className="mx-auto py-24">
//         <h2 className="container mx-auto text-3xl px-4 font-bold text-white font-transforma mb-12">
//           <p>Moments of Learning and Collaboration</p>
//         </h2>
//         <div className="space-y-2">
//           {/* First Marquee */}
//           <div className="bg-white bg-opacity-10 w-full">
//             <div className="overflow-hidden before-marquee">
//               <div className="flex w-fit space-x-3 animate-marquee">
//                 {renderImagesWithTopArrow(images, 'marquee1')}
//               </div>
//               <div aria-hidden="true" className="flex w-fit space-x-3 animate-marquee">
//                 {renderImagesWithTopArrow(images, 'marquee1-clone')}
//               </div>
//             </div>
//           </div>

//           {/* Second Marquee (Reverse) */}
//           <div className="bg-white bg-opacity-10 w-full">
//             <div className="overflow-hidden before-marquee-reverse">
//               <div className="w-fit animate-marquee-reverse">
//                 {renderImagesWithTopArrow(images, 'marquee2')}
//               </div>
//               <div aria-hidden="true" className="w-fit animate-marquee-reverse">
//                 {renderImagesWithTopArrow(images, 'marquee2-clone')}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Galley;


import Image from "next/image";
import React from "react";
import TopArrow from "./Vector 2.png";

const images = [
  "1HD_nWnKKYHuTsDcCypedkQUIwn4P4y7K",
  "1Ji0a_sNceXEZw4wjTzLkXv6DxajMRPYI",
  "1bqpnr5U4l4n2l9i4HPX1-Xv5xAAw9Iin",
  "1qSsmLovtTLpv1k-kJy1Br4B7689fP2AX",
  "1NF2eHAJjhMwGEqJ-Ncy0Ojv-gcUJdZqF",
  "16MpVe3xEfjPAd1u0XNPh3UFcG-12zA2Q"
];

const arrowContents = ["Cohort Meet", "Event", "Collab Event", "Learn", "Upskill"];

const TopArrowContent = ({ content }: { content: string }) => (
  <div className="m-2 bg-darkblue w-fit font-bold text-xl text-white flex items-center relative px-4 py-2 whitespace-nowrap">
    <div className="absolute left-0 pl-0 bottom-0">
      <Image alt="arrow" src={TopArrow} width={30} height={30} />
    </div>
    <div className="ml-10">{content}</div>
  </div>
);

const ImageComponent = ({
  id,
  size = "normal"
}: {
  id: string;
  size?: "large" | "small" | "normal";
}) => {
  const dimensions =
    size === "large"
      ? { width: 400, height: 200 }
      : size === "small"
      ? { width: 250, height: 170 }
      : { width: 300, height: 200 };

  return (
    <div>
      <Image
        width={dimensions.width}
        height={dimensions.height}
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          objectFit: "cover"
        }}
        src={`https://drive.google.com/uc?export=view&id=${id}`}
        alt="Gallery image"
      />
    </div>
  );
};

const renderImagesWithTopArrow = (images: string[], prefix: string) => {
  const elements: JSX.Element[] = [];

  for (let i = 0; i < images.length; i += 2) {
    const group = (
      <div
        key={`${prefix}-group-${i}`}
        className="flex flex-row items-center justify-center space-x-8"
      >
        <ImageComponent id={images[i]} size="large" />
        {images[i + 1] && <ImageComponent id={images[i + 1]} size="small" />}
      </div>
    );

    const arrow = (
      <TopArrowContent
        key={`${prefix}-arrow-${i}`}
        content={arrowContents[Math.floor(i / 2) % arrowContents.length]}
      />
    );

    elements.push(group, arrow);
  }

  return elements;
};

const Galley = () => {
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
              <div className="flex space-x-10 animate-marquee items-center">
                {renderImagesWithTopArrow(images, "marquee1")}
              </div>
              <div
                aria-hidden="true"
                className="flex space-x-10 animate-marquee items-center"
              >
                {renderImagesWithTopArrow(images, "marquee1-clone")}
              </div>
            </div>
          </div>

          {/* Second Marquee (Reverse) */}
          <div className="bg-white bg-opacity-10 w-full">
            <div className="overflow-hidden before-marquee-reverse">
              <div className="flex space-x-10 animate-marquee-reverse items-center">
                {renderImagesWithTopArrow(images, "marquee2")}
              </div>
              <div
                aria-hidden="true"
                className="flex  space-x-10 animate-marquee-reverse items-center"
              >
                {renderImagesWithTopArrow(images, "marquee2-clone")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galley;
