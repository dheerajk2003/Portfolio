export function Nav(){
    return (
        <div className="w-full max-w-screen absolute top-0 left-0 pt-5 px-3 flex justify-between items-center"> 
            <h1 className="text-2xl font-bold border border-1 border-white p-2 px-5 rounded-md">Portfolio</h1>
            <div className="w-2/5 h-full flex justify-around items-center border border-1 border-white p-3 rounded-md">
                <a className="text-base font-light" href="#home">Home</a>
                <a className="text-base font-light" href="#projects">Projects</a>
                <a className="text-base font-light" href="#skills">Skills</a>
                <a className="text-base font-light" href="#links">Links</a>
            </div>
            <a className="text-base font-medium border border-1 border-white p-3 px-5 rounded-md" href="dheerajkhatri2003@gmail.com">Contact</a>
        </div>
    )
}