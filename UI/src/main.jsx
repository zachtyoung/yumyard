import React from "react"
import ReactDOM from "react-dom/client"
import PageRouter from "./routes/index.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<PageRouter />
	</React.StrictMode>
)
