import { RangeSelector } from "./range-selector";
import { Tooltip } from "react-tooltip";

export function Dashboard() {
	return (
		<>
			<RangeSelector />
			<Tooltip id="my-tooltip" />
		</>
	);
}
