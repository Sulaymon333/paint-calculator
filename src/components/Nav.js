const Nav = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-4 bg-yellow-500">
            <h1 className="text-3xl font-bold">Tikulator</h1>
            <ul className="flex space-x-6 text-xl">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="about">About</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
