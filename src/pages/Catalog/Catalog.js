import React, { useState, useEffect } from "react";
import Navbar from "../../components/shared/Navbar";
import ProductCard from "../../components/Promotions/ProductCard";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Row,
  Col,
  Dropdown,
  Space,
  message,
  Input,
} from "antd";
import { DownOutlined, SmileOutlined, SaveOutlined } from "@ant-design/icons";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
const db = getFirestore();
const { Title, Text } = Typography;
/*
function RenderCategoryChips(categories, categoryButtons, handleClick) {
  categories.map((category, index) => {
    //console.log("before click", categoryButtons);

    return (
      <>
        {/* {categoryButtons === true ? backgroundColor= 'red': backgroundColor= 'green' }
    {console.log('wop',categoryButtons)} }/*
        <Button
          key={category}
          style={{
            backgroundColor: categoryButtons[index][0],
            color: categoryButtons[index][1],
            marginBottom: "10px",
            marginLeft: "10px",
          }}
          color={"blue"}
          shape="round"
          size={"large"}
          onClick={() => handleClick(index)}
        >
          {category}
        </Button>
      </>
    );
  });
}
*/

function Catalogo() {
  const { Search } = Input;
  const navigate = useNavigate();
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState(new Map());
  const [isModalOpen, setIsModalOpen] = useState(false);
  let rules = location.state.rules
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSearch = (value) => console.log(value);

  const [categories, setCategories] = useState([]);

  const [variants, setVariants] = useState([]);
  const [categoryButtons, setCategoryButtons] = useState([]);
  const [brandItems, setBrandItems] = useState([]);
  const [presentationItems, setPresentationItems] = useState([]);
  const [cards, setCards] = useState([]);
  let tempButtons = categoryButtons;
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menuProps = {
    items: brandItems,
    onClick: handleMenuClick,
  };
  const handleClick = (index) => {
    //let tempButtons = categoryButtons;
    console.log("categoryButtons1: ");
    if (tempButtons[index][2]) {
      tempButtons[index][0] = "#F6F6F6";
      tempButtons[index][1] = "#6B1515";
    }

    if (!tempButtons[index][2]) {
      tempButtons[index][0] = "#701E19";
      tempButtons[index][1] = "white";
    }
    tempButtons[index][2] = !tempButtons[index][2];
    setCategoryButtons([...tempButtons]);
    console.log("categoryButtons2: ", categoryButtons);

    console.log("categories: ", categories);
  };
  let CategoryChips = () => {
    return categories.map((category, index) => {
      console.log("before click", index);

      return (
        <>
          {/* {categoryButtons === true ? backgroundColor= 'red': backgroundColor= 'green' }
          {console.log('wop',categoryButtons)} */}
          <Button
            key={category}
            style={{
              backgroundColor: categoryButtons[index][0],
              color: categoryButtons[index][1],
              // backgroundColor: 'black',
              // color: 'white',
              marginBottom: "10px",
              marginLeft: "10px",
            }}
            color={"blue"}
            shape="round"
            size={"large"}
            onClick={() => handleClick(index)}
          >
            {category}
          </Button>
        </>
      );
    });
  };

  let ProductCards = () => {
    console.log("cards: ", cards[0]);
    if (cards[0] != undefined) {
      console.log("not undefined");
      return Object.values(cards[0]).map((card, index) => {
        //console.log("before click: ",index, ' ', card[1]);

        return (
          <>
            {/* {categoryButtons === true ? backgroundColor= 'red': backgroundColor= 'green' }
          {console.log('wop',categoryButtons)} */}
            <ProductCard
              name={card.nombre}
              tags={[card.nombre, card.marca, card.presentacion, card.cantidad]}
              path={card.path}
              setProducts={setProducts}
              products={products}
              price={card.precio}
              brand={card.marca}
            />
          </>
        );
      });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      let docRef = doc(db, "Productos", "Filtros");
      let docSnap = await getDoc(docRef);
      let tempItems = [];

      if (docSnap.exists()) {
        //console.log("Document data:", docSnap.get('Marcas'));
        console.log("filters exists");
        console.log("categorias: ", docSnap.get("Categorias"));
        console.log("Presentaciones: ", docSnap.get("Presentaciones"));
        console.log("brands: ", docSnap.get("Marcas"));
        setCategories(docSnap.get("Categorias"));
        setBrandItems(docSnap.get("Marcas"));
        setVariants(docSnap.get("Presentaciones"));

        for (let i = 0; i < docSnap.get("Categorias").length; i++) {
          categoryButtons.push(["#F6F6F6", "#701E19", false]);
        }
        console.log("blap  ");

        for (let i = 0; i < docSnap.get("Marcas").length; i++) {
          //console.log('brand item: ', i, ': ', docSnap.get("Marcas")[i] )
          //console.log("woop");
          tempItems.push({
            key: "1",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
              >
                {docSnap.get("Marcas")[i]}
              </a>
            ),
          });
        }

        setBrandItems(tempItems);

        tempItems = [];
        for (let i = 0; i < docSnap.get("Presentaciones").length; i++) {
          tempItems.push({
            key: "1",
            label: (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
              >
                {docSnap.get("Presentaciones")[i]}
              </a>
            ),
          });
        }
        setPresentationItems(tempItems);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      docRef = doc(db, "Productos", "Catalogo");
      docSnap = await getDoc(docRef);
      tempItems = [];
      if (docSnap.exists()) {
        //console.log("Document data:", docSnap.get('Marcas'));
        tempItems.push(docSnap.get("productos"));
        setCards(tempItems);
        console.log("setCards", tempItems);
      } else {
        console.log("noCards");
      }
    };
    fetchData();
  }, [categoryButtons, setBrandItems, setVariants]);

  return (
    <>
      <Row>
        <Col span={2}>
          <Navbar />
        </Col>

        <Col span={15}>
          <Row>
            <Title
              style={{
                color: "#6B1515",
                fontSize: "1.3vw",
                fontFamily: "DM Sans",
              }}
              level={1}
            >
              Catálogo
            </Title>
          </Row>
          <Row>
            <Text
              style={{
                color: "#787878",
                fontSize: "1vw",
                fontFamily: "DM Sans",
              }}
              level={1}
            >
              Utiliza los filtros de categorias y caracteristicas para agilizar
              tu búsqueda, al agregar producto selecciona la cantidad de piezas
            </Text>
          </Row>
        </Col>

        <Col offset={4}>
          <Button
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
                  products: products,
                  rules: rules
                },
              });
            }}
            style={{
              backgroundColor: "#9E292B",
              color: "white",
            }}
            icon={<SaveOutlined />}
            size={"large"}
          >
            Regresar a Regla
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }} align={"middle"}>
        <Col offset={2}>
          <Title
            style={{
              color: "#6B1515",
              fontSize: "1vw",
              fontFamily: "DM Sans",
            }}
            level={1}
          >
            CATEGORIAS
          </Title>
        </Col>
        <Col>
          {/* {categories.map((category, index) => {
            console.log("before click", categoryButtons);

            return (
              <>
                
                <Button
                  key={category}
                  style={{
                    backgroundColor: categoryButtons[index][0],
                    color: categoryButtons[index][1],
                    marginBottom: "10px",
                    marginLeft: "10px",
                  }}
                  color={"blue"}
                  shape="round"
                  size={"large"}
                  onClick={() => handleClick(index)}
                >
                  {category}
                </Button>
              </>
            );
          })} */}
          <CategoryChips />
        </Col>
        <Col offset={12}>
          <Input
            placeholder="¿Qué producto estas buscando?"
            onSearch={onSearch}
            style={{
              width: 300,
              borderRadius: "500px",
              color: "#701E19",
            }}
          />
        </Col>
      </Row>
      <Row align={"middle"}>
        <Col offset={2}>
          <Title
            style={{
              color: "#6B1515",
              fontSize: "1vw",
              fontFamily: "DM Sans",
              marginTop: "20px",
            }}
            level={1}
          >
            FILTROS
          </Title>
        </Col>

        <Col
          style={{
            marginTop: "18px",
            marginLeft: "10px",
            borderRadius: "50px",
          }}
        >
          <Dropdown menu={menuProps}>
            <Button
              style={{
                backgroundColor: "#F6F6F6",
                color: "#EA93BC",
                borderRadius: "50px",
              }}
            >
              <Space>
                Marca
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Col>

        <Col
          style={{
            marginTop: "18px",
            marginLeft: "10px",
            borderRadius: "50px",
          }}
        >
          <Dropdown
            menu={{
              items: presentationItems,
            }}
          >
            <Button
              style={{
                backgroundColor: "#F6F6F6",
                color: "#EA93BC",
                borderRadius: "50px",
              }}
            >
              <Space>
                Presentaciones
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <ProductCards />
      </Row>
    </>
  );
}

export default Catalogo;
