import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";



export const Home = () => {

	const { actions, store } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
		</div>
	);
};	
