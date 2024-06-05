import React from 'react';
import { motion } from 'framer-motion';

const CoreTeam = () => {
  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const teamMembers = [
    { heading: 'LOCATION SCOUTING SERVICE', description: 'We have expert location scouts in every region of MP, to help overcome administrative , linguistic and cultural barriers and ensure smooth sailing for your filming projects.' },
    { heading: 'FILMING PERMISSIONS', description: 'Our film fixers work with state , city and local administrations , helping you avoid a ton of complicated paper work for securing filming permissions.' },
    { heading: 'FILMING CREW', description: 'We have a strong working relationship with the best filming crews in MP .' },
    { heading: 'TRAVEL , BOARDING & LODGING', description:'Worried about your travel , stay , F&B while you were here? Just leave it on us!!! We will give you the best options for your TBL that comes under your budgets.' },
    { heading: 'EQUIPMENT RENTALS', description: 'Whether you need a single piece of shooting equipment or an entire kit for yor filming project in Madhya Pradesh , Our film fixers connect with the best rental houses for procuring state-of-the-art equipment.' },
    { heading: 'CASTING', description: 'We have our In-house casting director who will get you the best talented Artists , Models , Junior Artists etc . as per the script & amp ; creative requirement. ' }
  ];

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage: `url("https://faime-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-2.efac6c73.jpg&w=750&q=75")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          className="text-5xl text-[#ED1C24] font-bold mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          How our core team works?
        </motion.div>
        <motion.div
          className="text-lg text-center text-white mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our team is a vibrant mix of talented and enthusiastic individuals who know the ins and outs of the film production
          experience as film fixers and local connections to get your filming projects moving quickly. Every service is fully
          bespoke and tailored to fit your project requirements.
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              variants={boxVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-xl font-bold mb-2">{member.heading}</h2>
              <p className="text-gray-700">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
