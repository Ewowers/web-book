import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const JSParagraph4 = () => {
  let s = "{";
  let e = "}";
  return (
    <div className="content-page">
      <Title>JavaScript - Функции</Title>
      <Paragraph>JavaScript функция - это блок кода, предназначенный для выполнения определенной задачи.</Paragraph>
      <Paragraph>JavaScript функция выполняется, когда ее вызывают (вызвает) "что-то".</Paragraph>

      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          function myFunction(p1, p2) {s}
          <br />
          return p1 * p2; // Функция возвращает произведение p1 и p2
          <br />
          {e}
        </p>
      </div>
      <Title level={2} style={{ marginTop: 25 }}>
        JavaScript Синтаксис функции
      </Title>
      <Paragraph>JavaScript функция определяется с помощью ключевого кода function, за которым следует имя и скобки ().</Paragraph>
      <Paragraph>Имена функций могут содержать буквы, цифры, подчеркивания и знаки доллара (те же правила, что и для переменных).</Paragraph>
      <Paragraph>Скобки могут включать имена параметров, разделенные запятыми:</Paragraph>
      <Paragraph>(parameter1, parameter2, ...)</Paragraph>
      <Paragraph>Код, который будет выполнен функцией, помещается в фигурные скобки: {}</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          function name(parameter1, parameter2, parameter3) {s} <br />
          // код для выполнения <br />
          {e}
        </p>
      </div>
      <Paragraph>Параметры функции перечислены в скобках () в определении функции.</Paragraph>
      <Paragraph>Аргументы функции - это значения , получаемые функцией при ее вызове.</Paragraph>
      <Paragraph>Внутри функции аргументы (параметры) действуют как локальные переменные.</Paragraph>

      <Title level={2} style={{ marginTop: 25 }}>
        JavaScript Вызов функции
      </Title>
      <Paragraph>Код внутри функции будет выполняться, когда "что-то" вызывает (вызывается) функцию:</Paragraph>
      <ul>
        <li>Когда происходит событие (когда пользователь нажимает кнопку)</li>
        <li>Когда он вызывает (вызывается) из JavaScript кода</li>
        <li>Автоматически (вызывается самостоятельно)</li>
      </ul>
      <Paragraph>Вы узнаете гораздо больше о вызове функций позже в этом руководстве.</Paragraph>

      <Title level={2} style={{ marginTop: 25 }}>
        JavaScript Возврат функции
      </Title>
      <Paragraph>Когда, JavaScript достигает оператора return, функция прекращает выполнение.</Paragraph>
      <Paragraph>Если функция была вызвана оператором, JavaScript "вернет" выполнение кода после вызова оператора.</Paragraph>
      <Paragraph>Функции всегда вычисляют возвращаемое значение. Возвращаемое значение "возвращается" обратно "вызывающему":</Paragraph>
    </div>
  );
};
