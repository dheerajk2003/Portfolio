import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Links } from "./pages/Links";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

function cursorMove() {
    var myCur = document.getElementById("cursor");
    document.addEventListener("mousemove", (event) => {
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        myCur.style.left = mouseX - 10 + "px";
        myCur.style.top = mouseY - 10 + "px";
    })
}

function cursorEffect(){
    var myCur = document.getElementById("cursor");
    var contents = document.querySelectorAll(".content");
    var content = Array.from(contents);
    for (var i = 0; i < content.length; i++) {
        var element = content[i];
        element.addEventListener("mouseenter", (event) => {
            myCur.classList.add("grow");
            console.log("entered");
        })
        element.addEventListener("mouseleave", (event) => {
            myCur.classList.remove("grow");
            console.log("leaved");
        })
    }
}

export function Landing() {
    useEffect(() => {
        cursorMove();
        cursorEffect();
    }, []);
    return (
        <div className="w-full h-full">
            <div id="cursor">

            </div>
            <Home />
            <Projects />
            <Skills />
            <Links />
        </div>
    )
}