const containerStyles = {
    display: "flex",
    flexDirection: "row-reverse",
    gap: "20px",
    margin: "15px 0"
}

const SearchPanel = (props) => {
    const { searchNameValue, handleSearchNameChange, searchNumberValue, handleSearchNumberChange } = props

    return (
        <div style={containerStyles}>
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