import posts from "../static-data/posts.json";
import { Table } from 'reactstrap';

const Posts = () => {

    const displayPosts = posts.map(post =>
        <tr key={post.id}>
            <td>{post.userId}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
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
                            <th>Post</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayPosts}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Posts;