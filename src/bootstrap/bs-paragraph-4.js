import { Typography, Space } from "antd";
import { Link } from "react-router-dom";
const { Title, Paragraph } = Typography;
export const BSParagraph4 = () => {
  const margin = { marginTop: 25 };
  const s = "{";
  const e = "}";
  return (
    <>
      <Title>Компонеты</Title>
      <Paragraph>Компоненты это готовое решение</Paragraph>

      <Title level={2} style={margin}>
        Кнопки
      </Title>
      <Space style={{ margin: "50px 0" }}>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-light">
          Light
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
        <button type="button" className="btn btn-link">
          Link
        </button>
      </Space>

      <div className="case">
        <p className="case-code">
          <Paragraph>{`<button type="button" class="btn btn-primary">Primary</button>`}</Paragraph>
          <Paragraph>{`<button type="button" class="btn btn-secondary">Secondary</button>`}</Paragraph>
          <Paragraph>{`<button type="button" class="btn btn-success">Success</button>`}</Paragraph>
          <Paragraph>{`<button type="button" class="btn btn-danger">Danger</button>`}</Paragraph>
          <Paragraph>{`<button type="button" class="btn btn-warning">Warning</button>`}</Paragraph>
          <Paragraph>{`<button type="button" class="btn btn-info">Info</button>`}</Paragraph>
          <Paragraph>{`<button type="button" class="btn btn-light">Light</button>`}</Paragraph>
          <Paragraph>{`<button type="button" class="btn btn-dark">Dark</button>`}</Paragraph>
          <Paragraph>{`<button type="button" class="btn btn-link">Link</button>}`}</Paragraph>
        </p>
      </div>

      <Title level={2} style={margin}>
        Крошки
      </Title>
      <Paragraph>Укажите местоположение текущей страницы в навигационной иерархии с автоматическим добавлением разделителей при помощи CSS.</Paragraph>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Главная
          </li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a>Главная</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Библиотека
          </li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a>Главная</a>
          </li>
          <li className="breadcrumb-item">
            <a>Библиотека</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Данные
          </li>
        </ol>
      </nav>
      <Title level={2} style={margin}>
        Карусель
      </Title>
      <Paragraph>Компонент слайд-шоу для цикличного повторения элементов - карусель изображений или текстовых слайдов.</Paragraph>

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.ytimg.com/vi/IMLwb8DIksk/maxresdefault.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://i.ytimg.com/vi/IMLwb8DIksk/maxresdefault.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://i.ytimg.com/vi/IMLwb8DIksk/maxresdefault.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Предыдущий</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Следующий</span>
        </button>
      </div>
      <Paragraph style={{ padding: 10, background: "yellow", color: "#000", marginTop: 10 }}>
        Все компоненты можно увидеть на официальном сайте <a href="https://bootstrap-4.ru/docs/5.1/getting-started/introduction/">bootstrap</a>{" "}
      </Paragraph>
    </>
  );
};
