import {useMutation} from "@tanstack/react-query";
import {signup as signupApi} from "../../services/apiAuth.js";
import toast from "react-hot-toast";


export function useSignup(){
	const {mutate: signup, isLoading} = useMutation({
		mutationFn: signupApi,
onSuccess: (user)=> {
	console.log(user)
	toast.success('Account saccessfully created. Please verify the new account from users\'s emaul address')
}
	})

	return {signup, isLoading}
}