import "../iPhone14/iphone14pro.css";
const notch_video = require("./videos/notch_video.mp4");

function Iphone14Pro() {
  return (
    <>
      <div id="iphone_container">
        <div>
          <img
            style={{ marginTop: "5%", marginBottom: "3%", width: "60%" }}
            src="https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_logo__fyok6s0bvo2u_large.jpg"
            alt="error"
          />
          <img
            style={{ width: "80%" }}
            src="https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_iphone_14_pro__e0act2165xqq_large.jpg"
            alt="error"
          />
          <h1 id="gradient_text">
            A magical new way to interact with iPhone. A vital safety feature
            designed to save lives. An innovative 48MP camera for mind-blowing
            detail. All powered by the ultimate smartphone chip.
          </h1>
          <div id="mid_gradient">
            <h1>Pro.</h1>
            <h1>Beyond.</h1>
            <h2>iPhone 14 Pro and iPhone 14 Pro Max</h2>
            <button
              style={{
                border: "1px solid grey",
                color: "white",
                backgroundColor: "grey",
                borderRadius: "5px",
                paddingLeft: "1%",
                paddingRight: "1%",
                marginBottom: "1%",
              }}
            >
              With superfast 5G+
            </button>
            <h3>From ₹129900.00* before trade‑in*</h3>
          </div>

          <img
            src="https://www.apple.com/in/iphone-14-pro/images/overview/design/design_startframe__cffzwjeyro2q_large.jpg"
            alt="error"
          />
          <h1>Designed for durability.</h1>
          <h1>
            With Ceramic Shield, tougher than any smartphone glass. Water
            resistance.1 Surgical-grade stainless steel. 15.54 cm (6.1″) and
            17.00 cm (6.7″) display sizes.2 All in four Pro colours.
          </h1>
          <br />
          <hr />
          <div id="isecurity">
            <h4>
              iPhone is also designed from the ground up to protect your privacy
              and put you in control of what you share and who you share it with
            </h4>
          </div>
          <h1 style={{ marginTop: "5%", fontSize: "500%", marginBottom: "5%" }}>
            Meet The New Face of iPhone.
          </h1>
          <h1 style={{ marginBottom: "5%" }}>
            Introducing Dynamic Island, a truly Apple innovation that’s hardware
            and software — and something in between. It bubbles up music,
            FaceTime and so much more — all without taking you away from what
            you’re doing.
          </h1>
          <video width="100%" loop autoPlay muted>
            <source src={notch_video} type="video/mp4" />
          </video>
          <h1
            style={{ marginTop: "5%", marginBottom: "10%", fontSize: "300%" }}
          >
            Welcome to a shapeshifting, multitasking, head-turning,
            game-changing iPhone experience.
          </h1>
          <img
            width="60%"
            src="https://www.apple.com/v/iphone-14-pro/c/images/overview/dynamic-island/deep-dive/vertical-fallback/dynamic_island_vertical__c79c80h3z5iu_large.jpg"
            alt="error"
          />
          <div id="dynamic_island_desc">
            <h1>
              Dynamic Island blends fun and function like never before,
              consolidating your notifications, alerts and activities into one
              interactive place. It’s integrated throughout iOS 16 — and can
              work with all kinds of apps — to seamlessly surface what you need,
              right when you need it.
            </h1>
            <h1>
              It expands fluidly to get your attention — Hey, you have a call
              coming in — then tucks away again. You can touch and hold to
              control your music, keep an eye on a timer and more. Easy.
              Intuitive. Delightful.
            </h1>
          </div>
          <h1 style={{ marginBottom: "5%", fontSize: "150%" }}>
            iPhone 14 Pro raises the bar for what 48 megapixels can do —
            delivering 4x the resolution in ProRAW for mind-blowing detail in
            every crop.
          </h1>
          <h1 style={{ fontSize: "150%", marginBottom: "5%" }}>
            The quad-pixel sensor on the Main camera makes the most of 48
            megapixels by adapting to what you’re shooting. For most photos, you
            want to optimise for light capture. So the new sensor groups four
            pixels together into one large quad pixel, gathering 4x more light
            and producing spectacularly better photos at the practical 12MP
            size.
          </h1>
          <img
            style={{ width: "40%" }}
            src="https://www.apple.com/v/iphone-14-pro/c/images/overview/camera/quad-pixel-sensor/deep-dive/Vertical-Fallback/camera_48mp_vertical__dlcy8309yl26_large.jpg"
            alt="error"
          />
          <h1 style={{ fontSize: "500%", width: "80%", marginTop: "5%" }}>
            Much more detail.
          </h1>
          <h1 style={{ fontSize: "500%", width: "80%" }}>
            In much less light.
          </h1>
          <div id="photos">
            <div>
              <img
                src="https://www.apple.com/v/iphone-14-pro/c/images/overview/camera/low-light/low_light_wide__mwcscsmlln6a_large.jpg"
                alt="error"
              />
              <h3>Up to 3x better low-light photos on the Ultra Wide camera</h3>
            </div>
            <div>
              <img
                src="https://www.apple.com/v/iphone-14-pro/c/images/overview/camera/low-light/low_light_main__e65vdj1r1066_large.jpg"
                alt="error"
              />
              <h3>Up to 2x better low-light photos on the Main camera</h3>
            </div>
            <div>
              <img
                src="https://www.apple.com/v/iphone-14-pro/c/images/overview/camera/low-light/low_light_telephoto__gly9r0k8kwqe_large.jpg"
                alt="error"
              />
              <h3>Up to 2x better low-light photos on the Telephoto camera</h3>
            </div>
          </div>
          <video width="100%" loop autoPlay muted>
            <source
              src="https://www.apple.com/105/media/us/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/cinematic-mode/large_2x.mp4"
              type="video/mp4"
            />
          </video>
          <h1 style={{ marginTop: "5%", marginBottom: "5%" }}>
            Whether you’re filming from an off-road SUV or running alongside
            your subject, try Action mode for smooth handheld videos — no gimbal
            required.
          </h1>
          <img
            width="100%"
            src="https://www.apple.com/v/iphone-14-pro/c/images/overview/camera/three-camera-system/lenses__gm0vp98jxtiu_large.jpg"
            alt="error"
          />
        </div>
      </div>
      <div className="footer_color"></div>
    </>
  );
}

export default Iphone14Pro;
