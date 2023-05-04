import todos from "../static-data/todos.json";
import { Table } from 'reactstrap';

const Todos = () => {

    const displayTodos = todos.map(todo =>
        <tr key={todo.id} className={ // change variant style - success if completed, danger if not
            todo.completed ? 'table-success' : 'table-danger'
          }>
            <td>{todo.userId}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? 'Yes' : 'No'}</td>
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
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayTodos}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Todos;