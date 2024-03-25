document.addEventListener("DOMContentLoaded", function() {
    const loginPage = document.getElementById('login-page');
    const mainPage = document.getElementById('main-page');
    const addShowBtn = document.getElementById('add-show-btn');
    const loginBtn = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const loggedInUser = {};

    loginBtn.addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        if (username === "meadkc" && password === "Password234!") {
            loggedInUser.username = username;
            loggedInUser.password = password;
            loginPage.style.display = 'none';
            mainPage.style.display = 'block';
            renderTable();
        } else if (username === "meadama" && password === "Password234!") {
            loggedInUser.username = username;
            loggedInUser.password = password;
            loginPage.style.display = 'none';
            mainPage.style.display = 'block';
            renderTable();
        } else {
            alert("Invalid username or password!");
        }
    });

    function renderTable() {
        const table = document.getElementById('comedian-table');
        // Clear existing table
        table.innerHTML = '';

        // Add table headers
        const headers = ['Comedian Name', 'Picture', 'Date', 'Location', 'Notes', 'Actions'];
        const thead = table.createTHead();
        const row = thead.insertRow();
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            row.appendChild(th);
        });

        // Fetch and render data (you can replace this with your actual data source)
        const data = [
            ['Comedian 1', 'image1.jpg', '2023-01-01', 'Location 1', 'Note 1'],
            ['Comedian 2', 'image2.jpg', '2023-02-02', 'Location 2', 'Note 2'],
            // Add more data as needed
        ];
        data.forEach(rowData => {
            const tr = table.insertRow();
            rowData.forEach(cellData => {
                const td = document.createElement('td');
                td.textContent = cellData;
                tr.appendChild(td);
            });

            // Add edit button
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', function() {
                // Handle edit functionality
                // You can open a modal or implement inline editing here
                console.log('Edit button clicked');
            });

            const td = document.createElement('td');
            td.appendChild(editBtn);
            tr.appendChild(td);
        });
    }

    addShowBtn.addEventListener('click', function() {
        // Redirect to add new show page
        console.log('Add new show button clicked');
    });
});
