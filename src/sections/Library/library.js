import './library.css'
import LibraryCard  from '../../coomponet/libraryCard/libraryCard' 


const Library = () => {
    return (
        <>
            <div className='library-items'>
                <div className='section-header'>
                    <h2> <span style={{ textDecoration: 'underline' }}>Your Gaming</span>  <span style={{color:'#4ECCA3'}}>Library</span></h2>
                </div>
                <LibraryCard/>
                <LibraryCard/>
                <LibraryCard/>
                <LibraryCard/>
                <LibraryCard/>
                
            </div>
        </>
    )
}

export default Library