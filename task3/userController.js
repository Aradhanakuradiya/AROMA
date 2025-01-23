class UserController {
    constructor(userModel) {
        this.userModel = userModel;
    }

    createUser(req, res) {
        const userData = req.body;
        const newUser = new this.userModel(userData);
        newUser.save()
            .then(user => res.status(201).json(user))
            .catch(err => res.status(400).json({ error: err.message }));
    }

    getUser(req, res) {
        const userId = req.params.id;
        this.userModel.find(userId)
            .then(user => {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            })
            .catch(err => res.status(400).json({ error: err.message }));
    }

    updateUser(req, res) {
        const userId = req.params.id;
        const updatedData = req.body;
        this.userModel.update(userId, updatedData)
            .then(user => {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            })
            .catch(err => res.status(400).json({ error: err.message }));
    }

    deleteUser(req, res) {
        const userId = req.params.id;
        this.userModel.delete(userId)
            .then(result => {
                if (result) {
                    res.status(204).send();
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            })
            .catch(err => res.status(400).json({ error: err.message }));
    }
}

export default UserController;