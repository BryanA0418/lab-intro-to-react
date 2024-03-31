import ContactUser from "./ContactUserCard";
import "./Contacts.css";

function Contacts (){
    return(
        <div className ="contacts-container">
            <h1 className ="contacts-container__h1">Contacts</h1>
            <ContactUser />
            <ContactUser />
            <ContactUser />
            <ContactUser />
        </div>
    )
}

export default Contacts;