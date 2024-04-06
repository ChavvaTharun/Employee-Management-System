import React, { Fragment, useState, useEffect } from 'react';

function FooterComponent() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup function to clear interval
    }, []);

    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return (
        
                <div  >
                    <span className='text-white' id='footer'>
                        <p>{'. All Rights Reserved By @ Tharun Chavva.'} {month} {year} </p>
                    </span>
                </div>
            
    );
}

export default FooterComponent;
