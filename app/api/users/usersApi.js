function getUser(username) {
    return fetch(`http://localhost:6767/api/users/${username}`)
    .then((response) => response.json());
}

export default getUser;