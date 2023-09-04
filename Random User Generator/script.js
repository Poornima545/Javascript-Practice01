const generateBtn = document.getElementById('generateBtn');
const userContainer = document.getElementById('userContainer');

generateBtn.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((data) => {
            const user = data.results[0];
            const fullName = `${user.name.first} ${user.name.last}`;
            const email = user.email;
            const picture = user.picture.large;

            const userCard = `
                <div>
                    <img src="${picture}" alt="${fullName}">
                    <h2>${fullName}</h2>
                    <p>Email: ${email}</p>
                </div>
            `;

            userContainer.innerHTML = userCard;
        })
        .catch((error) => {
            console.error('Error fetching random user:', error);
        });
});
