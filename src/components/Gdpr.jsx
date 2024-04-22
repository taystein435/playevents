import { useState } from "react";

function Gdpr() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
   
  };

  const handleDecline = () => {
    setIsVisible(false);

  };

  return (
    <footer style={{ 
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: 5,
        width: "100%",
        backgroundColor: "#f8f9fa",
        padding: "10px",
        borderTop: "1px solid #ccc",
        textAlign: "center"
      }}>
        <div>
        Thanks for visiting Play Events. By using the site, you agree to our privacy policy and our use of cookies..
          <button  style={{ backgroundColor: 'black', color: 'white' }}onClick={handleAccept}>Yes</button>
          <button  style={{ marginLeft:10,backgroundColor: 'white', color: 'black' }} onClick={handleDecline}>No</button>
        </div>
      </footer>
  
  );
}

export default Gdpr;
