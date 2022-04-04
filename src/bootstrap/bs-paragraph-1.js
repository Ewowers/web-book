import { Typography } from "antd";
const { Title, Paragraph } = Typography;
export const BSParagraph1 = () => {
  const margin = { marginTop: 25 };
  const s = "{";
  const e = "}";
  return (
    <>
      <Title>Вступление</Title>
      <Paragraph>
        Начните работу с Bootstrap, самой популярной в мире платформой для создания адаптивных сайтов, ориентированных на мобильные устройства, с jsDelivr и шаблонами страниц.
      </Paragraph>

      <Title level={2} style={margin}>
        Быстрый старт
      </Title>
      <Paragraph>
        Хотите использовать Бутстрап в своем проекте? Используйте jsDelivr, бесплатную CDN с открытым исходным кодом. Нужна система управления пакетами или исходники Bootstrap?
        Перейдите на страницу загрузки.
      </Paragraph>

      <Title level={2} style={margin}>
        CSS
      </Title>
      <Paragraph>
        Скопируйте и вставьте часть кода {"<link>"}в свой {"<head>"} перед всеми другими таблицами стилей, чтобы загрузить наш CSS.
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          {`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">`}
        </p>
      </div>

      <Title level={2} style={margin}>
        JS
      </Title>
      <Paragraph>
        JS Многие из наших компонентов требуют использовать для работы JavaScript. В частности, для них требуются наши собственные плагины JavaScript и Popper. Поместите один из
        следующих тегов {`<script>`} в конце страницы, прямо перед закрывающим тегом {`</body>`}, чтобы включить их.
      </Paragraph>
      <Paragraph style={{ fontSize: 18 }}>Пакетное подключение</Paragraph>
      <Paragraph>
        Включите каждый плагин Bootstrap JavaScript в один из двух наших пакетов. Оба файла, и bootstrap.bundle.js и bootstrap.bundle.min.js включают в себя Popper для наших
        всплывающих подсказок и всплывающих окон. Для получения дополнительной информации о том, что входит в Bootstrap, смотрите раздел содержание.
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          {`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>`}
        </p>
      </div>
      <Paragraph style={{ fontSize: 18 }}>Раздельное подключение</Paragraph>
      <Paragraph>
        Если вы решите использовать отдельные скрипты, сначала должен быть подключен Popper (если вы используете всплывающие подсказки или всплывающие окна), а затем наши плагины
        JavaScript.
      </Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          {`<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
`}
        </p>
      </div>
    </>
  );
};
