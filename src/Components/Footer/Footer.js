import React from 'react';

const Footer = () => {
    let footerStyle = {
        width : "100%",
        marginTop: "40px",
        position: "fixed",
        bottom: "0",
    }

    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center my-0 p-2">
                Copyright &copy; MyTodosList/Ambar.com
            </p>
        </footer>
    )
}

export default Footer;
