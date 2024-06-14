import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import EkDujheKeVaste from '../../assets/EkDujheKeVaste.jpeg';
import LifeNavrangi from '../../assets/LifeNavrangi.jpeg';
import Online24 from '../../assets/Online24.jpeg';
import Sajish from '../../assets/Sajish.jpeg';
import jnu from '../../assets/Jnu.jpeg';
import JanniEkKahani from '../../assets/JanniEkKahani.jpeg';
import KayamatSeKayamatTk from '../../assets/KayamatSeKayamatTk.jpeg';

const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={EkDujheKeVaste}
        subheading="Directed By"
        heading="Jai Basantu Singh"
      >
        <ExampleContent
          title="EK DUJHE KE VASTE SEASON 2"
          Staring="Mohit Kumar, Kanika Kupar, Akshay Anand"
          production="Studio Next"
          images={[EkDujheKeVaste, LifeNavrangi, Online24, Sajish, jnu, JanniEkKahani]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl=""
        subheading="Directed By"
        heading="Aayushh Shrivastava"
      >
        <ExampleContent
          title="FARIHAA"
          Staring="Subuhi Joshi, Himani Sahani, Yash Sharda"
          production="SGN Films"
          images={[KayamatSeKayamatTk, Online24, Sajish, jnu, JanniEkKahani, EkDujheKeVaste]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={LifeNavrangi}
        subheading="Directed By"
        heading="Debama Mandal"
      >
        <ExampleContent
          title="LIFE NAVRANGI"
          Staring="Amir Ali, Tiku Talsania, Krishna Mukherjee, Swaroopa Gosh"
          production="BhodhiTree, BBC Media"
          images={[LifeNavrangi, EkDujheKeVaste, KayamatSeKayamatTk, Online24, Sajish, jnu]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl=""
        subheading="Discovery Show"
        heading="Documentary"
      >
        <ExampleContent
          title="ROCK SHELTER (DISCOVERY SHOW)"
          Staring="Documentary"
          production="The Salt Media"
          images={[JanniEkKahani, KayamatSeKayamatTk, Online24, Sajish, jnu, EkDujheKeVaste]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://akamaividz2.zee5.com/image/upload/w_1755,h_987,c_scale,f_webp,q_auto:eco/resources/0-6-4z5242085/list/1170x658withlogof806984a5c7f4b4798bdc3c46a219aac.jpg"
        subheading="Directed By"
        heading="Madhukar Anand"
      >
        <ExampleContent
          title="ACHARVA CHHATHI MAAYI KE"
          Staring="Purvi Mishra, Aishana Singh, Ashok Kumar Jha"
          production="The Cinema Makers"
          images={[jnu, EkDujheKeVaste, JanniEkKahani, KayamatSeKayamatTk, Online24, Sajish]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={Online24}
        subheading="Directed By"
        heading="Sanjay Sharma"
      >
        <ExampleContent
          title="ONLINE 24X7"
          Staring="Ahem Sharma, Brijendra Kala, Abhimanyu Singh, Rajesh Sharma, Zarina Wahb"
          production="Ocean Fantasy Events"
          images={[Online24, Sajish, jnu, JanniEkKahani, EkDujheKeVaste, LifeNavrangi]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={Sajish}
        subheading="Directed By"
        heading="Hiralal Metha"
      >
        <ExampleContent
          title="SAAJISH"
          Staring="Milind Gunaji, Kanchi Singh, Mugdha Godse, Dev, Raza Murad"
          production="Trident Films"
          images={[Sajish, jnu, JanniEkKahani, EkDujheKeVaste, LifeNavrangi, Online24]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/05/ips-simala-prasad-1715792626.jpeg"
        subheading="Directed By"
        heading="Zaigham Immam"
      >
        <ExampleContent
          title="THE NARMADA STORY"
          Staring="Raghubir Tiwari, Mukesh Tiwari, Divya Dutta, Ishtiyak Khan"
          production="AB Infosoft Creation"
          images={[jnu, JanniEkKahani, KayamatSeKayamatTk, Online24, Sajish, EkDujheKeVaste]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={jnu}
        subheading="Directed By"
        heading="Vinay Sharma"
      >
        <ExampleContent
          title="JNU"
          Staring="Urvashi Rautela, Siddharth Bodek, Ravi Kishan, Piyush Mishra, Vijay Raaz"
          production="The Big Daddy"
          images={[jnu, KayamatSeKayamatTk, Online24, Sajish, JanniEkKahani, EkDujheKeVaste]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={JanniEkKahani}
        subheading="Directed By"
        heading="Abhigyan Jha"
      >
        <ExampleContent
          title="JANNI EK KAHANI"
          Staring="Prapti Shukla, Mouli Ganguly, Sumit Kaul"
          production="Mrinal Abhigyan Jha"
          images={[JanniEkKahani, KayamatSeKayamatTk, Online24, Sajish, jnu, EkDujheKeVaste]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={KayamatSeKayamatTk}
        subheading="Directed By"
        heading="Afzal Sayyed"
      >
        <ExampleContent
          title="QYAMAT SE QYAMAT TAK"
          Staring="Karam Rajpal, Trupti Mishra, Gaurav Sharma"
          production="BBC, Coiosecum"
          images={[KayamatSeKayamatTk, Online24, Sajish, jnu, JanniEkKahani, EkDujheKeVaste]}
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl=""
        subheading="Directed By"
        heading=""
      >
        <ExampleContent
          title="PYAR KROGE PYAR MILEGA"
          Staring=""
          production="Mrinank Films"
          images={[Online24, Sajish, jnu, JanniEkKahani, EkDujheKeVaste, KayamatSeKayamatTk]}
        />
      </TextParallaxContent>
      <div>

      
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
          Advertisement & Audition
        </h2>
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          <i className="ri-check-double-fill"></i><span className="font-bold text-xl md:text-2xl text-neutral-600">Indian Idol</span>            
          </p>
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          <i className="ri-check-double-fill"></i><span className="font-bold text-xl md:text-2xl text-neutral-600">Kaun Banega Crorepati</span>
          </p>
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          <i className="ri-check-double-fill"></i><span className="font-bold text-xl md:text-2xl text-neutral-600">Master Chef</span>
          </p>
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          <i className="ri-check-double-fill"></i><span className="font-bold text-xl md:text-2xl text-neutral-600">Ladli Bhen Yogna</span>
          </p>
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          <i className="ri-check-double-fill"></i><span className="font-bold text-xl md:text-2xl text-neutral-600">Kokila Bhen Hospital</span>
          </p>
        </div>
        
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[500px] w-full mx-auto mb-5">
        <img src={EkDujheKeVaste} alt="Ek Dujhe Ke Vaste" className="w-full h-32 object-cover" />
        <img src={LifeNavrangi} alt="Life Navrangi" className="w-full h-32 object-cover" />
        <img src={Online24} alt="Online 24" className="w-full h-32 object-cover" />
        <img src={Sajish} alt="Sajish" className="w-full h-32 object-cover" />
        <img src={jnu} alt="JNU" className="w-full h-32 object-cover" />
        <img src={JanniEkKahani} alt="Janni Ek Kahani" className="w-full h-32 object-cover" />
      </div>
      </div>
    </div>
  );
};

const IMG_PADDING = 1;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: `calc(100vh)`,
        backgroundColor:"#171717",
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ title, Staring, production, images }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        <span className="font-bold text-xl md:text-2xl text-black">Staring</span> {Staring}
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        <span className="font-bold text-xl md:text-2xl text-black">Production</span> {production}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`image-${index}`} className="w-full h-32 object-cover" />
        ))}
      </div>
    </div>
  </div>
);

export default TextParallaxContentExample;
