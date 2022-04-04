import { Tag, Typography, Table } from "antd";
const { Title, Paragraph } = Typography;
export const JSParagraph3 = () => {
  let s = "{";
  let e = "}";
  return (
    <div className="content-page">
      <Title>Операторы</Title>
      <Paragraph>
        Оператор — это элемент языка, задающий полное описание действия, которое необходимо выполнить. Каждый оператор представляет собой законченную фразу языка программирования и
        определяет некоторый вполне законченный этап обработки данных. Многие языки (например, Си-подобные) различают инструкцию и определение. Различие в том, что инструкция
        исполняет код, а определение создаёт идентификатор (то есть можно рассматривать определение как инструкцию присваивания).
      </Paragraph>

      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          var x = 5; // присвойте значение 5 к x <br />
          var y = 2; // присвоить значение 2 к y <br />
          var z = x + y; // присвоить значение 7 к z (5 + 2) <br />
        </p>
      </div>
      <Paragraph>ВОператор присваивания (=) присваивает значение к переменной.</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">var x = 10;</p>
      </div>
      <Paragraph>Оператор сложения (+) слаживает числа:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          var x = 5; <br />
          var y = 2; <br />
          var z = x + y;
        </p>
      </div>

      <Paragraph>Оператор умножения (*) умножает числа.</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          var x = 5;
          <br />
          var y = 2;
          <br />
          var z = x * y;
          <br />
        </p>
      </div>
      <Table
        columns={[
          { title: "Оператор", dataIndex: "s", key: "key" },
          { title: "Описание", dataIndex: "e", key: "key" },
        ]}
        dataSource={[
          { s: "+", e: "Сложение", key: "1" },
          { s: "-", e: "Вычитание", key: "2" },
          { s: "*", e: "Умножение", key: "3" },
          { s: "**", e: "Возведение в степень (ES2016)", key: "5" },
          { s: "/", e: "Деление", key: "6" },
          { s: "%", e: "Модуль (Остаток деления)", key: "7" },
          { s: "++", e: "Инкремент (увеличение на 1)", key: "8" },
          { s: "--", e: " 	Декремент (уменьшение на 1)", key: "9" },
        ]}
      />
    </div>
  );
};
