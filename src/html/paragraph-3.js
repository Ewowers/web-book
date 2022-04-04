import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const Paragraph3 = () => {
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
      <Title>HTML - Элементы</Title>
      <Title level={2}>Элементы HTML</Title>
      <Paragraph>HTML элемент определяется начальным тегом, некоторым содержимым и конечным тегом:</Paragraph>
      <Paragraph>
        <ToTag title="Контент находится здесь..." tag="tagname" />
      </Paragraph>
      <Paragraph>HTML элемент - все от начального тега до конечного тега</Paragraph>
      <ToTag title="Мой первый заголовок" tag="h1" />
      <ToTag title="Мой первый параграф." tag="P" />

      <Title level={2} style={{ marginTop: 50 }}>
        HTML Вложенные элементы
      </Title>
      <Paragraph>
        HTML элементы могут быть вложенными (элементы могут содержать элементы). <br />
        <br />
        Все документы HTML состоят из вложенных элементов HTML.
        <br />
        <br /> В этом примере состоит из четырех элементов HTML:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          {"<!DOCTYPE html>"} <br />
          <ToTag
            tag="html"
            title={
              <ToTag
                title={
                  <>
                    <br />
                    <ToTag title="Мой первый загаловок" tag="h1" />
                    <br /> <ToTag title="Мой первый параграф." tag="p" />
                    <br />
                  </>
                }
                tag="body"
              />
            }
          />
        </p>
      </div>
      <Title level={3} style={{ marginTop: 25 }}>
        Пример объяснение
      </Title>
      <Paragraph>
        Элемент <TagName tag="html" /> определяет весь документ. <br />
        <br />
        Он имеет начальный тег <TagName tag="html" /> и конечный тег <TagName tag="/html" />.<br />
        <br />
        Элемент содержит еще один HTML элемент
        <TagName tag="body" />.
      </Paragraph>
    </div>
  );
};
