import ButtonIcon from "../../ui/ButtonIcon.jsx";
import {HiArrowRightOnRectangle} from "react-icons/hi2";
import {useLogout} from "./useLogout.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";


function Logout() {
	const {logout, isLOading} = useLogout()
	return <ButtonIcon disabled={isLOading} onClick={logout}>
		{!isLOading ? <HiArrowRightOnRectangle/> : <SpinnerMini/>}
	</ButtonIcon>
}

export default Logout
