import Content from "../components/Content";
import IndexTop from "../components/IndexTop";
import News from "../components/News";
import Partner from "../components/Partner";
import Static from "../components/Static";
import SubCompany from "../components/SubCompany";



export default function Home() {
  return (
  <div>
    <Content/>
    <IndexTop/>
    <SubCompany/>
    <News/>
    <Static/>
    <Partner/>
    </div>
  );
}
