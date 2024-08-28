import React from "react";
import icon1 from "../assets/community/Icon1.svg";
import icon2 from "../assets/community/Icon2.svg";
import icon3 from "../assets/community/Icon3.svg";
import Icon1 from "../assets/clients/icon1.svg";
import Icon2 from "../assets/clients/icon2.svg";
import Icon3 from "../assets/clients/icon3.svg";
import Icon4 from "../assets/clients/icon4.svg";
import Icon5 from "../assets/clients/icon5.svg";
import Icon6 from "../assets/clients/icon6.svg";
import Icon7 from "../assets/clients/icon7.svg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisation",
      description:
        "Our membership management software provides full automatic of membership renwal and payments",
      Image: icon1,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automatic of membership renwal and payments",
      Image: icon2,
    },
    {
      id: 3,
      title: "Clubs and Groups",
      description:
        "Our membership management software provides full automatic of membership renwal and payments",
      Image: icon3,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl max-auto" id="service">
      <div className=" text-center my-8">
        <h2 className=" text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company logo */}

        <div className=" my-12 flex flex-wrap justify-between items-center gap-8 ">
          <img src={Icon1} alt="" />
          <img src={Icon2} alt="" />
          <img src={Icon3} alt="" />
          <img src={Icon4} alt="" />
          <img src={Icon5} alt="" />
          <img src={Icon6} alt="" />
          <img src={Icon7} alt="" />
        </div>
      </div>

      {/* services card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className=" text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>

      {/* cards */}
      <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((services) => (
          <div
            key={services.id}
            className=" px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8f5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={services.Image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {services.title}
              </h4>
              <p className="text-sm text-neutralGrey">{services.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
