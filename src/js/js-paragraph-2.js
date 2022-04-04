import { Tag, Typography } from "antd";
import img from "../selector.gif";
const { Title, Paragraph } = Typography;
export const JSParagraph2 = () => {
  let s = "{";
  let e = "}";
  return (
    <div className="content-page">
      <Title>Переменные</Title>
      <Paragraph>JavaScript переменные - это контейнеры для хранения значений данных.</Paragraph>

      <Paragraph>В этом примере x, y, и z переменные, объявляются с ключевым словом var:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          var x = 5; <br />
          var y = 6;
          <br />
          var z = x + y;
        </p>
      </div>
      <Paragraph>Из приведенного выше примера результат будет такой:</Paragraph>
      <ul>
        <li>Переменная x сохранит значение 5</li>
        <li>Переменная y сохранит значение 6</li>
        <li>Переменная z сохранит значение 11</li>
      </ul>
      <Title level={2} style={{ marginTop: 25 }}>
        Программирование как в алгебре
      </Title>
      <Paragraph>В этом примере price1, price2 и total, тоже являются переменными:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          var price1 = 5;
          <br /> var price2 = 6;
          <br /> var total = price1 + price2;
        </p>
      </div>
      <Paragraph>
        В программирование, как и в алгебре, мы используем переменные (например, price1) для хранения значений.
        <br />
        В программирование, как и в алгебре, мы используем переменные в выражениях (total = price1 + price2).
        <br />
        Из приведенного выше примера вы можете рассчитать, что общая сумма будет 11.
      </Paragraph>

      <Title level={2} style={{ marginTop: 25 }}>
        JavaScript Типы данных
      </Title>
      <Paragraph>
        JavaScript переменные могут содержать числа, такие как 100, и текстовые значения, например "Щипунов Андрей". <br />
        В программировании, текстовые значения называются текстовыми строками. <br />
        JavaScript может обрабатывать многие типы данных, но пока просто подумайте о числах и строках. <br />
        Строки заключаются в двойные или одинарные кавычки. Числа пишутся без кавычек. <br />
        Если вы поместите число в кавычки, оно будет рассматриваться, как текстовая строка.
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          var pi = 3.14; <br />
          var person = "Щипунов Андрей"; <br />
          var answer = 'Да это я!'; <br />
        </p>
      </div>
    </div>
  );
};
