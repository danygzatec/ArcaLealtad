import React from "react";
import "./NewPromo.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  connectFirestoreEmulator,
  initializeFirestore,
} from "@firebase/firestore";
// import NavBar from "../components/NavBar";
import { Button, Layout, theme, Col, Row, Typography, Table } from "antd";

//* Icons
import {
  LeftOutlined,
  PlusOutlined,
  SaveOutlined,
  EditOutlined,
} from "@ant-design/icons";
import app from "../../firebase";
initializeFirestore(app, {
  ignoreUndefinedProperties: true,
});
const db = getFirestore(app);

const { Content } = Layout;

const { Title, Paragraph, Text } = Typography;

export default function NewPromoRules(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [rules, setRules] = useState(new Map());
  const [tableRules, setTableRules] = useState([{
    cveProd: "1",
    nameProduct:
      "Catálogo de Refescoso Completos, Bebdia de base de soya Ades con jugo de manzana 946ml",
    category: 32,
    brand: ["bebidas"],
    quantPoints: 120,
    quantProducts: 2,
    quantPiezes: 3,
  }]);

  // Location variables log
  // console.log('end time log: ',location.state.endTime)
  // console.log('end date log: ',location.state.endDate)
  // console.log('switch toggle: ',location.state.switchToggle)
  //! Temp Data

  const dataSource = [
    {
      cveProd: "1",
      nameProduct:
        "Catálogo de Refescoso Completos, Bebdia de base de soya Ades con jugo de manzana 946ml",
      category: 32,
      brand: ["bebidas"],
      quantPoints: 120,
      quantProducts: 2,
      quantPiezes: 3,
    },
  ];

  //!Columns
  const columns = [
    {
      title: "Cve. Prod",
      dataIndex: "cveProd",
      key: "cveProd",
    },
    {
      title: "Nombre del producto",
      dataIndex: "nameProduct",
      key: "nameProduct",
    },
    {
      title: "Categoria",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Marca",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Cantidad de Puntos",
      dataIndex: "quantPoints",
      key: "quantPoints",
    },
    {
      title: "Cantidad de piezas",
      dataIndex: "quantPiezes",
      key: "quantPiezes",
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const savePromo = async (promo) => {
    const db = getFirestore();

    // ADD PROMO TO FIRESTORE
    const colRef = doc(db, "promocioness", "arca");
    const docSnap = await getDoc(colRef);
    if (docSnap.exists()) {
      let promos = docSnap.data().promos;
      let newPromo = promo;
      let newTitle = newPromo.title;
      console.log(newPromo.title);
      promos[newTitle] = promo;

      await updateDoc(colRef, { promos: promos });
    } else {
      console.log("no such document!");
    }
  };

  useEffect(() => {
    const getTableData = async () => {
      const data = await tableData();
      if (data) setTableRules(data);
    };
    const tableData = async () => {
      if (location.state.rules != undefined) {
        setRules(location.state.rules);
        let tempRules = [];
        let tempRuleMap = location.state.rules;
        let productNames = [];
        let brandNames = [];
        let totalItems = 0;
  
        for (let i = 0; i < tempRuleMap.size; i++) {
          let tempProductMap = tempRuleMap.get(i);
          console.log("tempProductMap: ", tempProductMap.products);
          for (let i = 0; i < tempProductMap.products.size; i++) {}
  
          for (let key of tempProductMap.products.keys()) {
            productNames.push(key);
            brandNames.push(tempProductMap.products.get(key).brand);
            totalItems += tempProductMap.products.get(key).quantity;
            console.log(key);
          }
  
          // for (let [key, value] of tempProductMap.products) {
          //   console.log(key + " = " + value);
          // }
          // tempProductNames = Object.keys(tempProductMap.products).map((key) =>{
          //   console.log('mapKey: ', key)
          //   return key
          // })
          console.log("tempProductNames: ", brandNames);
          tempRules.push({
            cveProd: "1",
            nameProduct: productNames,
            category: 32,
            brand: brandNames,
            quantPoints: tempProductMap.points,
            quantProducts: tempProductMap.products.size,
            quantPiezes: totalItems,
          });
        }
        //console.log("newPromo Rules: ", location.state.rules);
        return(tempRules);
        
      }
    }
    getTableData()
    
  }, [rules]);
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
          // maxHeight: '100%',
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
                <Col flex={1}>
                  <Button
                    shape="circle"
                    icon={<LeftOutlined />}
                    size="large"
                    className="backButton"
                  ></Button>
                </Col>
                <Col flex={12}>
                  <Title
                    level={3}
                    className="promoTitle"
                    style={{ position: "relative", top: 10, left: -1.5 }}
                  >
                    {location.state.title}
                  </Title>
                  <Paragraph style={{ position: "relative", top: -45 }}>
                    Nueva Promoción
                  </Paragraph>
                </Col>
                <Col flex={1}>
                  <Button
                    icon={<PlusOutlined />}
                    size="large"
                    className="addRule"
                    style={{
                      borderRadius: "20px",
                      paddingLeft: 30,
                      paddingRight: 30,
                      paddingBottom: 30,
                    }}
                    onClick={() => {
                      navigate("/nuevaRegla", {
                        state: {
                          title: location.state.title,
                          description: location.state.description,
                          startDate: location.state.startDate,
                          startTime: location.state.startTime,
                          endDate: location.state.endDate,
                          endTime: location.state.endTime,
                          client: location.state.client,
                          toggle: location.state.toggle,
                          rules: rules,
                        },
                      });
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        textAlign: "start",
                      }}
                    >
                      Agregar Regla
                    </Text>
                  </Button>
                </Col>
                <Col flex={1}>
                  <Button
                    shape="normal"
                    icon={<SaveOutlined />}
                    size="large"
                    className="saveButton"
                    onClick={() =>
                      savePromo({
                        title: location.state.title,
                        description: location.state.description,
                        startDate: location.state.startDate,
                        startTime: location.state.startTime,
                        endDate: location.state.endDate,
                        endTime: location.state.endTime,
                        client: location.state.client,
                        toggle: location.state.toggle,
                      })
                    }
                  >
                    Guardar Promoción
                  </Button>
                </Col>
              </Row>
              <Row>
                <Layout>
                  <Content className="content">
                    <Row>
                      <div
                        style={{
                          padding: 24,
                          maxHeight: 100,
                          backgroundColor: "#701E19",
                          borderTopLeftRadius: "16px",
                          borderTopRightRadius: "16px",
                          position: "absolute",
                          width: "40%",
                        }}
                      >
                        <div>
                          <Row>
                            <Col flex={2} style={{ top: "-15px" }}>
                              <Title
                                level={5}
                                style={{ color: "white", top: "1vh" }}
                              >
                                usuarios a aplicar
                              </Title>
                              <Text
                                strong
                                style={{
                                  color: "white",
                                  top: "2.5vh",
                                  position: "absolute",
                                  fontSize: "20px",
                                }}
                              >
                                {location.state.client}
                              </Text>
                            </Col>
                            <Col flex={2} style={{ top: "-15px" }}>
                              <Title
                                level={5}
                                style={{ color: "white", top: "1vh" }}
                              >
                                Disponibilidad de Promocion
                              </Title>
                              <Row>
                                <Text
                                  strong
                                  style={{
                                    color: "white",
                                    top: "2.5vh",
                                    position: "absolute",
                                    fontSize: "13px",
                                  }}
                                >
                                  {location.state.startDate.$D +
                                    "/" +
                                    location.state.startDate.$M +
                                    "/" +
                                    location.state.startDate.$y +
                                    " "}

                                  {location.state.startTime.$H +
                                    ":" +
                                    location.state.startTime.$M +
                                    ":" +
                                    location.state.startTime.$s +
                                    ""}

                                  {location.state.switchToggle &&
                                    " - " +
                                      location.state.endDate.$D +
                                      "/" +
                                      location.state.endDate.$M +
                                      "/" +
                                      location.state.endDate.$y +
                                      " "}

                                  {location.state.switchToggle &&
                                    location.state.endTime.$H +
                                      ":" +
                                      location.state.endTime.$M +
                                      ":" +
                                      location.state.endTime.$s +
                                      ""}
                                </Text>
                              </Row>
                            </Col>
                            <Col>
                              <Button
                                shape="circle"
                                size="xlarge"
                                icon={<EditOutlined className="editButton" />}
                                style={{ minWidth: "20%" }}
                              ></Button>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: 24,
                          backgroundColor: "#B73028",
                          borderTopLeftRadius: "16px",
                          borderTopRightRadius: "16px",
                          width: "100%",
                          maxHeight: 100,
                        }}
                      >
                        <div style={{ marginLeft: "45%" }}>
                          <Row>
                            <Col flex={2} style={{ top: "-15px" }}>
                              <Title
                                level={5}
                                style={{ color: "white", top: "1vh" }}
                              >
                                Descripción
                              </Title>
                              <Text
                                strong
                                style={{
                                  color: "white",
                                  top: "2.5vh",
                                  position: "absolute",
                                  fontSize: "20px",
                                }}
                              >
                                {location.state.description}
                              </Text>
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
                  <Table dataSource={tableRules} columns={columns} />
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
