import React, { useState } from "react";

import NewPromoSetup from "../../components/NewPromoSetup";
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

export default function ReportesComunicados(props) {
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
      comunicado: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          Aprovecha Lunes y Martes de Descuento en Productos Coca Cola!
        </h5>
      ),
      unidadNegocio: (
        <p style={{ color: "#8a8a8a" }}>
          Bebidas México, Bebidas Perú, Bebidas Ecuador
        </p>
      ),
      lanzamiento: <p style={{ color: "#8a8a8a" }}>24/09/2020</p>,
      territorio: (
        <p style={{ color: "#8a8a8a" }}>
          México/Norte, Perú/Todas, Ecuador/Sur
        </p>
      ),
      medios: <p style={{ color: "#8a8a8a" }}>Email, SMS</p>,
      destinatario: <Tag color="processing">Personalizado</Tag>,
      caducidad: <Tag color="green">1 mes, 4 días</Tag>,
    },
    {
      comunicado: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          APROVECHA solo HOY la Bonificación de puntos en tus compras de
          refrescos
        </h5>
      ),
      unidadNegocio: (
        <p style={{ color: "#8a8a8a" }}>
          Bebidas México, Bebidas Perú, Bebidas Ecuador, Bebidas Argentina
        </p>
      ),
      lanzamiento: <p style={{ color: "#8a8a8a" }}>14/08/2018</p>,
      territorio: (
        <p style={{ color: "#8a8a8a" }}>
          México/Norte, Perú/Todas, Ecuador/Sur, Argentina/Todas
        </p>
      ),
      medios: <p style={{ color: "#8a8a8a" }}>Whatsapp, SMS</p>,
      destinatario: <Tag color="error">General</Tag>,
      caducidad: <Tag color="purple">VENCIDA</Tag>,
    },
    {
      comunicado: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          ¡Obtén hasta 500 puntos en tu primer pedido de Yomp!
        </h5>
      ),
      unidadNegocio: (
        <p style={{ color: "#8a8a8a" }}>Bebidas México, Bebidas Perú, Yomp!</p>
      ),
      lanzamiento: <p style={{ color: "#8a8a8a" }}>17/08/2014</p>,
      territorio: (
        <p style={{ color: "#8a8a8a" }}>
          México/Norte, Perú/Todas, Ecuador/Norte
        </p>
      ),
      medios: <p style={{ color: "#8a8a8a" }}>Email, Whatsapp, SMS</p>,
      destinatario: <Tag color="error">General</Tag>,
      caducidad: <Tag color="cyan">EN EDICIÓN</Tag>,
    },
    {
      comunicado: (
        <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
          Gracias por disfrutar de nuestros servicios, en su próxima compra, podrá ganar increíbles premios.
        </h5>
      ),
      unidadNegocio: (
        <p style={{ color: "#8a8a8a" }}>Bebidas México</p>
      ),
      lanzamiento: <p style={{ color: "#8a8a8a" }}>01/10/2021</p>,
      territorio: (
        <p style={{ color: "#8a8a8a" }}>
          México/Norte, Perú/Todas, Ecuador/Sur
        </p>
      ),
      medios: <p style={{ color: "#8a8a8a" }}>Whatsapp</p>,
      destinatario: <Tag color="error">General</Tag>,
      caducidad: <Tag color="purple">Vencida</Tag>,
    },
    {
        comunicado: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            Cuida tus punto, nunca te preguntaremos por tu conraseña mediante ningun medio.
          </h5>
        ),
        unidadNegocio: (
          <p style={{ color: "#8a8a8a" }}>Bebidas Argentina, Bebidas Perú, Bebidas Ecuador</p>
        ),
        lanzamiento: <p style={{ color: "#8a8a8a" }}>16/08/2009</p>,
        territorio: (
          <p style={{ color: "#8a8a8a" }}>
            Argentina/Centro, Perú/Todas, Ecuador/Norte
          </p>
        ),
        medios: <p style={{ color: "#8a8a8a" }}>Email, Whatsapp, SMS</p>,
        destinatario: <Tag color="processing">Personalizado</Tag>,
        caducidad: <Tag color="purple">Vencida</Tag>,
      },
      {
        comunicado: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            ¡Este Día Patrio, las cocas van por nosotros!
          </h5>
        ),
        unidadNegocio: (
          <p style={{ color: "#8a8a8a" }}>Yomp!</p>
        ),
        lanzamiento: <p style={{ color: "#8a8a8a" }}>03/02/2007</p>,
        territorio: (
          <p style={{ color: "#8a8a8a" }}>
            Mexico/Todas
          </p>
        ),
        medios: <p style={{ color: "#8a8a8a" }}>SMS</p>,
        destinatario: <Tag color="error">General</Tag>,
        caducidad: <Tag color="purple">Vencida</Tag>,
      },
      {
        comunicado: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            Descubre los asombrosos premios que tenemos para ti, ¡ven y canjea!
          </h5>
        ),
        unidadNegocio: (
          <p style={{ color: "#8a8a8a" }}>Bebidas Argentina, Bebidas Perú, CCU Argentina</p>
        ),
        lanzamiento: <p style={{ color: "#8a8a8a" }}>21/03/2019</p>,
        territorio: (
          <p style={{ color: "#8a8a8a" }}>
            Argentina/Todas, Perú/Sur
          </p>
        ),
        medios: <p style={{ color: "#8a8a8a" }}>SMS</p>,
        destinatario: <Tag color="error">General</Tag>,
        caducidad: <Tag color="green">2 semanas</Tag>,
      },
      {
        comunicado: (
          <h5 style={{ color: "#701E19", textDecoration: "underline" }}>
            Las BEBIDAS hoy van por nosotros, increíbles promociones en todas las Bebidas
          </h5>
        ),
        unidadNegocio: (
          <p style={{ color: "#8a8a8a" }}>Yomp!, Bebidas México, Bebidas Perú, Inalecsa Tonicorp</p>
        ),
        lanzamiento: <p style={{ color: "#8a8a8a" }}>19/02/2014</p>,
        territorio: (
          <p style={{ color: "#8a8a8a" }}>
            México/Norte, Perú/Todas, Ecuador/Norte
          </p>
        ),
        medios: <p style={{ color: "#8a8a8a" }}>SMS, Email, Whatsapp</p>,
        destinatario: <Tag color="processing">Personalizado</Tag>,
        caducidad: <Tag color="green">10 meses</Tag>,
      },
  ];

  //!Columns
  const columns = [
    {
      title: <h7 style={{ color: "#66696B" }}>Comunicado</h7>,
      dataIndex: "comunicado",
      key: "comunicado",
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
      title: <h7 style={{ color: "#66696B" }}>Lanzamiento</h7>,
      dataIndex: "lanzamiento",
      key: "lanzamiento",
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
      title: <h7 style={{ color: "#66696B" }}>Medios</h7>,
      dataIndex: "medios",
      key: "medios",
      filters: [
        {
          text: "Email",
          value: "Email",
        },
        {
          text: "SMS",
          value: "SMS",
        },
        {
            text: "Whatsapp",
            value: "Whatsapp",
          },
      ],
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Destinatario</h7>,
      dataIndex: "destinatario",
      key: "destinatario",
      filters: [
        {
          text: "Personalizado",
          value: "Personalizado",
        },
        {
          text: "General",
          value: "General",
        },
        
      ],
    },
    {
      title: <h7 style={{ color: "#66696B" }}>Caducidad</h7>,
      dataIndex: "caducidad",
      key: "caducidad",
      filters: [
        {
          text: "ACTIVA",
          value: "ACTIVVA",
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
                  <h2>Reporte de Comunicados Enviados</h2>
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
                                <NewPromoSetup />
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
