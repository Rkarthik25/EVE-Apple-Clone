import "./Navbar.css";
import React, { useState } from "react";
import Storemenu from "./components/StoreMenu";
import Macmenu from "./components/Macmenu";
import IPadmenu from "./components/iPadmenu";
import Iphonemenu from "./components/iPhonemenu";
import Watchmenu from "./components/watchmenu";
import Airpodsmenu from "./components/Airpodsmenu";
import TV_Homemenu from "./components/tv&homemenu";
import Entertainmentmenu from "./components/Entertainmentmenu";
import Accessoriesmenu from "./components/Accessoriesmenu";
import Supportmenu from "./components/Supportmenu";
import HomeBody from "../HomeBody/homebody";
import Footer from "../Footer/Footer";
import { Dropdown } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
const Final_logo = require("../images/Final_logo .jpg");

function Navbar() {
  const [store, setStore] = useState(false);
  const [mac, setMac] = useState(false);
  const [iPad, setIpad] = useState(false);
  const [iPhone, setIphone] = useState(false);
  const [watch, setWatch] = useState(false);
  const [airpods, setAirpods] = useState(false);
  const [tv, setTV] = useState(false);
  const [Entertainment, setEntertain] = useState(false);
  const [Accessories, setAccessories] = useState(false);
  const [support, setSupport] = useState(false);

  const handlestore = (visible: boolean) => {
    setStore(visible);
  };

  const handlemac = (visible: boolean) => {
    setMac(visible);
  };

  const handleipad = (visible: boolean) => {
    setIpad(visible);
  };

  const handleiphone = (visible: boolean) => {
    setIphone(visible);
  };

  const handlewatch = (visible: boolean) => {
    setWatch(visible);
  };

  const handleairpods = (visible: boolean) => {
    setAirpods(visible);
  };

  const handletv = (visible: boolean) => {
    setTV(visible);
  };

  const handleentertain = (visible: boolean) => {
    setEntertain(visible);
  };

  const handleaccessories = (visible: boolean) => {
    setAccessories(visible);
  };

  const handlesupport = (visible: boolean) => {
    setSupport(visible);
  };

  return (
    <>
      <div id="Navbar_container">
        <div>
          <img src={Final_logo} alt="error" />
          <Dropdown
            overlay={<Storemenu />}
            visible={store}
            onVisibleChange={handlestore}
            trigger={["click"]}
          >
            <p>Store</p>
          </Dropdown>
          <Dropdown
            overlay={<Macmenu />}
            visible={mac}
            onVisibleChange={handlemac}
            trigger={["click"]}
          >
            <p>Mac</p>
          </Dropdown>
          <Dropdown
            overlay={<IPadmenu />}
            visible={iPad}
            onVisibleChange={handleipad}
            trigger={["click"]}
          >
            <p>iPad</p>
          </Dropdown>
          <Dropdown
            overlay={<Iphonemenu />}
            visible={iPhone}
            onVisibleChange={handleiphone}
            trigger={["click"]}
          >
            <p>iPhone</p>
          </Dropdown>
          <Dropdown
            overlay={<Watchmenu />}
            visible={watch}
            onVisibleChange={handlewatch}
            trigger={["click"]}
          >
            <p>Watch</p>
          </Dropdown>
          <Dropdown
            overlay={<Airpodsmenu />}
            visible={airpods}
            onVisibleChange={handleairpods}
            trigger={["click"]}
          >
            <p>AirPods</p>
          </Dropdown>
          <Dropdown
            overlay={<TV_Homemenu />}
            visible={tv}
            onVisibleChange={handletv}
            trigger={["click"]}
          >
            <p>TV & Home</p>
          </Dropdown>
          <Dropdown
            overlay={<Entertainmentmenu />}
            visible={Entertainment}
            onVisibleChange={handleentertain}
            trigger={["click"]}
          >
            <p>Entertainment</p>
          </Dropdown>
          <Dropdown
            overlay={<Accessoriesmenu />}
            visible={Accessories}
            onVisibleChange={handleaccessories}
            trigger={["click"]}
          >
            <p>Accessories</p>
          </Dropdown>
          <Dropdown
            overlay={<Supportmenu />}
            visible={support}
            onVisibleChange={handlesupport}
            trigger={["click"]}
          >
            <p>Support</p>
          </Dropdown>
          <SearchOutlined style={{ marginTop: "1%" }} />
          <ShoppingCartOutlined style={{ marginTop: "1%" }} />
        </div>
      </div>
      <HomeBody />
      <Footer />
    </>
  );
}

export default Navbar;
