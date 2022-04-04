import { Typography } from "antd";
const { Title } = Typography;
export const Paragraph1 = () => {
  return (
    <div className="content-page">
      <Title>Введение</Title>
      <Title level={2}>Что такое HTML?</Title>
      <ul>
        <li>HTML - расшифровывается как Гипертекстовый Язык Разметки</li>
        <li>HTML - код описывает структуру веб страниц с помощью разметки</li>
        <li>HTML - элементы являются строительными блоками страниц HTML</li>
        <li>HTML - элементы представляют теги</li>
        <li>HTML - теги содержат, "Заголовок", "Параграф", "Таблицы" и т.д.</li>
        <li>Браузеры не отображают теги HTML, они используют их для вывода содержимого страницы</li>
      </ul>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          &lt;!DOCTYPE html;&gt;
          <br />
          &lt;html&gt;
          <br />
          &lt;head&gt;
          <br />
          &lt;title&gt;Название вашего сайта&lt;/title&gt;
          <br />
          &lt;/head&gt;
          <br />
          &lt;body&gt;
          <br />
          <br />
          <br />
          &lt;/body&gt;
          <br />
          &lt;/html&gt;
        </p>
      </div>
    </div>
  );
};
