import React from "react";

const NewFeedback = () => {
  return (
    <div>
      <div
        className="relative w-full overflow-hidden bg-[#404040]"
        style={{ height: 600 }}
      >
        
        
       
        <div
          className="
absolute left-1/2 top-1/2 cursor-pointer border-black p-8 text-black transition-colors duration-500 z-0 bg-white
"
          style={{
            borderWidth: 2,
            clipPath:
              "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)",
            width: 365,
            height: 365,
            boxShadow: "black 0px 0px 0px 0px",
            transform:
              "translateX(calc(-50% - 243.333px)) translateY(calc(-50% + 15px)) rotate(2.5deg) translateZ(0px)",
          }}
        >
          <span
            className="absolute block origin-top-right rotate-45 bg-black object-cover"
            style={{
              right: "-2px",
              top: 48,
              width: "70.71067811865476px",
              height: 2,
            }}
          />
          <img
            src="/imgs/head-shots/6.jpg"
            alt="Testimonial image for Jeremy, CEO at COMPANY"
            className="mb-4 h-14 w-12 bg-neutral-600 object-cover object-top"
            style={{ boxShadow: "3px 3px 0px white" }}
          />
          <h3 className="text-base sm:text-xl text-black">
            "{/* */}SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me
            100 hours so far.{/* */}"
          </h3>
          <p className="absolute bottom-8 left-8 right-8 mt-2 text-sm italic text-neutral-700">
            - {/* */}Jeremy, CEO at COMPANY
          </p>
        </div>
        <div
          className="
absolute left-1/2 top-1/2 cursor-pointer border-black p-8 text-black transition-colors duration-500 z-10 bg-indigo-600
"
          style={{
            borderWidth: 2,
            clipPath:
              "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)",
            width: 365,
            height: 365,
            boxShadow: "black 0px 8px 0px 4px",
            transform:
              "translateX(calc(-50% + 0px)) translateY(calc(-50% - 65px)) rotate(0deg) translateZ(0px)",
          }}
        >
          <span
            className="absolute block origin-top-right rotate-45 bg-black object-cover"
            style={{
              right: "-2px",
              top: 48,
              width: "70.71067811865476px",
              height: 2,
            }}
          />
          <img
            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            alt="Testimonial image for Pam, CEO at COMPANY"
            className="mb-4 h-14 w-12 bg-neutral-600 object-cover object-top"
            style={{ boxShadow: "3px 3px 0px white" }}
          />
          <h3 className="text-base sm:text-xl text-white">
            "{/* */}Took some convincing, but now that we're on COMPANY, we're
            never going back.{/* */}"
          </h3>
          <p className="absolute bottom-8 left-8 right-8 mt-2 text-sm italic text-indigo-200">
            - {/* */}Pam, CEO at COMPANY
          </p>
        </div>
        <div
          className="
absolute left-1/2 top-1/2 cursor-pointer border-black p-8 text-black transition-colors duration-500 z-0 bg-white
"
          style={{
            borderWidth: 2,
            clipPath:
              "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)",
            width: 365,
            height: 365,
            boxShadow: "black 0px 0px 0px 0px",
            transform:
              "translateX(calc(-50% + 243.333px)) translateY(calc(-50% + 15px)) rotate(2.5deg) translateZ(0px)",
          }}
        >
          <span
            className="absolute block origin-top-right rotate-45 bg-black object-cover"
            style={{
              right: "-2px",
              top: 48,
              width: "70.71067811865476px",
              height: 2,
            }}
          />
          <img
            src="/imgs/head-shots/8.jpg"
            alt="Testimonial image for Daniel, CEO at COMPANY"
            className="mb-4 h-14 w-12 bg-neutral-600 object-cover object-top"
            style={{ boxShadow: "3px 3px 0px white" }}
          />
          <h3 className="text-base sm:text-xl text-black">
            "{/* */}I would be lost without COMPANY's in depth analytics. The
            ROI is EASILY 100X for us.{/* */}"
          </h3>
          <p className="absolute bottom-8 left-8 right-8 mt-2 text-sm italic text-neutral-700">
            - {/* */}Daniel, CEO at COMPANY
          </p>
        </div>
        
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
          <button className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06Z" />
            </svg>
          </button>
          <button className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;
