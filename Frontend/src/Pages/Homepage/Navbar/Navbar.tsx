import "./Navbar.css";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { Collapse } from "antd";
import styled from "styled-components";
import Hamburger from "hamburger-react";
import Storemenu from "./components/StoreMenu";
import Macmenu from "./components/Macmenu";
import IPadmenu from "./components/iPadmenu";
import Iphonemenu from "./components/iPhonemenu";
import Watchmenu from "./components/watchmenu";
import Airpodsmenu from "./components/Airpodsmenu";
import TVHomemenu from "./components/tv&homemenu";
import Entertainmentmenu from "./components/Entertainmentmenu";
import Accessoriesmenu from "./components/Accessoriesmenu";
import Supportmenu from "./components/Supportmenu";
import { Dropdown } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
const Final_logo = require("../images/Final_logo .jpg");
const hamburger = require("../images/hamburger.png");
const { Panel } = Collapse;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isOpen, setisOpen] = useState(false);
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

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
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
            overlay={<TVHomemenu />}
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
          <SearchOutlined
            style={{ marginTop: "1%", backgroundColor: "rgb(53, 50, 50)" }}
          />
          <ShoppingCartOutlined
            style={{ marginTop: "1%", backgroundColor: "rgb(53, 50, 50)" }}
          />
        </div>
      </div>
      <div id="drawer">
        <img src={hamburger} alt="error" onClick={showDrawer} />
        <Drawer
          className="main_drawer"
          title="Shop"
          placement="left"
          onClose={onClose}
          open={open}
        >
          <h2>Store</h2>
          <h2>Mac</h2>
          <h2>iPad</h2>
          <h2>iPhone</h2>
          <h2>Watch</h2>
          <h2>AirPods</h2>
          <h2>Tv & Home</h2>
          <h2>Entertainment</h2>
          <h2>Accessories</h2>
          <h2>Support</h2>
        </Drawer>
      </div>
    </>
  );
}

export default Navbar;
