import React from "react";
import { Row, Col, Card, Typography, Avatar } from "antd";
import "./Tarjetas.css";
import { Link } from "react-router-dom";

const { Title } = Typography;

function Tarjetas() {
  return (
    <Row gutter={50} justify={'center'}>
      <Col span={7} >
        <Link to='/mecanicas' style={{textDecoration: 'none'}}>
        <Card style={{ borderRadius: "50px" }}>
          <Row gutter={16}>
            <Col pull={0} span={9}>
              <img style={{ width: "8vw" }} src="graph.png" alt="graph"/>

              {/* <img src="graph.png" alt="graph" style={{ width: "500%" }} /> */}
            </Col>
            <Col span={15}>
              <Row justify="start">
                <Title style={{ fontSize: "1.5vw" }} level={3}>
                  Mecánicas
                </Title>
              </Row>
              <Row gutter={3} justify="start" align="middle">
                <Col pull span={3}>
                  <Title style={{ fontSize: "1.2vw" }} level={3}>
                    17
                  </Title>
                </Col>
                <Col span={20}>
                  <Title
                    style={{ fontSize: "1vw", color: "#52575C" }}
                    level={5}
                  >
                    bingos publicados{" "}
                  </Title>
                </Col>
              </Row>
              <Row gutter={4} align={"middle"} justify="start">
                <Col>
                  {/* <div className="red-dot"></div> */}
                  <Avatar
                    size={{
                      xs: 6,
                      sm: 8,
                      md: 10,
                      lg: 16,
                      xl: 20,
                      xxl: 25,
                    }}
                    style={{ backgroundColor: "#E3284A" }}
                  />
                </Col>
                <Col>
                  <Title
                    level={5}
                    style={{ color: "#52575C", fontSize: "1vw" }}
                  >
                    13 Activos
                  </Title>
                </Col>
              </Row>

              <Row gutter={4} align={"middle"}>
                <Col>
                  {/* <div className="red-dot"></div> */}
                  <Avatar
                    size={{
                      xs: 6,
                      sm: 8,
                      md: 10,
                      lg: 16,
                      xl: 20,
                      xxl: 25,
                    }}
                    style={{ backgroundColor: "#701E19" }}
                  />
                </Col>
                <Col>
                  <Title
                    level={5}
                    style={{ color: "#52575C", fontSize: "1vw" }}
                  >
                    4 Inactivos
                  </Title>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
        </Link>
      </Col>

      <Col span={7}>
        <Link to='/bingos' style={{textDecoration: 'none'}}>
        <Card style={{ borderRadius: "50px" }}>
          <Row gutter={16}>
            <Col pull={0} span={9}>
              <img style={{ width: "8vw" }} src="graph.png" alt="graph"/>

              {/* <img src="graph.png" alt="graph" style={{ width: "500%" }} /> */}
            </Col>
            <Col span={15}>
              <Row justify="start">
                <Title style={{ fontSize: "1.5vw" }} level={3}>
                  Bingos
                </Title>
              </Row>
              <Row gutter={3} justify="start" align="middle">
                <Col pull span={3}>
                  <Title style={{ fontSize: "1.2vw" }} level={3}>
                    17
                  </Title>
                </Col>
                <Col span={20}>
                  <Title
                    style={{ fontSize: "1vw", color: "#52575C" }}
                    level={5}
                  >
                    bingos publicados{" "}
                  </Title>
                </Col>
              </Row>
              <Row gutter={4} align={"middle"} justify="start">
                <Col>
                  {/* <div className="red-dot"></div> */}
                  <Avatar
                    size={{
                      xs: 6,
                      sm: 8,
                      md: 10,
                      lg: 16,
                      xl: 20,
                      xxl: 25,
                    }}
                    style={{ backgroundColor: "#E3284A" }}
                  />
                </Col>
                <Col>
                  <Title
                    level={5}
                    style={{ color: "#52575C", fontSize: "1vw" }}
                  >
                    13 Activos
                  </Title>
                </Col>
              </Row>

              <Row gutter={4} align={"middle"}>
                <Col>
                  {/* <div className="red-dot"></div> */}
                  <Avatar
                    size={{
                      xs: 6,
                      sm: 8,
                      md: 10,
                      lg: 16,
                      xl: 20,
                      xxl: 25,
                    }}
                    style={{ backgroundColor: "#701E19" }}
                  />
                </Col>
                <Col>
                  <Title
                    level={5}
                    style={{ color: "#52575C", fontSize: "1vw" }}
                  >
                    4 Inactivos
                  </Title>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
        </Link>
      </Col>


      <Col span={7}>
        <Link to='/tablaPromociones' style={{textDecoration: 'none'}}>
        <Card style={{ borderRadius: "50px" }}>
          <Row gutter={16}>
            <Col pull={0} span={9}>
              <img style={{ width: "8vw" }} src="graph.png" alt="graph" />

              {/* <img src="graph.png" alt="graph" style={{ width: "500%" }} /> */}
            </Col>
            <Col span={15}>
              <Row justify="start">
                <Title style={{ fontSize: "1.5vw" }} level={3}>
                  Motor de Promociones
                </Title>
              </Row>
              <Row gutter={3} justify="start" align="middle">
                <Col pull span={3}>
                  <Title style={{ fontSize: "1.2vw" }} level={3}>
                    17
                  </Title>
                </Col>
                <Col span={20}>
                  <Title
                    style={{ fontSize: "1vw", color: "#52575C" }}
                    level={5}
                  >
                    bingos publicados{" "}
                  </Title>
                </Col>
              </Row>
              <Row gutter={4} align={"middle"} justify="start">
                <Col>
                  {/* <div className="red-dot"></div> */}
                  <Avatar
                    size={{
                      xs: 6,
                      sm: 8,
                      md: 10,
                      lg: 16,
                      xl: 20,
                      xxl: 25,
                    }}
                    style={{ backgroundColor: "#E3284A" }}
                  />
                </Col>
                <Col>
                  <Title
                    level={5}
                    style={{ color: "#52575C", fontSize: "1vw" }}
                  >
                    13 Activos
                  </Title>
                </Col>
              </Row>

              <Row gutter={4} align={"middle"}>
                <Col>
                  {/* <div className="red-dot"></div> */}
                  <Avatar
                    size={{
                      xs: 6,
                      sm: 8,
                      md: 10,
                      lg: 16,
                      xl: 20,
                      xxl: 25,
                    }}
                    style={{ backgroundColor: "#701E19" }}
                  />
                </Col>
                <Col>
                  <Title
                    level={5}
                    style={{ color: "#52575C", fontSize: "1vw" }}
                  >
                    4 Inactivos
                  </Title>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
        </Link>
      </Col>
    </Row>
  );
}

export default Tarjetas;
