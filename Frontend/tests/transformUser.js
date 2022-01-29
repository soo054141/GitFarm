function transformUser(user) {
    const { name, age, address } = user;
    return [name, age, address];
}

export default transformUser;
