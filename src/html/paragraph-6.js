import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const Paragraph6 = () => {
  const ToTag = ({ title, tag }) => {
    return (
      <>
        &lt;{tag}&gt;{title} &lt;{tag}/&gt;
      </>
    );
  };
  const TagName = ({ tag }) => {
    return <> &lt;{tag}&gt; </>;
  };
  return (
    <div className="content-page">
      <Title>HTML - Комментарии</Title>

      <Title level={3} style={{ marginTop: 25 }}>
        HTML Элемент <TagName tag="!-- --" />
      </Title>
      <Paragraph>Вы можете добавлять комментарии в HTML код, используя следующий синтаксис:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
            <!-- Пишите здесь свои комментарии -->
        `}</p>
      </div>
      <Paragraph>
        Обратите внимание, что есть в открывающем теге <Tag>!</Tag> восклицательный знак, а в закрывающем теге нет.
      </Paragraph>

      <Paragraph>С помощью комментариев Вы можете разместить уведомления и напоминания в ваш HTML код:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          <TagName tag="!-- Это комментарий --" />
          <p style={{ margin: 0 }}>Это параграф.</p>
          <TagName tag="!-- Не забудьте добавить более подробную информацию здесь --" /> <br />
        </p>
      </div>

      <Paragraph>Комментарии также отлично подходят для отладки HTML кода, можно закомментировать одну строку кода HTML, чтобы найти ошибку:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          <TagName tag={`!-- Не показывать это на данный момент <img border='0' src='pic_mountain.jpg' alt='Горы'>--`} />
        </p>
      </div>
    </div>
  );
};
