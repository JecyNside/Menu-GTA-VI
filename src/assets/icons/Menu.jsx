function Menu() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        flexDirection: "column",
        gap: ".5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* TOP */}
      <div
        className="menu-top"
        style={{
          top: "28px",
          left: "12px",
          width: "40px",
          height: "8px",
          background: "white",
          /* transform: "rotate(45deg)",
          transformOrigin: "center center", */
        }}
      />
      {/* BOTTOM */}
      <div
        className="menu-bottom"
        style={{
          top: "28px",
          left: "12px",
          width: "40px",
          height: "8px",
          background: "white",
          /* transform: "rotate(-45deg)",
          transformOrigin: "center center", */
        }}
      />
    </div>
  );
}

export default Menu;
