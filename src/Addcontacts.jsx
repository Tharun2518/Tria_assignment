import { useState } from 'react'

const Addcontacts = ({isOpen,onClose,onAddContact}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    if (!isOpen)
    {
        return null;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone)
        {
            alert("Please fill the name/phone fields");
            return;
        }
        onAddContact({
            id: Date.now(),
            name: name,
            phone: phone,
            email: ''
        });
        setName('');
        setPhone('');
    }


    return (
    
    <div 
      onClick={onClose} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      
      <div
        onClick={(e) => e.stopPropagation()} 
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl"
      >
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Add New Contact</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            {/* Button Container */}
            <div className="flex gap-3 pt-2">
              <button
                type="button" // Important: type="button" to not submit the form
                onClick={onClose} // Add a cancel button
                className="w-full rounded-md bg-gray-200 px-3 py-2 font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-300 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 px-3 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none"
              >
                Add Contact
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Addcontacts;