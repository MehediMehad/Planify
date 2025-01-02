import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}

export default App;
