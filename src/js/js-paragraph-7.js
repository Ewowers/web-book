import { Table, Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const JSParagraph7 = () => {
  let s = "{";
  let e = "}";
  return (
    <div className="content-page">
      <Title>JavaScript - Цикл For</Title>
      <Paragraph>Циклы могут выполнять блок кода несколько раз.</Paragraph>

      <Title level={2} style={{ marginTop: 25 }}>
        JavaScript Циклы
      </Title>
      <Paragraph>
        Циклы удобны, если вы хотите запускать один и тот же код снова и снова, каждый раз с другим значением.
        <br />
        <br />
        Часто это бывает при работе с массивами:
      </Paragraph>
      <div className="case">
        <Title level={4}>Вместо того чтобы писать:</Title>
        <p className="case-code">
          text += cars[0] + {`"<br>"`}; <br />
          text += cars[1] + {`"<br>"`};<br />
          text += cars[2] + "{`"<br>"`};<br />
          text += cars[3] + {`"<br>"`};<br />
          text += cars[4] + "{`"<br>"`};<br />
          text += cars[5] + {`"<br>"`};<br />
        </p>
        <p className="case-code">
          var i;
          <br />
          {"for (i = 0; i < cars.length; i++)"} {s}
          <br />
          text += cars[i] + {`"<br>"`};<br />
          {e}
          <br />
        </p>
      </div>

      <Title level={2} style={{ marginTop: 25 }}>
        Различные виды циклов
      </Title>
      <Paragraph>JavaScript поддерживает разные циклы:</Paragraph>
      <ul>
        <li>
          <Tag>for</Tag> - перебирает через блок кода несколько раз
        </li>
        <li>
          <Tag>for/in</Tag> - перебирает свойства объекта
        </li>
        <li>
          <Tag>for/of</Tag> - перебирает значения итеративного объекта
        </li>
        <li>
          <Tag>while</Tag> - перебирает блок кода, пока выполняется указанное условие
        </li>
        <li>
          <Tag>do/while</Tag> - также перебирает блок кода, пока выполняется указанное условие
        </li>
      </ul>

      <Title level={2} style={{ marginTop: 25 }}>
        Цикл for
      </Title>

      <Paragraph>
        Цикл <Tag>for</Tag> имеет следующий синтаксис:
      </Paragraph>

      <div className="case">
        <Title level={4}>Пример</Title>
        <Paragraph>Установите вертикальное выравнивание изображения в тексте:</Paragraph>
        <p className="case-code">
          for (statement 1; statement 2; statement 3) {s}
          <br />
          // блок кода, который нужно выполнить
          <br />
          {e}
        </p>
      </div>
      <Paragraph>Оператор 1 выполняется (один раз) перед выполнением блока кода</Paragraph>
      <Paragraph>Оператор 2 определяет условие выполнения блока кода.</Paragraph>
      <Paragraph>Оператор 3 выполняется (каждый раз) после выполнения блока кода.</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <Paragraph>Установите вертикальное выравнивание изображения в тексте:</Paragraph>
        <p className="case-code">
          {"for (i = 0; i < 5; i++)"} {s}
          <br />
          text += "Число является " + i + {`"<br>";`}
          <br />
          {e}
        </p>
      </div>
      <Paragraph>Из приведенного выше примера вы можете прочитать:</Paragraph>
      <Paragraph>Оператор 1 устанавливает переменную перед началом цикла (var i = 0).</Paragraph>
      <Paragraph>Оператор 2 определяет условие запуска цикла я должен быть меньше 5 {"(i < 5)."}</Paragraph>
      <Paragraph>Оператор 3 увеличивает значение (i++) каждый раз, когда выполняется блок кода в цикле.</Paragraph>
      <hr />

      <Title level={2} style={{ marginTop: 25 }}>
        Оператор 1
      </Title>
      <Paragraph>Обычно вы используете оператор 1 для инициализации переменной, используемой в цикле (i = 0).</Paragraph>
      <Paragraph>Это не всегда так, JavaScript не волнует. Оператор 1 не является обязательным.</Paragraph>
      <Paragraph>Вы можете инициировать множество значений в оператор 1 (разделенных запятыми):</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <Paragraph>Установите вертикальное выравнивание изображения в тексте:</Paragraph>
        <p className="case-code">
          for {`(i = 0, len = cars.length, text = ""; i < len; i++)`} {s}
          <br />
          text += cars[i] + {`"<br>";`}
          <br />
          {e}
        </p>
      </div>
      <Paragraph>И вы можете пропустить оператор 1 (например, когда ваши значения установлены до начала цикла):</Paragraph>

      <Title level={2} style={{ marginTop: 25 }}>
        Оператор 2
      </Title>
      <Paragraph>Часто оператор 2 используется для оценки состояния исходной переменной.</Paragraph>
      <Paragraph>Это не всегда так, JavaScript не волнует. Оператор 2 также необязателен.</Paragraph>
      <Paragraph>
        Если оператор 2 вернет true, цикл начнется заново, если он вернет false, цикл завершится.ы можете инициировать множество значений в оператор 1 (разделенных запятыми):
      </Paragraph>
      <Paragraph>
        Если вы пропустите оператор 2, вы должны указать break (прерывание) внутри цикла. В противном случае цикл будет постоянно повторяттся и никогда не закончится. Это приведёт
        к зависанию браузера. Читайте о прерываниях в следующих главах этого руководства.
      </Paragraph>

      <Title level={2} style={{ marginTop: 25 }}>
        Оператор 3
      </Title>
      <Paragraph>Часто оператор 3 увеличивает значение начальной переменной.</Paragraph>
      <Paragraph>Это не всегда так, JavaScript все равно, и оператор 3 необязателен.</Paragraph>
      <Paragraph>Оператор 3 может делать что угодно, например отрицательное приращение (i--), положительное приращение (i = i + 15) или что-то еще.</Paragraph>
      <Paragraph>Оператор 3 также можно пропустить (например, когда вы увеличиваете значения внутри цикла):</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <Paragraph>Установите вертикальное выравнивание изображения в тексте:</Paragraph>
        <p className="case-code">
          var i = 0; <br />
          var len = cars.length; <br />
          for {`(; i < len; ) `}
          {s} <br />
          text += cars[i] + {`"<br>";`} <br />
          i++;
          {e}
        </p>
      </div>

      <Title level={2} style={{ marginTop: 25 }}>
        Цикл for/in
      </Title>
      <Paragraph>JavaScript оператор for/in перебирает свойства объекта:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <Paragraph>Установите вертикальное выравнивание изображения в тексте:</Paragraph>
        <p className="case-code">
          var person = {`{fname:"Щипунов", lname:"Андрей", age:25}`};<br />
          var text = "";
          <br />
          var x;
          <br />
          for (x in person) {s}
          <br />
          text += person[x];
          <br />
          {e}
        </p>
      </div>

      <Title level={2} style={{ marginTop: 25 }}>
        Цикл for/of
      </Title>
      <Paragraph>JavaScript оператор for/of перебирает значения итерируемых объектов.</Paragraph>
      <Paragraph>Цикл for/of позволяет перебирать итерируемые структуры данных, такие как массивы, строки, карты, списки узлов Node и т.д.</Paragraph>
      <Paragraph>Цикл for/of имеет следующий синтаксис:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <Paragraph>Установите вертикальное выравнивание изображения в тексте:</Paragraph>
        <p className="case-code">
          for (variable of iterable) {s}
          <br />
          // блок кода будет выполняться
          <br />
          {e}
        </p>
      </div>
      <Paragraph>variable - Для каждой итерации переменной присваивается значение следующего свойства. Переменная может быть объявлена с const, let, или var.</Paragraph>
      <Paragraph>iterable - Объект, имеющий итерируемые свойства.</Paragraph>
    </div>
  );
};
