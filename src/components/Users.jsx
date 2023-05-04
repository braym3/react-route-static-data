import users from "../static-data/users.json";
import { Link, useParams } from 'react-router-dom';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

const Users = () => {
    const { id } = useParams();

    const displayUsers = users.map(user =>
        <ListGroupItem key={user.id} tag={Link} to={`/users/${user.id}`}>
            {user.name}
        </ListGroupItem>
    );

    const displayUserDetails = () => {
        const userWithId = users.filter(function(user) { return `${user.id}` === `${id}`; });
        const {name, username, email, address} = userWithId[0];

        return(
            <div>
                <h2 className="user-name-title">{name}</h2>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Address: {address.street},&nbsp; 
                            {address.suite},&nbsp;
                            {address.city},&nbsp;
                            {address.zipcode}
                </p>
            </div>
        );
    };

    return(
        <div className='content'>
            <div className="user-list">
                <ListGroup>
                    {displayUsers}
                </ListGroup>
            </div>
            <div className="user-info">
                {displayUserDetails()}
            </div>
        </div>
    );
};

export default Users;