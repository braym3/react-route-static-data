import photos from "../static-data/photos.json";
import { Card, CardBody, CardTitle, CardLink, CardText } from 'reactstrap';

const Photos = () => {

    const displayPhotos = photos.map(photo =>
        <Card key={photo.id} style={{width: '12rem'}} className="user-card">
            <img
                alt="Card"
                src={photo.thumbnailUrl}
            />
            <CardBody>
                <CardTitle tag="h5">{photo.title}</CardTitle>
                <CardText>
                    Album ID: {photo.albumId}
                </CardText>
                <CardLink href={photo.url}>Full size</CardLink>
            </CardBody>
        </Card>
    );

    return(
        <>
            <div className='row content'>
                {displayPhotos}
            </div>
        </>
    );
};

export default Photos;