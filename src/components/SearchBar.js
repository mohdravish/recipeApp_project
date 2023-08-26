import React from 'react'

const SearchBar = ({
    value,
    query,
    isLoading,
    handleSubmit,
    setQuery
}) => {

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={query}
                className='form-control'
                disabled={isLoading}
                placeholder='Search recipe'
                name='query'
                onChange={(event) =>
                    setQuery(event.target.value)
                }
            />
            <input
                disabled={isLoading || !query}
                className='btn'
                value='Search'
                type='submit'
            />
        </form>
    )
    return (
        <form>
            <input
                value={query}
                className='form-control'
                disabled={isLoading}
                placeholder='Search any recipe what is you want'
                name='query'
                onChange={(e) => setQuery(e.target.value)}
            />
            <input
                disabled={isLoading || !query}
                className='btn'
                value='Search'
                type='submit'
            />
        </form>
    )
}
export default SearchBar