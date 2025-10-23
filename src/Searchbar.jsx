const Searchbar = ({searchItem,setSearchItem}) => {
    return (
        <div className="border-b border-gray-200 p-4">
            <input
            type='text'
            placeholder='Search By name...'
            value={searchItem}
            onChange={(e) => { setSearchItem(e.target.value); }}
            className="
            w-full 
            rounded-md 
            border 
            border-gray-300 
            px-3 
            py-2 
            text-gray-900 
            placeholder-gray-400 
            focus:border-blue-500 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500
            "
            />

        </div>
        
    )
}

export default Searchbar;