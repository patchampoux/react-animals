import {useState} from "react";

const App = () => {
	let [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	}

	return (
		<div>
			<button onClick={handleClick}>Add Animal</button>
			<div>Number of animals to show: {count}</div>
		</div>
	);
}

export default App;
