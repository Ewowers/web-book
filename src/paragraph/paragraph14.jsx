import { Typography, Table } from "antd";
const { Title, Paragraph } = Typography;
export const Paragraph14 = () => {
  return (
    <>
      <Title>Генетическая связь между классами неорганических веществ</Title>
      <Paragraph>
        Родство и взаимосвязь химических превращений подтверждается генетической связью между классами неорганических веществ. Одно простое вещество в зависимости от класса и
        химических свойств образует цепочку превращений сложных веществ – генетический ряд.
      </Paragraph>
      <Title level={4}>Неорганические вещества</Title>
      <Paragraph>
        Соединения, не имеющие углеродного скелета, характерного для органических веществ, называются неорганическими или минеральными веществами. Все минеральные соединения
        классифицируются на две обширные группы:
      </Paragraph>
      <ul>
        <li>простые, состоящие из атомов одного элемента;</li>
        <li>сложные, включающие атомы двух и более элементов.</li>
      </ul>
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52633-obschaya-klassifikaciya-veschestv.jpg" alt="" />
      <Paragraph>К простым соединениям относятся:</Paragraph>
      <ul>
        <li>металлы (K, Mg, Ca);</li>
        <li>неметаллы (O2, S, P);</li>
        <li>инертные газы (Kr, Xe, Rn).</li>
      </ul>
      <Paragraph>Сложные вещества имеют более разветвлённую классификацию, приведённую в таблице.</Paragraph>
      <Table
        dataSource={[
          {
            gid: "Оксиды",
            salt: ["Основные", "Кислотные", "Амфотерные"],
            des: ["CaO, Na2O", "CO2, SO3", "ZnO, Al2O3"],
            key: 0,
          },
          {
            gid: "Гидроксиды",
            salt: ["Нерастворимые основания", "Щёлочи", "Амфотерные"],
            des: ["Mg(OH)2, Cu(OH)2", "NaOH, Ba(OH)2", "Zn(OH)2, Fe(OH)3"],
            key: 1,
          },
          {
            gid: "Кислоты",
            salt: ["Бескислородные", "Кислородсодержащие"],
            des: ["HCl, H2S, HCN", "HNO3, H2SO4"],
            key: 2,
          },
          {
            gid: "Соли",
            salt: ["Основные (комплексные)", "Кислые", "Средние"],
            des: ["Zn(OH)Cl, Cu2(OH)2CO3", "NaHSO3, CaHPO4", "Na2SO4, Ca3(PO4)2"],
            key: 3,
          },
        ]}
        columns={[
          { title: "Класс", dataIndex: "gid", key: "key" },
          { title: "Подкласс", dataIndex: "salt", key: "key", render: (salt) => salt.map((item) => <Paragraph>{item}</Paragraph>) },
          {
            title: "Примеры",
            dataIndex: "des",
            key: "key",
            render: (salt) => salt.map((item) => <Paragraph>{item}</Paragraph>),
          },
        ]}
      />
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52633-klassifikaciya-slozhnyh-veschestv.jpg" alt="" />
      <div style={{ background: "#FFE0A3", padding: 10, margin: 10, borderRadius: 10 }}>
        Амфотерные металлы образуют соответствующие оксиды и гидроксиды. Амфотерные соединения проявляют свойства кислот и оснований.
      </div>
      <Title level={4}>Генетические ряды</Title>
      <Paragraph>
        Простые вещества – металлы и неметаллы – образуют цепочки превращений, отражающие генетическую связь неорганических веществ. Посредством химических реакций присоединения,
        замещения и разложения образуются новые более простые или сложные соединения.
      </Paragraph>
      <Paragraph>
        Каждое звено цепочки связано с предыдущим наличием простого вещества. Различие между двумя типами генетических рядов заключается в реакции с водой: металлы образуют
        растворимые и нерастворимые основания, неметаллы – кислоты.
      </Paragraph>
      <Paragraph>Основные цепочки превращений описаны в таблице.</Paragraph>
      <Table
        dataSource={[
          {
            gid: "Металл",
            salt: ["Активный металл → основный оксид → щёлочь → соль", "Малоактивный металл → основный оксид → соль → нерастворимое основание → основный оксид → металл"],
            des: [
              ["– 2Са + О2 → 2CaO;", "– CaO + Н2О → Ca(ОН)2;", "– Ca(ОН)2 + 2HCl → CaCl2 + 2H2O"],
              ["– 2Cu + O2 → 2CuO;", "– CuO + 2HCl → CuCl2 + H2O;", "– CuCl2 + 2KOH → Cu(OH)2 + 2KCl;", "– Cu(OH)2 → CuO + H2O;", "– CuO + H2 → Cu + H2O"],
            ],
            key: 0,
          },
          {
            gid: "Неметалл",
            salt: ["→ кислотный оксид → растворимая (сильная) кислота → соль", "→ кислотный оксид → соль → нерастворимая (слабая) кислота → кислотный оксид → неметалл"],
            des: [
              ["– 4P + 5O2 → 2P2O5;", "– P2O5 + 3H2O → 2H3PO4;", "– H3PO4 + 3NaOH → Na3PO4 + 3H2O"],
              ["– Si + O2 → SiO2;", "– SiO2 + 2NaOH → Na2SiO3 + H2O;", "– Na2SiO3 + 2HCl → H2SiO3 + 2NaCl;", "– H2SiO3 → SiO2 + H2O;", "– SiO2 + 2Zn → 2ZnO + Si"],
            ],
            key: 1,
          },
        ]}
        columns={[
          { title: "Вещество", dataIndex: "gid", key: "key" },
          { title: "Генетический ряд", dataIndex: "salt", key: "key", render: (salt) => salt.map((item) => <Paragraph>{item}</Paragraph>) },
          {
            title: "Примеры",
            dataIndex: "des",
            key: "key",
            render: (salt) =>
              salt.map((item) => (
                <>
                  {item.map((element) => (
                    <Paragraph>{element}</Paragraph>
                  ))}
                </>
              )),
          },
        ]}
      />
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52633-shema-geneticheskoy-svyazi-mezhdu-klassami.jpg" alt="" />
    </>
  );
};
