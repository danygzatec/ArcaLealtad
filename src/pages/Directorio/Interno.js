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
import {  SearchOutlined } from "@ant-design/icons";
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

export default function Interno(props) {
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
          Luis Jimenez
        </h5>
      ),
      correo: <p style={{ color: "#8a8a8a" }}>luisa.h@gmail.com</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bebidas Ecuador</p>,
      pais: <p style={{ color: "#8a8a8a" }}>Ecuador</p>,
      ultimaAccion: (
        <p style={{ color: "#3D64EE", textDecoration: "underline" }}>
          30/09/2022
        </p>
      ),
      activo: (
        <p style={{ color: "#8a8a8a" }}>
          <Tag color="green">Sí</Tag>
        </p>
      ),
    },
    {
      nombre: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          Diego Aldair Guerra
        </h5>
      ),
      correo: <p style={{ color: "#8a8a8a" }}>maria.martinez@gmail.com</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bebidas Perú</p>,
      pais: <p style={{ color: "#8a8a8a" }}>Perú</p>,
      ultimaAccion: (
        <p style={{ color: "#3D64EE", textDecoration: "underline" }}>
          30/09/2022
        </p>
      ),
      activo: (
        <p style={{ color: "#8a8a8a" }}>
          <Tag color="gray">No</Tag>
        </p>
      ),
    },
    {
      nombre: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          Jose Luis Oviedo Herrera
        </h5>
      ),
      correo: <p style={{ color: "#8a8a8a" }}>jose.luis@gmail.com</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bebidas México</p>,
      pais: <p style={{ color: "#8a8a8a" }}>México</p>,
      ultimaAccion: (
        <p style={{ color: "#3D64EE", textDecoration: "underline" }}>
          30/09/2022
        </p>
      ),
      activo: (
        <p style={{ color: "#8a8a8a" }}>
          <Tag color="green">Sí</Tag>
        </p>
      ),
    },
    {
      nombre: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          Manuel de la Vega Ruíz
        </h5>
      ),
      correo: <p style={{ color: "#8a8a8a" }}>manuel.vega@gmail.com</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bebidas México</p>,
      pais: <p style={{ color: "#8a8a8a" }}>México</p>,
      ultimaAccion: (
        <p style={{ color: "#3D64EE", textDecoration: "underline" }}>
          20/07/2022
        </p>
      ),
      activo: (
        <p style={{ color: "#8a8a8a" }}>
          <Tag color="gray">No</Tag>
        </p>
      ),
    },
    {
      nombre: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          Andrea Céspedes Alonzo
        </h5>
      ),
      correo: <p style={{ color: "#8a8a8a" }}>andea.cespedes@gmail.com</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Yomp!</p>,
      pais: <p style={{ color: "#8a8a8a" }}>México</p>,
      ultimaAccion: (
        <p style={{ color: "#3D64EE", textDecoration: "underline" }}>
          14/08/2022
        </p>
      ),
      activo: (
        <p style={{ color: "#8a8a8a" }}>
          <Tag color="gray">No</Tag>
        </p>
      ),
    },
    {
      nombre: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          Alejandro Villarreal Lechuga
        </h5>
      ),
      correo: (
        <p style={{ color: "#8a8a8a" }}>alejandro.villarreal@gmail.com</p>
      ),
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Yomp!</p>,
      pais: <p style={{ color: "#8a8a8a" }}>Perú</p>,
      ultimaAccion: (
        <p style={{ color: "#3D64EE", textDecoration: "underline" }}>
          17/08/2022
        </p>
      ),
      activo: (
        <p style={{ color: "#8a8a8a" }}>
          <Tag color="green">Sí</Tag>
        </p>
      ),
    },
    {
      nombre: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          Miguel Peña Ruiz
        </h5>
      ),
      correo: <p style={{ color: "#8a8a8a" }}>miguel.pena@gmail.com</p>,
      unidadNegocio: <p style={{ color: "#8a8a8a" }}>Bokados</p>,
      pais: <p style={{ color: "#8a8a8a" }}>México</p>,
      ultimaAccion: (
        <p style={{ color: "#3D64EE", textDecoration: "underline" }}>
          04/06/2022
        </p>
      ),
      activo: (
        <p style={{ color: "#8a8a8a" }}>
          <Tag color="green">Sí</Tag>
        </p>
      ),
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
      title: <h7 style={{ color: "#66696B" }}>Correo</h7>,
      dataIndex: "correo",
      key: "correo",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Unidad de Negocio</h7>,
      dataIndex: "unidadNegocio",
      key: "unidadNegocio",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>País</h7>,
      dataIndex: "pais",
      key: "pais",
      filters: [
        {
          text: "México",
          value: "México",
        },
        {
          text: "Perú",
          value: "Perú",
        },
        {
          text: "Ecuador",
          value: "Ecuador",
        },
        {
          text: "Argentina",
          value: "Argentina",
        },
      ],
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Última Acción</h7>,
      dataIndex: "ultimaAccion",
      key: "ultimaAccion",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Activo</h7>,
      dataIndex: "activo",
      key: "activo",
      filters: [
        {
          text: "Sí",
          value: "Sí",
        },
        {
          text: "No",
          value: "No",
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
                  <h2>Directorio Interno</h2>
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
                                  marginLeft: -600,
                                  borderTopLeftRadius: "16px",
                                  borderTopRightRadius: "16px",
                                  minHeight: "4vh",
                                  maxHeight: "5vh",
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
                                  style={{
                                    borderRadius: "20px",
                                    borderColor: "#D7423C",
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    backgroundColor: "#D7423C",
                                    color: "white",
                                  }}
                                >
                                  + Agregar Usuario
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
