export function Projects(){
    return(
        <div id="projects" className="w-full h-screen pt-14">
            <h2 className="w-32 mx-auto absolute -translate-x-1/2 left-1/2 text-4xl font-base border-b border-white border-1 ">Projects</h2>
            <div className="w-full h-full p-20 flex justify-around items-center">
                <div className="w-1/3 h-4/5 m-5 border border-1 border-white rounded-2xl overflow-hidden">
                    <img className="w-full grayscale" src="./recipe.jpg" alt="" />
                    <div className="px-5">
                        <h3 className="text-2xl font-medium my-3">Travelsy</h3>
                        <p>Travelsy is a site where one can share and explore traveling places.</p>
                    </div>
                </div>
                <div className="w-1/3 h-4/5 m-5 border border-1 border-white rounded-2xl overflow-hidden">
                    <img className="w-full grayscale" src="./kmm.jpg" alt="" />
                    <div className="px-5">
                        <h3 className="text-2xl font-medium my-3">KMM</h3>
                        <p>Kmm is a database of candidate who are looking for a special person in their life.</p>
                    </div>
                </div>
                <div className="w-1/3 h-4/5 m-5 border border-1 border-white rounded-2xl overflow-hidden">
                    <img className="w-full grayscale" src="./recipe.jpg" alt="" />
                    <div className="px-5">
                        <h3 className="text-2xl font-medium my-3">Recipied</h3>
                        <p>It is a site where you can search and find tasty recipes.</p>
                        <button className="bg-slate-500 p-3">hello</button>
                    </div>
                </div>
            </div>
        </div>
    )
}