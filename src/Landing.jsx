import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Resume } from "./pages/Resume";
import { Container } from "./pages/Container";

function cursorMove() {
    var myCur = document.getElementById("cursor");
    document.addEventListener("mousemove", (event) => {
        var mouseX = event.pageX;
        var mouseY = event.pageY;
        myCur.style.left = mouseX - 10 + "px";
        myCur.style.top = mouseY - 10 + "px";

        var boxes = document.querySelectorAll(".shaBox");
        var box = Array.from(boxes);
        var lightX = mouseX;
        var lightY = mouseY;
        for (var i = 0; i < box.length; i++) {

            var element = box[i];
            var elementX = element.offsetLeft + element.offsetWidth / 2;
            var elementY = element.offsetTop + (element.offsetHeight / 2);

            var angle = Math.atan2(elementY - lightY, elementX - lightX);
            var distance = Math.sqrt(Math.pow(elementX - lightX, 2) + Math.pow(elementY - lightY, 2));

            var shadowX = -Math.cos(angle) * distance;
            var shadowY = -Math.sin(angle) * distance;

            //element.style.boxShadow = shadowX + "px " + shadowY + "px " + Math.abs(distance) + "px - " + distance + "px " + element.style.backgroundColor;

            element.style.boxShadow = `${-(shadowX/60)}px ${-(shadowY/60)}px ${Math.abs(distance/30)}px 0px #7F27FF`;
        }
    })
}

function cursorEffect() {
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
        const bw = document.getElementsByTagName("body")[0].offsetWidth;
        
        if(bw > 650){
            console.log(bw);
            cursorMove();
            cursorEffect();
        }
    }, []);
    return (
        <div className="w-full h-full">
            <div id="cursor">

            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Container />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}