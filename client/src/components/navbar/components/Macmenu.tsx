function Macmenu() {
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
          <h3>MacBook Air</h3>
          <h3>MacBook Pro</h3>
          <h3>iMac</h3>
          <h3>Mac mini</h3>
          <h3>Mac Studio</h3>
          <h3>Mac Pro</h3>
          <h3>Displays</h3>
          <h5>Compare Mac</h5>
          <h5>Why Mac</h5>
          <h5>Explore All Mac</h5>
        </div>
        <div style={{ width: "150px" }}>
          <p>Shop Mac</p>
          <h3>Mac Accessories</h3>
          <h3>Ways to Buy</h3>
        </div>
        <div style={{ width: "150px" }}>
          <p>More from Mac</p>
          <h3>Mac Support</h3>
          <h3>macOS Ventura</h3>
          <h3>Continuity</h3>
          <h3>iCloud</h3>
          <h3>Mac for Business</h3>
          <h3>Education</h3>
        </div>
      </div>
    </div>
  );
}

export default Macmenu;
