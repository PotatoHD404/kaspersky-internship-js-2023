import { useState, useEffect } from "react";
// import axios from "axios";
import { faker } from '@faker-js/faker';
import UserCard from "./UserCard";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [sortedUsers, setSortedUsers] = useState([]);

    useEffect(() => {
        // Здесь вы должны подставить свой собственный URL для сервера, который предоставляет данные JSON.
        // axios.get("url").then((response) => {
        //     setUsers(response.data);
        //     setSortedUsers(response.data);
        // });
        const generateUsers = () => {
            const users = [];
            const groups = ['groupA', 'groupB', 'groupC', 'groupD'];

            for (let i = 1; i <= 300; i++) {
                users.push({
                    id: i,
                    name: faker.name.firstName(),
                    group: faker.helpers.arrayElement(groups)
                });
            }
            return users;
        };
        const generatedUsers = generateUsers();
        setUsers(generatedUsers);

        const sorted = [...generatedUsers].sort((a, b) => a.group.localeCompare(b.group) || a.name.localeCompare(b.name));
        setSortedUsers(sorted);

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