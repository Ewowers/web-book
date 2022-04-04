import { Typography } from "antd";
const { Title, Paragraph } = Typography;
export const BSParagraph2 = () => {
  const margin = { marginTop: 25 };
  return (
    <>
      <Title>Настройка</Title>
      <Paragraph>Узнайте как создавать темы и расширения Bootstrap с помощью Sass и множества глобальных опций, обширную систему цветов и многое другое. </Paragraph>
      <Title level={2} style={margin}>
        Обзор
      </Title>
      <Paragraph>
        Есть несколько способов настроить Bootstrap. Выбор оптимального способа может зависеть от вашего проекта, сложности инструментов сборки, используемой вами версии Bootstrap,
        поддержки браузера и многого другого.
      </Paragraph>
      <Paragraph>Наши два наиболее предпочтительных метода:</Paragraph>
      <ol>
        <li>Использование Bootstrap через систему управления пакетами для использования и расширения наших исходныех файлов.</li>
        <li>Использоввание скомпилированныех файлов дистрибутива Bootstrap или jsDelivr для добавления или переопределения стилей Bootstrap.</li>
      </ol>
      <Paragraph>
        Хотя мы здесь подробно не рассказаваем о том, как использовать каждый менеджер пакетов, мы можем дать некоторые рекомендации по использованию Bootstrap с вашим собственным
        компилятором Sass.
      </Paragraph>
      <Paragraph>
        Для тех, кто хочет использовать файлы дистрибутива и включить их, смотрите страницу начала работы и пример HTML-страницы. И там уже смотрите документацию по макету,
        компонентам и поведению для дальнейшего использования.
      </Paragraph>
      <Paragraph>
        По мере знакомства с Bootstrap продолжайте изучать этот раздел о использовании наших глобальных параметров, использовании и изменении цветовой системы, создании
        компонентов, использовании нашего растущего списока пользовательских свойств CSS и оптимизации кода при сборке с Bootstrap.
      </Paragraph>
      <Title level={2} style={margin}>
        CSP и встроенные SVG
      </Title>
      <Paragraph>
        Некоторые компоненты Bootstrap включают встроенные SVG-файлы в наш CSS, чтобы согласованно и легко стилизовать компоненты в разных браузерах и на разных устройствах. Для
        организаций с более строгими конфигурациями CSP, мы задокументировали все экземпляры наших встроенных SVG (все из которых применяются через background-image), поэтому Вы
        можете более тщательно изучить свои варианты.
      </Paragraph>
      <ul>
        <li>Аккордеон</li>
        <li>Кнопка закрытия (используется в уведомлениях и модальных окнах)</li>
        <li> Чекбоксы и радиокнопки</li>
        <li>Выключатели</li>
        <li>Проверка на стороне сервера</li>
        <li>Выпадающие списки</li>
        <li>Карусель с элементами управления</li>
        <li>Отзывчивое поведение навигационной панели</li>
      </ul>
      <Paragraph>
        На основе обсуждения сообщества некоторые варианты решения этой проблемы в Вашей собственной кодовой базе включают замену URL-адресов локально размещенными ресурсами,
        удаление изображений и использование встроенных изображений (невозможно во всех компонентах) и изменение Вашего CSP. Наша рекомендация - внимательно изучить свои
        собственные политики безопасности и при необходимости выбрать лучший путь для дальнейшего развития.
      </Paragraph>
    </>
  );
};