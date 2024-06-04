import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#171717] p-4">
            <motion.div
                className="md:w-1/2 w-full flex justify-center mb-4 md:mb-0"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img
                    src="https://faime-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector-about.d7b2a423.png&w=750&q=75"
                    alt="Sachin Sharma"
                    className="rounded-lg shadow-lg w-2/3 md:w-full"
                />
            </motion.div>
            <motion.div
                className="md:w-1/2 w-full"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-3xl text-[#ED1C24] font-bold mb-4">About Me</h1>
                <h2 className="text-5xl text-white font-semibold mb-4">Expert Line Producer and Founder of MP Films

</h2>
                <p className="text-lg text-white">
                I am Sachin Sharma, a seasoned line producer with a passion for storytelling and a knack for managing complex projects. Born in Bhopal, Madhya Pradesh, I hold a filmmaking diploma from Bhopal (2007) and specialized in film editing at Zee Institute of Media Arts (ZIMA), Mumbai (2009).

<br /> <br />
With over 15 years of experience in Mumbai, I’ve worked as an editor, post-production in-charge, production manager, production controller, supervising producer, project head, executive producer, and line producer on more than 50 projects across India. My dedication and work ethic have earned the trust of renowned filmmakers and production houses.
<br /> <br />
I founded MP Films to bring high-quality production to Madhya Pradesh, leading numerous TV serials, web series, feature films, ad films, reality show auditions, and more. My attention to detail and commitment to excellence make me a valuable asset to any production team.

                </p>
            </motion.div>
        </div>
    );
};

export default AboutMe;
