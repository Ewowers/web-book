import { Tag, Typography } from "antd";
const { Title, Paragraph } = Typography;
export const CSSParagraph4 = () => {
  let s = "{";
  let e = "}";
  return (
    <div className="content-page">
      <Title>CSS - Комментарии</Title>
      <Title level={2}>CSS Комментарии</Title>
      <Paragraph>Комментарии используются для объяснения кода и могут помочь при редактировании исходного кода на более позднем этапе.</Paragraph>
      <Paragraph>Комментарии игнорируются браузерами.</Paragraph>
      <Paragraph>CSS комментарий помещается внутри файла элемента {"<style>"}, и начинается с /* и заканчивается */:</Paragraph>

      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          /* Это однострочный комментарий */
          <br /> p {s} <br />
          color: red;
          <br />
          {e}
        </p>
      </div>
      <Paragraph>Вы можете добавлять комментарии в любом месте кода:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          p {s}
          <br />
          color: red; /* Установите цвет текста на красный */
          <br />
          {e}
        </p>
      </div>
      <Paragraph>Комментарии могут занимать несколько строк:</Paragraph>
      <div className="case">
        <Title level={4}>Пример</Title>
        <p className="case-code">
          /*
          <br /> Это <br /> много <br />
          строчный <br />
          комментарий <br />
          */ <br />p {s}
          <br />
          color: red;
          <br />
          {e}
        </p>
      </div>
    </div>
  );
};
