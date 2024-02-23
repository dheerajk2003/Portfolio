import { Nav } from "./Nav";

export function Home(){
    return (
        <div id="home" className="w-full h-screen">
            <Nav />
            <div className="h-full w-full p-14 flex justify-around items-center">
                <div className="mt-5 mr-10 border border-1 border-white rounded-2xl p-10 py-14">
                    <h1 className="text-6xl font-bold mb-2">Hi,</h1>
                    <h1 className="text-6xl font-bold mb-2">I am' Dheeraj,</h1>
                    <div className="mt-6 mb-2">
                        <p className="text-lg">Full Stack Web Developer</p>
                        <p className="text-lg">Currently Persuing</p>
                        <p className="text-lg">Bacherlor of Computer Applications</p>
                    </div>
                </div>
                <div className="h-80 w-80 ml-10 border border-3 border-white rounded-full overflow-hidden">
                    <img className="object-fill" src="./profile.jpg" alt="profile" />
                </div>
            </div>
        </div>
    )
}