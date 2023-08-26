import React, { useState } from "react";
import { Layout, Row, Col, Button, Typography, Input, Card, Tag } from "antd";
import { Link } from "react-router-dom";
import {
  LeftOutlined,
  SaveOutlined,
  PlusOutlined,
  MinusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
const { Title, Paragraph, Text } = Typography;
function RenderProducts(props) {
  let handleClick = (value, pathSrc, tags, products, add) => {
    console.log(value);
    let tempProducts = props.products;
    console.log("tempProducts", tempProducts);
    if (add) {
      if (tempProducts.get(value) != undefined) {
        tempProducts.set(value, {
          quantity: tempProducts.get(value).quantity + 1,
          path: pathSrc,
          tags: tags,
        });
      } else {
        tempProducts.set(value, {
          quantity: 1,
          path: pathSrc,
          tags: tags,
        });
      }
    } else {
      if (tempProducts.get(value) != undefined) {
        tempProducts.set(value, {
          quantity: tempProducts.get(value).quantity - 1,
          path: pathSrc,
          tags: tags,
        });
        console.log("quantity: ", tempProducts.get(value).quantity);

        if (tempProducts.get(value).quantity == 0) {
          tempProducts.delete(value);
        }
      }
    }

    console.log("productMap: ", tempProducts);
    //console.log('image Source: ', pathSrc)
    //console.log('testGet: ', temProducts.get(value) )
    props.setProducts(tempProducts);
  };

  console.log(
    "product array: ",
    props.products.products,
    "objects",
    Object.values(props.products),
    Object.values(props.products).length,
    typeof props.products
  );
  console.log("raw products: ", props.products);
  try {
    let productNumber = Object.values(props.products)[0].size;
    //console.log('productNumber: ',productNumber)
    console.log("product element 0: ", Object.values(props.products.products));
    //console.log("product element 0: ", Array.from(Object.values(products)[0]));

    if (productNumber > 0) {
      let cards = Array.from(Object.values(props.products)[0]).map(
        (product, index) => {
          return (
            <Card
              style={{
                width: "32vw",
                height: "10vh",
                color: "blue",
                backgroundColor: "white",
                borderRadius: "80",
                padding: "-30px",
                margin: "10px",
                boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
              }}
            >
              <Row>
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
                      handleClick(
                        product[0],
                        product[1].tags,
                        product[1].path,
                        props.products.products,
                        false
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
                  />
                </Col>
              </Row>

              {console.log("product: ", product[1])}
            </Card>
          );
        }
      );
      return cards;
    } else {
      console.log("empty products", props.products[0].length);
    }
  } catch (error) {
    return "";
  }
}

export default RenderProducts