import React from "react";
import './HomePage.css';

// import NavBar from "../components/NavBar";
import { Button,  Layout, theme, Col, Row, Typography,  Table, Input } from "antd";


//* Icons 
import { LeftOutlined,} from '@ant-design/icons';

import NewPromoSetup from "../../components/NewPromoSetup";

const {  Content } = Layout;

const { Title } = Typography;

export default function HomePage(props) {

    //! Temp Data
    const dataSource = [
        {
            cveProd: '1',
            nameProduct: 'Catálogo de Refescoso Completos, Bebdia de base de soya Ades con jugo de manzana 946ml',
            category: 32,
            brand: ["bebidas"],
            quantPoints: 120,
            quantProducts: 2,
            quantPiezes: 3
        },

    ];

    //!Columns
    const columns = [
        {
            title: 'Cve. Prod',
            dataIndex: 'cveProd',
            key: 'cveProd',
        },
        {
            title: 'Nombre del producto',
            dataIndex: 'nameProduct',
            key: 'nameProduct',
        },
        {
            title: 'Categoria',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Marca',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Cantidad de Puntos',
            dataIndex: 'quantPoints',
            key: 'quantPoints',
        },
        {
            title: 'Cantidad de piezas',
            dataIndex: 'quantPiezes',
            key: 'quantPiezes',
        },
    ];


    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Layout className="site-layout-content">
                    <Content
                        style={{
                            margin: '0 16px',
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
                                minHeight: '90vh',
                            }}
                        >
                            <Row>
                                <Col flex={1}>
                                    <Button shape="circle" icon={<LeftOutlined />} size="large" className="backButton">
                                    </Button>
                                </Col>
                                <Col flex={12}>
                                    <Title level={2} className="promoTitle" style={{ position: "relative", top: -5, left: -1.5 }} >Mi Motor de Promociones</Title>
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
                                                    width: "100%",
                                                    // eslint-disable-next-line no-dupe-keys
                                                    maxHeight: 90,
                                                }}
                                            >
                                                <div>
                                                    <Row>
                                                        <Col flex={2}>
                                                            <Input placeholder="Basic usage" style={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px", minHeight: "4vh", maxHeight:"5vh"}} />
                                                        </Col>
                                                        <Col flex={2} push={8} >
                                                                <NewPromoSetup />
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
                                    <Table dataSource={dataSource} columns={columns} />
                                </Col>
                                {/* Table of promotions */}
                            </Row>
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </>
    )
}