import React, { useState } from "react";


// import NavBar from "../components/NavBar";
import {
  Button,
  Layout,
  theme,
  Col,
  Row,
  Table,
  AutoComplete,
  Input,
  Tag,
} from "antd";

//* Icons
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
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

export default function Mecanicas(props) {
  //search
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
  };

  //#9D9D9D
  //! Temp Data
  const dataSource = [
    {
      nombre: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          Ahorremos Luz Juntos
        </h5>
      ),
      unidadNegocio: (
        <p style={{ color: "#8a8a8a" }}>
          Bebidas México, Bebidas Perú, Bebidas Ecuador
        </p>
      ),
      segmentacion: <p style={{ color: "#8a8a8a" }}>Oxxo, Farmacias</p>,
      territorio: (
        <p style={{ color: "#8a8a8a" }}>
          México/Norte, Perú/Todas, Ecuador/Sur
        </p>
      ),
      dirigido: <p style={{ color: "#8a8a8a" }}>Personalizado</p>,
      m1: <p style={{ color: "#8a8a8a" }}>3</p>,
      m2: <p style={{ color: "#8a8a8a" }}>2</p>,
      activa: <Tag color="green">1 MES RESTANTE</Tag>,
    },
    {
      nombre: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          Productos Bokados en Mostrador
        </h5>
      ),
      unidadNegocio: (
        <p style={{ color: "#8a8a8a" }}>
          Bebidas México, Bebidas Perú, Bebidas Ecuador, Bebidas Argentina
        </p>
      ),
      segmentacion: <p style={{ color: "#8a8a8a" }}>Todas</p>,
      territorio: (
        <p style={{ color: "#8a8a8a" }}>
          México/Norte, Perú/Todas, Ecuador/Sur, Argentina/Todas
        </p>
      ),
      dirigido: <p style={{ color: "#8a8a8a" }}>Todos</p>,
      m1: <p style={{ color: "#8a8a8a" }}>1</p>,
      m2: <p style={{ color: "#8a8a8a" }}>1</p>,
      activa: <Tag color="purple">VENCIDA</Tag>,
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
      title: <h7 style={{ color: "#66696B" }}>Unidad de Negocio</h7>,
      dataIndex: "unidadNegocio",
      key: "unidadNegocio",
      filters: [
        {
          text: "Bebidas México",
          value: "Bebidas México",
        },
        {
          text: "Bebidas Perú",
          value: "Bebidas Perú",
        },
        {
          text: "Bebidas Ecuador",
          value: "Bebidas Ecuador",
        },
        {
          text: "Bebidas Argentina",
          value: "Bebidas Argentina",
        },
      ],
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Segmentación Interna</h7>,
      dataIndex: "segmentacion",
      key: "segmentacion",
      filters: [
        {
          text: "Farmacias",
          value: "Farmacias",
        },
        {
          text: "Todas",
          value: "Todas",
        },
      ],
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Territorio y Región</h7>,
      dataIndex: "territorio",
      key: "territorio",
      filters: [
        {
          text: "México/Norte",
          value: "México/Norte",
        },
        {
          text: "Perú/Todas",
          value: "Perú/Todas",
        },
        {
          text: "Ecuador/Sur",
          value: "Ecuador/Sur",
        },
        {
          text: "Ecuador/Norte",
          value: "Ecuador/Norte",
        },
        {
          text: "Argentina/Todas",
          value: "Argentina/Todas",
        },
      ],
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Dirigido a</h7>,
      dataIndex: "dirigido",
      key: "dirigido",
      filters: [
        {
          text: "Personalizado",
          value: "Personalizado",
        },
        {
          text: "Todos",
          value: "Todos",
        },
      ],
    },
    {
      title: <h7 style={{ color: "#66696B" }}>M1</h7>,
      dataIndex: "m1",
      key: "m1",
      filters: [
        {
          text: "1",
          value: "1",
        },
        {
          text: "2",
          value: "2",
        },
        {
          text: "3",
          value: "3",
        },
        {
          text: "4",
          value: "4",
        },
      ],
    },
    {
      title: <h7 style={{ color: "#66696B" }}>M2</h7>,
      dataIndex: "m2",
      key: "m2",
      filters: [
        {
          text: "1",
          value: "1",
        },
        {
          text: "2",
          value: "2",
        },
        {
          text: "3",
          value: "3",
        },
        {
          text: "4",
          value: "4",
        },
      ],
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Activa</h7>,
      dataIndex: "activa",
      key: "activa",
      filters: [
        {
          text: "1 MES RESTANTE",
          value: "1 MES RESTANTE",
        },
        {
          text: "EN EDICIÓN",
          value: "EN EDICIÓN",
        },
        {
          text: "VENCIDA",
          value: "VENCIDA",
        },
      ],
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
                // eslint-disable-next-line no-dupe-keys
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
                  <h2>Mecánicas Creadas</h2>
                </Col>
              </Row>
              <Row>
                <Layout style={{ marginTop: "2em" }}>
                  <Content className="content">
                    <Row>
                      <div
                        style={{
                          padding: 45,
                          backgroundColor: "#701E19",
                          borderTopLeftRadius: "16px",
                          borderTopRightRadius: "16px",
                          width: "100%",
                          maxHeight: 100,
                        }}
                      >
                        <div style={{ marginLeft: "45%" }}>
                          <Row style={{ marginTop: "-1em" }}>
                            <Col flex={2}>
                              <AutoComplete
                                dropdownMatchSelectWidth={252}
                                style={{
                                  width: 750,
                                  float: "left",
                                  marginLeft: -800,
                                }}
                                options={options}
                                onSelect={onSelect}
                                onSearch={handleSearch}
                              >
                                <Input.Search
                                  icon={<SearchOutlined />}
                                  size="large"
                                  placeholder="Busca dentro de tus productos agregados por nombre, categoría, marca o clave de producto"
                                />
                              </AutoComplete>
                            </Col>
                            <Col>
                              <Col flex={2}>
                                <Button
                                  icon={<PlusOutlined />}
                                  size="large"
                                  className="addRule"
                                  style={{
                                    borderRadius: "20px",
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    backgroundColor: "#D7423C",
                                    width: 400,
                                    borderColor: "#D7423C",
                                  }}
                                >
                                  Nueva Mecánica
                                </Button>
                              </Col>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Row>
                  </Content>
                </Layout>
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
