import React from "react";
import image1 from "./assets/image1.svg";
import image2 from "./assets/image2.svg";
import image3 from "./assets/image3.svg";

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.",
      image: image1,
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.",
      image: image2,
    },
    {
      name: "John Smith",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.",
      image: image3,
    },
  ];

  return (
    <div className=' p-6 rounded-lg  bg-white mt-3 mb-3'>
      <h1 className='text-2xl font-bold mb-4'>Team</h1>
      <p className='text-[#3E424A] mb-6'>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className='space-y-6'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row  md:gap-4 bg-[#E8F4FD] rounded-lg shadow-sm items-center '
          >
            <div className='flex flex-col  w-1/2 items-center mt-2 py-2'>
              <img
                src={member.image}
                alt={member.name}
                className='w-24 h-24 rounded-lg object-cover' // Increased width to w-60
              />
              <h2 className='text-sm font-semibold'>{member.name}</h2>
              <p className='text-xs text-gray-500 mb-2'>{member.designation}</p>
            </div>
            <div className='px-3 pb-3 md:p-0'>
              <p className='text-base text-[#3E424A] mr-2'>
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
