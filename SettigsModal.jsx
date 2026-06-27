export default function SettingsModal({ close }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Settings</h2>
        <p>PWA Mode Active</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}
