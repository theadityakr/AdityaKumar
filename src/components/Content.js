import Home from '../pages/Home';
import Education from '../pages/Education';
import Projects from '../pages/Projects';
import ProjectsPersonal from '../pages/ProjectsPersonal';
// import Info from '../pages/Info';
import Contact from '../pages/Contact';
import {React, useState} from 'react';
import '../styles/Content.css';


const Content = ({ selectedComponent }) => {
    const [scrollY, setScrollY] = useState(0);
    const components = [<Home />, <Education />, <Projects />, <ProjectsPersonal/>, <Contact />];

  
    const minScrollY = 0; 
    const maxScrollY = 100; 

    const handleScroll = (event) => {
        const deltaY = event.deltaY;
        // setScrollY((prevScrollY) => {
        //     const newScrollY = prevScrollY + deltaY;
        //     return Math.max(minScrollY, Math.min(newScrollY, maxScrollY));
        // });
    };

    return (
        <main className="content" id="Content" data-scroll="area">
            <div
                className="content_inner"
                data-scroll="target"
                onWheel={handleScroll}
                style={{ transform: `translate3d(0px, ${-scrollY}px, 0px)` }}
            >
                {components[selectedComponent]}
            </div>
        </main>
    );
};

export default Content;