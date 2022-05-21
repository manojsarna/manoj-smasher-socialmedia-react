import { useSelector } from "react-redux";
import { AvatarCard } from "../avatar-card/AvatarCard";
import "./rightsidebar.css";
export function RightSideBar() {
  const user = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.users.users);
  const loginUserDetails = users.find(
    (item) => item.username === user.username
  );

  const suggestedUsers = users
    .filter(
      (item) =>
        !loginUserDetails.following.find(
          (tempUser) => tempUser.username === item.username
        ) && item.username !== user.username
    )
    .slice(0, 5);

  return (
    <aside className="sm-right-sidebar">
      <div className="sm-right-sidebar-container">
        <h3>Suggestions</h3>
        <div className="sm-suggested-users-container">
          {suggestedUsers.map((user) => (
            <AvatarCard key={user._id} user={user} />
          ))}
        </div>
      </div>
    </aside>
  );
}
