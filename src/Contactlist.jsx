import Contactcard from "./Contactcard";

const Contactlist = ({ contacts }) => {
    console.log(contacts, "list");
    return (
        <div className="divide-y divide-gray-200">
            {
                contacts.map(contact => (
                    <Contactcard key={contact.id} contact={contact} />
                ))
            }
        </div>
    )
}

export default Contactlist;