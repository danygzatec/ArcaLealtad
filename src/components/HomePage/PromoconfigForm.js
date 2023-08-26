import React from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Input,
  Form,
  Radio,
} from "antd";
const { Title } = Typography;
const { TextArea } = Input;
function PromoconfigForm() {
  return (
    <Row>
      <Col span={24}>
        <Form>
          <Title
            class="new-promo-subtitle"
            level={4}
            style={{
              marginLeft: "2rem",
              color: "#787878",
            }}
          >
            Ingresa el título con el cual se publicará esta promoción
          </Title>
          <Form.Item>
            <Radio.Group>
              <Radio value="Read & Write">A todos los usuarios</Radio>
              <Radio value={"Write"}>Vendedor(es) especifi(os)</Radio>
            </Radio.Group>
          </Form.Item>
          <Title
            class="new-promo-subtitle"
            level={4}
            style={{
              marginLeft: "2rem",
              color: "#787878",
            }}
          >
            Ingrese código o nombre de cliente
          </Title>

          <Form.Item
            name="client"
            rules={[
              {
                required: true,
                message: "Porfavor llena este campo",
              },
            ]}
          >
            <TextArea
              class="text-area-round"
              placeholder="Nueva Promo"
              autoSize={{
                minRows: 1,
                maxRows: 1,
              }}
              style={{
                //width: "47.5rem",
                //margin: "24px ",
                borderRadius: "10px",
              }}
            />
            {/* <Input placeholder="Título de mecánica" />; */}
          </Form.Item>

          <Input.Group size={"large"}>
            <Row gutter={8}>
              <Col span={12}>
                <Title
                  class="new-promo-subtitle"
                  level={4}
                  style={{
                    marginLeft: "2rem",
                    color: "#787878",
                  }}
                >
                  Región
                </Title>

                <Form.Item
                  name="region"
                  rules={[
                    {
                      required: true,
                      message: "Porfavor llena este campo",
                    },
                  ]}
                >
                  <TextArea
                    class="text-area-round"
                    placeholder="Nueva Promo"
                    autoSize={{
                      minRows: 1,
                      maxRows: 1,
                    }}
                    style={{
                      //width: "47.5rem",
                      //margin: "24px ",
                      borderRadius: "10px",
                    }}
                  />
                  {/* <Input placeholder="Título de mecánica" />; */}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Title
                  class="new-promo-subtitle"
                  level={4}
                  style={{
                    marginLeft: "2rem",
                    color: "#787878",
                  }}
                >
                  Territorio
                </Title>

                <Form.Item
                  name="territory"
                  rules={[
                    {
                      required: true,
                      message: "Porfavor llena este campo",
                    },
                  ]}
                >
                  <TextArea
                    class="text-area-round"
                    placeholder="Nueva Promo"
                    autoSize={{
                      minRows: 1,
                      maxRows: 1,
                    }}
                    style={{
                      //width: "47.5rem",
                      //margin: "24px ",
                      borderRadius: "10px",
                    }}
                  />
                  {/* <Input placeholder="Título de mecánica" />; */}
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>

          <Input.Group size={"large"}>
            <Row gutter={8}>
              <Col span={12}>
                <Title
                  class="new-promo-subtitle"
                  level={4}
                  style={{
                    marginLeft: "2rem",
                    color: "#787878",
                  }}
                >
                  Segmentación interna
                </Title>

                <Form.Item
                  name="segmentation"
                  rules={[
                    {
                      required: true,
                      message: "Porfavor llena este campo",
                    },
                  ]}
                >
                  <TextArea
                    class="text-area-round"
                    placeholder="Nueva Promo"
                    autoSize={{
                      minRows: 1,
                      maxRows: 1,
                    }}
                    style={{
                      //width: "47.5rem",
                      //margin: "24px ",
                      borderRadius: "10px",
                    }}
                  />
                  {/* <Input placeholder="Título de mecánica" />; */}
                </Form.Item>
              </Col>

              <Col span={12}>
                <Title
                  class="new-promo-subtitle"
                  level={4}
                  style={{
                    marginLeft: "2rem",
                    color: "#787878",
                  }}
                >
                  Tamaño de cliente
                </Title>

                <Form.Item
                  name="clientSize"
                  rules={[
                    {
                      required: true,
                      message: "Porfavor llena este campo",
                    },
                  ]}
                >
                  <TextArea
                    class="text-area-round"
                    placeholder="Nueva Promo"
                    autoSize={{
                      minRows: 1,
                      maxRows: 1,
                    }}
                    style={{
                      //width: "47.5rem",
                      //margin: "24px ",
                      borderRadius: "10px",
                    }}
                  />
                  {/* <Input placeholder="Título de mecánica" />; */}
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>

          <Title
            class="new-promo-subtitle"
            level={4}
            style={{
              marginLeft: "2rem",
              color: "#787878",
            }}
          >
            Reglas predefinidas
          </Title>

          <Form.Item
            name="predefinedRules"
            rules={[
              {
                required: true,
                message: "Porfavor llena este campo",
              },
            ]}
          >
            <TextArea
              class="text-area-round"
              placeholder="Nueva Promo"
              autoSize={{
                minRows: 1,
                maxRows: 1,
              }}
              style={{
                //width: "47.5rem",
                //margin: "24px ",
                borderRadius: "10px",
              }}
            />
          </Form.Item>

          <Title
            class="new-promo-subtitle"
            level={3}
            style={{
              marginLeft: "2rem",
              color: "black",
            }}
          >
            Crea tu propia regla
          </Title>
          <Input.Group>
            <Row gutter={8}>
              <Col span={8}>
                <Title
                  class="new-promo-subtitle"
                  level={4}
                  style={{
                    marginLeft: "2rem",
                    color: "#787878",
                  }}
                >
                  Acción a medir
                </Title>

                <Form.Item
                  name="action"
                  rules={[
                    {
                      required: true,
                      message: "Porfavor llena este campo",
                    },
                  ]}
                >
                  <TextArea
                    class="text-area-round"
                    placeholder="Nueva Promo"
                    autoSize={{
                      minRows: 1,
                      maxRows: 1,
                    }}
                    style={{
                      //width: "47.5rem",
                      //margin: "24px ",
                      borderRadius: "10px",
                    }}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Title
                  class="new-promo-subtitle"
                  level={4}
                  style={{
                    marginLeft: "2rem",
                    color: "#787878",
                  }}
                >
                  ¿En que aplicación lo mediremos?
                </Title>

                <Form.Item
                  name="aplication"
                  rules={[
                    {
                      required: true,
                      message: "Porfavor llena este campo",
                    },
                  ]}
                >
                  <TextArea
                    class="text-area-round"
                    placeholder="Nueva Promo"
                    autoSize={{
                      minRows: 1,
                      maxRows: 1,
                    }}
                    style={{
                      //width: "47.5rem",
                      //margin: "24px ",
                      borderRadius: "10px",
                    }}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Title
                  class="new-promo-subtitle"
                  level={4}
                  style={{
                    marginLeft: "2rem",
                    color: "#787878",
                  }}
                >
                  ¿cuantos días deberan haber pasado?
                </Title>

                <Form.Item
                  name="days"
                  rules={[
                    {
                      required: true,
                      message: "Porfavor llena este campo",
                    },
                  ]}
                >
                  <TextArea
                    class="text-area-round"
                    placeholder="Nueva Promo"
                    autoSize={{
                      minRows: 1,
                      maxRows: 1,
                    }}
                    style={{
                      //width: "47.5rem",
                      //margin: "24px ",
                      borderRadius: "10px",
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 35,
            }}
          >
            <Button
              style={{
                background: "#701E19",
                color: "white",
                minWidth: 240,
              }}
              shape="round"
              size={"large"}
            >
              Crear promoción
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default PromoconfigForm;
