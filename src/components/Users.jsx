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
        let userWithId = null;

        try{
            userWithId = users.filter(function(user) { return `${user.id}` === `${id}`; });
            const {name, username, email, address, phone, website, company} = userWithId[0];
            
            return(
                <div className="user-info">
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
                        <h6>Company</h6>
                        <p><small><b>Name:</b> {company.name}</small></p>
                        <p><small><b>Catch-phrase:</b> {company.catchPhrase}</small></p>
                        <p><small><b>BS:</b> {company.bs}</small></p>
                    </div>
                </div>
            );

        }catch{

        }
    };

    return(
        <div className='content'>
            <div className="user-list">
                <ListGroup>
                    {displayUsers}
                </ListGroup>
            </div>
            {displayUserDetails()}
        </div>
    );
};

export default Users;