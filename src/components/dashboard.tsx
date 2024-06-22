import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { RangeSelector } from "./range-selector";

export function Dashboard() {
	return (
		<Tabs>
			<TabList>
				<Tab>Title 1</Tab>
				<Tab>Title 2</Tab>
			</TabList>

			<TabPanel>
				<h2>Any content 1</h2>
				<RangeSelector />
			</TabPanel>
			<TabPanel>
				<h2>Any content 2</h2>
				<RangeSelector />
			</TabPanel>
		</Tabs>
	);
}
