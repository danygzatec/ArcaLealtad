import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useStepsForm } from "sunflower-antd";
import {
  Steps,
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
  TimePicker,
  Switch,
  Result,
  Radio,
  Card,
} from "antd";

import { PlusOutlined } from "@ant-design/icons";
const { Step } = Steps;

const { Title } = Typography;
const { TextArea } = Input;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
};
export default function NewPromoSetup(props) {
  const navigate = useNavigate();
  //   const [startDate, setStartDate] = useState([]);
  //   const [endDate, setEndDate] = useState([]);
  //   const [startTime, setStartStime] = useState([]);
  //   const [endTime, setEndTime] = useState([]);

  //   const [repeat, setRepeat] = useState("");
  const [switchToggle, setSwitchToggle] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSwitchToggle = (checked) => {
    setSwitchToggle(checked);
  };

  const handleClick = () => {
    submit().then((result) => {
      console.log(result)
      if (result.ok === "ok") {
        console.log('oook')
        gotoStep(current + 1);
        console.log(result.data);
        navigate("/newPromo", {
          state: {
            title: result.data.promoTitle,
            description: result.data.promoDescription,
            startDate: result.data.startDate,
            startTime: result.data.startTime,
            endDate: result.data.endDate,
            endTime: result.data.endTime,
            client: result.data.client,
            toggle: switchToggle 
          },
        });
      }
    });
  }

  //   const onStartChange = (date, dateString) => {
  //     console.log(date, dateString);
  //     setStartDate(date);
  //   };
  //   const onEndChange = (date, dateString) => {
  //     console.log(date, dateString);
  //     setEndDate(date);
  //   };siguit

  //   const onOk = (value) => {
  //     console.log("onOk: ", value);
  //   };

  const {
    form,
    current,
    gotoStep,
    stepsProps,
    formProps,
    submit,
    formLoading,
    // submit: formSubmit,
  } = useStepsForm({
    submit(data) {
      // const data = {
      //     promoTitle: promoTitle,
      //     promoDescription: promoDescription,
      //     startDate: startDate,
      //     startTime: startTime,
      //     endDate: endDate,
      //     endTime: endTime,
      //     siwtchBool: switchToggle,
      //     userToApply: userToApply,
      //     client: client,
      //     region: region,
      //     territory: territory,
      //     segmentation: segmentation,
      //     clientSize: clientSize,
      //     predefinedRules: predefinedRules,
      //     action: action,
      // };
      console.log("before Submit");
      console.log(data);

      let result = {
        data: data,
        ok: "ok",
      };

      return result;
    },
    total: 3,
  });

  const formList = [
    <>
      <div>
        <Row justify="center">
          <Col span={12} align="center">
            <Title
              class="new-promo-title"
              level={3}
              style={{ color: "#701E19" }}
            >
              Dale nombre a la Promocion
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
            {/* Promo Title */}
            <Title
              class="new-promo-subtitle"
              level={3}
              style={{
                marginLeft: "2rem",
                color: "#701E19",
              }}
            >
              Ingresa el título con el cual se publicará esta promoción
            </Title>
            {/* Promo Title  */}
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
                placeholder="Título de Promoción"
                autoSize={{
                  minRows: 1,
                  maxRows: 1,
                }}
                style={{
                  borderRadius: "10px",
                }}
              />
            </Form.Item>
            {/* Promo Title  */}
            {/* Promo Description */}
            <Title
              class="new-promo-subtitle"
              level={3}
              style={{
                marginLeft: "2rem",
                color: "#701E19",
              }}
            >
              Ingresa la descripción con el cual se publicará esta promoción
            </Title>
            <Form.Item
              name="promoDescription"
              rules={[
                {
                  required: true,
                  message: "Porfavor llena este campo",
                },
              ]}
            >
              <TextArea
                class="text-area-round"
                placeholder="Título de Promoción"
                autoSize={{
                  minRows: 3,
                  maxRows: 10,
                }}
                style={{
                  borderRadius: "10px",
                }}
              />
            </Form.Item>
            {/* Promo Description */}

            <Title
              class="titlePromo"
              name="promoTitle"
              level={3}
              style={{
                marginLeft: "2rem",
                color: "#701E19",
              }}
            >
              Selecciona el tipo de mecánica deseada
            </Title>

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
                    required:false,
                    message: "Por favor llena este campo",
                  },
                ]}
              >
                <Switch onChange={onSwitchToggle} />
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
                    <TimePicker />
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
                        required: !switchToggle,
                        message: "Por favor llena este campo",
                      },
                    ]}
                  >
                    <DatePicker disabled={switchToggle} />
                  </Form.Item>
                </Col>

                <Col span={12}>                  
                    <TimePicker disabled={switchToggle} />
                </Col>
              </Row>

              <Form.Item
                label="Repetir"
                name="repetir"
                rules={[
                  {
                    required: true,
                    message: "Por favor llena este campo",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="demo">Nunca</Select.Option>
                </Select>
              </Form.Item>
            </Card>
          </Form>
        </Row>
        {/* Submit */}
        <Row>
          <Col push={15}>
            <Form.Item {...tailLayout}>
              <Button
                onClick={() => gotoStep(current + 1)}
                style={{
                  minWidth: "300px",
                  borderRadius: "16px",
                  backgroundColor: " #701E19",
                  color: "white",
                }}
              >
                Siguiente
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </div>
    </>,

    <>
      <Row>
        <Col span={24}>
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
              level={4}
              style={{
                marginLeft: "2rem",
                color: "#787878",
              }}
            >
              Selecciona para quienes aplicará la promoción
            </Title>
            {/* User to apply */}
            <Form.Item
              name="userToApply"
              rules={[
                {
                  required: true,
                  message: "Porfavor llena este campo",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="todos los usuarios">A todos los usuarios</Radio>
                <Radio value={"Write"}>Vendedor(es) especifi(os)</Radio>
              </Radio.Group>
            </Form.Item>
            {/* User to apply */}

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
            {/* Code or name of Client */}
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
                  borderRadius: "10px",
                }}
              />
            </Form.Item>
            {/* Code or name of Client */}

            {/* Location */}
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
                        borderRadius: "10px",
                      }}
                    />
                  </Form.Item>
                  {/* Location */}
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
                  {/* Territory */}
                  <Form.Item
                    name="territory"
                    rules={[
                      {
                        required: true,
                        message: "Porfavor llena este campo",
                      },
                    ]}
                  >
                    <Input
                      class="text-area-round"
                      placeholder="Nueva Promo"
                      autoSize={{
                        minRows: 1,
                        maxRows: 1,
                      }}
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                  </Form.Item>
                  {/* Territory */}
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
                  {/* Segmentation */}
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
                        borderRadius: "10px",
                      }}
                    />
                  </Form.Item>
                  {/* Segmentation */}
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
                  {/* clientSize */}
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
                        borderRadius: "10px",
                      }}
                    />
                  </Form.Item>
                  {/* clientSize */}
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
            {/* predefinedRules */}
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
            {/* predefinedRules */}
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
                  {/* action */}
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
                        borderRadius: "10px",
                      }}
                    />
                  </Form.Item>
                  {/* action */}
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
                  {/* application */}
                  <Form.Item
                    name="aplication"
                    title="aplicacion"
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
                  {/* days */}
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
                  {/* days */}
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
                onClick={() => gotoStep(current + 1)}
              >
                Crear promoción
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Form.Item {...tailLayout}>
        <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
        <Button
          style={{
            background: "#701E19",
            color: "white",
            minWidth: 240,
            margin: 10,
          }}
          loading={formLoading}
          onClick={handleClick}
        >
          Submit
        </Button>

      </Form.Item>
    </>,
  ];

  return (
    <>
      <Row>
        <Col>
          <Modal
            title="Testing"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={1250}
          >
            <div>
              <Steps {...stepsProps}>
                <Step />
                <Step />
              </Steps>

              <div style={{ marginTop: 60 }}>
                <Form {...layout} {...formProps} style={{ maxWidth: 600 }}>
                  {formList[current]}
                </Form>

                {current === 2 && (
                  <Result
                    status="success"
                    title="Submit is succeed!"
                    extra={
                      <>
                        <Button
                          type="primary"
                          onClick={() => {
                            form.resetFields();
                            gotoStep(0);
                          }}
                        >
                          Buy it again
                        </Button>
                        <Button>Check detail</Button>
                      </>
                    }
                  />
                )}
              </div>
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
                borderColor: '#D7423C',
                paddingLeft: 30,
                paddingRight: 30,
                backgroundColor: "#D7423C",
              }}
              onClick={showModal}
            >
              Agregar Nueva Promoción
            </Button>
          </Space>
        </Col>
      </Row>
    </>
  );
}
