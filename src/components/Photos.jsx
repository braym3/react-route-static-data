import photos from "../static-data/photos.json";
import { Table } from 'reactstrap';

const Photos = () => {

    const displayPhotos = photos.map(photo =>
        <tr key={photo.id}>
            <td>{photo.albumId}</td>
            <td>{photo.title}</td>
            <td>{photo.url}</td>
            <td>{photo.thumbnailUrl}</td>
        </tr>
    );

    return(
        <>
            <div className='content'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Album ID</th>
                            <th>Title</th>
                            <th>URL</th>
                            <th>Thumbnail URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayPhotos}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Photos;