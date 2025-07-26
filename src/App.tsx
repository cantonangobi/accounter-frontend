import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import Accounts from "./Components/Accounts";
import Header from "./Components/Header";

function App() {
	return (
		<>
			<Header />
			<Accounts />
		</>
	);
}

export default App;
