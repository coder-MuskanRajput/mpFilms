import React from 'react'

const NewHero = () => {
  return (
    <section className="bg-white h-[350vh]">
      <div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
        <div
          className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center"
          style={{
            opacity: 1,
            transform: "translateY(0%) scale(1) translateZ(0px)",
          }}
        >
          <h1 className="text-stone-950 text-5xl md:text-7xl font-bold text-center max-w-xl">
            Photo gallery for artists
          </h1>
          <p className="text-stone-600 text-sm md:text-base text-center max-w-xl my-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, minus
            nisi? Quod praesentium quaerat possimus.
          </p>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-violet-600 hover:bg-violet-600 transition-colors text-white font-medium">
              Try for free
            </button>
            <button className="px-4 py-2 bg-transparent hover:bg-stone-200 transition-colors text-stone-950 font-medium">
              Learn about us
            </button>
          </div>
        </div>
        <div
          className="col-span-2 relative z-10"
          style={{
            backgroundImage: 'url("https://blog.ipleaders.in/wp-content/uploads/2020/01/Screen-Shot-2020-01-14-at-6.04.40-PM.png")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            transform:
              "translateX(-35%) translateY(-35%) scale(0.5) translateZ(0px)",
          }}
        />
        <div
          className="row-span-2 relative z-10"
          style={{
            backgroundImage: 'url("https://www.adorama.com/alc/wp-content/uploads/2018/03/shutterstock_226081837.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            transform:
              "translateX(30%) translateY(-30%) scale(0.5) translateZ(0px)",
          }}
        />
        <div
          className="row-span-2 relative z-10"
          style={{
            backgroundImage: 'url("https://www.digitalstudioindia.com/cloud/2021/11/12/Film-Production-Australia-3.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            transform:
              "translateX(-25%) translateY(25%) scale(0.5) translateZ(0px)",
          }}
        />
        <div
          className="relative z-10"
          style={{
            backgroundImage: 'url("https://goingbionic.com/wp-content/uploads/2017/03/film-production-on-set.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            transform:
              "translateX(25%) translateY(-145%) scale(0.5) translateZ(0px)",
          }}
        />
        <div
          className="relative z-10"
          style={{
            backgroundImage: 'url("https://goingbionic.com/wp-content/uploads/2017/03/film-production-on-set.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            transform:
              "translateX(-25%) translateY(25%) scale(0.5) translateZ(0px)",
          }}
        />
        <div
          className="relative z-10"
          style={{
            backgroundImage: 'url("https://goingbionic.com/wp-content/uploads/2017/03/film-production-on-set.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            transform:
              "translateX(25%) translateY(25%) scale(0.5) translateZ(0px)",
          }}
        />
        <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
        <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
      </div>
    </section>
  );
}

export default NewHero