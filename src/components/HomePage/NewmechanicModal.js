import React from "react";
import {
  PlusOutlined,
} from "@ant-design/icons";
import {
  Row,
  Col,
  Typography,
  Button,
  Input,
  Select,
  Form,
  Modal,
  Space,
} from "antd";
import { useModalForm } from "sunflower-antd";
const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function NewmechanicModal({ props }) {

  const [form] = Form.useForm();
  const {
    modalProps,
    formProps,
    show,
    submit: formSubmit,
  } = useModalForm({
    defaultVisible: false,
    autoSubmitClose: true,
    async submit({ mechanicType, newMechanicTitle }) {
      console.log("beforeSubmit");
      await new Promise((r) => setTimeout(r, 1000));

      const data = {
        mechanicType: mechanicType,
        newMechanicTitle: newMechanicTitle,
        
      };
      sessionStorage.setItem("tempData", JSON.stringify(data));
      return "ok";
    },
    form,
  });
  return (
    <Row>
      <Col>
        <Modal
          {...modalProps}
          //title="Crea una nueva promoción"
          okText="testing"
          width={1000}
          //style={{"centered"}}}
          centered
          footer={null}
        >
          <div>
            <Row justify="center">
              <Col span={9} align="center">
                <Title
                  class="new-promo-title"
                  level={3}
                  style={{ color: "#701E19" }}
                >
                  Dale nombre a la Mecánica
                </Title>
              </Col>
            </Row>
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ marginTop: "2rem" }}
            >
              <Form
                {...formProps}
                style={{ width: "55.4rem" }}
                name="basic"
                labelCol={{
                  span: 42,
                }}
                wrapperCol={{
                  span: 42,
                }}
                initialValues={{
                  remember: true,
                }}
              >
                <Title
                  class="new-promo-subtitle"
                  level={3}
                  style={{
                    marginLeft: "2rem",
                    color: "#701E19",
                  }}
                >
                  Ingresa el título con el cual se identificará esta mecánica
                </Title>

                <Form.Item
                  name="mechanicType"
                  rules={[
                    {
                      required: true,
                      message: "Porfavor llena este campo",
                    },
                  ]}
                >
                  <TextArea
                    class="text-area-round"
                    placeholder="Autosize height with minimum and maximum number of lines"
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

                <Title
                  class="titlePromo"
                  level={3}
                  style={{
                    marginLeft: "2rem",
                    color: "#701E19",
                  }}
                >
                  Selecciona el tipo de mecánica deseada
                </Title>
                <Form.Item
                  label=""
                  name="newMechanicTitle"
                  rules={[
                    {
                      required: true,
                      message: "Por favor llena este campo",
                    },
                  ]}
                >
                  <Select
                    // defaultValue="users"
                    placeholder="escoger una opcion"
                    style={{
                      // width: "47.5rem",
                      // margin: "2rem",
                      borderRadius: "5rem",
                    }}
                  >
                    <Option value="users">
                      Promoción para todos los usuarios
                    </Option>
                    <Option value="levels">
                      {" "}
                      Promoción por numero de millas
                    </Option>
                    <Option value="vendors"> Promoción para sucursales</Option>
                  </Select>

                </Form.Item>

                

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 35,
                  }}
                >
                  <Button
                    style={{
                      background: "#D7423C",
                      color: "white",
                      minWidth: 240,
                    }}
                    shape="round"
                    size={"large"}
                    onClick={() =>
                      formSubmit(Input)
                        .then((data) => {
                          console.log(data);
                          if (data === "ok") {
                            // modalProps.onOk(true);
                            // navigate("/new-promo");
                            console.log("ok");
                          }
                        })
                        .catch((err) => {
                          console.log("problem with the form", err);
                        })
                    }
                  >
                    Siguiente
                  </Button>
                </Form.Item>
              </Form>
            </Row>
          </div>
        </Modal>
      </Col>

      <Col>
        <Space>
          {/* <Button
            type="default"
            size="large"
            shape="round"
            style={{
              background: "black",
              color: "white",
              width: 210,
            }}
            onClick={show}
            //icon={<AddIcon/>}
          >
            Agregar promoción
          </Button> */}
          <Button
            icon={<PlusOutlined />}
            size="large"
            className="addRule"
            style={{
              borderRadius: "20px",
              paddingLeft: 30,
              paddingRight: 30,
              backgroundColor: "#D7423C",
            }}
            onClick={show}
          >
            Agregar Nueva Mecánica
          </Button>
        </Space>
      </Col>
    </Row>
  );
}
