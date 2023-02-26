function Watchmenu() {
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
        <div id="storemenu_subs" style={{ width: "160px" }}>
          <p>Shop</p>
          <h3>Apple Watch Ultra</h3>
          <h3>Apple Watch Series 8</h3>
          <h3>Apple Watch SE</h3>
          <h3>Apple Watch Nike</h3>
          <h5>Compare Watch</h5>
          <h5>Why Apple Watch</h5>
          <h5>Explore All Apple Watch</h5>
        </div>
        <div style={{ width: "150px" }}>
          <p>Shop Apple Watch</p>
          <h3>Apple Watch Straps</h3>
          <h3>Apple Watch Accessories</h3>
          <h3>Ways to Buy</h3>
        </div>
        <div style={{ width: "150px" }}>
          <p>More from Watch</p>
          <h3>Apple Watch Support</h3>
          <h3>watchOS 9</h3>
        </div>
      </div>
    </div>
  );
}

export default Watchmenu;
