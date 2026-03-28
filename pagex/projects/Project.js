 // Icon SVGs as simple strings
        const ICON_SVG = {
            'Java': '<svg class="project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>',
            'Python': '<svg class="project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>',
            'C++': '<svg class="project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
            'C': '<svg class="project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>',
            'Go': '<svg class="project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
            'Rust': '<svg class="project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>',
            'PHP': '<svg class="project-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
        };
        
        // --- 1. CLEANSED PROJECT DATA STRUCTURE ---
        // This data structure is manually parsed from the project_list.txt file for reliable rendering.
        const PROJECT_DATA = {
            'Java': [
                { name: "Build a Basic Calculator", level: "Beginner" },
                { name: "Create a Currency Converter", level: "Beginner" },
                { name: "Make a To-Do List Application", level: "Beginner" },
                { name: "Develop a Library Management System", level: "Intermediate" },
                { name: "Build a Simple Search Engine", level: "Intermediate" },
                { name: "Make a Chat Application", level: "Intermediate" },
                { name: "Build an Inventory Management System", level: "Intermediate" },
                { name: "Create an E-commerce Shopping System", level: "Advanced" },
                { name: "Build a Web Scraping Application", level: "Advanced" },
                { name: "Create a Job Portal Website", level: "Advanced" },
                { name: "Mobile App Development Projects", level: "All Levels" },
                { name: "Data Analysis and Visualization Project", level: "All Levels" },
                { name: "Game Development Projects", level: "All Levels" },
                { name: "AI and Machine Learning Projects", level: "All Levels" },
                { name: "Spring Boot Microservices Application", level: "All Levels" },
            ],
            'Python': [
                { name: "To-Do List CLI App", level: "Beginner" },
                { name: "Weather App using API", level: "Beginner" },
                { name: "Blog Website with Flask", level: "Beginner" },
                { name: "Password Generator", level: "Beginner" },
                { name: "Expense Tracker (Local DB)", level: "Intermediate" },
                { name: "Chat Application with Sockets", level: "Intermediate" },
                { name: "URL Shortener", level: "Intermediate" },
                { name: "Quiz App with Timer (Tkinter or Flask)", level: "Intermediate" },
                { name: "E-commerce Website with Django", level: "Advanced" },
                { name: "Blog Platform (Flask or Django)", level: "Advanced" },
                { name: "Social Media Dashboard", level: "Advanced" },
                { name: "RESTful API for Library Management", level: "Advanced" },
                { name: "AI Chatbot using LangChain or OpenAI API", level: "Advanced" },
                { name: "Data Analysis with Pandas and Matplotlib", level: "All Levels" },
            ],
            'C++': [
                { name: "Calculator App", level: "Beginner" },
                { name: "To-Do List Manager", level: "Beginner" },
                { name: "Number Guessing Game", level: "Beginner" },
                { name: "Simple Bank Management System", level: "Beginner" },
                { name: "Tic-Tac-Toe Game", level: "Beginner" },
                { name: "Student Record System", level: "Beginner" },
                { name: "Temperature Converter", level: "Beginner" },
                { name: "File Encryption/Decryption Tool", level: "Beginner" },
                { name: "Quiz Application", level: "Beginner" },
                { name: "Contact Management System", level: "Beginner" },
                { name: "Basic Chat Console App", level: "Beginner" },
                { name: "Currency Converter", level: "Beginner" },
                { name: "Password Generator", level: "Beginner" },
                { name: "Library Management System", level: "Beginner" },
                { name: "Simple Stopwatch Timer", level: "Beginner" },
                { name: "Inventory Management System", level: "Intermediate" },
                { name: "Hotel Reservation System", level: "Intermediate" },
                { name: "File Compression Utility (Huffman Coding)", level: "Intermediate" },
                { name: "Bus/Train Ticket Booking Simulator", level: "Intermediate" },
                { name: "Expense Tracker", level: "Intermediate" },
                { name: "Music Player (CLI-based)", level: "Intermediate" },
                { name: "Mini Search Engine (Keyword-based)", level: "Intermediate" },
                { name: "Data Visualization using SFML", level: "Intermediate" },
                { name: "Chess or Snake Game", level: "Intermediate" },
                { name: "Student Result Management System", level: "Intermediate" },
                { name: "Car Rental System", level: "Intermediate" },
                { name: "File System Simulator", level: "Intermediate" },
                { name: "Hospital Management System", level: "Intermediate" },
                { name: "Movie Recommendation System", level: "Intermediate" },
                { name: "Weather Forecast Console App (API integration)", level: "Intermediate" },
                { name: "Compiler or Interpreter (Mini C++/Custom Language)", level: "Advanced" },
                { name: "Operating System Shell Simulation", level: "Advanced" },
                { name: "Database Engine (Mini SQL Processor)", level: "Advanced" },
                { name: "Blockchain Simulation", level: "Advanced" },
                { name: "Chat Application using Socket Programming", level: "Advanced" },
                { name: "Machine Learning Algorithm Implementation (e.g., KNN, SVM)", level: "Advanced" },
                { name: "Game Engine Core (2D/3D with OpenGL)", level: "Advanced" },
                { name: "Web Server from Scratch", level: "Advanced" },
                { name: "Distributed File System", level: "Advanced" },
                { name: "Virtual Memory Manager Simulation", level: "Advanced" },
                { name: "Neural Network Library", level: "Advanced" },
                { name: "Multiplayer Game using Networking", level: "Advanced" },
                { name: "Real-Time Stock Market Simulator", level: "Advanced" },
                { name: "Custom Encryption Algorithm Suite", level: "Advanced" },
                { name: "AI Pathfinding Visualizer (A*, Dijkstra)", level: "Advanced" },
            ],
            'C': [
                { name: "Simple Calculator", level: "Beginner" },
                { name: "Student Record Management System", level: "Beginner" },
                { name: "Number Guessing Game", level: "Beginner" },
                { name: "Tic-Tac-Toe Game", level: "Beginner" },
                { name: "Temperature Conversion Program", level: "Beginner" },
                { name: "Library Management System", level: "Intermediate" },
                { name: "Bank Management System", level: "Intermediate" },
                { name: "File Compression Tool", level: "Intermediate" },
                { name: "Hospital Management System", level: "Intermediate" },
                { name: "Mini Shell (Command Line Interpreter)", level: "Intermediate" },
                { name: "Chat Application using Sockets", level: "Advanced" },
                { name: "Compiler or Interpreter (Basic)", level: "Advanced" },
                { name: "Operating System Shell Simulation", level: "Advanced" },
                { name: "HTTP Web Server", level: "Advanced" },
                { name: "Database Management System (Custom SQL Engine)", level: "Advanced" },
            ],
            'Go': [
                { name: "CLI Calculator", level: "Beginner" },
                { name: "To-Do List App (Terminal-based)", level: "Beginner" },
                { name: "File Renamer Utility", level: "Beginner" },
                { name: "JSON to CSV Converter", level: "Beginner" },
                { name: "URL Shortener (basic version)", level: "Beginner" },
                { name: "RESTful API for Notes App", level: "Intermediate" },
                { name: "URL Shortener with Database", level: "Intermediate" },
                { name: "Chat Application (TCP or WebSocket)", level: "Intermediate" },
                { name: "Task Scheduler (Cron-style)", level: "Intermediate" },
                { name: "Web Scraper with Concurrency", level: "Intermediate" },
                { name: "Microservice-based Blog Platform", level: "Advanced" },
                { name: "Real-time Stock Tracker using WebSockets", level: "Advanced" },
                { name: "Custom Load Balancer", level: "Advanced" },
                { name: "Distributed File Storage System", level: "Advanced" },
                { name: "Lightweight Web Framework (like a mini Gin clone)", level: "Advanced" },
            ],
            'Rust': [
                { name: "Command-Line Calculator", level: "Beginner" },
                { name: "Guess the Number Game", level: "Beginner" },
                { name: "File Organizer", level: "Beginner" },
                { name: "Basic Todo CLI App", level: "Beginner" },
                { name: "URL Shortener (in-memory)", level: "Beginner" },
                { name: "REST API with Actix or Rocket", level: "Intermediate" },
                { name: "Markdown to HTML Converter", level: "Intermediate" },
                { name: "Multi-threaded Web Scraper", level: "Intermediate" },
                { name: "Chat Server using Tokio", level: "Intermediate" },
                { name: "Simple Database Engine", level: "Intermediate" },
                { name: "HTTP Server from Scratch", level: "Advanced" },
                { name: "Blockchain Prototype", level: "Advanced" },
                { name: "Game Engine Core (2D)", level: "Advanced" },
                { name: "Distributed Key-Value Store", level: "Advanced" },
                { name: "Operating System Kernel (TinyOS clone)", level: "Advanced" },
            ],
            'PHP': [
                { name: "Simple Calculator", level: "Beginner" },
                { name: "Contact Form with Validation", level: "Beginner" },
                { name: "Basic Login & Signup System", level: "Beginner" },
                { name: "To-Do List App", level: "Beginner" },
                { name: "Guestbook Application", level: "Beginner" },
                { name: "Blog Management System", level: "Intermediate" },
                { name: "File Upload & Management System", level: "Intermediate" },
                { name: "Polling/Voting App", level: "Intermediate" },
                { name: "Event Calendar", level: "Intermediate" },
                { name: "URL Shortener with MySQL", level: "Intermediate" },
                { name: "E-Commerce Website", level: "Advanced" },
                { name: "Learning Management System (LMS)", level: "Advanced" },
                { name: "Content Management System (CMS)", level: "Advanced" },
                { name: "Social Networking Platform", level: "Advanced" },
                { name: "Online Job Portal", level: "Advanced" },
            ]
        };

        let currentLanguage = 'Java';
        let currentLevel = 'All';

        const getLevelClass = (level) => {
            switch (level) {
                case 'Beginner': return 'level-beginner';
                case 'Intermediate': return 'level-intermediate';
                case 'Advanced': return 'level-advanced';
                case 'All Levels': return 'level-all';
                default: return 'level-all';
            }
        };

        const getIconSvg = () => {
            return ICON_SVG[currentLanguage] || ICON_SVG['Java'];
        };

        const renderProjectCard = (project) => {
            const levelClass = getLevelClass(project.level);
            
            return `
                <div class="project-card">
                    <div class="project-card-header">
                        <span class="level-badge ${levelClass}">
                            ${project.level}
                        </span>
                        ${getIconSvg()}
                    </div>
                    <h3>${project.name}</h3>
                    <p>
                        ${currentLanguage} project focused on ${project.level.toLowerCase()} skills.
                    </p>
                    <a href="#">
                        View Details →
                    </a>
                </div>
            `;
        };

        const renderProjects = () => {
            const grid = document.getElementById('project-list-grid');
            const noProjectsMessage = document.getElementById('no-projects-message');
            const currentLanguageTitle = document.getElementById('current-language-title');
            
            const projects = PROJECT_DATA[currentLanguage] || [];
            
            let filteredProjects = projects;
            if (currentLevel !== 'All') {
                // Handle 'All Levels' projects showing up in the 'B', 'I', 'A' filters too, except if it's explicitly 'All Levels'
                filteredProjects = projects.filter(p => p.level === currentLevel || p.level === 'All Levels' && currentLevel !== 'All');
            }

            if (currentLevel === 'All') {
                // If 'All' is selected, show all projects for the language
                filteredProjects = projects;
            }


            currentLanguageTitle.textContent = `${currentLanguage} Projects`;

            // If the icon library isn't fully loaded yet, we can't map icons, but the rest of the HTML is fine.
            grid.innerHTML = filteredProjects.map(renderProjectCard).join('');

            if (filteredProjects.length === 0) {
                grid.classList.add('hidden');
                noProjectsMessage.classList.remove('hidden');
            } else {
                grid.classList.remove('hidden');
                noProjectsMessage.classList.add('hidden');
            }

            // Update Level Filter button active state
            document.querySelectorAll('.level-filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-level') === currentLevel) {
                    btn.classList.add('active');
                }
            });
        };

        const setupLanguageTabs = () => {
            const tabsContainer = document.getElementById('language-tabs');
            tabsContainer.innerHTML = Object.keys(PROJECT_DATA).map(lang => `
                <button data-lang="${lang}" class="language-tab-btn ${lang === currentLanguage ? 'tab-active' : ''}">
                    ${lang}
                </button>
            `).join('');

            tabsContainer.querySelectorAll('.language-tab-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    // Update active tab style
                    tabsContainer.querySelectorAll('.language-tab-btn').forEach(tab => {
                        tab.classList.remove('tab-active');
                    });
                    e.currentTarget.classList.add('tab-active');

                    // Update state and re-render
                    currentLanguage = e.currentTarget.getAttribute('data-lang');
                    currentLevel = 'All'; // Reset level filter on language change
                    renderProjects();
                });
            });
        };

        const setupLevelFilters = () => {
            document.querySelectorAll('.level-filter-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    currentLevel = e.currentTarget.getAttribute('data-level');
                    renderProjects();
                });
            });
        };

        // Initialize the dashboard
        document.addEventListener('DOMContentLoaded', () => {
            setupLanguageTabs();
            setupLevelFilters();
            renderProjects(); // Initial render for Java / All

            const backToTop = document.getElementById('backToTop');
            if (backToTop) {
                window.addEventListener('scroll', () => {
                    if (window.pageYOffset > 300) {
                        backToTop.classList.add('show');
                    } else {
                        backToTop.classList.remove('show');
                    }
                });
            }
        });