import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import "./Inicio.css";
import { UserAuth } from "../../context/AuthContext";
import Tarjetas from "./Tarjetas";
import { Modal, Button, Typography, Row, Col, Card, Image } from "antd";
import {
  RightOutlined,
  PlusCircleFilled,

} from "@ant-design/icons";
const { Title,  Text } = Typography;
const Inicio = () => {
  const { user } = UserAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Row>
        <Navbar />
      </Row>

      <Row justify="center">
        <Col>
          <Title
            style={{ color: "#787878", fontSize: "3vw", fontFamily: "DM Sans" }}
            level={1}
          >
            ¡Hola! {user?.displayName || user?.email}
          </Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Title
            level={1}
            style={{
              color: "#787878",
              fontSize: "1.2vw",
              fontFamily: "DM Sans",
            }}
          >
            Selecciona la tarjeta deseada para ver el detalle de programa
          </Title>
        </Col>
      </Row>

      <Tarjetas />

      <Row justify={"end"}>
        <Col>
          <Card
            id="brown-inicio-card"
            style={{
              width: "80vw",
              height: "31.59vw",
              backgroundColor: "#701E19",
              borderRadius: 50,
              marginTop: "4vh",
            }}
          >
            <Row justify={"center"}>
              <Col>
                <Text
                  style={{
                    color: "white",
                    fontSize: "7vw",
                    marginRight: "1vw",
                    fontFamily: "Ubuntu",
                  }}
                  level={1}
                >
                  Bienvenido
                </Text>
                <Text style={{ color: "white", fontSize: "3vw" }} level={1}>
                  a tu
                </Text>
                <Row justify={"center"}>
                  <Col>
                    <Text
                      style={{
                        color: "white",
                        fontSize: "4vw",
                        marginRight: "1vw",
                        fontFamily: "Ubuntu",
                      }}
                      level={1}
                    >
                      Sistema de Lealtad
                    </Text>
                  </Col>
                </Row>
                <Row></Row>
                <Row justify={"end"} gutter={[16, 64]}>
                  <Col>
                    <Text
                      style={{
                        color: "white",
                        fontSize: "2.5vw",
                        marginTop: "10vw",
                        fontFamily: "Ubuntu",
                      }}
                      level={1}
                    >
                      ¿Qué quieres crear hoy?
                    </Text>
                    <Button
                      style={{
                        backgroundColor: "#701e19",
                        fontSize: "2u0%",
                        marginLeft: "2vw",
                      }}
                      type="primary"
                      shape="circle"
                      icon={
                        <PlusCircleFilled
                          style={{
                            fontSize: "5vw",
                            color: "#D81635",
                            backgroundColor: "white",
                            borderRadius: 70,
                          }}
                        />
                      }
                      onClick={() => setIsModalOpen(true)}
                    ></Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col>
          <Image
            style={{ width: "30vw", margin: 0 }}
            src="target.png"
            className="target"
          ></Image>
        </Col>
      </Row>
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Row justify={"center"}>
          <Text
            style={{
              textAlign: "center",
              color: "#701E19",
              fontFamily: "DM Sans",
              fontSize: "1.5vw",
            }}
            level={1}
          >
            ¿Qué quieres crear hoy?
          </Text>
        </Row>
        <Row justify={"end"}>
          <Button className="modal-buttom" style={{ height: "10vh", marginLeft: '3vw', width:'100%' }}>
            <b style={{ color: "#701E19" }}>
              <img src="motor-promociones.png" alt="bolsa" className="bolsa" />
              Motor de Promociones
            </b>
            <RightOutlined style={{ color: "#D81635" }} />
          </Button>
        </Row>

        <Row justify={"end"}>
          <Button className="modal-buttom" style={{ height: "10vh",marginLeft: '0vw', width:'100%' }}>
            <b style={{ color: "#701E19" }}>
              <img src="bingo.png" alt="bolsa" className="bingo" />
              Bingo
            </b>
            <RightOutlined style={{ color: "#D81635" }} />
          </Button>
        </Row>

        <Row justify={"end"}>
          <Button className="modal-buttom" style={{ height: "10vh", marginLeft: '0vw', width:'100%' }}>
            <b style={{ color: "#701E19" }}>
              <img src="mecanica.png" alt="bolsa" className="mecanica" />
              Mecánica
            </b>
            <RightOutlined style={{ color: "#D81635" }} />
          </Button>
        </Row>
      </Modal>
    </>
  );
};

export default Inicio;
