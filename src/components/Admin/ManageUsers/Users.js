import User from './User';

const Users = ({users,manageUser}) => {
    return (
        <>
        {
            users.map((user)=>(
                <User key={user.user_id} user={user} manageUser={manageUser} />
            ))
        }
        </>
    )
}

export default Users


