import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/card.js";



export const Home = () => {

	const {actions, store} = useContext(Context)
	return (
		<div className="text-center mt-5">
			{
				store.contacts.map((item,index) =>{
					return <ContactCard key={index} name= {item.name} />
				})
			}
		</div>
	);
};	
