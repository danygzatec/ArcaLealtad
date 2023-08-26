import React, { useState } from "react";
// import NavBar from "../components/NavBar";
import {
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
import { SearchOutlined } from "@ant-design/icons";
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

export default function Clientes(props) {
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
      cliente: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          Luis Treviño
        </h5>
      ),
      region: <p style={{ color: "#8a8a8a" }}>Norteamérica</p>,
      territorio: <p style={{ color: "#8a8a8a" }}>México</p>,
      ciudad: <p style={{ color: "#8a8a8a" }}>Monterrey</p>,
      direccion: <p style={{ color: "#8a8a8a" }}>Bachilleres 99</p>,
      tienda: <p style={{ color: "#8a8a8a" }}>Abarrotes La Sierra</p>,
      tipoCliente: <p style={{ color: "#8a8a8a" }}>Almacén</p>,
      tamañoCliente: <p style={{ color: "#8a8a8a" }}>Mediana Empresa</p>,
      activo: (
        <p style={{ color: "#8a8a8a" }}>
          <Tag color="green">Sí</Tag>
        </p>
      ),
    },
    {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            Fernan Cantú
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Norteamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Estados Unidos</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Forth Worth</p>,
        direccion: <p style={{ color: "#8a8a8a" }}>Garza Zada 11</p>,
        tienda: <p style={{ color: "#8a8a8a" }}>El Salto</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Multitienda</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Gran Empresa</p>,
        activo: (
          <p style={{ color: "#8a8a8a" }}>
            <Tag color="green">Sí</Tag>
          </p>
        ),
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            Abraham Ruiz
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Centroamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Ecuador</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Quito</p>,
        direccion: <p style={{ color: "#8a8a8a" }}>Ingenieros 200</p>,
        tienda: <p style={{ color: "#8a8a8a" }}>Pepe Verduras</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Tienda de Conveniencia</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Pequeña Empresa</p>,
        activo: (
          <p style={{ color: "#8a8a8a" }}>
            <Tag color="green">Sí</Tag>
          </p>
        ),
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            Carlos Martínez
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Sudamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Perú</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Lima</p>,
        direccion: <p style={{ color: "#8a8a8a" }}>Limón 8</p>,
        tienda: <p style={{ color: "#8a8a8a" }}>Farmacias</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Tienda Especializada</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Mediana Empresa</p>,
        activo: (
          <p style={{ color: "#8a8a8a" }}>
            <Tag color="green">Sí</Tag>
          </p>
        ),
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            Luis Treviño
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Sudamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Perú</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Lima</p>,
        direccion: <p style={{ color: "#8a8a8a" }}>Horchata 11</p>,
        tienda: <p style={{ color: "#8a8a8a" }}>Juan Tienda</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Multitienda</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Mediana Empresa</p>,
        activo: (
          <p style={{ color: "#8a8a8a" }}>
            <Tag color="gray">No</Tag>
          </p>
        ),
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            Lorena Fierro
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Centroamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Ecuador</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Quito</p>,
        direccion: <p style={{ color: "#8a8a8a" }}>Cacahuates 100</p>,
        tienda: <p style={{ color: "#8a8a8a" }}>Tiendas Vazquez</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Multitienda</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Pequeña Empresa</p>,
        activo: (
          <p style={{ color: "#8a8a8a" }}>
            <Tag color="green">Sí</Tag>
          </p>
        ),
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            Josue Romero
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Sudamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Argentina</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Buenos Aires</p>,
        direccion: <p style={{ color: "#8a8a8a" }}>Romero 44</p>,
        tienda: <p style={{ color: "#8a8a8a" }}>Abarrotes La Cierrota</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Multitienda</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Mediana Empresa</p>,
        activo: (
          <p style={{ color: "#8a8a8a" }}>
            <Tag color="green">Sí</Tag>
          </p>
        ),
      },
      {
        cliente: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            Francisco Villarreal
          </h5>
        ),
        region: <p style={{ color: "#8a8a8a" }}>Sudamérica</p>,
        territorio: <p style={{ color: "#8a8a8a" }}>Argentina</p>,
        ciudad: <p style={{ color: "#8a8a8a" }}>Buenos Aires</p>,
        direccion: <p style={{ color: "#8a8a8a" }}>Villamontaña 66</p>,
        tienda: <p style={{ color: "#8a8a8a" }}>Farmacitas</p>,
        tipoCliente: <p style={{ color: "#8a8a8a" }}>Tienda Especializada</p>,
        tamañoCliente: <p style={{ color: "#8a8a8a" }}>Pequeña Empresa</p>,
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
      title: <h7 style={{ color: "#66696B" }}>Cliente</h7>,
      dataIndex: "cliente",
      key: "cliente",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Región</h7>,
      dataIndex: "region",
      key: "region",
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
      title: <h7 style={{ color: "#66696B" }}>Dirección</h7>,
      dataIndex: "direccion",
      key: "direccion",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Nombre de la Tienda</h7>,
      dataIndex: "tienda",
      key: "tienda",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Tipo de Cliente</h7>,
      dataIndex: "tipoCliente",
      key: "tipoCliente",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Tamaño del Cliente</h7>,
      dataIndex: "tamañoCliente",
      key: "tamañoCliente",
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Activo</h7>,
      dataIndex: "activo",
      key: "activo",
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
                  <h2>Directorio Clientes</h2>
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
