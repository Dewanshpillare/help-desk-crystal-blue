const HelpSupport = () => {
  console.log("HelpSupport component is rendering");
  
  try {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "white", padding: "20px" }}>
        <h1 style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}>
          Help & Support Page
        </h1>
        <p style={{ color: "black", marginTop: "20px" }}>
          This page is now rendering successfully!
        </p>
      </div>
    );
  } catch (error) {
    console.error("Error in HelpSupport component:", error);
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "red", color: "white", padding: "20px" }}>
        Error: {String(error)}
      </div>
    );
  }
};

export default HelpSupport;