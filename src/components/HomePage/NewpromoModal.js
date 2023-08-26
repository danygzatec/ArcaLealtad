import React from "react";
import { useModalForm } from "sunflower-antd";
import { useNavigate } from "react-router-dom";
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
  DatePicker,
  Switch,
  Card,
  TimePicker,
} from "antd";

const { Title } = Typography;
const { TextArea } = Input;

const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
};
export default function NewpromoModal({ props }) {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const {
    modalProps,
    formProps,
    show,
    submit: formSubmit,
  } = useModalForm({
    defaultVisible: false,
    autoSubmitClose: true,
    async submit({ promoTitle, promoDescription, startDate, startTime, endDate, endTime,siwtchBool }) {
      console.log("beforeSubmit");
      await new Promise((r) => setTimeout(r, 1000));

      const data = {
        promoTitle: promoTitle,
        promoDescription: promoDescription,
        startDate: startDate,
        startTime: startTime,
        endDate: endDate,
        endTime: endTime,
        siwtchBool: siwtchBool,
      };
      sessionStorage.setItem("tempData", JSON.stringify(data));
      //console.log(data)
      return {
        ok: "ok",
        data: data,
      };
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
                  Dale nombre a la Promoción
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

                <Row>

                </Row>
                <Title
                  class="new-promo-subtitle"
                  level={5}
                  style={{
                    marginLeft: "2rem",
                    color: "#787878",
                  }}
                >
                  Ingresa el título con el cual se publicará esta promoción
                </Title>

                <Form.Item
                  name="promoTitle"
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

                <Title
                  class="titlePromo"
                  level={5}
                  style={{
                    marginLeft: "2rem",
                    color: "#787878",
                  }}
                >
                  Ingresa la descripción con el cual se publicará esta promoción
                </Title>
                <Form.Item
                  label=""
                  name="promoDescription"
                  rules={[
                    {
                      required: true,
                      message: "Por favor llena este campo",
                    },
                  ]}
                >
                  <TextArea
                    class="text-area-round"
                    placeholder="Nueva Promo"
                    autoSize={{
                      minRows: 3,
                      maxRows: 3,
                    }}
                    style={{
                      //width: "47.5rem",
                      //margisubmitn: "24px ",
                      borderRadius: "10px",
                    }}
                  />
                </Form.Item>

                <Title
                  class="titlePromo"
                  level={5}
                  style={{
                    marginLeft: "2rem",
                    color: "#787878",
                  }}
                >
                  Define Periodo de Duración
                </Title>
                

                <Card style={{ width: 400 }}>
                  <Form.Item
                    label="Indefinido"
                    valuePropName="checked"
                    name="siwtchBool"
                    rules={[
                      {
                        required: true,
                        message: "Por favor llena este campo",
                      },
                    ]}
                  >
                    <Switch />
                  </Form.Item>

                  <Row gutter={4}>
                    <Col span={12}>
                      <Form.Item
                        name="startDate"
                        label="Empieza"
                        {...rangeConfig}
                        rules={[
                          {
                            required: true,
                            message: "Por favor llena este campo",
                          },
                        ]}
                      >
                        <DatePicker />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name="startTime"
                        label=""
                        {...rangeConfig}
                        rules={[
                          {
                            required: true,
                            message: "Por favor llena este campo",
                          },
                        ]}
                      >
                        <TimePicker/>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={4}>
                    <Col span={12}>
                      <Form.Item
                        name="endDate"
                        label="Termina"
                        {...rangeConfig}
                        rules={[
                          {
                            required: true,
                            message: "Por favor llena este campo",
                          },
                        ]}
                      >
                        <DatePicker />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item
                        name="endTime"
                        label=""
                        {...rangeConfig}
                        rules={[
                          {
                            required: true,
                            message: "Por favor llena este campo",
                          },
                        ]}
                      >
                        <TimePicker/>
                      </Form.Item>
                    </Col>
                  </Row>

                  
                  <Form.Item label="Repetir">
                    <Select>
                      <Select.Option value="demo">Nunca</Select.Option>
                    </Select>
                  </Form.Item>
                </Card>

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
                          if (data.ok === "ok") {
                            // modalProps.onOk(true);
                            console.log("title", data.data.promoTitle);
                            navigate("/newPromo", {
                              state: {
                                title: data.data.promoTitle,
                                description: data.data.promoDescription,
                                startDate: data.data.startDate,
                                startTime: data.data.startTime,
                                endDate: data.data.endDate,
                                endTime: data.data.endTime,
                              },
                            });
                            //console.log("ok");
                            console.log("ok", data);
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
            Agregar Promoción
          </Button>
        </Space>
      </Col>
    </Row>
  );
}