// src/DudeAnimation.js
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import "./DudeAnimation.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const DudeAnimation = () => {
    useEffect(() => {
        const dude = document.querySelector(".dude");
        const head = dude.querySelector(".head");
        const legs = Array.from(dude.querySelectorAll(".leg"));
        const arms = Array.from(dude.querySelectorAll(".arm"));
        const legBottoms = Array.from(dude.querySelectorAll(".leg-bottom"));
        const armBottoms = Array.from(dude.querySelectorAll(".arm-bottom"));
        const content = document.querySelector(".content");
        const arrowEl = document.querySelector(".arrow-animated");
        const cam1 = document.querySelector(".cam1");
        const cam2 = document.querySelector(".cam2");

        gsap.set(arms, {
            svgOrigin: "180 58",
        });
        gsap.set(cam1, {
            svgOrigin: "0 17.66 22.74",
        });
        gsap.set(cam2, {
            svgOrigin: "0 51.4 17.7",
        });
        gsap.set(head, {
            svgOrigin: "180 45",
        });
        gsap.set(armBottoms, {
            svgOrigin: "178 118",
        });
        gsap.set(legs, {
            svgOrigin: "177 145",
        });
        gsap.set(legBottoms, {
            svgOrigin: "171 220",
        });

        const halfBodyTimeline = (leg, arm) => {
            const legBottom = leg.querySelector(".leg-bottom");
            const armBottom = arm.querySelector(".arm-bottom");

            return gsap.timeline({
                repeat: -1,
                paused: true,
            })
                .fromTo(
                    leg,
                    {
                        rotation: -25,
                    },
                    {
                        duration: 0.5,
                        rotation: 15,
                        ease: "sine.inOut",
                    },
                    0
                )
                .to(
                    leg,
                    {
                        duration: 0.25,
                        rotation: -25,
                        ease: "sine.in",
                    },
                    ">"
                )
                .to(
                    legBottom,
                    {
                        duration: 0.25,
                        rotation: 15,
                        ease: "sine.inOut",
                    },
                    0.25
                )
                .to(
                    legBottom,
                    {
                        duration: 0.25,
                        rotation: 80,
                        ease: "sine.in",
                    },
                    ">"
                )
                .to(
                    legBottom,
                    {
                        duration: 0.25,
                        rotation: 0,
                        ease: "sine.out",
                    },
                    ">"
                )
                .fromTo(
                    arm,
                    {
                        rotation: -12,
                    },
                    {
                        duration: 0.5,
                        rotation: 12,
                        ease: "sine.inOut",
                        yoyo: true,
                        repeat: 1,
                    },
                    0
                )
                
                .fromTo(
                    armBottom,
                    {
                        rotation: -15,
                    },
                    {
                        duration: 0.5,
                        rotation: 10,
                        ease: "sine.inOut",
                        yoyo: true,
                        repeat: 1,
                    },
                    0
                );
        };

        const backCycle = halfBodyTimeline(legs[0], arms[1]);
        const frontCycle = halfBodyTimeline(legs[1], arms[0]);

        const bodyTimeline = gsap.timeline({
            paused: true,
        })
            .to(
                dude,
                {
                    duration: 0.25,
                    y: "-=20",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                },
                0
            )
            .fromTo(
                head,
                {
                    rotation: -25,
                },
                {
                    duration: 0.25,
                    rotation: 1,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                },
                0
            );

            const camTimeline = gsap.timeline({
                paused:true,
            })
            .to(
                cam1,
                {
                    rotation: -360,
                },
                {
                    duration: 0.25,
                    rotation: 1,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                },
                0
            )

        const numberOfCycles = Math.ceil((3 * window.innerWidth) / window.innerHeight);
        gsap.timeline({
            scrollTrigger: {
                trigger: ".page",
                scrub: true,
                start: "0% 0%",
                end: "100% 100%",
            },
        })
            .to(
                arrowEl,
                {
                    duration: 0.05,
                    opacity: 0,
                },
                0
            )
            .fromTo(
                content,
                {
                    xPercent: 0,
                },
                {
                    xPercent: -50,
                    ease: "none",
                },
                0
            )
            .fromTo(
                camTimeline,
                {
                    xPercent: 0,
                },
                {
                    xPercent: -50,
                    ease: "none",
                },
                0
            )
            .fromTo(
                bodyTimeline,
                {
                    time: 0.7,
                },
                {
                    time: 0.75 + numberOfCycles,
                },
                0
            )
            .fromTo(
                backCycle,
                {
                    time: 0.7,
                },
                {
                    time: 0.75 + numberOfCycles,
                },
                0
            )
            .fromTo(
                frontCycle,
                {
                    time: 0.2,
                },
                {
                    time: 0.25 + numberOfCycles,
                },
                0
            );

        window.addEventListener("resize", () => {
            ScrollTrigger.refresh();
        });

        // ONLY FOR CODEPEN PREVIEW
        gsap.set(window, {
            scrollTo: { y: 0 },
        });
        gsap.timeline({}).to(window, {
            duration: 1,
            scrollTo: { y: 0.3 * window.innerHeight },
            ease: "power1.inOut",
        });
    }, []);

    return (
        <div className="page">
            <div className="content">
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

                <div className="content-section first">

                    <div>
                        <h1 className=" mp text-9xl z-10 text-white">MP FILMS</h1>
                        <p className="arrow-animated z-10 text-white">↓</p>
                    </div>
                </div>
                <div className="content-section">
                    <div>
                        <h1>What's this?</h1>
                        <p>
                            That's <a href="https://twitter.com/uuuuuulala" target="_blank" rel="noopener noreferrer">me</a> learning
                            the basic walk cycle animation and playing with the GSAP implementation&nbsp;of&nbsp;it.
                        </p>
                    </div>
                </div>
                <div className="content-section">
                    <div>
                        <h1>So what?</h1>
                        <p>
                            You can use this code and design concept for your project.
                            The animation parameters are easy to tweak, graphic elements can be replaced.
                        </p>
                        <p>
                            You can also give me a follow on <a href="https://www.linkedin.com/in/ksenia-kondrashova/" target="_blank" rel="noopener noreferrer">linkedin</a>, <a href="https://codepen.io/ksenia-k" target="_blank" rel="noopener noreferrer">codepen</a> and <a href="https://twitter.com/uuuuuulala" target="_top">twitter</a> :)
                        </p>
                    </div>
                </div>
                <div className="content-section"></div>
            </div>
            <div className="animation-container flex flex-row gap-2 items-start">
                <svg className="" viewBox="0 -10 315 350">
                    <g className="dude" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none">
                        <g className="leg">
                            <path className="leg-bottom" d="M182,317l-10.4-2.8c-2.7-0.7-4.5-3.2-4.4-6c1.7-13,3-27,3.7-42.1c0.8-16.5,0.7-32,0.1-46.1"/>
                            <path d="M171,220l6-60"/>
                        </g>
                        <g className="leg">
                            <path className="leg-bottom" d="M182,317l-10.2-2.7c-2.8-0.8-4.7-3.4-4.6-6.3c-0.8-13.9-1-29.2-0.2-45.8c0.7-15.2,2.1-29.4,4-42.2"/>
                            <path d="M171,222c0.3-10,4.3-42,5.3-48"/>
                        </g>
                        <g className="arm">
                            <path d="M175,75c-0.6,8.7-0.6,18.9,0.8,30.1c0.6,4.6,1.3,8.9,2.2,12.9"/>
                            <path className="arm-bottom" d="M186,175c-0.2-3.1-0.4-6.2-0.7-9.3c-1.5-16.9-4.1-32.9-7.3-47.7"/>
                            {/* Add camera in hand */}
                            {/* <circle cx="192" cy="190" r="10" fill="black" /> */}
                        </g>
                        <g className="arm">
                            <path d="M178.8,82.2c-1.9,13.1-1.8,25.2-0.8,35.8"/>
                            <path className="arm-bottom" d="M186,175c-2.4-7.6-4.7-16.8-6.3-27.2c-1.6-11.3-2-21.3-1.7-29.8"/>
                        </g>
                        <path className="head" d="M195,14.8c-10.8-5.7-23.9,1.3-28.2,12.4c-4.9,13,6.3,28.4,17.8,29.1c13.2,0.8,22.2-16.1,19.5-26.7c-1.6-6.5-5.2-7.1-5.2-7.1"/>
                    </g>
                </svg>
               <svg className="invert -translate-x-full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org" id="camera-loader" width="85.708488" height={100}>
  <defs id="defs12" />
  <path id="camera-body" d="M 51.5625 0 C 50.667739 -0.00962983 49.756943 0.05800477 48.84375 0.1875 C 41.018415 1.2971691 35.117198 7.3376842 33.8125 14.71875 C 30.504071 7.9918491 23.138091 3.8277945 15.3125 4.9375 C 5.573576 6.3185261 -1.1937811 15.321773 0.1875 25.0625 C 1.030765 31.00916 4.7245026 35.850708 9.6875 38.40625 L 10.59375 44.84375 L 41.21875 40.5 C 42.618434 40.301472 43.966737 41.101389 44.15625 42.4375 C 44.34576 43.773612 43.274684 44.957723 41.875 45.15625 L 11.25 49.5 L 12.40625 57.6875 C 12.593105 59.005185 13.837018 59.937079 15.15625 59.75 L 64.25 52.78125 C 65.567815 52.594377 66.499355 51.348937 66.3125 50.03125 L 63.5625 30.78125 C 67.618077 26.946961 69.843395 21.259142 69 15.3125 C 67.748216 6.4849658 60.211858 0.09304631 51.5625 0 z M 51.28125 3.75 C 58.168631 3.6506107 64.22589 8.6859174 65.21875 15.6875 C 66.295328 23.279482 61.029156 30.329715 53.4375 31.40625 C 45.84552 32.482829 38.795329 27.18573 37.71875 19.59375 C 36.641441 11.998855 41.938942 4.9828747 49.53125 3.90625 C 50.124347 3.8221462 50.697574 3.7584222 51.28125 3.75 z M 17.5625 8.53125 C 24.449868 8.4318561 30.507144 13.46718 31.5 20.46875 C 32.576577 28.060719 27.310389 35.110969 19.71875 36.1875 C 12.126783 37.264077 5.0765804 31.966969 4 24.375 C 2.9226914 16.780121 8.2202041 9.7641225 15.8125 8.6875 C 16.405598 8.603395 16.978824 8.5396714 17.5625 8.53125 z M 79.71875 27.46875 L 66.9375 33.65625 L 68.53125 44.8125 L 82.53125 47.21875 L 79.71875 27.46875 z M 41.71875 41.0625 C 41.582761 41.058251 41.422178 41.073761 41.28125 41.09375 L 8.15625 45.78125 L 7.90625 44.09375 L 2.78125 43.9375 L 4 52.53125 L 8.875 50.9375 L 8.625 49.25 L 41.78125 44.5625 C 42.908673 44.40259 43.699053 43.493996 43.5625 42.53125 C 43.443014 41.688847 42.670671 41.092246 41.71875 41.0625 z M 51.53125 57.21875 L 28.625 60.4375 C 28.625117 63.279515 28.625057 61.501735 28.625 64.34375 L 30.90625 64.34375 L 32.40625 64.34375 L 17.21875 97.46875 C 16.804629 98.371268 17.19123 99.429629 18.09375 99.84375 C 18.996268 100.25787 20.054629 99.87127 20.46875 98.96875 L 36.34375 64.34375 L 38.28125 64.34375 L 38.28125 98.21875 C 38.28125 99.211743 39.069507 100 40.0625 100 C 41.055493 100 41.875 99.211743 41.875 98.21875 L 41.875 64.34375 L 43.6875 64.34375 L 59.71875 98.96875 C 60.136118 99.869771 61.192729 100.26112 62.09375 99.84375 C 62.994771 99.426382 63.386118 98.338521 62.96875 97.4375 L 47.65625 64.34375 L 49.09375 64.34375 L 51.53125 64.34375 L 51.53125 57.21875 z " />
  <path className="cam1" id="reel-1" d="m 17.763265,10.60917 c -1.849868,0 -3.349902,1.500036 -3.349902,3.349902 0,1.849868 1.500034,3.34863 3.349902,3.34863 1.849865,0 3.348629,-1.498762 3.348629,-3.34863 0,-1.849866 -1.498764,-3.349902 -3.348629,-3.349902 z m -8.0539896,5.851215 c -1.849868,0 -3.3499023,1.500032 -3.3499023,3.349898 0,1.849866 1.5000343,3.349897 3.3499023,3.349897 1.8498656,0 3.3498996,-1.500031 3.3498996,-3.349897 0,-1.849866 -1.500034,-3.349898 -3.3498996,-3.349898 z m 16.1016246,0 c -1.849868,0 -3.3499,1.500032 -3.3499,3.349898 0,1.849866 1.500032,3.349897 3.3499,3.349897 1.849865,0 3.348629,-1.500031 3.348629,-3.349897 0,-1.849866 -1.498764,-3.349898 -3.348629,-3.349898 z m -13.023579,9.460259 c -1.849867,0 -3.3498994,1.500032 -3.3498994,3.349902 0,1.849865 1.5000324,3.348629 3.3498994,3.348629 1.849867,0 3.3499,-1.498764 3.3499,-3.348629 0,-1.84987 -1.500033,-3.349902 -3.3499,-3.349902 z m 9.950613,0 c -1.849866,0 -3.348629,1.500032 -3.348629,3.349902 0,1.849865 1.498763,3.348629 3.348629,3.348629 1.849865,0 3.349901,-1.498764 3.349901,-3.348629 0,-1.84987 -1.500036,-3.349902 -3.349901,-3.349902 z">
    {/* <path className="cam1" d="0 17.66 22.74" /> */}
    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" begin={0} from="0 17.66 22.74" to="360 17.66 22.74" repeatCount="indefinite" />
  </path>
  <path className="cam2" id="reel-2" d="m 51.483904,5.8171007 c -1.849872,0 -3.349908,1.5000388 -3.349908,3.3499074 0,1.8498709 1.500036,3.3486359 3.349908,3.3486359 1.849868,0 3.348635,-1.498765 3.348635,-3.3486359 0,-1.8498686 -1.498767,-3.3499074 -3.348635,-3.3499074 z M 43.4299,11.668326 c -1.849872,0 -3.349908,1.500034 -3.349908,3.349904 0,1.849869 1.500036,3.349903 3.349908,3.349903 1.849869,0 3.349906,-1.500034 3.349906,-3.349903 0,-1.84987 -1.500037,-3.349904 -3.349906,-3.349904 z m 16.101654,0 c -1.849871,0 -3.349907,1.500034 -3.349907,3.349904 0,1.849869 1.500036,3.349903 3.349907,3.349903 1.849867,0 3.348635,-1.500034 3.348635,-3.349903 0,-1.84987 -1.498768,-3.349904 -3.348635,-3.349904 z m -13.023602,9.460276 c -1.849871,0 -3.349907,1.500034 -3.349907,3.349908 0,1.849869 1.500036,3.348635 3.349907,3.348635 1.849869,0 3.349905,-1.498766 3.349905,-3.348635 0,-1.849874 -1.500036,-3.349908 -3.349905,-3.349908 z m 9.950632,0 c -1.849872,0 -3.348637,1.500034 -3.348637,3.349908 0,1.849869 1.498765,3.348635 3.348637,3.348635 1.849867,0 3.349905,-1.498766 3.349905,-3.348635 0,-1.849874 -1.500038,-3.349908 -3.349905,-3.349908 z">
    {/* <path className="cam2" d="0 51.4 17.7"  /> */}
    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="3.6s" begin={0} from="0 51.4 17.7" to="360 51.4 17.7" repeatCount="indefinite" />
  </path>
</svg>

            </div>
        </div>
    );
};

export default DudeAnimation;
