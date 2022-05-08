import { Layout, Menu, PageHeader, Tag } from "antd";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
// const reader = new FileReader();
// reader.readAsDataURL(file);

export const LayoutPage = () => {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[0]}>
          <Menu.SubMenu key="/" title="Строение вещества">
            <Menu.Item key="0">
              <Link to="/">Валентные возможности атомов</Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/1">Водородная химическая связь</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/2">Газообразные вещества</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/3">Гибридизация атомных орбиталей</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/4">Жидкие вещества</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/5">Ионная химическая связь</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/6">Ковалентная химическая связь</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" title="Химические реакции">
            <Menu.Item key="7">
              <Link to="/7">Гидролиз</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/8">Гидролиз солей</Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/9">Закон Фарадея для электролиза</Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="/10">Классификация химических реакций</Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to="/11">Электролиз </Link>
            </Menu.Item>
            <Menu.Item key="12">
              <Link to="/12">Электролиз воды</Link>
            </Menu.Item>
            <Menu.Item key="13">
              <Link to="/13">Электролиз расплавов</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub3" title="Вещества и их свойства">
            <Menu.Item key="14">
              <Link to="/14">Генетическая связь между классами неорганических веществ</Link>
            </Menu.Item>
            <Menu.Item key="15">
              <Link to="/15">Заменимые аминокислоты</Link>
            </Menu.Item>
            <Menu.Item key="16">
              <Link to="/16">Заменимые и незаменимые аминокислоты</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <PageHeader
          title="Цор по дисциплине Химия"
          className="site-page-header"
          subTitle="Автор:"
          tags={[
            <Tag color="blue" key={1}>
              Каличинский Владислав
            </Tag>,
            <Tag color="blue" key={2}>
              П-18-46к
            </Tag>,
          ]}
          avatar={{ src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4" }}
        ></PageHeader>
        <Content>
          <div className="site-layout-background" style={{ padding: 24 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
