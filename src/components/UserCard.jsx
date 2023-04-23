function UserCard({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Группа: {user.group}</p>
        </div>
    );
}

export default UserCard;