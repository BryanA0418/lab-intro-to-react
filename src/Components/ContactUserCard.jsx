import "./ContactUserCard.css"
function ContactUser(){
    return (
    <div className="user-card">
        <img className="user-card__img" src="src\profile.png" />
        <div className="user-card__font">
            <h2 className="contact-user__h2">Jordan Walke</h2>
            <h3 className="contact-user__h3">React Creator</h3>
            <p className="contact-user__p">Lorem ipsum</p>
        </div>
    </div>
    )
}

export default ContactUser;