import albums from "../static-data/albums.json";
import { Table } from 'reactstrap';

const Albums = () => {

    const displayAlbums = albums.map(album =>
        <tr key={album.id}>
            <td>{album.userId}</td>
            <td>{album.title}</td>
        </tr>
    );

    return(
        <>
            <div className='content'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayAlbums}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Albums;