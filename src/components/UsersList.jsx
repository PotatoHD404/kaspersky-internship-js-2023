import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [sortedUsers, setSortedUsers] = useState([]);

    useEffect(() => {
        // Здесь вы должны подставить свой собственный URL для сервера, который предоставляет данные JSON.
        axios.get("https://your-json-server-url/users").then((response) => {
            setUsers(response.data);
            setSortedUsers(response.data);
        });
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
        setSortedUsers(
            users.filter((user) =>
                user.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
        );
    };

    return (
        <div>
            <input type="text" value={search} onChange={handleSearch} />
            <div>
                {sortedUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default UsersList;