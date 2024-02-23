export function Skills() {
    return (
        <div id="skills" className="w-full h-screen pt-14">
            <h2 className="w-20 mx-auto absolute -translate-x-1/2 left-1/2 text-4xl font-base border-b border-white border-1 ">Skills</h2>
            <div className="w-full h-full m-x-auto p-24 pt-32 grid grid-cols-4 gap-28">
                <div className="w-full h-full rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv"><img className="scale-75" src="./svgs/node.svg" alt="" />
                <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">Node js</h1>
                        <p className="text-slate-700" >Intermediate</p>
                    </div>
                </div>
                <div className="w-full h-full rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv"><img className="scale-75" src="./svgs/react.svg" alt="" />
                <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">React</h1>
                        <p className="text-slate-700" >Intermediate</p>
                    </div>
                </div>
                <div className="w-full h-full rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv"><img className="scale-75" src="./svgs/sql.svg" alt="" />
                <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">SQL</h1>
                        <p className="text-slate-700" >Intermediate</p>
                    </div>
                </div>
                <div className="w-full h-full rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv"><img className="scale-75" src="./svgs/c-sharp.svg" alt="" />
                <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">C#</h1>
                        <p className="text-slate-700" >Intermediate</p>
                    </div>
                </div>
                <div className="w-full h-full rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv"><img className="scale-75" src="./svgs/java.svg" alt="" />
                <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">Java</h1>
                        <p className="text-slate-700" >Beginner</p>
                    </div>
                </div>
                <div className="w-full h-full rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv"><img className="scale-75" src="./svgs/tailwind.svg" alt="" />
                <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">Tailwind</h1>
                        <p className="text-slate-700" >Intermediate</p>
                    </div>
                </div>
                <div className="w-full h-full rounded-3xl border border-1 border-white    overflow-hidden relative innerdiv"><img className="rounded-xl scale-75" src="./svgs/js.svg" alt="" />
                <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">JavaScript</h1>
                        <p className="text-slate-700" >Advanced</p>
                    </div>
                </div>
                <div className="w-full h-full  rounded-3xl border border-1 border-white overflow-hidden relative innerdiv"><img className="scale-75" src="./svgs/css.svg" alt="" />
                    <div className="absolute w-full h-full top-0 left-0 bg-slate-200 flex flex-col justify-center items-center child translate-y-full transition-transform">
                        <h1 className=" text-2xl font-bold text-black m-1">CSS</h1>
                        <p className="text-slate-700" >Advanced</p>
                    </div>
                </div>
            </div>
        </div>
    )
}