import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const JSParagraph6 = () => {
  let s = "{";
  let e = "}";
  return (
    <div className="content-page">
      <Title>JavaScript - Операторы if...else</Title>
      <Paragraph>Условные операторы используются для выполнения разных действий в зависимости от разных условий.</Paragraph>
      <Title level={2}>Условные операторы</Title>
      <Paragraph>Очень часто, когда вы пишете код, вы хотите выполнять разные действия для разных решений.</Paragraph>
      <Paragraph>Вы можете использовать условные операторы в своем коде, чтобы сделать это.</Paragraph>
      <Paragraph>В JavaScript есть следующие условные выражения:</Paragraph>
      <ul>
        <li>Используйте if, чтобы указать блок кода, который нужно выполнить, если указанное условие true (истинно)</li>
        <li> Используйте else, чтобы указать блок кода, который будет выполнен, если то же условие false (ложно)</li>
        <li> Используйте else if, чтобы указать новое условие для проверки, если первое условие false (ложно)</li>
        <li> Используйте switch, чтобы указать много альтернативных блоков кода, которые должны быть выполнены</li>
      </ul>
      <hr />
      <Title level={2} style={{ marginTop: 25 }}>
        Оператор if
      </Title>
      <Paragraph>Используйте if заявление, чтобы указать блок кода JavaScript, который будет выполняться, если условие истинно.</Paragraph>

      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          if (condition) {s}
          <br />
          // блок кода, который должен быть выполнен, если условие истинно
          <br />
          {e}
        </p>
        <Paragraph>Обратите внимание, что if это строчные буквы. Заглавные буквы (If или IF) приведут к ошибке JavaScript. </Paragraph>
      </div>
      <hr />
      <Title level={2} style={{ marginTop: 25 }}>
        Оператор else
      </Title>
      <Paragraph>Используйте else оператор, чтобы указать блок кода, который будет выполняться, если условие ложно.</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          if (condition) {s}
          <br />
          // блок кода, который будет выполнен, если условие истинно
          <br />
          {e} else {s}
          <br /> // блок кода, который будет выполнен, если условие ложно
          <br /> {e}
        </p>
      </div>

      <hr />
      <Title level={2} style={{ marginTop: 25 }}>
        Оператор else if
      </Title>
      <Paragraph>Используйте else if оператор, чтобы указать новое условие, если первое условие ложно.</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          if (condition1) {s}
          <br />
          // блок кода, который должен быть выполнен, если условие1 истинно
          <br /> {e} else if (condition2) {s}
          <br /> // блок кода, который должен быть выполнен, если условие1 ложно, а условие2 истинно
          <br /> {e} else {s}
          <br /> // блок кода для выполняться, если условие1 ложно, а условие2 ложно
          <br /> {e}
        </p>
      </div>
    </div>
  );
};
