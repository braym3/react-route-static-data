import comments from "../static-data/comments.json";
import { Table } from 'reactstrap';

const Comments = () => {

    const displayComments = comments.map(comment =>
        <tr key={comment.id}>
            <td>{comment.postId}</td>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
        </tr>
    );

    return(
        <>
            <div className='content'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Post ID</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayComments}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Comments;