import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light my-3 d-flex justify-content-center">
            <div className="ml-auto">
                <Link to="/create">
                    <button
                        onClick={() => actions.clearContact()} // Llama a clearContact correctamente
                        className="btn btn-success">
                        Add new contact
                    </button>
                </Link>
            </div>
        </nav>
    );
};
