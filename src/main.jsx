import {createRoot} from "react-dom/client"
import heroPng from "./assets/hero.png";
const root = createRoot(document.querySelector("#root"))

function Main () {
  return(
    <main>
      <h1>Welcome to {import.meta.env.VITE_NEW_TITLE}</h1>
      <img src={heroPng} alt="Hero" />
      <p>What's your favorite lofi track?</p>
    </main>
  )
}
root.render(
  <Main />
)

