import FriendListMenu from "../FriendList/FriendListMenu"


export default function FriendList({ friends }) {
    const elements = friends.map(({ avatar, name, isOnline, id }) => 
        <>
        
            <FriendListMenu key={id} avatar={avatar} name={name} isOnline={isOnline} />
        </>
        )
   {
        return (
            
                <ul className="friend-list">{ elements }</ul   >
        
        
    )
  }
}




