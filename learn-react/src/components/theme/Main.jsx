import { DarkModeContextProvider } from "../../context/DarkModeContext";
import Card from "../Card";
export default function Main() {
  return (
    <main>
      <DarkModeContextProvider initDarkMode={true}>
        <Card title="제목">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus iste laborum iusto ipsa cum est dolorum pariatur eaque ipsam at, sunt exercitationem dolor magnam,
          et esse. Porro laborum eligendi nemo.
        </Card>
      </DarkModeContextProvider>
    </main>
  );
}
