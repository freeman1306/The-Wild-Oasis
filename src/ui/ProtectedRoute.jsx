import {useUser} from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const FullPage = styled.div`
height: 100vh;
	background-color: var(--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
`

function ProtectedRoute({children}) {
	const navigate = useNavigate();
	// 1. load auth user
	const {isLoading, isAuthenticated} = useUser()

	useEffect(function (){
		if(!isAuthenticated && !isLoading) navigate("/login");


	},[isAuthenticated, isLoading, navigate])


	//2. while loading show spinner
if(isLoading) return <FullPage><Spinner/></FullPage>
	//3.if there's no auth user, redirect to /login


  if (isAuthenticated)	return children
}

export default ProtectedRoute
