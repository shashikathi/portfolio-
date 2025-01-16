/* General reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f6f9;
    color: #333;
    line-height: 1.6;
}

/* Header */
header {
    background-image: url('https://via.placeholder.com/1500x600'); /* Add a custom background image URL */
    background-size: cover;
    background-position: center;
    text-align: center;
    color: white;
    padding: 80px 0;
    animation: fadeIn 1.5s ease-in-out;
}

header h1 {
    font-size: 3.5em;
    margin-bottom: 10px;
    font-weight: 700;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
}

header p {
    font-size: 1.5em;
    font-weight: 400;
}

/* About Section */
#about {
    padding: 50px 20px;
    text-align: center;
    background-color: #ffffff;
    margin: 30px 0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: slideUp 1s ease-in-out;
}

#about h2 {
    font-size: 2.5em;
    color: #2980b9;
    margin-bottom: 20px;
    font-weight: 700;
}

#about p {
    font-size: 1.1em;
    margin-bottom: 20px;
    color: #555;
}

#about .social-links {
    margin-top: 30px;
}

#about .social-links a {
    margin: 0 15px;
    color: #333;
    font-size: 2.5em;
    transition: all 0.3s ease;
}

#about .social-links a:hover {
    color: #2980b9;
    transform: scale(1.1);
}

/* Footer */
footer {
    background-color: #2980b9;
    color: white;
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
}

footer p {
    font-size: 1.1em;
    font-weight: 500;
}

/* Animation Effects */
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes slideUp {
    0% { transform: translateY(50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}

/* Media Query for Mobile Devices */
@media (max-width: 768px) {
    header h1 {
        font-size: 2.5em;
    }

    header p {
        font-size: 1.2em;
    }

    #about {
        padding: 30px 10px;
    }

    #about h2 {
        font-size: 2em;
    }

    #about p {
        font-size: 1em;
    }
}
