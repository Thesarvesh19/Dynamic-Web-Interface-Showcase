document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // --- Theme Switching Logic ---
    themeSwitcher.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });

    // --- Navigation Logic ---
    window.showSection = (sectionId, clickedLink) => {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        if(clickedLink) {
            clickedLink.classList.add('active');
        }
    };

    // --- Daily Planner 
    const todoInput = document.getElementById('todo-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    const addTask = () => {
        const taskText = todoInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        
        deleteBtn.addEventListener('click', () => {
            li.style.animation = 'fadeOut 0.3s ease forwards';
            li.addEventListener('animationend', () => todoList.removeChild(li));
        });

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        todoInput.value = '';
        todoInput.focus();
    };

    addTaskBtn.addEventListener('click', addTask);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Contact form submitted! (This is a demo)');
        e.target.reset();
    });
    
    document.getElementById('feedback-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your feedback! (This is a demo)');
        e.target.reset();
    });
});
