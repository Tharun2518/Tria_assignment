
const Contactcard = ({ contact }) => {
    console.log("card", contact);
    const initial = contact.name ? contact.name[0].toUpperCase() : '?';
    return (
        <div className="flex cursor-pointer items-center p-4 transition-colors hover:bg-gray-50">
            <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                <span className="text-lg font-medium">{initial}</span>
            </div>
            
            <div className="flex-grow">
                <h3 className="text-md font-medium text-gray-900">{contact.name}</h3>
                <p className="text-sm text-gray-500">{contact.phone}</p>
            </div>
        </div>
    )
}

export default Contactcard