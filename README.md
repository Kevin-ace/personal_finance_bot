# Finance Bot

This is a simple finance bot web application designed to help users track their monthly income, add tasks with associated costs, and receive financial advice based on their entered data. The app features a dynamic background color animation, clean UI, and notifications for successful and error-related actions.

## Features

- **Add Monthly Income**: Users can input their monthly income, which is stored and used for generating financial advice.
- **Add Tasks**: Users can add tasks with their respective costs, which will be associated with their finances.
- **Generate Financial Advice**: Based on the user’s income and tasks, the app generates relevant financial advice and displays it in a list.
- **Color Changing Background**: The background color transitions between multiple colors in a smooth animation to make the interface visually engaging.
- **Custom Notifications**: Notifications for success and error messages are displayed at the top of the page and can be dismissed by the user.

## Technologies Used

- **Frontend**: 
  - HTML
  - CSS
  - JavaScript
- **Backend**: 
  - Python (Flask)
- **Styling**: 
  - Custom CSS with animation effects
  - Responsive design with media queries
  - FontAwesome for icons


## How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Kevin-ace/personal_finance_bot.git
cd finance-bot
```

### 2. Install dependencies
Ensure you have the necessary dependencies installed. If using npm for the frontend, run:

```bash
npm install
```
If you’re running a backend server (e.g., Django, Flask), set up the environment and install dependencies:
```bash
pip install -r requirements.txt
```

### 3. Set up the backend
If using Django or any other backend, make sure to set up your database:
```bash
python manage.py migrate
```

### 4. Run the application
For a local server, use the following command:

```bash
python manage.py runserver
```
This should start the backend server. Then, open the frontend by opening index.html in a browser.

Alternatively, if you're running the frontend and backend separately (using something like Flask):

```bash
npm start
```

### 5. Visit the app
Open your browser and visit http://localhost:8000 (or any other port your server is running on).

## File Structure
```plaintext
finance-bot/
├── index.html             # The main HTML file for the frontend
├── static/
│   ├── styles.css         # Main stylesheet with animations and styles
│   ├── scripts.js         # JavaScript logic for handling user interactions
├── templates/
│   └── base.html          # Base HTML template for Django or other templating engines
├── backend/
│   ├── app.py             # Backend entry point (Flask/Django setup)
│   ├── models.py          # Models for database (if using a backend framework)
│   └── requirements.txt   # Python dependencies for backend
└── README.md              # Project documentation
```

## Contributing
Feel free to fork this repository and submit pull requests. If you have suggestions or feature requests, open an issue, and I’ll be happy to take a look!

