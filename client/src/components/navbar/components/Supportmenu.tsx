function Supportmenu() {
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
            <h3>iPhone</h3>
            <h3>Mac</h3>
            <h3>iPad</h3>
            <h3>Apple Watch</h3>
            <h3>AirPods</h3>
            <h3>Music</h3>
            <h3>TV</h3>
            <h5>Explore Support</h5>
          </div>
          <div style={{ width: "150px" }}>
            <p>Get Help</p>
            <h3>Communities</h3>
            <h3>Check Coverage</h3>
            <h3>Repair</h3>
            <h3>Contact Us</h3>
          </div>
          <div style={{ width: "150px" }}>
            <p>Helpful Topics</p>
            <h3>Get AppleCare+</h3>
            <h3>Apple ID & Password</h3>
            <h3>Billing & Subscriptions</h3>
            <h3>Find My</h3>
            <h3>Accessibility</h3>
          </div>
        </div>
      </div>
    );
  }
  
  export default Supportmenu;
  