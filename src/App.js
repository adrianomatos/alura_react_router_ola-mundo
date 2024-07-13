import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";

// Ex básico sobre rotas com JS
const pagina = window.location.pathname === "/" ? <Inicio /> : <SobreMim />;

function App() {
  return pagina;
}

export default App;
