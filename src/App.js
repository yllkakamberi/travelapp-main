import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Call backend API
        fetch("http://localhost:5001/api/test")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.error("Error fetching:", err));
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>TravelApp Frontend</h1>
            <p>Backend says: {message || "Loading..."}</p>
        </div>
    );
}

export default App;
