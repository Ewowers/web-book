import { Layout, Menu, PageHeader, Tag } from "antd";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
// const reader = new FileReader();
// reader.readAsDataURL(file);

export const LayoutPage = () => {
  let lang = window.location.href.split("/").at(-2);
  let paragraph = window.location.href.split("/").pop(-1);
  let active = lang + "/" + paragraph === "localhost:3000/" ? "/" : lang + "/" + paragraph;
  console.log(active);
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[active === "/" ? "html/paragraph1" : active]} defaultOpenKeys={[active === "/" ? "html" : lang]}>
          <SubMenu key="html" icon={<i className="fa-brands fa-html5" />} title="HTML">
            <Menu.Item key="html/paragraph1">
              <Link to="/html/paragraph1">Введения</Link>
            </Menu.Item>
            <Menu.Item key="html/paragraph2">
              <Link to="/html/paragraph2">Основы</Link>
            </Menu.Item>
            <Menu.Item key="html/paragraph3">
              <Link to="/html/paragraph3">Элементы</Link>
            </Menu.Item>
            <Menu.Item key="html/paragraph4">
              <Link to="/html/paragraph4">Атрибуты</Link>
            </Menu.Item>
            <Menu.Item key="html/paragraph5">
              <Link to="/html/paragraph5">Стили</Link>
            </Menu.Item>
            <Menu.Item key="html/paragraph6">
              <Link to="/html/paragraph6">Коментарий</Link>
            </Menu.Item>
            <Menu.Item key="html/paragraph7">
              <Link to="/html/paragraph7">Мета теги</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="css" icon={<i className="fa-brands fa-css3-alt" />} title="Css">
            <Menu.Item key="css/paragraph1">
              <Link to="/css/paragraph1">Введения</Link>
            </Menu.Item>
            <Menu.Item key="css/paragraph2">
              <Link to="/css/paragraph2">Синтаксис</Link>
            </Menu.Item>
            <Menu.Item key="css/paragraph3">
              <Link to="/css/paragraph3">Подключить</Link>
            </Menu.Item>
            <Menu.Item key="css/paragraph4">
              <Link to="/css/paragraph4">Комментарии</Link>
            </Menu.Item>
            <Menu.Item key="css/paragraph5">
              <Link to="/css/paragraph5">Цвета</Link>
            </Menu.Item>
            <Menu.Item key="css/paragraph6">
              <Link to="/css/paragraph6">Границы</Link>
            </Menu.Item>
            <Menu.Item key="css/paragraph7">
              <Link to="/css/paragraph7">Текст</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="js" icon={<i className="fa-brands fa-node-js" />} title="Javascript">
            <Menu.Item key="js/paragraph1">
              <Link to="/js/paragraph1">Введения</Link>
            </Menu.Item>
            <Menu.Item key="js/paragraph2">
              <Link to="/js/paragraph2">Переменные</Link>
            </Menu.Item>
            <Menu.Item key="js/paragraph3">
              <Link to="/js/paragraph3">Операторы</Link>
            </Menu.Item>
            <Menu.Item key="js/paragraph4">
              <Link to="/js/paragraph4">Функций</Link>
            </Menu.Item>
            <Menu.Item key="js/paragraph5">
              <Link to="/js/paragraph5">Массив</Link>
            </Menu.Item>
            <Menu.Item key="js/paragraph6">
              <Link to="/js/paragraph6">Условные конструкций</Link>
            </Menu.Item>
            <Menu.Item key="js/paragraph7">
              <Link to="/js/paragraph7">Циклы</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="bootstrap" icon={<i className="bi bi-bootstrap"></i>} title="Bootstrap">
            <Menu.Item key="bootstrap/paragraph1">
              <Link to="/bootstrap/paragraph1">Введения</Link>
            </Menu.Item>
            <Menu.Item key="bootstrap/paragraph2">
              <Link to="/bootstrap/paragraph2">Настройка</Link>
            </Menu.Item>
            <Menu.Item key="bootstrap/paragraph3">
              <Link to="/bootstrap/paragraph3">Сетка</Link>
            </Menu.Item>
            <Menu.Item key="bootstrap/paragraph4">
              <Link to="/bootstrap/paragraph4">Компоненты</Link>
            </Menu.Item>
            <Menu.Item key="bootstrap/paragraph5">
              <Link to="/bootstrap/paragraph5">Формы</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <PageHeader
          title="Web-учебник по основам"
          className="site-page-header"
          subTitle="Автор:"
          tags={[
            <Tag color="blue" key={1}>
              Иван Иванов
            </Tag>,
            <Tag color="blue" key={2}>
              ВТПО 4-2
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
