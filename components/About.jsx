import React from "react";
import Image from "next/image";
import kels from "../public/kels.png";
import fam from "../public/kokFam.png";

const About = () => {
  return (
    <div className="pt-28 lg:pt-44">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col px-10 align-middle">
          <h1>Who I Am</h1>
          <p className="pt-10">
            Hi friend! It’s nice to meet you! I was born and raised in a town
            called Caledonia just outside Grand Rapids, MI. I have spent many
            years enjoying all the beauty that Michigan has to offer. From
            snowboarding in the winter to boating on Michigan’s Great Lakes in
            the summer, I am thankful to call this beautiful state home.
          </p>
          <p className="pt-4">
            I have found a joy and passion for real estate. I love helping
            others find the perfect home! My passion for helping others started
            with studying medical assisting at Davenport University. After many
            years of caring for others in this way, I was ready for a change. I
            am so thankful to be able to care for and help others in a new and
            exciting way through real estate! It brings me so much joy when I
            get to hand over the keys to my clients and see the pure happiness
            on their face.
          </p>
        </div>

        <Image
          src={kels}
          width="auto"
          height="auto"
          alt="kels"
          className="px-5 rounded md:w-[30%] pt-5"
        />
      </div>
      <div className="flex flex-col md:flex-row-reverse pt-20">
        <div className="px-10">
          <h1>My Family</h1>
          <p className="pt-10">
            Besides being a realtor, I am also a wife and mama! As our family
            has grown I have appreciated our home even more. It’s a space for
            our family and friends to gather, a space of peace in a chaotic
            world, a place for us to love and grow together. Our homes are such
            a special place and I hope to help you find this special space to
            call home! What does home mean to you?
          </p>
        </div>
        <Image
          src={fam}
          width="500px"
          height="auto"
          alt="fam"
          className="px-5 md:w-[40%] pt-5"
        />
      </div>
    </div>
  );
};

export default About;
