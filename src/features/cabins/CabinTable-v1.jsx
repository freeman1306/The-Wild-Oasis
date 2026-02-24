import styled from "styled-components";
import {useQuery} from "@tanstack/react-query";
import {getCabins} from "../../services/apiCabins.js";
import Spinner from "../../ui/Spinner.jsx";
import CabinRow from "../cabins/CabinRow.jsx"
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";
import {useCabins} from "./useCabins.js";
import {useSearchParams} from "react-router-dom";
import Empty from "../../ui/Empty.jsx";


function CabinTable() {
	const {isLoading, cabins} = useCabins()
	const [searchParams] = useSearchParams()

	if(isLoading) return <Spinner/>
	if(!cabins.length) {
		return <Empty resourceName="cabins" />;
	}

	const filterValue = searchParams.get("discount") || 'all'

	let filteredCabins
	if(filterValue === "all") filteredCabins = cabins
	if(filterValue === 'no-discount') filteredCabins = cabins.filter(cabin => cabin.discount === 0)
	if(filterValue === 'with-discount') filteredCabins = cabins.filter(cabin => cabin.discount > 0)

	const sortBy = searchParams.get('sortBy') || 'startDate-asc'
	const [field, direction] = sortBy.split('-')
	const modifier = direction === 'asc' ? 1 : -1
	const sortedCabins = filteredCabins.sort((a,b)=> (a[field] - b[field]) * modifier)

	return (
		<Menus>
		<Table columns={'0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'}>
			<Table.Header >
				<div></div>
				<div>Cabin</div>
				<div>Capacity</div>
				<div>Price</div>
				<div>Discount</div>
				<div></div>
			</Table.Header>
			<Table.Body
				// data={cabins}
				data={sortedCabins}
				render={(cabin) => <CabinRow cabin={cabin} key={cabin.id}/>}/>
			{cabins.map()}
		</Table>
		</Menus>
	)
}

export default CabinTable

