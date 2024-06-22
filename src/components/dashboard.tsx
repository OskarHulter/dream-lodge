import { RangeSelector } from "./range-selector";
import { Tooltip } from "react-tooltip";
import { Whiteboard } from "./inputs/whiteboard";

export function Dashboard() {
	return (
		<>
			<RangeSelector />
			<Tooltip id="my-tooltip" />
			<Whiteboard />
		</>
	);
}
