const goals = [
            'Install your first programming language',
            'Complete "Hello World" in any language',
            'Solve first 3 beginner questions',
            'Read through one installation guide',
            'Fork the repository and explore the code',
            'Read CONTRIBUTING.md and find an issue to work on'
        ];
        
        // --- Goal Checklist Functions ---

        // Function to render the goals on load
        function renderGoals() {
            const checklist = document.getElementById('goal-checklist');
            
            goals.forEach((goal, index) => {
                const id = `goal-${index}`;
                const goalDiv = document.createElement('label');
                goalDiv.className = 'goal-item';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = id;
                checkbox.className = 'goal-checkbox';
                checkbox.setAttribute('onchange', `toggleGoal('${id}')`);
                
                const textSpan = document.createElement('span');
                textSpan.id = id + '-text';
                textSpan.className = 'goal-text';
                textSpan.textContent = goal;
                
                goalDiv.appendChild(checkbox);
                goalDiv.appendChild(textSpan);
                checklist.appendChild(goalDiv);
            });
        }

        // Function to toggle the visual state of a goal
        function toggleGoal(id) {
            const checkbox = document.getElementById(id);
            const textSpan = document.getElementById(id + '-text');

            if (checkbox.checked) {
                textSpan.classList.add('goal-text-checked');
            } else {
                textSpan.classList.remove('goal-text-checked');
            }
        }

        // Run rendering function when the window loads
        window.onload = renderGoals;