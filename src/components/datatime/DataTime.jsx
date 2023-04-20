import { useEffect, useState } from "react";
import "./datetime.css";

export function DataTime(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timezone);
  }, []);

  return (
    <div className="datetime">
      <p>{date.toLocaleDateString()}</p>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
