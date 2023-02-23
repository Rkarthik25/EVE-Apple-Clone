function TV_Homemenu() {
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
          <h3>Apple TV 4K</h3>
          <h3>HomePod</h3>
          <h3>HomePod mini</h3>
          <h3>AirPods Max</h3>
          <h5>Explore TV & Home</h5>
        </div>
        <div style={{ width: "150px" }}>
          <p>Shop TV & Home</p>
          <h3>Shop Apple TV 4K</h3>
          <h3>Shop HomePod</h3>
          <h3>Shop HomePod mini</h3>
          <h3>Shop Siri Remote</h3>
          <h3>TV & Home Accessories</h3>
        </div>
        <div style={{ width: "150px" }}>
          <p>More from TV & Home</p>
          <h3>Apple TV Support</h3>
          <h3>HomePod Support</h3>
          <h3>Apple TV App</h3>
          <h3>Apple TV+</h3>
          <h3>Home App</h3>
          <h3>Apple Music</h3>
          <h3>Siri</h3>
          <h3>AirPlay</h3>
        </div>
      </div>
    </div>
  );
}

export default TV_Homemenu;
