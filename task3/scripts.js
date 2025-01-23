document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('user-form');
    const userList = document.getElementById('user-list');

    userForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(userForm);
        const userData = Object.fromEntries(formData);

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const newUser = await response.json();
                addUserToList(newUser);
                userForm.reset();
            } else {
                alert('Error creating user. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    const addUserToList = (user) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} (${user.email})`;
        userList.appendChild(listItem);
    };
});