import { useState } from "react";
import Grid from "./components/Grid";
import Timer from "./components/Timer";
import Camera from "./components/Camera";
import AIInsights from "./components/AIInsights";
import SettingsModal from "./components/SettingsModal";

export default function App() {
  const [day, setDay] = useState(1);
  const [entries, setEntries] = useState({});
  const [note, setNote] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const saveEntry = () => {
    const updated = {
      ...entries,
      [day]: { note, time: new Date().toISOString() }
    };
    setEntries(updated);
    localStorage.setItem("entries", JSON.stringify(updated));
  };

  return (
    <div className="app">
      <Grid entries={entries} day={day} setDay={setDay} />

      <div className="main">
        <Timer />
        
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <Camera day={day} entries={entries} setEntries={setEntries} />

        <button onClick={saveEntry}>SAVE</button>

        <AIInsights entries={entries} />

        <button onClick={() => setShowSettings(true)}>Settings</button>
      </div>

      {showSettings && (
        <SettingsModal close={() => setShowSettings(false)} />
      )}
    </div>
  );
}
