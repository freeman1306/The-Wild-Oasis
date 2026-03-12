import styled, {css} from "styled-components";

const Heading = styled.h1`
${({as}) => as === "h1" &&
	css`
		font-size: 30px;
		font-weight: bold;
	`}

${({as}) => as === "h1" &&
css`
		font-size: 30px;
		font-weight: bold;
	`}

${({as}) => as === "h1" &&
		css`
		font-size: 30px;
		font-weight: bold;
	`}
	
	${(props)=>props.as === "h4" && 
	css`
		font-size: 3rem;
	font-weight: 600;
		text-align: center;
`}
	
	line-height: 1.4;
`

export default Heading;