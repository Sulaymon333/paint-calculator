const Nav = () => {
    return (
        <nav className="flex justify-between items-center md:px-10 px-5 py-4 bg-yellow-500">
            <h1 className="md:text-3xl font-bold italic text-xl">Tikulator</h1>
            <ul className="flex space-x-6 md:text-xl text-sm">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Products</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
