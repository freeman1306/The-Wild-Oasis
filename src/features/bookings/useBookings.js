import {useQuery} from "@tanstack/react-query";
import {getCabins} from "../../services/apiCabins.js";
import {getBookings} from "../../services/apiBookings.js";

export function useBookings() {
	const {isLoading, data: bookings, error} = useQuery({
		queryKey: ["bookings"],
		queryFn: getBookings
	})
	console.log(bookings)
	return {bookings, isLoading, error}
}