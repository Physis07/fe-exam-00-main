import { useEffect, useState } from "react";
import "./saludo.css";

export function Saludo() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 6 && hour < 12) {
      setGreeting("¡Buenos Días!");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("¡Buenas Tardes!");
    } else {
      setGreeting("¡Buenas Noches!");
    }
  }, []);
  return (
    <div className="saludo">
      <h1>{greeting}</h1>
    </div>
  );
}
