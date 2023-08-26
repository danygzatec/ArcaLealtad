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
import { ArrowUpOutlined } from "@ant-design/icons";
import Navbar from "../../components/shared/Navbar";

const { Content } = Layout;




export default function SistemaLealtad(props) {

  //! Temp Data
  const dataSource = [
    {
      nombre: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          {" "}
          PROMO 12 Sprites por 13 puntos
        </h5>
      ),
      duracion: <p style={{ color: "#8a8a8a" }}>1 semana</p>,
      puntos: (
        <p style={{ color: "#8a8a8a" }}>
          <h5 style={{ color: "#27AE60" }}>
            <ArrowUpOutlined />
            5000{" "}
          </h5>
        </p>
      ),
      completados: <p style={{ color: "#8a8a8a" }}>10</p>,
      incompletos: <p style={{ color: "#8a8a8a" }}>0</p>,
      fechaCreacion: <p style={{ color: "#8a8a8a" }}>02/10/2022</p>,
      creado: <p style={{ color: "#8a8a8a" }}>Diego Aldair Guerra</p>,
      clicks: <p style={{ color: "#8a8a8a" }}>10</p>,
    },
    {
        nombre: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Bingo 3 semanas de Salsas
          </h5>
        ),
        duracion: <p style={{ color: "#8a8a8a" }}>21 días</p>,
        puntos: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              1500{" "}
            </h5>
          </p>
        ),
        completados: <p style={{ color: "#8a8a8a" }}>2</p>,
        incompletos: <p style={{ color: "#8a8a8a" }}>1</p>,
        fechaCreacion: <p style={{ color: "#8a8a8a" }}>02/10/2022</p>,
        creado: <p style={{ color: "#8a8a8a" }}>Luisa Hernandez Soto</p>,
        clicks: <p style={{ color: "#8a8a8a" }}>3</p>,
      },
      {
        nombre: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Bingo Loco Bokados
          </h5>
        ),
        duracion: <p style={{ color: "#8a8a8a" }}>1 mes</p>,
        puntos: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              470{" "}
            </h5>
          </p>
        ),
        completados: <p style={{ color: "#8a8a8a" }}>21</p>,
        incompletos: <p style={{ color: "#8a8a8a" }}>6</p>,
        fechaCreacion: <p style={{ color: "#8a8a8a" }}>01/10/2022</p>,
        creado: <p style={{ color: "#8a8a8a" }}>María Martínez Mercado</p>,
        clicks: <p style={{ color: "#8a8a8a" }}>27</p>,
      },
      {
        nombre: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            PROMO 14 Cocas
          </h5>
        ),
        duracion: <p style={{ color: "#8a8a8a" }}>2 semanas</p>,
        puntos: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              5000{" "}
            </h5>
          </p>
        ),
        completados: <p style={{ color: "#8a8a8a" }}>30</p>,
        incompletos: <p style={{ color: "#8a8a8a" }}>8</p>,
        fechaCreacion: <p style={{ color: "#8a8a8a" }}>30/09/2022</p>,
        creado: <p style={{ color: "#8a8a8a" }}>José Luis Oviedo Herrera</p>,
        clicks: <p style={{ color: "#8a8a8a" }}>38</p>,
      },
      {
        nombre: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            PROMO Navidad Energético
          </h5>
        ),
        duracion: <p style={{ color: "#8a8a8a" }}>21 días</p>,
        puntos: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              1500{" "}
            </h5>
          </p>
        ),
        completados: <p style={{ color: "#8a8a8a" }}>5</p>,
        incompletos: <p style={{ color: "#8a8a8a" }}>0</p>,
        fechaCreacion: <p style={{ color: "#8a8a8a" }}>29/09/2022</p>,
        creado: <p style={{ color: "#8a8a8a" }}>Manuel de la Vega Ruiz</p>,
        clicks: <p style={{ color: "#8a8a8a" }}>5</p>,
      },
      {
        nombre: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Bingo Verano Refrescante
          </h5>
        ),
        duracion: <p style={{ color: "#8a8a8a" }}>1 mes</p>,
        puntos: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              470{" "}
            </h5>
          </p>
        ),
        completados: <p style={{ color: "#8a8a8a" }}>9</p>,
        incompletos: <p style={{ color: "#8a8a8a" }}>2</p>,
        fechaCreacion: <p style={{ color: "#8a8a8a" }}>28/09/2022</p>,
        creado: <p style={{ color: "#8a8a8a" }}>Andrea Cespedes Alonso</p>,
        clicks: <p style={{ color: "#8a8a8a" }}>11</p>,
      },
      {
        nombre: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Bingo Halloween de papas y dips
          </h5>
        ),
        duracion: <p style={{ color: "#8a8a8a" }}>1 mes</p>,
        puntos: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              505{" "}
            </h5>
          </p>
        ),
        completados: <p style={{ color: "#8a8a8a" }}>12</p>,
        incompletos: <p style={{ color: "#8a8a8a" }}>3</p>,
        fechaCreacion: <p style={{ color: "#8a8a8a" }}>28/09/2022</p>,
        creado: <p style={{ color: "#8a8a8a" }}>Alejandro Villarreal Lechuga</p>,
        clicks: <p style={{ color: "#8a8a8a" }}>15</p>,
      },
      {
        nombre: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            Bingo a la Mexicana
          </h5>
        ),
        duracion: <p style={{ color: "#8a8a8a" }}>1 mes</p>,
        puntos: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              290{" "}
            </h5>
          </p>
        ),
        completados: <p style={{ color: "#8a8a8a" }}>11</p>,
        incompletos: <p style={{ color: "#8a8a8a" }}>0</p>,
        fechaCreacion: <p style={{ color: "#8a8a8a" }}>26/10/2022</p>,
        creado: <p style={{ color: "#8a8a8a" }}>Angel Ruiz Martínez</p>,
        clicks: <p style={{ color: "#8a8a8a" }}>11</p>,
      },
      {
        nombre: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
           PROMO Independencia
          </h5>
        ),
        duracion: <p style={{ color: "#8a8a8a" }}>1 mes</p>,
        puntos: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              505{" "}
            </h5>
          </p>
        ),
        completados: <p style={{ color: "#8a8a8a" }}>1</p>,
        incompletos: <p style={{ color: "#8a8a8a" }}>0</p>,
        fechaCreacion: <p style={{ color: "#8a8a8a" }}>24/10/2022</p>,
        creado: <p style={{ color: "#8a8a8a" }}>Miguel Peña Ruiz </p>,
        clicks: <p style={{ color: "#8a8a8a" }}>1</p>,
      },
      {
        nombre: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            {" "}
            PROMO Buen Fin
          </h5>
        ),
        duracion: <p style={{ color: "#8a8a8a" }}>1 mes</p>,
        puntos: (
          <p style={{ color: "#8a8a8a" }}>
            <h5 style={{ color: "#27AE60" }}>
              <ArrowUpOutlined />
              290{" "}
            </h5>
          </p>
        ),
        completados: <p style={{ color: "#8a8a8a" }}>0</p>,
        incompletos: <p style={{ color: "#8a8a8a" }}>0</p>,
        fechaCreacion: <p style={{ color: "#8a8a8a" }}>23/10/2022</p>,
        creado: <p style={{ color: "#8a8a8a" }}>Francisco Figmacio</p>,
        clicks: <p style={{ color: "#8a8a8a" }}>0</p>,
      },
  ];

  //!Columns
  const columns = [
    {
      title: <h7 style={{ color: "#66696B" }}>Nombre</h7>,
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Duración</h7>,
      dataIndex: "duracion",
      key: "duracion",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Puntos Recolectados</h7>,
      dataIndex: "puntos",
      key: "puntos",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Participantes Completados</h7>,
      dataIndex: "completados",
      key: "completados",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Participantes Incompletos</h7>,
      dataIndex: "incompletos",
      key: "incompletos",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Fecha de Creación</h7>,
      dataIndex: "fechaCreacion",
      key: "fechaCreacion",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Creado por</h7>,
      dataIndex: "creado",
      key: "creado",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Clicks</h7>,
      dataIndex: "clicks",
      key: "clicks",
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
                  <h2>Reporte Sistema de Lealtad</h2>
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
