function Accessoriesmenu() {
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
            <h3>Mac</h3>
            <h3>iPad</h3>
            <h3>iPhone</h3>
            <h3>Apple Watch</h3>
            <h3>AirPods</h3>
            <h3>TV & Home</h3>
            <h3>Apple Books</h3>
            <h5>Shop All Accessories</h5>
          </div>
          <div style={{ width: "150px" }}>
            <p>Explore Accessories</p>
            <h3>Made by Apple</h3>
            <h3>AirTag</h3>
          </div>
        </div>
      </div>
    );
  }
  
  export default Accessoriesmenu;
  