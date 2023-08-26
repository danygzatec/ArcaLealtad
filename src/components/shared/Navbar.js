import React, { useState, useEffect } from "react";
import { Drawer, Menu, Row, Col} from "antd";
import {
  LogoutOutlined,
  AuditOutlined,
  BellOutlined,
  MoneyCollectOutlined,
  TagsOutlined,
  HomeFilled,
  GroupOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Navabr.css";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Inicio", "1", <HomeFilled />),
  getItem( <a href="/tablaPromociones" target="_blank" rel="noopener noreferrer">Mi motor de promociones</a>, "2", <MoneyCollectOutlined />),
  getItem(<a href="/inicio" rel="noopener noreferrer" style={{textDecoration:'none'}}>Inicio</a>, "1", <HomeFilled />),
  getItem( <a href="/tablaPromociones" rel="noopener noreferrer" style={{textDecoration:'none'}}>Mi motor de promociones</a>, "2", <MoneyCollectOutlined />),
  getItem("Programa de Lealtad", "sub1", <TagsOutlined />, [
    getItem(<a href="/mecanicas" rel="noopener noreferrer" style={{textDecoration:'none'}}>Mecánicas</a>, "4"),
    getItem(<a href="/bingos" rel="noopener noreferrer" style={{textDecoration:'none'}}>Bingos</a>, "5"),
  ]),
  getItem(<a href="/reporteComunicados" rel="noopener noreferrer" style={{textDecoration:'none'}}>Motor de Comunicaciones</a>, "3", <BellOutlined />),
  getItem("Directorio", "sub2", <AuditOutlined />, [
    getItem(<a href="/directorioInterno" rel="noopener noreferrer" style={{textDecoration:'none'}}>Interno</a>, "6"),
    getItem(<a href="/directorioClientes" rel="noopener noreferrer" style={{textDecoration:'none'}}>Clientes</a>, "7"),
  ]),
  getItem("Reportes", "sub3", <GroupOutlined />, [
    getItem(<a href="/movimientosClientes" rel="noopener noreferrer" style={{textDecoration:'none'}}>Movimientos de Clientes</a>, "8"),
    getItem(<a href="/dashboard" rel="noopener noreferrer" style={{textDecoration:'none'}}>Dashboard</a>, "9"),
    getItem(<a href="/reporteClientes" rel="noopener noreferrer" style={{textDecoration:'none'}}>Reporte Clientes</a>, "10"),
    getItem(<a href="/sistemaLealtad" rel="noopener noreferrer" style={{textDecoration:'none'}}>Reporte Sistema de Lealtad</a>, "11"),
  ]),
];
//reporteComunicados
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut, email, password } = UserAuth();
  const [collapsed] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user == null) {
      navigate("/");
    }
  });

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  //onClick={handleSignOut}

  return (
    <>
      <br />
      <Row
        justify="start"
        align={"middle"}
        style={{
          backgroundColor: "white",
          width: "12vh",
          height: "6vh",
          borderRadius: " 0px 50px 50px 0px",
          cursor: "pointer",
          position: "absolute",
          left: "0vw",
          top: "0px",
        }}
        onClick={showDrawer}
      >
        <Col offset={2} span={2}>
          {/* <img
            src="logo.png"
            alt="menu"
            style={{
              width: "6vw",
              height: "2.6vw",
              marginLeft: "5em",
              marginTop: "1em",
              position: "absolute",
              left: "0vw",
              top: "0px",
            }}
            className={'navLogo'}
          /> */}
          <img src="logo.png" style={{ width: "3.2rem", height: "1.5rem" }} alt="logo" />
        </Col>
        <Col offset={11} span={4} style={{marginLeft:'0px'}}>
          <MoreOutlined style={{fontSize: '3.2rem', color: '#E3284A'}}/>
        </Col>
      </Row>
      <Drawer
        title={
          <img src="largelogo.png" alt="large logo " className="largelogo" />
        }
        placement="left"
        onClose={onClose}
        open={open}
        style={{ maxHeight: "95%", borderRadius: "0px 30px 30px 0px" }}
      >
        <h3 style={{ color: "#505050", textAlign: "center" }}>
          {user?.displayName || user?.email}
        </h3>
        <br />
        <div
          style={{
            width: "100%",
          }}
        >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            items={items}
          />
        </div>
        <div onClick={handleSignOut} className="logout">
          <span>
            <LogoutOutlined style={{ width: "25%", height: "25%" }} /> Logout
          </span>
        </div>
      </Drawer>
    </>
  );
};
export default Navbar;
