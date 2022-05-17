import { ContentArea, LeftSideBar, RightSideBar } from "../../components";
import "./post.css";
export function Post() {
  return (
    <main className="sm-main">
      <LeftSideBar />
      <ContentArea />
      <RightSideBar />
    </main>
  );
}
