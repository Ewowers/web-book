import { Tag, Typography } from "antd";
import img from "../selector.gif";
const { Title, Paragraph } = Typography;
export const CSSParagraph2 = () => {
  let s = "{";
  let e = "}";
  return (
    <div className="content-page">
      <Title>CSS - Синтаксис</Title>
      <Title level={2}>CSS Синтаксис</Title>
      <Paragraph>Набор правил CSS состоит из селектора и блока объявлений:</Paragraph>
      <img src={img} />
      <Paragraph>Селектор указывает на HTML элемент, который вы хотите стилизовать.</Paragraph>
      <Paragraph>Блок объявлений содержит одно или несколько объявлений, разделенных точкой с запятой.</Paragraph>
      <Paragraph>Каждое объявление содержит имя свойства CSS и значение, разделенные двоеточием.</Paragraph>
      <Paragraph>Несколько объявлений CSS разделяются точкой с запятой, а блоки объявлений окружаются фигурными скобками.</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          p {s}
          <br />
          color: red;
          <br />
          text-align: center;
          <br />
          {e}
        </p>
      </div>
      <Title level={2}>Объяснение примера</Title>
      <ul>
        <li>
          <Tag>p</Tag> это селектор в CSS (он указывает на HTML элемент, который вы хотите стилизовать: {"<p>"}).
        </li>
        <li>
          <Tag>color</Tag> является свойством, а <Tag>red</Tag> является значение свойства
        </li>
        <li>
          <Tag>text-align</Tag> является свойством, а <Tag>center</Tag> является значение свойства
        </li>
      </ul>
    </div>
  );
};
