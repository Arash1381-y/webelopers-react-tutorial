function Navbar() {
    return (
        <nav className="navbar">
            <h1>My TODO</h1>
            <div className="links">
                <a href="./home">Home</a>
                <a href="./aboutus" style={{backgroundColor: 'white', padding: '10px', borderRadius: '10px'}}>About
                    Us</a>
            </div>
        </nav>
    )
}

export default Navbar;
