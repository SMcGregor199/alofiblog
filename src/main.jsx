import {createRoot} from "react-dom/client"
import heroPng from "./assets/hero.png";
const root = createRoot(document.querySelector("#root"))

function Main () {
  return(
    <main>
      <h1>Welcome to {import.meta.env.VITE_TITLE}</h1>
      <img src={heroPng} alt="Hero" />
    </main>
  )
}
root.render(
  <Main />
)

