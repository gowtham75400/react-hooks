import { useEffect, useState, useRef } from "react";

const Effect = () => {
    const [count, setCount] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setCount((curr) => curr + 1);
        }, 3000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timerRef.current);
    }, [count]); // Empty dependency array means this effect runs only once

    console.log("Effect running");

    return (
        <div>
            Seconds after 3 sec: {count}
        </div>
    );
};

export default Effect;
