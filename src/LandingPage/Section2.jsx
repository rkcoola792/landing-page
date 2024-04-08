import React from "react";

const Section2 = () => {
  return (
    <div className="section2 flex bg-secondary p-12 rounded-3xl relative text-base my-24 ">
      <div className="left flex flex-col gap-8 ">
        <div className="heading">
          <h2 className="font-semibold">Who We Are</h2>
        </div>
        <div className="subheading flex flex-col gap-2">
          <h2 className="text-mainred font-semibold text-mainRed text-3xl">
            Your Digital Future, Our Expertise
          </h2>
          <h2 className="text-3xl font-semibold">Media Dynox Delivers Excellence</h2>
        </div>
        <div className="descriptions flex flex-col gap-6 text-lg">
          <div className="flex gap-6">
            <div className="star  ">
              <img src="smallStar.webp"></img>
            </div>
            <p className="w-[60%]">
              <span className="font-semibold">Expert Team:</span><span className="text-gray-500"> A skilled team with deep digital expertise, ready to
              propel your brand forward.</span>
            </p>
          </div>
          <div className="flex gap-6">
            {" "}
            <div className="star ">
              <img src="smallStar.webp"></img>
            </div>
            <p className="w-[60%]">
            <span className="font-semibold">Cutting-Edge Solutions:</span><span className="text-gray-500"> Utilizing the latest trends and tools in SEO, PPC, social media, and content marketing.</span>
            </p>
          </div>
          <div className="flex gap-6">
            {" "}
            <div className="star w-10">
              <img src="smallStar.webp"></img>
            </div>
            <p className="w-[60%]">
            <span className="font-semibold">Measurable Results:</span><span className="text-gray-500" >Focused on delivering tangible outcomes that drive growth and enhance your digital presence.</span> 
            </p>
          </div>
        </div>
      </div>
      <div className='right-image absolute top-12 -right-16 '>
        <img src='/rocket.webp' className="w-[450px]"></img>
      </div>
    </div>
  );
};

export default Section2;
