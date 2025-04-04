export function Skills() {
    return (
        <div id="skills" className="w-full h-screen pt-14">
            <h2 className="w-20 mx-auto absolute -translate-x-1/2 left-1/2 text-4xl font-base border-b border-white border-1 content">Skills</h2>
            <div className="w-full h-full m-x-auto pt-28 p-5 md:p-24 md:pt-32 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-28">
                <div className="w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv shaBox"><img className="scale-75" src="./svgs/java.svg" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">Java</h1>
                    </div>
                </div>
                <div className="w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv shaBox"><img className="scale-75" src="./svgs/python.svg" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">Python</h1>
                    </div>
                </div>
                <div className="w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv shaBox"><img className="rounded-xl scale-75" src="./svgs/js.svg" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">JavaScript</h1>
                    </div>
                </div>
                <div className="w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv shaBox"><img className="scale-75" src="./svgs/sql.svg" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">SQL</h1>
                    </div>
                </div>
                <div className="w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv shaBox"><img className="scale-75" src="./svgs/react.svg" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">React</h1>
                    </div>
                </div>
                <div className="w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] rounded-3xl border border-1 border-white overflow-hidden relative innerdiv shaBox"><img className="scale-75" src="./svgs/Spring_Boot.svg" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">Spring Boot</h1>
                    </div>
                </div>
                <div className="w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv shaBox"><img className="scale-75" src="./svgs/node.svg" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">Node js</h1>
                    </div>
                </div>
                <div className="w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv shaBox"><img className="scale-75" src="./svgs/tailwind.svg" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">Tailwind</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}