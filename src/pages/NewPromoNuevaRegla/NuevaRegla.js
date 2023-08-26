import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Button, Typography, Input, Card, Tag } from "antd";
import { Link } from "react-router-dom";
import {
  LeftOutlined,
  SaveOutlined,
  PlusOutlined,
  MinusOutlined,
  DownloadOutlined,
  ConsoleSqlOutlined,
} from "@ant-design/icons";
//import "./NuevaRegla.css";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "@ant-design/icons/lib/components/Icon";
const { Header, Content, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;

function NuevaRegla() {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState(location.state.products);
  const [price, setPrice] = useState(location.state.price);
  const [points, setPoints] = useState(0);
  let [dummyValue, setState] = useState(true);
  let rules = location.state.rules;
  function UseForceUpdate() {
    return () => setState(!dummyValue);
  }
  function HandleClick(
    value,
    pathSrc,
    tags,
    products,
    add,
    setProducts,
    price
  ) {
    console.log(value);
    let tempProducts = new Map();
    tempProducts = products;
    console.log("tempProducts", tempProducts);
    const updateMap = (key, value) => {
      setProducts((map) => new Map(map.set(key, value)));
    };
    let tempPrice = price;
    // useEffect(() => {
    //   console.log("useEffect:", products);
    // }, []);
    if (add) {
      console.log("will add");
      if (tempProducts.get(value) != undefined) {
        updateMap(value, {
          quantity: tempProducts.get(value).quantity + 1,
          path: pathSrc,
          tags: tags,
          price: price,
        });

        // tempProducts.set(value, {
        //   quantity: tempProducts.get(value).quantity + 1,
        //   path: pathSrc,
        //   tags: tags,
        // });
      } else {
        // updateMap(value, {
        //   quantity:1,
        //   path: pathSrc,
        //   tags: tags,
        // })
        // tempProducts.set(value, {
        //   quantity: 1,
        //   path: pathSrc,
        //   tags: tags,
        // });
      }
    } else {
      if (
        tempProducts.get(value) != undefined &&
        tempProducts.get(value).quantity > 1
      ) {
        console.log(
          "amount: ",
          tempProducts.get(value).quantity,
          " ,",
          tempProducts.get(value).quantity < 2,
          ", ",
          typeof tempProducts.get(value).quantity
        );
        updateMap(value, {
          quantity: tempProducts.get(value).quantity - 1,
          path: pathSrc,
          tags: tags,
          price: price,
        });
        // tempProducts.set(value, {
        //   quantity: tempProducts.get(value).quantity - 1,
        //   path: pathSrc,
        //   tags: tags,
        // });

        console.log("quantity: ", tempProducts.get(value).quantity);
      }
      if (tempProducts.get(value).quantity < 2) {
        console.log("will delete: ", value, typeof value);
        tempProducts.delete(value);
        products.delete(value);
        console.log("after delete ", tempProducts);
        setProducts((map) => new Map(products));
      }
    }

    //console.log('image Source: ', pathSrc)
    //console.log('testGet: ', temProducts.get(value) )
    // let testMap = new Map();
    // testMap.set("cocal", {
    //   path: "https://firebasestorage.googleapis.com/v0/b/proyectoloyalty-82049.appspot.com/o/CocaCola.png?alt=media&token=458a1646-41b7-4143-abf6-d63cc8199689",
    //   quantity: 1,
    //   tags: ["cocal", "coca-cola", "1L", 1],
    // });
    // setProducts(testMap);
    //console.log("testMap: ", testMap);

    // setProducts(tempProducts);
    // UseForceUpdate()
  }
  const addRule = (products, points) => {
    let rules = location.state.rules;

    if (products != undefined && products.size > 0 && rules != undefined) {
      let index = rules.size;
      rules.set(index, { products: products, points: points });
      console.log("added rule rules: ", rules);
    }

    navigate("/newPromo", {
      state: {
        title: location.state.title,
        description: location.state.description,
        startDate: location.state.startDate,
        startTime: location.state.startTime,
        endDate: location.state.endDate,
        endTime: location.state.endTime,
        client: location.state.client,
        toggle: location.state.toggle,
        products: products,
        rules: rules,
      },
    });
  };
  const renderProducts = (products, setProducts, UseForceUpdate) => {
    // console.log(
    //   "product array: ",
    //   products,
    //   'objects',
    //   Object.values(products),
    //   Object.values(products).length,
    //   typeof products
    // );
    console.log("raw products: ", products);
    try {
      //console.log('woop')
      let productNumber = products.size;
      //console.log(productNumber)
      //console.log('productNumber: ',productNumber)
      //console.log('product element 0: ', Array.from(products))
      //console.log("product element 0: ", Array.from(Object.values(products)[0]));

      if (productNumber > 0) {
        let cards = Array.from(products).map((product, index) => {
          console.log("product: ", index, " ", product[1]);
          return (
            <Card
              style={{
                width: "35vw",
                height: "10vh",
                color: "blue",
                backgroundColor: "white",
                borderRadius: "80",
                padding: "-30px",
                margin: "10px",
                boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
              }}
            >
              <Row justify={"center"}>
                <Col>
                  <img
                    // style={{

                    // }}
                    height={60}
                    src={product[1].path}
                  />
                </Col>

                <Col>
                  <Title level={4} style={{ color: "#717172" }}>
                    {" "}
                    {product[0] + ""}{" "}
                  </Title>
                  <Row style={{ marginTop: "-10" }}>
                    {product[1].tags.map((tag) => {
                      return (
                        <Tag
                          key={tag}
                          color="default"
                          style={{
                            height: "19px",
                            color: "white",
                            backgroundColor: "white",
                          }}
                        >
                          <Text style={{ fontSize: "10px", color: "#565656" }}>
                            {tag}
                          </Text>
                        </Tag>
                      );
                    })}
                  </Row>
                </Col>
                <Col span={2}>
                  <Button
                    shape="circle"
                    icon={<MinusOutlined />}
                    size="small"
                    style={{
                      color: "white",
                      backgroundColor: "#9E292B",
                    }}
                    onClick={() =>
                      HandleClick(
                        product[0],
                        product[1].path,
                        product[1].tags,
                        products,
                        false,
                        setProducts,

                        product[1].price
                      )
                    }
                  />
                </Col>
                <Col span={2}>
                  <Title level={4} style={{ color: "#701E19" }}>
                    {product[1].quantity}
                  </Title>
                </Col>

                <Col span={2}>
                  <Button
                    shape="circle"
                    icon={<PlusOutlined style={{ fontSize: "12px" }} />}
                    size="small"
                    style={{
                      color: "white",
                      backgroundColor: "#9E292B",
                    }}
                    onClick={() =>
                      HandleClick(
                        product[0],
                        product[1].path,
                        product[1].tags,
                        products,
                        true,
                        setProducts,
                        product[1].price
                      )
                    }
                  />
                </Col>
              </Row>

              {console.log("product: ", product[1])}
            </Card>
          );
        });
        return cards;
      } else {
        console.log("empty products", products[0].length);
      }
    } catch (error) {
      return "";
    }
  };
  useEffect(() => {
    //let mapSize = products.size
    let tempPrice = 0;

    // Object.keys(products).map((key) => {
    //   console.log('key: ', key)
    //   console.log('price: ', products.get(key).precio)
    //   tempPrice = tempPrice +  (products.get(key).precio * products.get(key).quantity)
    // })

    // if (products != undefined) {
    //   try {
    //     console.log("products useEfect", products);
    //     Object.entries(products).forEach((entry) => {
    //       const [key, value] = entry;
    //       console.log(key, value);
    //     });
    //     setPrice(tempPrice);
    //   } catch (error) {
    //     console.log("error: ", error);
    //   }
    // }

    try {
      let cards = Array.from(products).map((product, index) => {
        if (product[1].price != undefined) {
          console.log("price:  ", product[1].price);
          tempPrice = tempPrice + product[1].price * product[1].quantity;
        }
      });
      setPrice(tempPrice);
    } catch (error) {
      console.log("error: ", error);
    }
  }, [products]);

  return (
    <>
      <Row style={{ backgroundColor: "white" }} justify={"center"}>
        <Col span={1} style={{ backgroundColor: "white" }}>
          <Button
            shape="circle"
            icon={<LeftOutlined />}
            size="large"
            onClick={() => {
              navigate("/newPromo", {
                state: {
                  title: location.state.title,
                  description: location.state.description,
                  startDate: location.state.startDate,
                  startTime: location.state.startTime,
                  endDate: location.state.endDate,
                  endTime: location.state.endTime,
                  client: location.state.client,
                  toggle: location.state.toggle,
                  products: products,
                  rules: rules,
                },
              });
            }}
          ></Button>
        </Col>
        <Col span={20} style={{ backgroundColor: "white" }}>
          <Row>
            <Col span={14}>
              <Paragraph style={{ fontSize: "1vw" }}>Regla Nueva</Paragraph>
              <Paragraph style={{ fontSize: "1vw" }}>
                Selecciona los productos deseados usando el catálogo y configura
                los parámetros de tu regla
              </Paragraph>
            </Col>
            <Col span={3} offset={7}>
              <Button
                type="dashed "
                size="large"
                onClick={() => {
                  navigate("/Catalogo", {
                    state: {
                      title: location.state.title,
                      description: location.state.description,
                      startDate: location.state.startDate,
                      startTime: location.state.startTime,
                      endDate: location.state.endDate,
                      endTime: location.state.endTime,
                      client: location.state.client,
                      toggle: location.state.toggle,
                      products: products,
                      rules: rules,
                    },
                  });
                }}
              >
                + Ver Catálogo
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify={"center"} style={{ backgroundColor: "white" }}>
        <Col span={9} style={{ backgroundColor: "wite" }}>
          <Title level={3}>Total Acumulado</Title>
          <Title
            level={3}
            style={{
              backgroundColor: "#D4BBBA",
              color: "white",
              fontFamily: "DM Sans",
              fontSize: "60",
            }}
          >
            ${price}
          </Title>
          <Title>Cantidad de Puntos al cumplir la Regla</Title>
          <Input
            placeholder="0"
            onChange={(value) => {
              setPoints(value);
            }}
          />
        </Col>

        <Col span={12}>
          <Card
            style={{
              width: "45vw",
              height: "58vh",
              color: "gray",
              backgroundColor: "#F6F6F6",
              borderRadius: "50",
              padding: "-20px",
              margin: "10px",
            }}
          >
            {renderProducts(products, setProducts, UseForceUpdate)}
          </Card>
        </Col>
      </Row>

      <Row justify={""} style={{ backgroundColor: "white" }}>
        <Col offset={14}>
          <Text style={{ color: "#701E19", fontSize: ".9vw" }}>(0) </Text>
          <Text style={{ color: "#7E7E7E", fontSize: ".9vw" }}>
            Productos Agregados{" "}
          </Text>
          <Text style={{ color: "#701E19" }}>(0) </Text>
          <Text style={{ color: "#7E7E7E", fontSize: ".9vw" }}>Piezas </Text>
        </Col>
      </Row>

      <Row style={{ backgroundColor: "white" }}> 
        <Col offset={16}> 
          <Button
            shape="round" 
            size="large"
            style={{ color: "white", backgroundColor: "#D81635" }} 
            onClick={() => addRule(products, points)} 
          > 
            + Agregar Regla
          </Button>
          <Button
            shape="circle"
            icon={<SaveOutlined/>} 
            size="large" 
            style={{
              marginLeft: "3em",
              color: "white",
              backgroundColor: "#9E292B",
            }}
          ></Button>
        </Col>
      </Row>
    </>
  );
}

export default NuevaRegla;
