import { Typography } from "antd";
const { Title, Paragraph } = Typography;
export const BSParagraph5 = () => {
  const margin = { marginTop: 25 };
  const s = "{";
  const e = "}";
  return (
    <>
      <Title>Формы</Title>
      <Paragraph>Примеры и рекомендации по использованию стилей управления формами, параметров макета и настраиваемых компонентов для создания самых разнообразных форм.</Paragraph>
      <Title level={2} style={margin}>
        Обзор
      </Title>
      <Paragraph>
        Формы в Bootstrap по сути являются просто расширением наших Reboot стилей форм с добавлением классов. Используйте эти классы для более точной настройки отображения и лучшей
        отрисовки на разных браузерах и устройствах.
      </Paragraph>
      <Paragraph>
        Удостоверьтесь, что используете правильный атрибут type во всех формах ввода (т.е., email для почты и number для цифровой информации), это даст вам преимущества в виде
        новейших инструментов (таких как проверка email, выборка чисел и т.д.) контроля данных ввода.
      </Paragraph>
      <Paragraph>Вот демонстрация стилей форм Bootstrap. Читайте документацию по требуемым классам, расположению форм и т.д.</Paragraph>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Paragraph>{`<form>`}</Paragraph>
      <Paragraph>{`<div class="mb-3">`}</Paragraph>
      <Paragraph>{`<label for="exampleInputEmail1" class="form-label">Email address</label>`}</Paragraph>
      <Paragraph>{`<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">`}</Paragraph>
      <Paragraph>{`<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>`}</Paragraph>
      <Paragraph>{`</div>`}</Paragraph>
      <Paragraph>{`<div class="mb-3">`}</Paragraph>
      <Paragraph>{`<label for="exampleInputPassword1" class="form-label">Password</label>`}</Paragraph>
      <Paragraph>{`<input type="password" class="form-control" id="exampleInputPassword1">`}</Paragraph>
      <Paragraph>{`</div>`}</Paragraph>
      <Paragraph>{`<div class="mb-3 form-check">`}</Paragraph>
      <Paragraph>{`<input type="checkbox" class="form-check-input" id="exampleCheck1">`}</Paragraph>
      <Paragraph>{`<label class="form-check-label" for="exampleCheck1">Check me out</label>`}</Paragraph>
      <Paragraph>{`</div>`}</Paragraph>
      <Paragraph>{`<button type="submit" class="btn btn-primary">Submit</button>`}</Paragraph>
      <Paragraph>{`</form>`}</Paragraph>

      <Title level={2} style={{ marginTop: 25 }}>
        Вспомогательный текст
      </Title>
      <Paragraph>Текст формы на уровне блока или на уровне строки может быть создан с помощью .form-text.</Paragraph>
      <Title level={4}>Связь вспомогательного текста с органами контроля форм</Title>
      <Paragraph>
        Вспомогательный текст должен быть явно связан с родственными его элементами контроля форм, это делается атрибутом aria-describedby. Это обеспечит вспомогательным
        технологиям (таким как экранные читалки) возможность прочитать этот текст, когда юзер обращается к связанному с этим текстом элементу контроля.
      </Paragraph>
      <Paragraph>
        Вспомогательный текст под полями может быть оформлен с помощью .form-text. Если будет использоваться элемент уровня блока, добавляется верхнее поле для упрощения расстояния
        от входных данных выше.
      </Paragraph>
      <label htmlFor="inputPassword5" className="form-label">
        Пароль
      </label>
      <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
      <div id="passwordHelpBlock" className="form-text">
        Ваш пароль должен состоять из 8-20 символов, содержать буквы и цифры и не должен содержать пробелов, специальных символов или эмодзи.
      </div>
      <Paragraph style={{ padding: 10, background: "yellow", color: "#000", marginTop: 10 }}>
        Все формы и поля вода можно увидеть на официальном сайте <a href="https://bootstrap-4.ru/docs/5.1/getting-started/introduction/">bootstrap</a>{" "}
      </Paragraph>
    </>
  );
};
