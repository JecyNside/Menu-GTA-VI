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
      <div className="menu-top" />
      <div className="menu-bottom" />
    </div>
  );
}

export default Menu;
