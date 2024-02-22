export function Nav(){
    return (
        <div className="w-full max-w-screen h-1/12 absolute top-0 left-0 pt-5 px-3 flex justify-between items-center"> 
            <h1 className="text-xl font-semibold border border-1 border-white p-1 px-4 rounded-md">Portfolio</h1>
            <div className="w-2/5 h-full flex justify-around items-center border border-1 border-white p-2 rounded-md">
                <a className="text-sm font-light" href="#home">Home</a>
                <a className="text-sm font-light" href="#projects">Projects</a>
                <a className="text-sm font-light" href="#skills">Skills</a>
                <a className="text-sm font-light" href="#links">Links</a>
            </div>
            <a className="text-sm font-medium border border-1 border-white p-2 px-4 rounded-md" href="dheerajkhatri2003@gmail.com">Contact</a>
        </div>
    )
}