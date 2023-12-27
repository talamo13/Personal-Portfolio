function Container({ children }) {
  const objectStyle = {
    background: "#002D62",
    padding: 0,
    color: "white",
    width: "100%",
    minHeight: "100vh",
  };

  return (
    <div className="container-fluid" style={objectStyle}>
      {children}
    </div>
  );
}

export default Container;
