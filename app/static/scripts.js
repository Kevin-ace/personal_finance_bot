let userId;

document.getElementById('finance-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const income = document.getElementById('income').value;
    const response = await fetch('/add-finance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ income }),
    });
    const data = await response.json();
    userId = data.user_id;
    showNotification(data.message, 'success');
});

document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('task-name').value;
    const cost = document.getElementById('task-cost').value;
    const response = await fetch('/add-task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, cost, user_id: userId }),
    });
    const data = await response.json();
    showNotification(data.message, 'success');
});

document.getElementById('generate-advice').addEventListener('click', async () => {
    const response = await fetch(`/generate-advice/${userId}`);
    const data = await response.json();
    const adviceList = document.getElementById('advice-list');
    adviceList.innerHTML = '';
    data.advice.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        adviceList.appendChild(li);
    });
});

// Function to show custom notifications
function showNotification(message, type) {
    const notificationArea = document.getElementById('notification-area');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    if (type === 'error') {
        notification.classList.add('error');
    }
    notification.innerHTML = `
        <span>${message}</span>
        <button class="close-btn">&times;</button>
    `;
    notification.querySelector('.close-btn').addEventListener('click', () => {
        notification.remove();
    });

    notificationArea.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 5000); // Remove notification after 5 seconds
}
