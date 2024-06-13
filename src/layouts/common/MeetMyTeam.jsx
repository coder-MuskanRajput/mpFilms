import React from 'react';
import "./MeetMyTeam.css"

const teamMembers = [
  {
    name: "Rohit Tiwari",
    description: "He has lived and worked in Mumbai and brings an iimmense knowledge of film making with a new perspective to mp films . He is responsiblefor adding mutiple in-house services to mp films like base management, filming locations, crew etc. ",
    // contact: "john@example.com",
    image: "https://faime-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector1.66bd9a7a.jpg&w=384&q=75"
  },
  {
    name: "Alok Pandey",
    description: "He has worked in Mumbai as an Auditor , Accountantans Assistant Commercial head. Now deals with the all kind of commercials , billings, audits etc.",
    image: "https://faime-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector1.66bd9a7a.jpg&w=384&q=75"
  },
  {
    name: "Puneet Tamrakar",
    description: "He has his own studio setup for a decade . He brings his experiences to MP Films and take care of all technical requirements , equipments's , TBL , etc",
    image: "https://faime-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector1.66bd9a7a.jpg&w=384&q=75"
  },
  {
    name: "Utkarsh Arya",
    description: "He is associated with the direction department . his role is to coordinate with the directions team and forward the essentials and casting requirements to them.",
    image: "https://faime-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector1.66bd9a7a.jpg&w=384&q=75"
  }
];

const MeetMyTeam = () => {
  return (
    <div className='w-full relative h-full bg-[#171717]'>
    <div className="container bg-[#171717] mx-auto p-8">
      <h1 className="text-2xl text-[#ED1C24] font-bold text-center mb-8">Expert Team</h1>
      <h2 className="text-6xl text-white text-center mb-12">Meet My Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[#171717] border border-gray-500 p-6 rounded-lg shadow-lg text-center">
            <div className="overflow-hidden cursor-pointer rounded-lg mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-cover filter grayscale hover:filter-none transition-all duration-300"
              />
            </div>
            <h3 className="text-xl text-white font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-400 mb-4">{member.description}</p>
            {/* <a href={`mailto:${member.contact}`} className="text-blue-500 hover:underline">
              {member.contact}
            </a> */}
          </div>
          
        ))}
      </div>
    </div>
    </div>
  );
};

export default MeetMyTeam;
