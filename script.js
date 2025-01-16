/* General Styles */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
}

header, .section {
    padding: 20px;
    margin: 20px;
}

h1, h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

p {
    font-size: 1.1rem;
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

/* Navigation Bar */
.navbar {
    background-color: #333;
    padding: 10px 0;
    text-align: center;
}

.navbar ul {
    list-style-type: none;
    padding: 0;
}

.navbar ul li {
    display: inline;
    margin-right: 20px;
}

.navbar ul li a {
    color: white;
    font-size: 1.2rem;
}

/* Header Section */
.header {
    background: linear-gradient(135deg, #6e7c7c, #d5d9d8);
    text-align: center;
    color: white;
    padding: 40px;
    border-radius: 10px;
}

/* Skills Section */
.skills-list {
    list-style-type: none;
    padding: 0;
}

.skills-list li {
    background-color: #d5d9d8;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
}

/* Social Icons */
.social-links {
    text-align: center;
    margin-top: 20px;
}

.social-icon {
    font-size: 2rem;
    color: #333;
    margin: 0 15px;
    transition: transform 0.3s ease-in-out;
}

.social-icon:hover {
    transform: scale(1.2);
    color: #0073b1; /* LinkedIn Blue */
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 15px;
    margin-top: 30px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .navbar ul li {
        display: block;
        margin: 10px 0;
    }
    
    .social-icon {
        font-size: 1.8rem;
    }
}
