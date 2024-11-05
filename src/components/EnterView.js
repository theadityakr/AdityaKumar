import { useState, useEffect } from 'react';
import '../styles/EnterView.css';

const EnterView = () => {
    // const [loading, setLoading] = useState(1);

    // useEffect(() => {
    //     setTimeout(() => {
    //         const interval = setInterval(() => {
    //             setLoading(prevLoading => Math.max(prevLoading - 0.2, 0));
    //         }, 100);
    //         return () => clearInterval(interval);
    //     }, 2500);


    // }, []);

    return (
        <div id="EnterView">
            <div className="_t1">Aditya Kumar</div>
            <div className="_t2">Portfolio</div>
        </div>
    );
};

export default EnterView;
