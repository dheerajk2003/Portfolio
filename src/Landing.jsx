import { Home } from "./pages/Home";
import { Links } from "./pages/Links";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

export function Landing(){
    return (
        <div className="w-full h-full">
            <Home />
            <Projects />
            <Skills />
            <Links />
        </div>
    )
}