import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const Paragraph2 = () => {
  return (
    <div className="content-page">
      <Title>Основы</Title>
      <Title level={2}>HTML Документ</Title>
      <Paragraph>
        Все HTML документы должны начинаться с объявления типа документа: <Tag>{"<!DOCTYPE html>"}</Tag>.
      </Paragraph>
      <Paragraph>
        Сам HTML документ начинается с <Tag>{"<html>"}</Tag> и заканчивается <Tag> {"</html>"}</Tag>.
      </Paragraph>
      <Paragraph>
        Видимая часть HTML документа находится между <Tag>{"<body>"}</Tag> и <Tag>{"</body>"}</Tag>.
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          {"<!DOCTYPE html>"}
          <br />
          {"<html>"}
          <br />
          {"<body>"}
          <br />
          <br />
          {"<h1>Мой первый заголовок</h1>"}
          <br />
          {"<p>Мой первый параграф.</p>"}
          <br />
          <br />

          {"</body>"}
          <br />
          {"</html>"}
          <br />
        </p>
      </div>

      <Title level={2} style={{ marginTop: 50 }}>
        Декларация {"<!DOCTYPE>"}
      </Title>
      <Paragraph>
        Декларация <Tag>{"<!DOCTYPE>"}</Tag> представляет тип документа и помогает браузерам корректно отображать веб страницы
      </Paragraph>
      <Paragraph>Она должна появиться только один раз, в верхней части страницы (перед HTML тегами).</Paragraph>
      <Paragraph>Декларация {"<!DOCTYPE>"} не чувствительно к регистру.</Paragraph>
      <Paragraph>Декларация {"<!DOCTYPE>"} для HTML5:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{"<!DOCTYPE html>"}</p>
      </div>

      <Title level={2} style={{ marginTop: 50 }}>
        HTML Заголовки
      </Title>
      <Paragraph>{"HTML заголовки определены тегами <h1> до <h6>"}</Paragraph>
      <Paragraph>{"<h1> определяет наиболее важный заголовок. <h6> определяет наименее важный заголовок:"}</Paragraph>

      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
        <h1>Это заголовок 1</h1> \n
        <h2>Это заголовок 2</h2> \n
        <h3>Это заголовок 3</h3> \n
        <h4>Это заголовок 4</h4> \n
        <h5>Это заголовок 5</h5> \n
        <h6>Это заголовок 6</h6> \n
        `}</p>
      </div>

      <Title level={2} style={{ marginTop: 50 }}>
        HTML Параграфы
      </Title>
      <Paragraph>
        {`HTML параграфы определяются тегом `}
        <Tag>&lt;p&gt;</Tag>
      </Paragraph>

      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
         <p>Это параграф.</p> \n\n
         <p>Это еще один параграф.</p> 
        `}</p>
      </div>

      <Title level={2} style={{ marginTop: 50 }}>
        HTML Ссылки
      </Title>
      <Paragraph>
        HTML ссылки определяются тегом <Tag>&lt;a&gt;</Tag>:
      </Paragraph>

      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
          <a href="https://schoolsw3.com">Это ссылка</a> 
        `}</p>
      </div>
      <Paragraph>
        Назначение ссылки указана в атрибуте href. <br /> <br />
        Атрибуты используются для предоставления дополнительной информации об элементах HTML.
        <br />
        <br />
        Вы узнаете больше об атрибутах в следующей главе.
      </Paragraph>
    </div>
  );
};
