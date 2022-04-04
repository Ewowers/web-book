import { Table, Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const CSSParagraph7 = () => {
  let s = "{";
  let e = "}";
  return (
    <div className="content-page">
      <Title>CSS - Текст</Title>
      <Paragraph>CSS обладает множеством свойств для форматирования текста. </Paragraph>
      <div style={{ width: "100%", border: "1px solid gray", padding: 8 }}>
        <h1 style={{ textAlign: "center", textTransform: "uppercase", color: "#4CAF50" }}>форматирование текста</h1>
        <p style={{ textIndent: 50, textAlign: "justify", letterSpacing: 3 }}>
          Этот текст оформлен с помощью некоторых свойств форматирования текста. Заголовок использует свойства text-align (выравнивание текста) text-transform (преобразование
          текста) и color (цвет). Параграф имеет отступ, выравнивание и пространство между символами. Подчеркивание снимается с цветной ссылки "Попробуйте сами" ссылка.
        </p>
      </div>
      <Title level={2} style={{ marginTop: 25 }}>
        Цвет текста
      </Title>
      <Paragraph>
        Свойство <Tag>color</Tag> используется для определения цвета текста. С помощью CSS, цвет указан чаще всего:
      </Paragraph>
      <ul>
        <li>
          Название цвета - <Tag color="red">"red"</Tag>
        </li>
        <li>
          Значение HEX - <Tag color="red"> "#ff0000"</Tag>
        </li>
        <li>
          Значение RGB - <Tag color="red">"rgb(255,0,0)"</Tag>
        </li>
      </ul>
      <Paragraph>
        По умолчанию цвет текста на странице устанавливается в селекторе <Tag>body</Tag>
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          body {s}
          <br />
          color: blue;
          <br />
          {e}
          <br />
          h1 {s}
          <br />
          color: green;
          <br />
          {e}
          <br />
        </p>
      </div>
      <Title level={2} style={{ marginTop: 25 }}>
        Цвет текста и цвет фона
      </Title>
      <Paragraph>
        В этом примере мы определяем как свойство <Tag>background-color</Tag>, так и свойство <Tag>color</Tag>:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          <Paragraph>body {s}</Paragraph>
          <Paragraph>background-color: lightgrey; color: blue;</Paragraph>
          <Paragraph>{e}</Paragraph>
          <Paragraph>h1 {s}</Paragraph>
          <Paragraph>background-color: black; color: white;</Paragraph>
          <Paragraph>{e}</Paragraph>
          <Paragraph>div {s}</Paragraph>
          <Paragraph>background-color: blue; color: white;</Paragraph>
          <Paragraph>{e}</Paragraph>
        </p>
      </div>
      <Paragraph>
        Важно: Высокая контрастность очень важна для людей с проблемами зрения. Поэтому всегда следите за тем, чтобы контраст между цветом текста и цветом фона (или фонового
        изображения) были хорошим!
      </Paragraph>
      <Title level={2} style={{ marginTop: 25 }}>
        CSS Свойство цвета текста
      </Title>
      <Table
        columns={[
          { title: "Свойство", dataIndex: "s", key: "key" },
          { title: "Описание", dataIndex: "e", key: "key" },
        ]}
        dataSource={[
          { s: "color", e: "Задает цвет текста", key: "1" },
          { s: "background", e: "Задает цвет заднего фона", key: "2" },
        ]}
      />

      <Title level={1} style={{ marginTop: 25 }}>
        CSS Выравнивание текста и направление текста
      </Title>
      <Title level={2} style={{ marginTop: 25 }}>
        Горизонтальное выравнивание текста
      </Title>

      <Paragraph>
        Свойство <Tag>text-align</Tag> используется для установки выравнивания текста по горизонтали.
      </Paragraph>
      <Paragraph>Текст может быть выровнен по левому или правому краю, по центру или выровнен по ширине.</Paragraph>
      <Paragraph>
        В следующем примере показаны 3 выровненных по центру и выровненных по левому и правому краю текста (выравнивание по левому краю по умолчанию, если направление текста слева
        направо, и выравнивание по правому краю по умолчанию, если направление текста справа налево):
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          <Paragraph>h1 {s}</Paragraph>
          <Paragraph>text-align: center;</Paragraph>
          <Paragraph>{e}</Paragraph>

          <Paragraph>h2 {s}</Paragraph>
          <Paragraph>text-align: left;</Paragraph>
          <Paragraph>{e}</Paragraph>

          <Paragraph>h3 {s}</Paragraph>
          <Paragraph>text-align: right;</Paragraph>
          <Paragraph>{e}</Paragraph>
        </p>
      </div>

      <Title level={2} style={{ marginTop: 25 }}>
        Вертикальное выравнивание текста
      </Title>

      <Paragraph>
        Свойство <Tag>vertical-align</Tag> задает выравнивание элемента по вертикали.
      </Paragraph>
      <Paragraph>Текст может быть выровнен по левому или правому краю, по центру или выровнен по ширине.</Paragraph>
      <Paragraph>
        В следующем примере показаны 3 выровненных по центру и выровненных по левому и правому краю текста (выравнивание по левому краю по умолчанию, если направление текста слева
        направо, и выравнивание по правому краю по умолчанию, если направление текста справа налево):
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <Paragraph>Установите вертикальное выравнивание изображения в тексте:</Paragraph>
        <p className="case-code">
          <Paragraph>img.a {s}</Paragraph>
          <Paragraph>vertical-align: baseline;</Paragraph>
          <Paragraph>{e}</Paragraph>

          <Paragraph>img.b {s}</Paragraph>
          <Paragraph>vertical-align: text-top;</Paragraph>
          <Paragraph>{e}</Paragraph>

          <Paragraph>img.c {s}</Paragraph>
          <Paragraph>vertical-align: text-bottom;</Paragraph>
          <Paragraph>{e}</Paragraph>

          <Paragraph>img.d {s}</Paragraph>
          <Paragraph>vertical-align: sub;</Paragraph>
          <Paragraph>{e}</Paragraph>

          <Paragraph>img.e {s}</Paragraph>
          <Paragraph>vertical-align: super;</Paragraph>
          <Paragraph>{e}</Paragraph>
        </p>
      </div>
      <Title level={2}>CSS Свойства выравнивания/направления текста</Title>
      <Table
        columns={[
          { title: "Свойство", dataIndex: "s", key: "key" },
          { title: "Описание", dataIndex: "e", key: "key" },
        ]}
        dataSource={[
          { s: "direction", e: "Задает направление текста/направление записи", key: "1" },
          { s: "text-align", e: "Задает выравнивание текста по горизонтали", key: "2" },
          { s: "text-align-last", e: "Указывает, как выровнять последнюю строку текста", key: "3" },
          {
            s: "unicode-bidi",
            e: "Используется вместе со свойством direction для установки или возврата того, следует ли переопределять текст для поддержки нескольких языков в одном документе",
            key: "4",
          },
          { s: "vertical-align", e: "Задает вертикальное выравнивание элемента", key: "5" },
        ]}
      />
    </div>
  );
};
