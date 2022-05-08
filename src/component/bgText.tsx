interface props {
  title: string;
}
const BgText = ({ title }: props) => {
  return <div style={{ background: "#FFE0A3", padding: 10, margin: 10, borderRadius: 10 }}>{title}</div>;
};
export default BgText;
