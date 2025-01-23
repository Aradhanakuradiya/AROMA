class UserModel {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = UserModel.generateId();
    }

    static generateId() {
        return Math.floor(Math.random() * 1000000);
    }

    save() {
        // Logic to save the user data to a database
    }

    static find(id) {
        // Logic to find a user by id from the database
    }

    static delete(id) {
        // Logic to delete a user by id from the database
    }
}

export default UserModel;