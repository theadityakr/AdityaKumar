import Home from '../pages/Home';
import Education from '../pages/Education';
import Projects from '../pages/Projects';
import Info from '../pages/Info';
import Contact from '../pages/Contact';
import {React, useState} from 'react';
import '../styles/Content.css';

const Content = ({selectedComponent}) =>{
    const [scrollY, setScrollY] = useState(0);
    const components = [<Home/>,<Education/>, <Projects/>, <Info/>, <Contact/>];

    
    const handleScroll = (event) => {
        const deltaY = event.deltaY; 
        setScrollY(prevScrollY => prevScrollY + deltaY); 
    };

    
    return (
        
        <main className="content" id="Content" data-scroll="area">
                <div className="content_inner" data-scroll="target"  onWheel={handleScroll} style={{ transform: `translate3d(0px, ${-scrollY}px, 0px)` }}>
                    {components[selectedComponent]}
                </div>
           
        </main>
    );


}

export default Content;