/* eslint-disable no-dupe-keys */
import React from "react";

// import NavBar from "../components/NavBar";
import {
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
  } from "@ant-design/icons";
import Navbar from "../../components/shared/Navbar";

const { Content } = Layout;

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;



// eslint-disable-next-line no-unused-vars
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

export default function ReporteClientes(props) {
  //search
  
  //#9D9D9D
  //! Temp Data
  const dataSource = [
    {
      cliente: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          {" "}
          Luis Treviño
        </h5>
      ),
      region: <p style={{ color: "#8a8a8a" }}>Norteamérica</p>,
      territorio: <p style={{ color: "#8a8a8a" }}>México</p>,
      ciudad: <p style={{ color: "#8a8a8a" }}>Monterrey</p>,
      tamañoCliente: <p style={{ color: "#8a8a8a" }}>Mediana Empresa</p>,
      tipoCliente: <p style={{ color: "#8a8a8a" }}>Almacén</p>,
      puntosGanados: (
        <p style={{ color: "#8a8a8a" }}>
          <h5 style={{ color: "#27AE60" }}>
            <ArrowUpOutlined />
            5000{" "}
          </h5>
        </p>
      ),
      puntosCanjeados: (
        <p style={{ color: "#8a8a8a" }}>
          <h5 style={{ color: "#D81635" }}>
            <ArrowDownOutlined /> 200{" "}
          </h5>
        </p>
      ),
      balance: <h5 style={{ color: "#FF8B43" }}>5000</h5>,
    },
    {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Fernan Cantú
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Norteamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Estados Unidos</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Forth Worth</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Gran Empresa</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Multitienda</p>,
        puntosGanados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              1500{" "}
            </h5>
          </p>
        ),
        puntosCanjeados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#D81635" }}>
              <ArrowDownOutlined /> 700{" "}
            </h5>
          </p>
        ),
        balance: <h5 style={{ color: "#FF8B43" }}>1500</h5>,
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Abraham Ruiz
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Centroamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Ecuador</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Quito</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Pequeña Empresa</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Tienda de Conveniencia</p>,
        puntosGanados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              470{" "}
            </h5>
          </p>
        ),
        puntosCanjeados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#D81635" }}>
              <ArrowDownOutlined /> 120{" "}
            </h5>
          </p>
        ),
        balance: <h5 style={{ color: "#FF8B43" }}>470</h5>,
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Carlos Martínez
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Sudamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Perú</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Lima</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Mediana Empresa</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Tienda Especializada</p>,
        puntosGanados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              5000{" "}
            </h5>
          </p>
        ),
        puntosCanjeados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#D81635" }}>
              <ArrowDownOutlined /> 500{" "}
            </h5>
          </p>
        ),
        balance: <h5 style={{ color: "#FF8B43" }}>5000</h5>,
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Luis Treviño
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Sudamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Perú</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Lima</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Mediana Empresa</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Multitienda</p>,
        puntosGanados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              1500{" "}
            </h5>
          </p>
        ),
        puntosCanjeados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#D81635" }}>
              <ArrowDownOutlined /> 700{" "}
            </h5>
          </p>
        ),
        balance: <h5 style={{ color: "#FF8B43" }}>1500</h5>,
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Lorena Fierro
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Centroamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Ecuador</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Quito</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Pequeña Empresa</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Multitienda</p>,
        puntosGanados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              470{" "}
            </h5>
          </p>
        ),
        puntosCanjeados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#D81635" }}>
              <ArrowDownOutlined /> 120{" "}
            </h5>
          </p>
        ),
        balance: <h5 style={{ color: "#FF8B43" }}>470</h5>,
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Josue Romero
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Sudamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Argentina</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Buenos Aires</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Mediana Empresa</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Multitienda</p>,
        puntosGanados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              505{" "}
            </h5>
          </p>
        ),
        puntosCanjeados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#D81635" }}>
              <ArrowDownOutlined /> 200{" "}
            </h5>
          </p>
        ),
        balance: <h5 style={{ color: "#FF8B43" }}>505</h5>,
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Francisco Villarreal
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Sudamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Argentina</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Buenos Aires</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Pequeña Empresa</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Tienda Especializada</p>,
        puntosGanados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              290{" "}
            </h5>
          </p>
        ),
        puntosCanjeados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#D81635" }}>
              <ArrowDownOutlined /> 10{" "}
            </h5>
          </p>
        ),
        balance: <h5 style={{ color: "#FF8B43" }}>290</h5>,
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Fernanda Vazquez
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Norteamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>México</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>La Paz</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Mediana Empresa</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Tienda Especializada</p>,
        puntosGanados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              505{" "}
            </h5>
          </p>
        ),
        puntosCanjeados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#D81635" }}>
              <ArrowDownOutlined /> 200{" "}
            </h5>
          </p>
        ),
        balance: <h5 style={{ color: "#FF8B43" }}>505</h5>,
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            MAriela Perez
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Norteamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Estados Unidos</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Forth Worth</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Pequeña Empresa Perú</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Almacén</p>,
        puntosGanados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              290{" "}
            </h5>
          </p>
        ),
        puntosCanjeados: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#D81635" }}>
              <ArrowDownOutlined /> 10{" "}
            </h5>
          </p>
        ),
        balance: <h5 style={{ color: "#FF8B43" }}>290</h5>,
      },
  ];

  //!Columns
  const columns = [
    {
      title: <h7 style={{ color: "#66696B" }}>Cliente</h7>,
      dataIndex: "cliente",
      key: "cliente",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Región</h7>,
      dataIndex: "region",
      key: "region",
      filters: [
        {
          text: "Norteamérica",
          value: "Norteamérica",
        },
        {
          text: "Sudamérica",
          value: "Sudamérica",
        },
        {
          text: "Centroamérica",
          value: "Centroamérica",
        },
      ],
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Territorio</h7>,
      dataIndex: "territorio",
      key: "territorio",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Ciudad</h7>,
      dataIndex: "ciudad",
      key: "ciudad",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Tamaño de Cliente</h7>,
      dataIndex: "tamañoCliente",
      key: "tamañoCliente",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Tipo de Cliente</h7>,
      dataIndex: "tipoCliente",
      key: "tipoCliente",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Puntos Ganados</h7>,
      dataIndex: "puntosGanados",
      key: "puntosGanados",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Puntos Canjeados</h7>,
      dataIndex: "puntosCanjeados",
      key: "puntosCanjeados",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Balance</h7>,
      dataIndex: "balance",
      key: "balance",
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
                minHeight: "90vh",
              }}
            >
              <Row>
                <Col
                  flex={12}
                  style={{
                    boxShadow:
                      "box-shadow: 2px 10.32px 22.37px rgba(16, 30, 115, 0.06)",
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
                  <h2>Reporte Clientes</h2>
                  <p style={{ color: "#66696B", fontSize: "16px" }}>
                    Filtra, Consulta y Descarga la información deseada
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Table dataSource={dataSource} columns={columns} />
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
