import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const Paragraph5 = () => {
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
      <Title>HTML - Стили</Title>
      <Paragraph>HTML атрибут style используется для добавления стилей к элементу, таких как цвет, шрифт, размер и т. д.</Paragraph>

      <Title level={3} style={{ marginTop: 25 }}>
        HTML атрибут style
      </Title>
      <Paragraph>
        Настройка стиля HTML элемента может быть выполнена с помощью атрибута <Tag>style</Tag>. Атрибут HTML <Tag>style</Tag> имеет следующий синтаксис:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
            <Tag>style</Tag>
        `}</p>
      </div>
      <Paragraph>
        <Tag>property</Tag> - свойство CSS. <Tag>value</Tag> - значение CSS.
      </Paragraph>

      <Title level={3} style={{ marginTop: 25 }}>
        Background Color
      </Title>
      <Paragraph>
        CSS свойство <Tag>background-color</Tag> определяет цвет фона для HTML элемента.{" "}
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
             <body style="background-color:powderblue;">

             <h1>Это заголовок</h1>
             <p>Это параграф.</p>
             
             </body> 
        `}</p>
      </div>

      <Title level={3} style={{ marginTop: 25 }}>
        Color
      </Title>
      <Paragraph>
        CSS свойство <Tag>color</Tag> определяет цвет текста для HTML элемента:{" "}
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
           <h1 style="color:blue;">Это заголовок</h1>
           <p style="color:red;">Это параграф.</p> 
        `}</p>
      </div>

      <Title level={3} style={{ marginTop: 25 }}>
        Font-family
      </Title>
      <Paragraph>
        CSS свойство <Tag>font-family</Tag> определяет шрифт, используемый для HTML элемента:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
          <h1 style="font-family:verdana;">Это заголовок</h1>
          <p style="font-family:courier;">Это параграф.</p>  
        `}</p>
      </div>

      <Title level={3} style={{ marginTop: 25 }}>
        Font-size
      </Title>
      <Paragraph>
        CSS свойство <Tag title="font-size">font-size</Tag>
        определяет размер текста для HTML элемента:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
           <h1 style="font-size:300%;">Это заголовок</h1>
           <p style="font-size:160%;">Это параграф.</p> 
        `}</p>
      </div>

      <Title level={3} style={{ marginTop: 25 }}>
        Text-align
      </Title>
      <Paragraph>
        CSS свойство <Tag>text-align</Tag> определяет горизонтальное выравнивание текста для HTML элемента:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
            <h1 style="text-align:center;">Заголовок по центру</h1>
            <p style="text-align:center;">Параграф по центру.</p> 
        `}</p>
      </div>
    </div>
  );
};
