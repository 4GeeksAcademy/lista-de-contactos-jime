import React from "react";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const ContactCard = (props) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className="container d-flex justify-content-center">
            <div className="card mb-12 w-50 bg-light" >
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={"https://i.pravatar.cc/200" + "?u=" + props.name} className="img-fluid rounded-circle p-3" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body text-start">
                            <h5 className="card-title mb-3">{props.name}</h5>
                            <p className="card-text text-secondary"><i className="fa-solid fa-location-dot"></i> {props.address}</p>
                            <p className="card-text text-secondary"><i className="fa-solid fa-phone"></i> {props.phone}</p>
                            <p className="card-text text-secondary"><i className="fa-solid fa-envelope"></i> {props.email}</p>
                        </div>
                    </div>

                    {/* iconos editar y borrar */}
                    <div className="col-md-2 d-flex justify-content-center align-items-start gap-3 p-2" >
                        <button className="btn" onClick={() => navigate(`/edit/${props.id}`)}>
                            <i className="fa-solid fa-pencil"></i>
                        </button>
                        <button className="btn" onClick={async () => {
                            await actions.deleteContact(props.id)
                            navigate("/") /*Se puede poner -1 sin comillas */
                        }}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}