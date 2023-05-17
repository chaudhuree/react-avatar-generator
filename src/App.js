import "./styles.css";
import UserAvatar from "./UserAvatar";

export default function App() {
  const fullName = "Shahriar Kabir Sohan";
  return (
    <div className="App">
      <UserAvatar fullName={fullName} size={50} />
    </div>
  );
}
