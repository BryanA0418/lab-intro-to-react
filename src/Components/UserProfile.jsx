import "./UserProfile.css"
function UserProfile(){
    return(
        <div className="user-profile">
            <img className="user-profile__img" src="src\profile.png" />
            <div className="user-profile__fonts">
                <h2 className="user-profile__h2">Jordan Walke</h2>
                <h3 className="user-profile__h3">React Creator</h3>
                <p className="user-profile__p">Lorem ipsum</p>
            </div>
        </div>
    )
}

export default UserProfile;