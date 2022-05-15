import "./home.css";
import { useDocTitle } from "../../hooks/useDocTitle";

export function Home() {
  useDocTitle("Home - Smasher - Manoj Sarna");

  return <main className="sm-main"></main>;
}
