const SearchPanel = (props) => {
    const { searchNameValue, handleSearchNameChange, searchNumberValue, handleSearchNumberChange } = props

    return (
        <div className="search-panel">
            <input
                value={searchNameValue}
                onChange={handleSearchNameChange}
                type="text"
                placeholder="Search by name..."
            />
            <input
                value={searchNumberValue}
                onChange={handleSearchNumberChange}
                type="number"
                placeholder="Search by number..."
            />
        </div>
    )
}

export default SearchPanel