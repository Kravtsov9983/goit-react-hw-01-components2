

export default function FriendListMenu({ avatar, name, isOnline}) {
   {
        return (
            <li className="item-friend" >
                <span className="status-friend" status={isOnline} ></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48"/>
                <p className="name-friend">{name}</p>
            </li>
                
            
        
    )
  }
}
