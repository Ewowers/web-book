import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const CSSParagraph6 = () => {
  let s = "{";
  let e = "}";
  return (
    <div className="content-page">
      <Title>CSS - border</Title>
      <Title level={2}>CSS border</Title>
      <Paragraph>CSS свойства border позволяют задать стиль, ширину и цвет границ элемента.</Paragraph>

      <Paragraph style={{ border: "1px solid black", padding: 10 }}>У меня есть границы со всех сторон.</Paragraph>
      <Paragraph style={{ borderBottom: "1px solid red", padding: 10 }}>У меня есть красная нижняя граница.</Paragraph>
      <Paragraph style={{ border: "1px solid black", borderRadius: 10, padding: 10 }}>У меня есть округлые границы.</Paragraph>
      <Paragraph style={{ borderLeft: "5px solid blue", padding: 10 }}>У меня есть синяя левая граница.</Paragraph>
      <hr />
      <Title level={2} style={{ marginTop: 25 }}>
        CSS border-style
      </Title>
      <Paragraph>
        Свойство <Tag color="red">border-style</Tag> указывает, какую границу отображать.
      </Paragraph>
      <Paragraph>Допустимы следующие значения:</Paragraph>
      <ul className="mb-3">
        <li>
          <Tag color="red">dotted</Tag> - Определяет границу штрихом
        </li>
        <li>
          <Tag color="red">dashed</Tag> - Определяет границу пунктиром
        </li>
        <li>
          <Tag color="red">solid</Tag> - Определяет границу сплошной
        </li>
        <li>
          <Tag color="red">double</Tag> - Определяет границу двойной
        </li>
        <li>
          <Tag color="red">groove</Tag> - Определяет 3D границу желобом. Эффект зависит от значение border-color
        </li>
        <li>
          <Tag color="red">ridge</Tag> - Определяет 3D границу коньком. Эффект зависит от значение border-color
        </li>
        <li>
          <Tag color="red">inset</Tag> - Определяет 3D границу вставкой. Эффект зависит от значение border-color
        </li>
        <li>
          <Tag color="red">outset</Tag> - Определяет 3D границу начальной. Эффект зависит от значение border-color
        </li>
        <li>
          <Tag color="red">none</Tag> - Определяет без границ
        </li>
        <li>
          <Tag color="red">hidden</Tag> - Определяет скрытые границы
        </li>
      </ul>
      <Paragraph>
        Свойство <Tag color="red">border-style</Tag> может иметь от одного до четырех значений (для верхней границы, правой границы, нижней границы и левой границы).
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          <Paragraph>{`p.dotted {border-style: dotted;}`}</Paragraph>
          <Paragraph>{`p.dashed {border-style: dashed;}`}</Paragraph>
          <Paragraph>{`p.solid {border-style: solid;}`}</Paragraph>
          <Paragraph>{`p.double {border-style: double;}`}</Paragraph>
          <Paragraph>{`p.groove {border-style: groove;}`}</Paragraph>
          <Paragraph>{`p.ridge {border-style: ridge;}`}</Paragraph>
          <Paragraph>{`p.inset {border-style: inset;}`}</Paragraph>
          <Paragraph>{`p.outset {border-style: outset;}`}</Paragraph>
          <Paragraph>{`p.none {border-style: none;}`}</Paragraph>
          <Paragraph>{`p.hidden {border-style: hidden;}`}</Paragraph>
          <Paragraph>{`p.mix {border-style: dotted dashed solid double;}`}</Paragraph>
        </p>
        <Paragraph>Результат</Paragraph>
        <p className="case-code">
          <Paragraph style={{ borderStyle: "dotted", padding: 5 }}>Штрихованные границы.</Paragraph>
          <Paragraph style={{ borderStyle: "dashed", padding: 5 }}>Пунктирные границы.</Paragraph>
          <Paragraph style={{ borderStyle: "solid", padding: 5 }}>Сплошные границы.</Paragraph>
          <Paragraph style={{ borderStyle: "double", padding: 5 }}>Двойные границы.</Paragraph>
          <Paragraph style={{ borderStyle: "groove", padding: 5 }}>Границы желобом. Эффект зависит от значение border-color.</Paragraph>
          <Paragraph style={{ borderStyle: "ridge", padding: 5 }}>Границы коньком. Эффект зависит от значение border-color.</Paragraph>
          <Paragraph style={{ borderStyle: "inset", padding: 5 }}>Границы вставкой. Эффект зависит от значение border-color.</Paragraph>
          <Paragraph style={{ borderStyle: "outset", padding: 5 }}>Границы начальные. Эффект зависит от значение border-color.</Paragraph>
          <Paragraph style={{ borderStyle: "none", padding: 5 }}>Границ нет.</Paragraph>
          <Paragraph style={{ borderStyle: "hidden", padding: 5 }}>Границы скрыты.</Paragraph>
          <Paragraph style={{ borderStyle: "dotted dashed solid double", padding: 5 }}>Смешанные границы.</Paragraph>
        </p>
      </div>
    </div>
  );
};
