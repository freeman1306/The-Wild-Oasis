import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";

const H1 = styled.h1`
font-size: 30px;
	font-weight: bold;
`

const Button = styled.button`
font-size: 1.4rem;
	padding: 1.2rem 1.6rem;
	border: none;
	font-weight: 500;
	border-radius: 7px;
	background-color: purple;
	color: white;
`

export default function App() {
	return (
		<div>
			<GlobalStyles/>
			<H1>The wild oasis</H1>
			<Button>Check in</Button>
		</div>
	)
}
