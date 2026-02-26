import {useQuery} from "@tanstack/react-query";
import {getBookings} from "../../services/apiBookings.js";
import {useSearchParams} from "react-router-dom";

export function useBookings() {
	const [searchParams] = useSearchParams()

	const filterValue = searchParams.get('status');
	const filter = !filterValue || filterValue === "all"
	? null : {field: 'status', value: filterValue}

	const sortByRaw = searchParams.get('sortBy') || 'startDate-desc'
const [field, direction] = sortByRaw.split('-')
	const sortBy = {field, direction}
	// const pageCount = Math.ceil(count/PAGE_SIZE)
 // if(page < pageCount)
	const {isLoading, data: bookings, error} = useQuery({
		queryKey: ["bookings"],
		queryFn: ()=>getBookings({filter})
	})
	console.log(bookings)
	return {bookings, isLoading, error}
}