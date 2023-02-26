function Storemenu() {
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
        <div id="storemenu_subs" style={{ width: "200px" }}>
          <p>Shop</p>
          <h3>Shop Latest</h3>
          <h3>Mac</h3>
          <h3>iPad</h3>
          <h3>iPhone</h3>
          <h3>Apple Watch</h3>
          <h3>Accessories</h3>
        </div>
        <div style={{ width: "150px" }}>
          <p>Quick Links</p>
          <h3>Order Status</h3>
          <h3>Ways to Buy</h3>
        </div>
        <div style={{ width: "150px" }}>
          <p>Shop Special Stores</p>
          <h3>Education</h3>
        </div>
      </div>
    </div>
  );
}

export default Storemenu;
