import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const CSSParagraph3 = () => {
  let s = "{";
  let e = "}";
  return (
    <div className="content-page">
      <Title>CSS - Подключить</Title>
      <Paragraph>Когда браузер читает таблицу стилей, он форматирует HTML документ в соответствии с информацией в таблице стилей. </Paragraph>

      <Title level={2} style={{ marginTop: 25 }}>
        Как подключить стиль CSS?
      </Title>
      <Paragraph>Существует три способа усновки каскадной таблицы стилей CSS:</Paragraph>
      <ul>
        <li>Внешний CSS</li>
        <li>Внутренний CSS</li>
        <li>Встроенный CSS</li>
      </ul>

      <Title level={2} style={{ marginTop: 25 }}>
        Внешний CSS
      </Title>
      <Paragraph>С помощью внешней таблицы стилей вы можете изменить внешний вид всего веб сайта, изменив только один файл!</Paragraph>
      <Paragraph>
        Каждая HTML страница должна содержать ссылку на внешний файл таблицы стилей внутри элемента {"<link>"} в разделе {"<head>"}.
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          {"<!DOCTYPE html>"}
          <br />
          {"<html>"}
          <br />
          {"<head>"}
          <br />
          {`<link rel="stylesheet" href="mystyle.css">`}
          <br />
          {"</head>"}
          <br />
          {"<body>"}
          <br />
          <br />
          {"<h1>Это заголовок</h1>"}
          <br />
          {"<p>Это параграф.</p>"}
          <br />
          <br />
          {"</body>"}
          <br />
          {"</html>"}
          <br />
        </p>
      </div>
      <Paragraph>Внешняя таблица стилей может быть написана в любом текстовом редакторе и должна быть сохранена с расширением .css.</Paragraph>
      <Paragraph>Внешний файл .css не должен содержать никаких HTML тегов.</Paragraph>
      <Paragraph>Вот этот файл "mystyle.css" и выглядит он, вот так:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          body {s} <br />
          background-color: lightblue;
          <br />
          {e}
          <br />
          h1 {s}
          <br />
          color: navy; margin-left: 20px;
          <br />
          {e}
        </p>
      </div>
      <Title level={2} style={{ marginTop: 25 }}>
        Внутренний CSS
      </Title>
      <Paragraph>Внутренняя таблица стилей может использоваться, если одна HTML страница имеет уникальный стиль.</Paragraph>
      <Paragraph>
        Внутренний стиль определяется внутри элемента {"<style>"}, внутри секции {"<head>"}.
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          {"<!DOCTYPE html>"}
          <br />
          {"<html>"}
          <br />
          {"<head>"}
          <br />
          {"<style>"}
          <br />
          body {s}
          <br />
          background-color: linen;
          <br />
          {e}
          <br />
          h1 {s}
          <br />
          color: maroon; margin-left: 40px;
          <br />
          {e}
          <br />
          {"</style>"}
          <br />
          {"</head>"}
          <br />
          {"<body>"}
          <br />
          <br />
          {"<h1>Это заголовок</h1>"}
          <br />
          {"<p>Это параграф.</p>"}
          <br />
          <br />
          {"</body>"}
          <br />
          {"</html>"}
          <br />
        </p>
      </div>
      <Title level={2} style={{ marginTop: 25 }}>
        Встроенный CSS
      </Title>
      <Paragraph>Встроенный стиль может быть использован для применения уникального стиля для одного элемента.</Paragraph>
      <Paragraph>Чтобы использовать встроенные стили, добавьте атрибут "style" к соответствующему элементу, атрибут стиля может содержать любое свойство CSS.</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          {"<!DOCTYPE html>"}
          <br />
          {"<html>"}
          <br />
          {"<head>"}
          <br />
          {"</head>"}
          <br />
          {"<body>"}
          <br />
          {`<h1 style="color:blue;text-align:center;">Это заголовок</h1>`}
          <br />
          {`<p style="color:red;">Это параграф.</p>`}

          <br />
          {"</body>"}
          <br />
          {"</html>"}
          <br />
        </p>
      </div>
    </div>
  );
};
