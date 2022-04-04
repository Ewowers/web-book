import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const Paragraph4 = () => {
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
      <Title>Атрибуты HTML</Title>
      <ul>
        <li>Все HTML элементы могут иметь атрибуты</li>
        <li>Атрибуты предоставляют дополнительную информацию об элементах</li>
        <li>Атрибуты всегда задаются в начальном теге</li>
        <li>
          Атрибуты обычно входят в пары имя/значение, такие как: <Tag>name="value"</Tag>
        </li>
      </ul>

      <Title level={3} style={{ marginTop: 25 }}>
        Атрибут href
      </Title>
      <Paragraph>
        Тег <TagName tag="a" /> определяет гиперссылку. Атрибут <Tag>href</Tag> указывает URL адрес страницы, на которую переходит ссылка:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
           <a href="https://google.com">Посетить google</a> 
        `}</p>
      </div>

      <Title level={3} style={{ marginTop: 25 }}>
        Атрибуты width и height
      </Title>
      <Paragraph>
        Тег <TagName tag="img" /> также должен содержать атрибуты <Tag>width</Tag> и <Tag>height</Tag>, который определяет ширину и высоту изображения (в пикселях):
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
            <img src="img_girl.jpg" width="500" height="600"> 
        `}</p>
      </div>

      <Title level={3} style={{ marginTop: 25 }}>
        Атрибут alt
      </Title>
      <Paragraph>
        Обязательный атрибут <Tag>alt</Tag> требуется для тега <TagName tag="img" /> указывает альтернативный текст для изображения, если изображение по какой-либо причине не может
        быть отображено. Это может быть связано с медленным соединением или ошибкой в системе. Атрибут <Tag>src</Tag>, используется пользователем для чтения программы с экрана.
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
            <img src="img_girl.jpg" alt="Девушка в куртке"> 
        `}</p>
      </div>

      <Title level={3} style={{ marginTop: 25 }}>
        Атрибут lang
      </Title>
      <Paragraph>
        Всегда подключайте атрибут lang внутри тега <TagName tag="html" />, чтобы объявить язык веб страницы. Это делается для того, чтобы помочь поисковым системам и браузерам.
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
          <!DOCTYPE html>
          <html lang="ru">
          <body>
          ...
          </body>
          </html>
        `}</p>
      </div>

      <Title level={3} style={{ marginTop: 25 }}>
        Атрибут style
      </Title>
      <Paragraph>
        Атрибут <Tag>style</Tag> используется для добавления стилей к элементу, таких как цвет, шрифт, размер и т. д.{" "}
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
         <p style="color:red;">Это красный параграф.</p> 
        `}</p>
      </div>

      <Title level={3} style={{ marginTop: 25 }}>
        Атрибут title
      </Title>
      <Paragraph>
        Атрибут <Tag>title</Tag> определяет некоторую дополнительную информацию об элементе. Значение атрибута <Tag>title</Tag> будет отображаться в виде всплывающей подсказки при
        наведении курсора мыши на элемент:
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">{` 
          <p title="Я подсказка">Это параграф.</p> 
        `}</p>
      </div>
    </div>
  );
};
