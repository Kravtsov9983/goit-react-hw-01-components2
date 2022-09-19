
import user from "../../src/user.json";
import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import data from '../../src/data.json';
import friends from "../../src/friends.json";

export const App = () => {
  return (
    <>
    <Profile user={user} />;
    <Statistics data={data} />;
    <FriendList friends={friends} />;
    </>
      
  )
};
