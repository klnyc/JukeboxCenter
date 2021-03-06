import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAlbums } from '../store'

class Navigation extends React.Component {
    render() {
        const { getAlbums } = this.props
        const genres = ['Chinese','Country','Korean','Pop','R&B','Rap','Rock']
        return (
            <div className='navigation'>
                <Link to={'/albums'} className="navigation-genre" onClick={() => getAlbums()}>All</Link>
                {genres.map((genre, index) => 
                    <Link 
                        to={`/albums/${genre}`} 
                        className="navigation-genre" 
                        key={index}
                        onClick={() => getAlbums(genre)}>
                        {genre}
                    </Link>)}
            </div>
        )
    }
}

const mapDispatch = (dispatch) => ({
    getAlbums: (genre) => dispatch(getAlbums(genre))
})

export default connect(null, mapDispatch)(Navigation)