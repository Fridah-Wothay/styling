


const UserCard = ({image, fullName}) => {
 return(
    <div>
        <img src={image} alt={'${fulName} profile'}/>
        <h3>{fullName}</h3>
    </div>
 )   
}

export default UserCard;