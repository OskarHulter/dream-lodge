import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export function RangeSelector() {
	const [startDate, setStartDate] = React.useState(new Date());
	return (
		<DatePicker
			selected={startDate}
			onChange={(date) => setStartDate(date ?? new Date())}
		/>
	);
}
