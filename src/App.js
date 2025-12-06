import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="container">
      <div className="title">🚀 DevOps Deployment Successful!</div>
      <div className="subtitle">React App Running on Docker + Jenkins + AWS</div>

      <div className="success-box">
        End-to-End CI/CD Implemented Successfully ✔  
      </div>

      <Welcome />
    </div>
  );
}

export default App;
