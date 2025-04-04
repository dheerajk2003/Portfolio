export function Projects() {
    return (
        <div id="projects" className="w-full h-screen pt-8 md:pt-14 relative">
            <h2 id="projhead" className="content w-32 mx-auto absolute -translate-x-1/2 left-1/2 text-4xl font-base border-b border-white border-1 content">Projects</h2>
            <div className="w-full h-full p-5 py-16 md:p-20 flex flex-col md:flex-row justify-around items-center gap-10">
                <div className="w-full md:w-1/3 h-5/6 border border-1 border-white rounded-2xl overflow-hidden transition-transform card hover:shadow-md hover:shadow-[#7F27FF]">
                    <img className="hidden md:block w-full" src="./nobuff.png" alt="" />
                    <div className="h-full md:h-1/2 px-5 flex flex-col justify-between gap-5 ">
                        <div>
                            <h3 className="text-2xl font-medium my-3">No-Buff</h3>
                            <p className="inline" >A video streaming site with dynamic loading, different video quality and concurrency. It
                            is build with Java, Spring boot, webflux and opencv</p>
                            <a href="https://github.com/dheerajk2003/No-Buff" className="ml-1 inline text-blue-300">More</a>
                        </div>
                        <div className="h-10 mb-4 md:mb-1 lg:mb-14 flex flex-row justify-around">
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/java.svg"/></div>
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/Spring_Boot.svg"/></div>
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/react.svg"/></div>
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/mysql.svg"/></div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 h-5/6 border border-1 border-white rounded-2xl overflow-hidden transition-transform card hover:shadow-md hover:shadow-[#7F27FF]">
                    <img className="hidden md:block w-full" src="./dontcol.png" alt="" />
                    <div className="h-full md:h-1/2 px-5 flex flex-col justify-between gap-5">
                        <div>
                            <h3 className="text-2xl font-medium my-3">Don't Collide</h3>
                            <p className="inline">It is a online 2d multiplayer shooting game made with Unity, NodeJs and WebSockets.</p>
                            <a href="https://github.com/dheerajk2003/DontCollide.git" className="ml-1 inline text-blue-300">More</a>
                        </div>
                        <div className="h-10 mb-4 md:mb-1 lg:mb-14 flex flex-row justify-around">
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/unity.svg"/></div>
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/node.svg"/></div>
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/websocket.svg"/></div>
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/c-sharp.svg"/></div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 h-5/6 border border-1 border-white rounded-2xl overflow-hidden transition-transform card hover:shadow-md hover:shadow-[#7F27FF]">
                    <img className="hidden md:block w-full" src="./travellsy.jpg" alt="" />
                    <div className="h-full md:h-1/2 px-5 flex flex-col justify-between gap-5">
                        <div>
                            <h3 className="text-2xl font-medium my-3">Travelsy</h3>
                            <p className="inline" >Travelsy is a site where one can share and explore traveling places.</p>
                            <a href="https://github.com/dheerajk2003/Travelsy" className="ml-1 inline text-blue-300">More</a>
                        </div>
                        <div className="h-10 mb-4 md:mb-1 lg:mb-14 flex flex-row justify-around">
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/c-sharp.svg"/></div>
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/asp.svg"/></div>
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/html.svg"/></div>
                            <div className="w-10 h-10 lg:w-14 lg:h-14"><img className=" " src="./svgs/sql.svg"/></div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 text-blue-300" href="https://github.com/dheerajk2003">see other projects.</a>
        </div>
    )
}