const Card = ({ backgroundColor, title, item1, item2 }) => {
    return (
        <div
            className={`${backgroundColor} md:w-72 rounded-md overflow-hidden shadow-lg p-5 flex-grow flex-shrink mb-8 md:mb-0`}
        >
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <p className="text-md font-medium">{item1}</p>
            <p className="text-md font-medium">{item2}</p>
        </div>
    );
};

export default Card;
