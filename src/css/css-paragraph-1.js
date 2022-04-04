import { Typography } from "antd";
const { Title, Paragraph } = Typography;
export const CSSParagraph1 = () => {
  let s = "{";
  let e = "}";
  return (
    <div className="content-page">
      <Title>Основы</Title>
      <Title level={2}>Примеры в каждой главе</Title>
      <Paragraph>
        Учебник CSS содержит сотни примеров в CSS. <br /> <br />С помощью редактора онлайн, Вы можете редактировать CSS и при нажатии на кнопку "Посмотреть" увидеть результат.
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          body {s} <br />
          background-color: lightblue; <br />
          {e}
          <br />
          h1 {s} <br />
          color: white; <br />
          text-align: center;
          <br />
          {e}
          <br />p{s}
          <br />
          font-family: verdana;
          <br />
          font-size: 20px;
          <br />
          {e}
        </p>
      </div>
      <Title level={2} style={{ marginTop: 25 }}>
        Что такое CSS?
      </Title>
      <Paragraph>CSS означает Cascading Style Sheets (Каскадная Таблица Стилей) </Paragraph>
      <Paragraph> CSS описывает как HTML элементы должны отображаться на экране, бумаге или других носителях</Paragraph>
      <Paragraph> CSS экономит много работы. Он может управлять макетом нескольких веб страниц одновременно</Paragraph>
      <Paragraph> Внешние таблицы стилей хранятся в CSS файлах</Paragraph>
      <Title level={2} style={{ marginTop: 25 }}>
        Зачем использовать CSS?
      </Title>
      <Paragraph>CSS используется для определения стилей для ваших веб страниц, включая дизайн, макет и вариации отображения для различных устройств и размеров экрана.</Paragraph>
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
          color: white;
          <br />
          text-align: center;
          <br />
          {e}
          <br />p {s}
          <br />
          font-family: verdana;
          <br />
          font-size: 20px;
          <br />
          {e}
        </p>
      </div>
      <Title level={2} style={{ marginTop: 25 }}>
        CSS решает много проблем
      </Title>
      <Paragraph>HTML никогда не предназначался для того, чтобы содержать теги для форматирования веб страницы!</Paragraph>
      <Paragraph>HTML был создан для описания содержания веб страниц, например:</Paragraph>
      <Paragraph>
        {"<h1>"}Это заголовок{"</h1>"}
      </Paragraph>
      <Paragraph>
        {"<p>"}Это параграф.{"</p>"}
      </Paragraph>
      <Paragraph>
        Когда в спецификацию HTML 3.2 были добавлены теги типа {"<font>"} и атрибуты цвета, это стало настоящим кошмаром для веб разработчиков. Разработка больших сайтов, где
        шрифты и цветовая информация добавлялись на каждую отдельную страницу, процесс стал долгим и дорогостоящим.
      </Paragraph>
      <Paragraph>Чтобы решить эту проблему, консорциум World Wide Web Consortium (W3C) создал CSS.</Paragraph>
      <Paragraph>CSS удалил форматирование стиля с HTML страницы!</Paragraph>
    </div>
  );
};
