import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const CSSParagraph5 = () => {
  let s = "{";
  let e = "}";
  let style = {
    width: "100%",
    padding: 25,
    textAlign: "center",
    color: "white",
  };
  return (
    <div className="content-page">
      <Title>CSS - Цвета</Title>
      <Paragraph>Цвета задаются с помощью предопределения названия цвета или значений RGB, HEX, HSL, RGBA, HSLA.</Paragraph>
      <Title level={2}>CSS Названия цвета</Title>
      <Paragraph>В CSS цвет может быть задан с помощью названия цвета: </Paragraph>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr ", gridGap: 10 }}>
        <div style={{ ...style, background: "tomato" }}>tomato</div>
        <div style={{ ...style, background: "orange" }}>orange</div>
        <div style={{ ...style, background: "DodgerBlue" }}>DodgerBlue</div>
        <div style={{ ...style, background: "MediumSeaGreen" }}>MediumSeaGreen</div>
        <div style={{ ...style, background: "gray" }}>Gray</div>
        <div style={{ ...style, background: "SlateBlue" }}>SlateBlue</div>
        <div style={{ ...style, background: "Violet" }}>Violet</div>
        <div style={{ ...style, background: "LightGray" }}>LightGray</div>
        <div style={{ ...style, background: "yellow", color: "#000" }}>Yellow</div>
        <div style={{ ...style, background: "LightBlue", color: "#000" }}>LightBlue</div>
        <div style={{ ...style, background: "LightViolet", color: "#000" }}>LightViolet</div>
        <div style={{ ...style, background: "DarkRed", color: "#fff" }}>DarkRed</div>
      </div>
      <Paragraph style={{ marginTop: 25, fontSize: 18 }}>CSS/HTML поддержка 140 стандартных названий цветов.</Paragraph>

      <Title style={{ marginTop: 25 }} level={2}>
        CSS Цвет фона
      </Title>
      <Paragraph>Вы можете установить цвет фона для HTML элементов:</Paragraph>
      <div style={{ textAlign: "center", background: "blue", color: "#fff", fontSize: 25 }}>Привет Мир</div>
      <div style={{ background: "red", color: "#fff", padding: 25, marginTop: 20 }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
        veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      </div>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          {` <h1 style="background-color:DodgerBlue;">Привет Мир</h1>`}
          <br />
          {` <p style="background-color:Tomato;">Lorem ipsum...</p> `}
        </p>
      </div>

      <Title style={{ marginTop: 25 }} level={2}>
        CSS Цвет текста
      </Title>
      <Paragraph>Вы можете установить цвет текста:</Paragraph>
      <h1 style={{ color: "tomato" }}>Привет Мир</h1>
      <Paragraph style={{ color: "DodgerBlue" }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </Paragraph>
      <Paragraph style={{ color: "MediumSeaGreen" }}>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          {` <h1 style="color:Tomato;">Привет Мир</h1>`} <br />
          {`<p style="color:DodgerBlue;">Lorem ipsum...</p>`} <br />
          {`<p style="color:MediumSeaGreen;">Ut wisi enim...</p> `}
        </p>
      </div>
      <Title style={{ marginTop: 25 }} level={2}>
        CSS Цвет границ
      </Title>
      <Paragraph>Вы можете установить цвет границ:</Paragraph>
      <h1 style={{ border: "Tomato 1px solid" }}>Привет Мир</h1>
      <h1 style={{ border: "DodgerBlue 1px solid" }}>Привет Мир</h1>
      <h1 style={{ border: "Violet 1px solid" }}>Привет Мир</h1>

      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          {`<h1 style="border:2px solid Tomato;">Привет Мир</h1>`}
          <br />
          {`<h1 style="border:2px solid DodgerBlue;">Привет Мир</h1>`}
          <br />
          {`<h1 style="border:2px solid Violet;">Привет Мир</h1> `}
        </p>
      </div>
    </div>
  );
};
