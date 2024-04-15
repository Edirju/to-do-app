import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {
      
  return (
    <TodoProvider>
      <main className="App">
        <AppUI />
      </main>
    </TodoProvider>
  );
}

export default App;
