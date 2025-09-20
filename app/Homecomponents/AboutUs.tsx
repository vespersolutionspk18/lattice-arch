import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className=" flex flex-col justify-between lg:gap-10 gap-5 w-full lg:px-16 px-5 lg:py-42 py-10 items-center">
      <div className="w-fit rounded-full bg-stone-900 flex items-center justify-center px-4 py-2 text-lg text-white/85">
        About Us
      </div>
      <h5 className="text-center text-5xl text-white/85 font-semibold tracking-tighter w-[66%]">
        We&apos;re a team of designers, architects, and builders turning spaces
        into works of art. From interiors to landscapes, we deliver lasting
        results tailored to your vision.
      </h5>
      <div className="flex flex-row gap-16 justify-between w-full py-32">
        <div className="lg:w-1/4 flex flex-col gap-7">
          <h5 className="font-semibold text-5xl textowhite tracking-tighter">
            15+
          </h5>
          <p className="text-2xl text-stone-400">Years of Experience</p>
        </div>
        <div className="lg:w-1/4 flex flex-col gap-7">
          <h5 className="font-semibold text-5xl textowhite tracking-tighter">
            36
          </h5>
          <p className="text-2xl text-stone-400">Talented Team Members</p>
        </div>
        <div className="lg:w-1/4 flex flex-col gap-7">
          <h5 className="font-semibold text-5xl textowhite tracking-tighter">
            100+
          </h5>
          <p className="text-2xl text-stone-400">Projects Delivered</p>
        </div>
        <div className="lg:w-1/4 flex flex-col gap-7">
          <h5 className="font-semibold text-5xl textowhite tracking-tighter">
            $2M+
          </h5>
          <p className="text-2xl text-stone-400">Saved for contractors</p>
        </div>
      </div>
      <div className="flex flex-row w-full gap-7">
        <div className="flex flex-col gap-10 p-7 rounded-4xl bg-stone-900 border-[1px] border-stone-800 w-1/2">
          <h5 className="text-3xl text-white/85 font-light">
            We design with intention creating spaces that reflect your style,
            not just trends.
          </h5>
          <p className="text-2xl text-stone-400">
            1: Balance of style and function<br></br>
            2: Timeless results, built to last<br></br>
            3: Thoughtful, detail driven process
          </p>
          <div
            className="flex flex-row w-full items-center justify-center gap-6 mt-10"
            id="img's here"
          >
            <div className="relative h-24 w-20 rotate-6 overflow-hidden rounded-b-xl">
              <div className="absolute inset-0 rounded-t-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=600&fit=crop"
                  alt="Interior design"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </div>
            <div className="relative h-24 w-20 overflow-hidden rounded-b-xl">
              <div className="absolute inset-0 rounded-t-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=600&fit=crop"
                  alt="Architecture"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </div>
            <div className="relative h-24 w-20 -rotate-6 overflow-hidden rounded-b-xl">
              <div className="absolute inset-0 rounded-t-full overflow-hidden bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop"
                  alt="Modern home"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </div>
          </div>
        </div>
        <div 
          className="rounded-4xl w-1/2  bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop')"
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
