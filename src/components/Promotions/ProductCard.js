import React from "react";
import { Card, Col, Image, Row, Typography, Tag, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./productCard.css";
const { Text } = Typography;

function ProductCard(props) {
  let handleClick = (value, pathSrc, tags, price, brand) => {
    console.log(value);
    let tempProducts = props.products;

    if (tempProducts.get(value) != undefined) {
      tempProducts.set(value, {
        quantity: tempProducts.get(value).quantity + 1,
        path: pathSrc,
        tags: tags,
        price: price,
        brand: brand
      });
    } else {
      tempProducts.set(value, {
        quantity: 1,
        path: pathSrc, 
        tags: tags,
        price: price,
        brand: brand
      });
    }
    
    console.log("productMap: ", tempProducts);
    //console.log('image Source: ', pathSrc)
    //console.log('testGet: ', temProducts.get(value) )
    props.setProducts(tempProducts);
  };
  return (
    <Card
      className="product-cardd"
      style={{
        width: "21vw",
        height: "8vw",
        borderRadius: "50",
        padding: "-20px",
        margin: "10px",
      }}
      bodyStyle={{ padding: "10px" }}
    >
      <Row gutter={2} justify={"center"} align={"top"}>
        <Col span={4} offset={0}>
          <img
            style={{
              marginTop: "1vh",
            }}
            height={70}
            src={props.path}
          />
        </Col>
        <Col span={16}>
          <Row>
            <Text
              level={1}
              style={{
                color: "#717172",
                fontSize: "1vw",
                fontFamily: "Poppins",
                width: "10vw",
                height: "3vw",
                marginTop: "5px",
              }}
            >
              {props.name}
            </Text>
          </Row>
          <Row style={{ marginTop: "1.5vh" }}>
            {props.tags.map((tag) => {
              return (
                <Tag
                  key={tag}
                  color="default"
                  style={{
                    height: "20px",
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
        <Col span={1}>
          <Row style={{ marginBottom: "5vh" }}>
            <Button
              shape="circle"
              style={{
                borderRadius: "100",
                border: "none",
                margin: 0,
              }}
              icon={
                <PlusCircleOutlined
                  style={{ color: "#701E19", fontSize: "1.5vw" }}
                />
              }
              onClick={() => handleClick(props.name, props.path, props.tags, props.price, props.brand)}
            ></Button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductCard;
