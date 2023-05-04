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
        const {name, username, email, address, phone, website, company} = userWithId[0];

        return(
            <div>
                <h2 className="user-name-title">{name}</h2>
                <p><b>Username:</b> {username}</p>
                <p><b>Email:</b> {email}</p>
                <p><b>Address:</b> {address.street},&nbsp; 
                            {address.suite},&nbsp;
                            {address.city},&nbsp;
                            {address.zipcode}
                </p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Website:</b> {website}</p>

                <div className="company-info">
                    <h5>Company</h5>
                    <p><b>Name:</b> {company.name}</p>
                    <p><b>Catch-phrase:</b> {company.catchPhrase}</p>
                    <p><b>BS:</b> {company.bs}</p>
                </div>
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