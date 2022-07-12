import "./front.css"

export const Front = () => {
    return(
        <div>
            <nav className="navbar">
                <div className="nav_comp_img">
                    <img src="https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?p=facebook" alt=""/>
                </div>
                <div className="nav_comp">
                    <a href="Lectures">Lectures</a>
                </div>
                <div className="nav_comp">
                    <a href="Assignment">Assignment</a>
                </div>
                <div className="nav_comp">
                    <a href="Admin">Admin</a>
                </div>
                <div className="nav_comp">
                    <a href="Login">Login</a>
                </div>
            </nav>
        </div>
    )
}