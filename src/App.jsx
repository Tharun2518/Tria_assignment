import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Contactlist from './Contactlist';
import Searchbar from './Searchbar';
import Addcontacts from './Addcontacts';

function App() {
  const [allContacts, setAllContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [searchItem, setSearchItem] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredContacts = allContacts.filter(contact => 
    (contact.name || '').toLowerCase().includes((searchItem || '').toLowerCase())
  )

  const handleNewContact = (newContact) => {
    setAllContacts(prevContacts => [newContact, ...prevContacts]);
    setIsModalOpen(false);
  }

  useEffect(() => {
    const fetchContacts = async () => {
      try
      {
        const response = await fetch('/contacts.json');
        if (!response.ok)
        {
          throw new Error('Failed to fetch the contacts');
        }
        const data = await response.json();
        console.log(data);
        setAllContacts(data);
      }
      catch (error)
      {
        setError(error.message);
      }
      finally
      {
        setIsLoading(false);
      }
    }

    fetchContacts();
  },[])

  return (
    <div className="flex min-h-screen justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
        <h1 className="border-b border-gray-200 p-4 text-2xl font-bold text-gray-800">
          Contact List
        </h1>
        <Searchbar searchItem={searchItem} setSearchItem={setSearchItem} />
        <div className="h-[70vh] overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="p-4 text-center text-red-500">Error: {error}</div>
          ) : (
            <Contactlist contacts={filteredContacts} />
          )}
        </div>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="
          fixed 
          bottom-8 
          right-8 
          flex 
          h-14 
          w-14 
          items-center 
          justify-center 
          rounded-full 
          bg-blue-500 
          text-white 
          shadow-lg 
          transition-transform 
          hover:scale-105 
          hover:bg-blue-600 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          focus:ring-offset-2
        "
      >
        {/* Simple '+' icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

      <Addcontacts
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddContact={handleNewContact}
      />
      
    </div>
  )
}

export default App
