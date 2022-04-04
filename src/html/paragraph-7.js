import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const Paragraph7 = () => {
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
      <Title>HTML - Мета теги</Title>

      <Title level={3} style={{ marginTop: 25 }}>
        HTML <TagName tag="head" />
      </Title>
      <Paragraph>
        Элемент <TagName tag="head" /> представляет собой контейнер для метаданных (данных о данных) и помещается между ними. Тег <TagName tag="html" /> и тег{" "}
        <TagName tag="body" />. <br />
        <br />
        Метаданные HTML - это данные о документе HTML. Метаданные не отображаются.
        <br />
        <br />
        Метаданные обычно определяют заголовок документа, набор символов, стили, сценарии и другую метаинформацию.
      </Paragraph>

      <Title level={3} style={{ marginTop: 25 }}>
        HTML <TagName tag="link" />
      </Title>
      <Paragraph>
        Элемент <TagName tag="link" /> используется для связи с внешними таблицами стилей:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p class="case-code">{` 
             <link rel="stylesheet" href="mystyle.css"> 
        `}</p>
      </div>

      <Title level={3} style={{ marginTop: 25 }}>
        HTML <TagName tag="meta" />
      </Title>
      <Paragraph>
        Элемент <TagName tag="meta" /> используется для указания используемого набора символов, описания страницы, ключевых слов, автора и других метаданных.
        <br />
        <br />
        Метаданные используются браузерами (как отображать контент), поисковыми системами (ключевые слова) и другими веб службами.
        <br />
        <br />
        Определение используемый набор символов:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p class="case-code">{` 
          <meta charset="UTF-8">
        `}</p>
      </div>
      <Paragraph>Определение описание вашей веб страницы:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p class="case-code">{` 
          <meta name="description" content="Бесплатные веб учебники">
        `}</p>
      </div>
      <Paragraph>Определение ключевых слов для поисковых систем:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p class="case-code">{` 
          <meta name="keywords" content="HTML, CSS, XML, JavaScript">
        `}</p>
      </div>
      <Paragraph>Определение автора страницы:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p class="case-code">{` 
          <meta name="author" content="Щипунов Андрей">
        `}</p>
      </div>
      <Paragraph>Документ обновляется каждые 30 секунд:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p class="case-code">{` 
          <meta http-equiv="refresh" content="30">
        `}</p>
      </div>

      <Title level={3} style={{ marginTop: 25 }}>
        HTML <TagName tag="script" />
      </Title>
      <Paragraph>
        Элемент <TagName tag="script" /> используется для определения клиентского Javascript. <br /> <br />
        This JavaScript пишет "Привет JavaScript!" в HTML элемент с помощью id="demo":
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p class="case-code">
          <TagName tag="script" />
          <br />
          function myFunction() {"{"}
          document.getElementById("demo").innerHTML = "Привет JavaScript!"; <br />
          {"}"}
          <br />
          <TagName tag="script/" />
        </p>
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
        <p class="case-code">{` 
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
        <p class="case-code">{` 
            <h1 style="text-align:center;">Заголовок по центру</h1>
            <p style="text-align:center;">Параграф по центру.</p> 
        `}</p>
      </div>
    </div>
  );
};
