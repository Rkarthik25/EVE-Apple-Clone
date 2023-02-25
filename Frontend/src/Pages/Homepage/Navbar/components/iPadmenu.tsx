function IPadmenu() {
  return (
    <div
      id="storemenu_subs"
      style={{
        width: "1600px",
        color: "white",
        height: "auto",
        backgroundColor: "rgb(53, 50, 50)",
      }}
    >
      <div
        style={{
          width: "700px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div id="storemenu_subs" style={{ width: "150px" }}>
          <p>Shop</p>
          <h3>iPad Pro</h3>
          <h3>iPad Air</h3>
          <h3>iPad</h3>
          <h3>iPad mini</h3>
          <h3>Apple Pencil</h3>
          <h3>Keyboards</h3>
          <h3>Displays</h3>
          <h5>Compare iPad</h5>
          <h5>Why iPad</h5>
          <h5>Explore All iPad</h5>
        </div>
        <div style={{ width: "150px" }}>
          <p>Shop iPad</p>
          <h3>iPad Accessories</h3>
          <h3>Ways to Buy</h3>
        </div>
        <div style={{ width: "150px" }}>
          <p>More from iPad</p>
          <h3>iPad Support</h3>
          <h3>iPadOS 16</h3>
          <h3>iCloud</h3>
          <h3>Education</h3>
        </div>
      </div>
    </div>
  );
}

export default IPadmenu;
