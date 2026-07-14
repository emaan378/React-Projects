


export default function Search({ search, setSearch, handleSearch }) {
    return (
        <div className="search-engine">
            <input
                type="text"
                name="search"
                value={search}
                placeholder="Enter  City name"
                onChange={(event) => setSearch(event.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
       
    )
}