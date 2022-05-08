import { Typography } from "antd";
const { Title, Paragraph } = Typography;
export const Paragraph11 = () => {
  return (
    <>
      <Title>Электролиз</Title>
      <Paragraph>
        Электролиз – процесс, при котором электрическая энергия преобразуется в химическую. Этот процесс протекает на электродах под действием постоянного тока. Каковы продукты
        электролиза расплавов и растворов, и что входит в понятие «электролиз».
      </Paragraph>
      <Title level={4}>Электролиз расплавов солей</Title>
      <Paragraph>
        Электролиз – это окислительно-восстановительные реакции протекающие на электродах при пропускании постоянного электрического тока через раствор или расплав электролита.
      </Paragraph>
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52183-ponyatie-elektroliza.jpg" alt="" />
      <Paragraph>
        Хаотическое движение ионов под действием тока делается упорядоченным. Анионы движутся к положительному электроду (аноду) и окисляются на нем, отдавая электроны. Катионы
        движутся к отрицательному полюсу (катоду) и восстанавливаются на нем, принимая электроны.
      </Paragraph>
      <Paragraph>
        Электроды могут быть инертными (металлическими из платины или золота или неметаллическими из угля или графита) или активными. Анод в этом случае растворяется в процессе
        электролиза (растворимый анод). Его изготавливают из таких металлов, как хром, никель, цинк, серебро, медь и т. д.
      </Paragraph>
      <Paragraph>
        При электролизе расплавов солей, щелочей, оксидов катионы металлов разряжаются на катоде с образованием простых веществ. Электролиз расплавов является промышленным способом
        получения таких металлов, как натрий, калий, кальций (электролиз расплавов солей) и алюминий (электролиз расплава оксида алюминия Al2O3 в криолите Na3AlF6, используемом для
        облегчения переведения оксида в расплав). Например, схема электролиза расплава поваренной соли NaCl происходит так:
      </Paragraph>
      <Paragraph>NaCl Na+ + Cl–</Paragraph>
      <Paragraph>Катод (–) (Na+): Na+ + е = Na0</Paragraph>
      <Paragraph>Анод (–) (Cl–): Cl– – е = Cl0, 2Cl0 = Cl2</Paragraph>
      <Paragraph>Суммарный процесс:</Paragraph>
      <Paragraph>2Na+ +2Cl- = электролиз 2Na + 2Cl2</Paragraph>
      <Paragraph>или</Paragraph>
      <Paragraph>2NaCl = электролиз 2Na + Cl2</Paragraph>
      <div style={{ background: "#FFE0A3", padding: 10, margin: 10, borderRadius: 10 }}>Одновременно с получением щелочного металла натрия при электролизе соли получают хлор.</div>
      <Title level={4}>Электролиз растворов солей</Title>
      <Paragraph>
        Если электролизу подвергаются растворы солей, то, наряду с ионами, образующимися при диссоциации соли, окисляться или восстанавливаться на электродах может и вода.
      </Paragraph>
      <Paragraph>Существует определенная последовательность разряжения ионов на электродах в водных растворах.</Paragraph>
      <Paragraph>
        1. Чем выше стандартный электродный потенциал металла, тем легче он восстанавливается. Иначе говоря, чем правее стоит металл в электрохимическом ряду напряжений, тем легче
        его ионы будут восстанавливаться на катоде. При электролизе растворов солей металлов от лития до алюминия включительно на катоде всегда восстанавливаются молекулы воды:
      </Paragraph>
      <Paragraph>2H2O+2e=H2+2OH-</Paragraph>
      <Paragraph>
        Если электролизу подвергаются растворы солей металлов, начиная с меди и правее меди, на катоде восстанавливаются только катионы металлов. При электролизе солей металлов от
        марганца MN до свинца Pb могут восстанавливаться как катионы металлов, так, в некоторых случаях, и вода.
      </Paragraph>
      <Paragraph>
        2. На аноде окисляются анионы кислотных остатков (кроме F-). Если электролизу подвергаются соли кислородосодержащих кислот, то анионы кислотных остатков остаются в
        растворе, окисляется вода:
      </Paragraph>
      <Paragraph>2H2O-4e=O2+4H+</Paragraph>
      <Paragraph>3. Если анод растворимый, то происходит окисление и растворение самого анода:</Paragraph>
      <Paragraph>Cu-2e=Cu2+</Paragraph>
      <Paragraph>Пример: электролиз водного раствора сульфата натрия Na2SO4:</Paragraph>
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52183-elektroliz-vodnogo-rastvora-sulfata-natriya.jpg" alt="" />
      <Paragraph>Так происходит электролиз, если катодное и анодное пространства разделены. Если же они не разделены происходит электролиз воды:</Paragraph>
      <Paragraph>2H2O=(Na2SO4)= 2H2+O2</Paragraph>
      <Paragraph>Электролиз используют для покрытия металла медью и золотом</Paragraph>
      <img src="https://obrazovaka.ru/wp-content/images/predmet/himiya-52183-tablica-elektroliza-rasplavov-i-rastvorov.jpg" alt="" />
    </>
  );
};
