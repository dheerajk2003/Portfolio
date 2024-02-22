import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

export function Landing(){
    return (
        <div className="w-full h-full">
            <Home />
            <Projects />
        </div>
    )
}