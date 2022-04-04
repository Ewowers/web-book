import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const JSParagraph5 = () => {
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
      <Title>JavaScript - Массивы</Title>
      <Paragraph>JavaScript Массивы - используются для хранения нескольких значений в одной переменной.</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">var cars = ["Сааб", "Вольво", "БМВ"];</p>
      </div>

      <Title level={2}>Что такое массив?</Title>
      <Paragraph>Массив - это специальная переменная, которая может одновременно содержать более одного значения.</Paragraph>
      <Paragraph>
        Если у вас есть список элементов (например, список названий автомобилей), хранение автомобилей в отдельных переменных может выглядеть следующим образом:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          var car1 = "Сааб";
          <br /> var car2 = "Вольво"; <br />
          var car3 = "БМВ";
        </p>
      </div>

      <Paragraph style={{ marginTop: 25, fontSize: 18 }}>Однако что, если вы хотите просмотреть машины и найти конкретную? А если бы у вас было не 3 машины, а 300?</Paragraph>
      <Paragraph>Решение - массива!</Paragraph>
      <Paragraph>Массив может содержать много значений под одним именем, и вы можете получить доступ к значениям, указав номер индекса.</Paragraph>
      <hr />
      <Title style={{ marginTop: 25 }} level={2}>
        Создание массива
      </Title>
      <Paragraph>Использование литерала массива - это самый простой способ создать массив JavaScript. :</Paragraph>
      <Paragraph>Синтаксис</Paragraph>

      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">var array_name = [item1, item2, ...];</p>
      </div>
      <hr />
      <Title style={{ marginTop: 25 }} level={2}>
        Доступ к элементам массива
      </Title>
      <Paragraph>Вы получаете доступ к элементу массива, ссылаясь на номер индекса.</Paragraph>
      <Paragraph>Этот оператор обращается к значению первого элемента в cars:</Paragraph>

      <div className="case">
        <p className="case-code">var name = cars[0];</p>
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
