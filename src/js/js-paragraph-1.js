import { Tag, Typography } from "antd";
import { useState } from "react";
const { Title, Paragraph } = Typography;
export const JSParagraph1 = () => {
  let [img, setImg] = useState("https://www.schoolsw3.com/js/pic_bulboff.gif");
  return (
    <div className="content-page">
      <Title>Введение</Title>
      <Title level={2}>JavaScript может изменять содержимое HTML</Title>
      <Paragraph>Одним из многих методов JavaScript HTML является getElementById().</Paragraph>
      <Paragraph>Пример ниже "находит" элемент HTML (с id = "demo") и меняет его содержимое (innerHTML) на "Привет JavaScript": </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">document.getElementById("demo").innerHTML = "Привет JavaScript";</p>
      </div>
      <Title level={2} style={{ marginTop: 25 }}>
        JavaScript может изменять значения атрибутов HTML
      </Title>
      <Paragraph>
        В этом примере JavaScript изменяет значение <Tag>src</Tag> атрибута (source) <Tag>{"<img>"}</Tag> тега:
      </Paragraph>

      <div className="case">
        <Title level={4}>Лампочка</Title>
        <p className="case-code">
          <button onClick={() => setImg("https://www.schoolsw3.com/js/pic_bulboff.gif")}>Выключить лампочку</button>
          <img src={img} />
          <button onClick={() => setImg("https://www.schoolsw3.com/js/pic_bulbon.gif")}>Включить лампочку</button>
        </p>
      </div>
      <Title level={2} style={{ marginTop: 25 }}>
        JavaScript может изменять стили HTML (CSS)
      </Title>
      <Paragraph>Изменение стиля HTML элемента - это вариант изменения атрибута HTML:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">document.getElementById("demo").style.fontSize = "35px";</p>
      </div>

      <Title level={2} style={{ marginTop: 25 }}>
        JavaScript может отображать элементы HTML
      </Title>
      <Paragraph>
        Отображение скрытых HTML элементов также можно выполнить, изменив <Tag>display</Tag> стиль:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">document.getElementById("demo").style.display = "block"; </p>
      </div>
    </div>
  );
};
