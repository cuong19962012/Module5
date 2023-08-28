import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getUsersFetch, deleteUsers } from './Types'

export function Users() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.reducer.users)
    useEffect(() => {
        dispatch(getUsersFetch());
    }, [dispatch])
    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => { dispatch(deleteUsers(user.id)) }}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}