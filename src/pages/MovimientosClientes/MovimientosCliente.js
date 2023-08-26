/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./MovimientosCliente.css";
import { Excel } from "antd-table-saveas-excel";

// import NavBar from "../components/NavBar";
import {
  Button,
  Layout,
  theme,
  Col,
  Row,
  Table,
} from "antd";

//* Icons
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import Navbar from "../../components/shared/Navbar";

const { Content } = Layout;

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;


const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)}</span>
          </div>
        ),
      };
    });

// eslint-disable-next-line no-unused-vars
const option = [
  {
    value: "October 2022",
    label: "October 2022",
  },
  {
    value: "November 2022",
    label: "November 2022",
  },
  {
    value: "December 2022",
    label: "December 2022",
  },
];
const option2 = [
  {
    value: "México",
    label: "México",
  },
  {
    value: "Perú",
    label: "Perú",
  },
  {
    value: "Ecuador",
    label: "Ecuador",
  },
  {
    value: "Argentina",
    label: "Argentina",
  },
];


export default function MovimientosClienteBingos(props) {
  //search

  

  //#9D9D9D
  //! Temp Data
  const dataSource = [
    {
      puntos: (
        <h5 style={{ color: "#27AE60" }}>
          <ArrowUpOutlined /> 1500{" "}
        </h5>
      ),
      cliente: <p style={{ color: "#8a8a8a" }}>Luis Treviño</p>,
      fecha: <p style={{ color: "#8a8a8a" }}>02/10/2022</p>,
      plataformaFuente: <p style={{ color: "#8a8a8a" }}>AC Digital</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bokados</p>,
      actividadPromocional: (
        <p style={{ color: "#8a8a8a" }}>Bingo Loco Bokados</p>
      ),
      categoria: <p style={{ color: "#8a8a8a" }}>Botanas</p>,
      marca: <p style={{ color: "#8a8a8a" }}>Bokados</p>,
      productoBeneficio: <p style={{ color: "#8a8a8a" }}>Bokaditas 60g</p>,
    },
    {
      puntos: (
        <h5 style={{ color: "#D81635" }}>
          <ArrowDownOutlined /> 200{" "}
        </h5>
      ),
      cliente: <p style={{ color: "#8a8a8a" }}>Fernan Cantú</p>,
      fecha: <p style={{ color: "#8a8a8a" }}>02/10/2022</p>,
      plataformaFuente: <p style={{ color: "#8a8a8a" }}>Y! Mobile</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bebidas México</p>,
      actividadPromocional: <p style={{ color: "#8a8a8a" }}>-</p>,
      categoria: <p style={{ color: "#8a8a8a" }}>Bebidas</p>,
      marca: <p style={{ color: "#8a8a8a" }}>Coca Cola</p>,
      productoBeneficio: <p style={{ color: "#8a8a8a" }}>Coca 600ml</p>,
    },
    {
      puntos: (
        <h5 style={{ color: "#27AE60" }}>
          <ArrowUpOutlined /> 60{" "}
        </h5>
      ),
      cliente: <p style={{ color: "#8a8a8a" }}>Abraham Ruiz</p>,
      fecha: <p style={{ color: "#8a8a8a" }}>01/10/2022</p>,
      plataformaFuente: <p style={{ color: "#8a8a8a" }}>Y! Premium</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bebidas Perú</p>,
      actividadPromocional: (
        <p style={{ color: "#8a8a8a" }}>Pago 12 unidades</p>
      ),
      categoria: <p style={{ color: "#8a8a8a" }}>Bebidas</p>,
      marca: <p style={{ color: "#8a8a8a" }}>Coca Cola</p>,
      productoBeneficio: <p style={{ color: "#8a8a8a" }}>Coca Zero 2L</p>,
    },
    {
      puntos: (
        <h5 style={{ color: "#D81635" }}>
          <ArrowDownOutlined /> 80{" "}
        </h5>
      ),
      cliente: <p style={{ color: "#8a8a8a" }}>Carlos Martínez</p>,
      fecha: <p style={{ color: "#8a8a8a" }}>30/09/2022</p>,
      plataformaFuente: <p style={{ color: "#8a8a8a" }}>AC Digital</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bokados</p>,
      actividadPromocional: <p style={{ color: "#8a8a8a" }}>-</p>,
      categoria: <p style={{ color: "#8a8a8a" }}>Botanas</p>,
      marca: <p style={{ color: "#8a8a8a" }}>Bokados</p>,
      productoBeneficio: <p style={{ color: "#8a8a8a" }}>Bokaditas 60g</p>,
    },
    {
      puntos: (
        <h5 style={{ color: "#27AE60" }}>
          <ArrowUpOutlined /> 500{" "}
        </h5>
      ),
      cliente: <p style={{ color: "#8a8a8a" }}>Luis Treviño</p>,
      fecha: <p style={{ color: "#8a8a8a" }}>29/09/2022</p>,
      plataformaFuente: <p style={{ color: "#8a8a8a" }}>AC Digital</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bokados</p>,
      actividadPromocional: (
        <p style={{ color: "#8a8a8a" }}>Bingo Loco Bokados</p>
      ),
      categoria: <p style={{ color: "#8a8a8a" }}>Botanas</p>,
      marca: <p style={{ color: "#8a8a8a" }}>Bokados</p>,
      productoBeneficio: <p style={{ color: "#8a8a8a" }}>Bokadas Mix 120g</p>,
    },
    {
      puntos: (
        <h5 style={{ color: "#27AE60" }}>
          <ArrowUpOutlined /> 100{" "}
        </h5>
      ),
      cliente: <p style={{ color: "#8a8a8a" }}>Lorena Fierro</p>,
      fecha: <p style={{ color: "#8a8a8a" }}>28/09/2022</p>,
      plataformaFuente: <p style={{ color: "#8a8a8a" }}>Y! Mobile</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Yomp</p>,
      actividadPromocional: (
        <p style={{ color: "#8a8a8a" }}>Promo 5 Packs Jugos</p>
      ),
      categoria: <p style={{ color: "#8a8a8a" }}>Servicios</p>,
      marca: <p style={{ color: "#8a8a8a" }}>Yomp</p>,
      productoBeneficio: <p style={{ color: "#8a8a8a" }}>Pago de Servicio</p>,
    },

    {
      puntos: (
        <h5 style={{ color: "#27AE60" }}>
          <ArrowUpOutlined /> 50{" "}
        </h5>
      ),
      cliente: <p style={{ color: "#8a8a8a" }}>Josue Romero</p>,
      fecha: <p style={{ color: "#8a8a8a" }}>28/09/2022</p>,
      plataformaFuente: <p style={{ color: "#8a8a8a" }}>AC Digital</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bokados</p>,
      actividadPromocional: (
        <p style={{ color: "#8a8a8a" }}>Bingo 3 semanas de Salsas</p>
      ),
      categoria: <p style={{ color: "#8a8a8a" }}>Botanas</p>,
      marca: <p style={{ color: "#8a8a8a" }}>Bokados</p>,
      productoBeneficio: <p style={{ color: "#8a8a8a" }}>Bokaditas 60g</p>,
    },
    {
      puntos: (
        <h5 style={{ color: "#D81635" }}>
          <ArrowDownOutlined /> 100{" "}
        </h5>
      ),
      cliente: <p style={{ color: "#8a8a8a" }}>Francisco Villareal</p>,
      fecha: <p style={{ color: "#8a8a8a" }}>26/10/2022</p>,
      plataformaFuente: <p style={{ color: "#8a8a8a" }}>Y! Mobile</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Yomp</p>,
      actividadPromocional: <p style={{ color: "#8a8a8a" }}>-</p>,
      categoria: <p style={{ color: "#8a8a8a" }}>Servicios</p>,
      marca: <p style={{ color: "#8a8a8a" }}>Ymp</p>,
      productoBeneficio: <p style={{ color: "#8a8a8a" }}>Pago de Servicio</p>,
    },
    {
      puntos: (
        <h5 style={{ color: "#D81635" }}>
          <ArrowDownOutlined /> 100{" "}
        </h5>
      ),
      cliente: <p style={{ color: "#8a8a8a" }}>Fernanda Vazquez</p>,
      fecha: <p style={{ color: "#8a8a8a" }}>24/10/2022</p>,
      plataformaFuente: <p style={{ color: "#8a8a8a" }}>Y! Mobile</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Yomp</p>,
      actividadPromocional: <p style={{ color: "#8a8a8a" }}>-</p>,
      categoria: <p style={{ color: "#8a8a8a" }}>Servicios</p>,
      marca: <p style={{ color: "#8a8a8a" }}>Ymp</p>,
      productoBeneficio: <p style={{ color: "#8a8a8a" }}>Pago de Servicio</p>,
    },
    {
      puntos: (
        <h5 style={{ color: "#27AE60" }}>
          <ArrowUpOutlined /> 50{" "}
        </h5>
      ),
      cliente: <p style={{ color: "#8a8a8a" }}>Mariela Perez</p>,
      fecha: <p style={{ color: "#8a8a8a" }}>23/10/2022</p>,
      plataformaFuente: <p style={{ color: "#8a8a8a" }}>Y! Premium</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bebidas Perú</p>,
      actividadPromocional: (
        <p style={{ color: "#8a8a8a" }}>Bingo Dips y Salsas</p>
      ),
      categoria: <p style={{ color: "#8a8a8a" }}>Bebidas</p>,
      marca: <p style={{ color: "#8a8a8a" }}>Coca Ciola</p>,
      productoBeneficio: <p style={{ color: "#8a8a8a" }}>Bokaditas 60g</p>,
    },
  ];

  //!Columns
  const columns = [
    {
      title: <h7 style={{ color: "black" }}>Puntos</h7>,
      dataIndex: "puntos",
      key: "puntos",
    },
    {
      title: <h7 style={{ color: "black" }}>Cliente</h7>,
      dataIndex: "cliente",
      key: "cliente",
    },
    {
      title: <h7 style={{ color: "black" }}>Fecha</h7>,
      dataIndex: "fecha",
      key: "fecha",
    },
    {
      title: <h7 style={{ color: "black" }}>Plataforma Fuente</h7>,
      dataIndex: "plataformaFuente",
      key: "plataformaFuente",
      filters: [
        {
          text: "AC Digital",
          value: "AC Digital",
        },
        {
          text: "Y! Mobile",
          value: "Y! Mobile",
        },
        {
          text: "Y! Premium",
          value: "Y! Premium",
        },
      ],
    },
    {
      title: <h7 style={{ color: "black" }}>Unidad de Negocio</h7>,
      dataIndex: "unidadNegocio",
      key: "unidadNegocio",
      filters: [
        {
          text: "Bokados",
          value: "Bokados",
        },
        {
          text: "Bebidas México",
          value: "Bebidas México",
        },
        {
          text: "Bebidas Perú",
          value: "Bebidas Perú",
        },
        {
          text: "Yomp",
          value: "Yomp",
        },
      ],
    },
    {
      title: (
        <h7 style={{ color: "black" }}>
          Actividad Promocional/Programa/Actividad
        </h7>
      ),
      dataIndex: "actividadPromocional",
      key: "actividadPromocional",
    },
    {
      title: <h7 style={{ color: "black" }}>Categoria</h7>,
      dataIndex: "categoria",
      key: "categoria",
      filters: [
        {
          text: "Bebidas",
          value: "Bebidas",
        },
        {
          text: "Botanas",
          value: "Botanas",
        },
        {
          text: "Servicios",
          value: "Servicios",
        },
      ],
    },
    {
      title: <h7 style={{ color: "black" }}>Marca</h7>,
      dataIndex: "marca",
      key: "marca",
      filters: [
        {
          text: "Bokados",
          value: "Bokados",
        },
        {
          text: "Coca Cola",
          value: "Coca Cola",
        },
        {
          text: "Yomp",
          value: "Yomp",
        },
      ],
    },
    {
      title: <h7 style={{ color: "black" }}>Producto/Beneficio</h7>,
      dataIndex: "productoBeneficio",
      key: "productoBeneficio",
    },
  ];

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleClick = () => {
    const excel = new Excel();
    excel
      .addSheet("test")
      .addColumns(columns)
      .addDataSource(dataSource)
      .saveAs("Excel.xlsx");
  };
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Layout className="site-layout-content">
          <Content
            style={{
              margin: "0 16px",
              padding: "25px",
            }}
          >
            {/* content of table and data */}
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                // eslint-disable-next-line no-dupe-keys
                minHeight: "90vh",
              }}
            >
              <Row>
                <Col
                  flex={12}
                  style={{
                    boxShadow: "box-shadow: 2px 10.32px 22.37px ",
                  }}
                >
                  <Navbar />
                </Col>
                <Col
                  flex={2}
                  style={{
                    marginLeft: "-53em",
                    marginTop: "0em",
                    color: "#701E19",
                  }}
                >
                  <h2>Movimientos de Clientes</h2>
                </Col>
              </Row>
              <Row>
                <Col span={24} >
                  <Row>
                    <Button
                      style={{
                        backgroundColor: "#27AE60",
                        color: "white",
                        marginLeft:'66em',
                        borderRadius: 50,
                        marginBottom:'1em'
                      }}
                      onClick={handleClick}
                    >
                      <DownloadOutlined />
                      Descargar
                    </Button>
                  </Row>
                  <Row>
                    <Col>
                      <Table
                        dataSource={dataSource}
                        columns={columns}
                        className="header"
                      />
                    </Col>
                  </Row>
                </Col>
                {/* Table of promotions */}
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
