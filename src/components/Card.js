import React from 'react';

const Card = ({ backgroundColor, title, item1, item2, item3, item4 }) => {
    return (
        <div className={`${backgroundColor} max-w-sm rounded-md overflow-hidden shadow-lg p-5 mb-4`}>
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <p className="text-md font-medium">{item1}</p>
            <p className="text-md font-medium">{item2}</p>
            <p className="text-md font-medium">{item3}</p>
            <p className="text-md font-medium">{item4}</p>
        </div>
    );
};

export default Card;
