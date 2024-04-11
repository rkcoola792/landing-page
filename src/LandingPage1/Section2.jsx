import React from "react";

const Section2 = ({heading,subheading1, subheading2,descriptionHeading1,descriptionContent1,descriptionHeading2,descriptionContent2,descriptionHeading3,descriptionContent3}) => {
  return (
    <div className="section2 flex bg-secondary sm:p-12 p-8 rounded-3xl relative text-base ">
      <div className="left flex flex-col gap-8 ">
        <div className="heading">
          <h2 className="font-semibold text-center sm:text-left">Who We Are</h2>
        </div>
        <div className="subheading flex flex-col gap-2 text-center sm:text-left">
          <h2 className="text-mainred font-semibold text-mainRed text-2xl sm:text-3xl">
            Your Digital Future, Our Expertise
          </h2>
          <h2 className="sm:text-3xl text-2xl font-semibold">Media Dynox Delivers Excellence</h2>
        </div>
        <div className="descriptions flex flex-col gap-6 text-lg">
          <div className="flex gap-6">
            <div className="star hidden sm:block ">
              <img src="smallStar.webp"></img>
            </div>
            <p className="lg:w-[60%]">
              <span className="font-semibold">Expert Team:</span><span className="text-gray-500"> A skilled team with deep digital expertise, ready to
              propel your brand forward.</span>
            </p>
          </div>
          <div className="flex gap-6">
            {" "}
            <div className="star hidden sm:block">
              <img src="smallStar.webp"></img>
            </div>
            <p className="lg:w-[60%]">
            <span className="font-semibold">Cutting-Edge Solutions:</span><span className="text-gray-500"> Utilizing the latest trends and tools in SEO, PPC, social media, and content marketing.</span>
            </p>
          </div>
          <div className="flex gap-6">
            {" "}
            <div className="star w-10 hidden sm:block">
              <img src="smallStar.webp"></img>
            </div>
            <p className="lg:w-[60%]">
            <span className="font-semibold">Measurable Results:</span><span className="text-gray-500" >Focused on delivering tangible outcomes that drive growth and enhance your digital presence.</span> 
            </p>
          </div>
        </div>
      </div>
      <div className='right-image absolute lg:top-12 lg:-right-16 bottom-2 -right-12 hidden lg:block '>
        <img src='/rocket.webp' className="lg:w-[450px] w-[280px]"></img>
      </div>
    </div>
  );
};

export default Section2;
