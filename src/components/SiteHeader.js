import { useState } from "react";
import '../styles/SiteHeader.css';

const SiteHeader = ({ setSelectedComponent }) => {
    const [selectedItem, setSelectedItem] = useState(0);

    const handleItemClick = (index) => {
        setSelectedItem(index);
        setSelectedComponent(index);        
    };

    return (
        <header className="siteHeader" id="SiteHeader">
            <h1 className="siteHeader_title">Aditya Kumar</h1>
            <p className="siteHeader_label">Coder &amp; Developer</p>
            <nav className="siteHeader_nav">
                <ol>
                    <li className={selectedItem === 0 ? 'is-selected' : ''} onClick={() => handleItemClick(0)}>
                        <div className="_dot">●</div> 
                        <a className="_text" >Home</a>
                    </li>

                    <li className={selectedItem === 1 ? 'is-selected' : ''} onClick={() => handleItemClick(1)}>
                        <div className="_dot">●</div>
                        <a className="_text" >Education</a>
                    </li>

                    <li className={selectedItem === 2 ? 'is-selected' : ''} onClick={() => handleItemClick(2)}>
                        <div className="_dot">●</div>
                        <a className="_text" >Projects</a>
                    </li>

                    <li className={selectedItem === 3 ? 'is-selected' : ''} onClick={() => handleItemClick(3)}>
                        <div className="_dot">●</div> 
                        <a className="_text" >Info</a>
                    </li>

                    <li className={selectedItem === 4 ? 'is-selected' : ''} onClick={() => handleItemClick(4)}>
                        <div className="_dot">●</div>
                        <a className="_text" >Contact</a>
                    </li>
                    
                    
                </ol>
            </nav>
        </header>
    );
}

export default SiteHeader;
