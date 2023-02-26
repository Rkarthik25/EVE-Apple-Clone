function Airpodsmenu() {
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
          <h3>AirPods 2nd generation</h3>
          <h3>AirPods 3rd generation</h3>
          <h3>AirPods Pro 2nd generation</h3>
          <h3>AirPods Max</h3>
          <h5>Compare AirPods</h5>
          <h5>Explore All AirPods</h5>
        </div>
        <div style={{ width: "150px" }}>
          <p>Shop AirPods</p>
          <h3>AirPods Accessories</h3>
          <h3>Ways to Buy</h3>
        </div>
        <div style={{ width: "150px" }}>
          <p>More from AirPods</p>
          <h3>AirPods Support</h3>
          <h3>Apple Music</h3>
        </div>
      </div>
    </div>
  );
}

export default Airpodsmenu;
