let currentProject = '';
let currentStep = 1;
let projectData = {};

// Sample AI questions for different project types
const aiQuestions = {
    ecommerce: [
        "What part of the user experience did you improve today, and how do you think customers will benefit?",
        "Which feature are you most excited about implementing next, and why?",
        "What technical challenge did you tackle today? How did you approach solving it?"
    ],
    python: [
        "What automation process did you work on today, and how much time do you think it'll save you?",
        "Which Python concept clicked for you today, or what are you still figuring out?",
        "How did your code today make your workflow more efficient?"
    ],
    fitness: [
        "How did your body feel during today's workout compared to last week?",
        "What motivated you to show up today, especially if you didn't feel like it?",
        "Which exercise felt strongest today, and what do you think contributed to that?"
    ]
};

// Project Setup Functions
function startNewProject() {
    console.log('Starting new project...'); // Debug log
    currentStep = 1;
    projectData = {};
    document.getElementById('newProjectModal').classList.add('active');
}

function closeNewProject() {
    document.getElementById('newProjectModal').classList.remove('active');
    // Reset all steps
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`step${i}`).style.display = i === 1 ? 'block' : 'none';
    }
}

// New Project Setup Functions
function nextStep(step) {
    // Validate current step
    if (!validateCurrentStep()) return;
    
    // Save current step data
    saveStepData();
    
    // Hide current step
    document.getElementById(`step${currentStep}`).style.display = 'none';
    
    // Show next step
    document.getElementById(`step${step}`).style.display = 'block';
    currentStep = step;
    
    // Special handling for calendar integration step
    if (step === 3) {
        simulateCalendarAnalysis();
    }
    
    // Update final summary
    if (step === 4) {
        updateProjectSummary();
    }
}

function prevStep(step) {
    document.getElementById(`step${currentStep}`).style.display = 'none';
    document.getElementById(`step${step}`).style.display = 'block';
    currentStep = step;
}

function validateCurrentStep() {
    switch (currentStep) {
        case 1:
            const name = document.getElementById('projectName').value;
            const category = document.getElementById('projectCategory').value;
            if (!name || !category) {
                alert('Please fill in all fields');
                return false;
            }
            break;
        case 2:
            const duration = document.getElementById('projectDuration').value;
            const hours = document.getElementById('dailyHours').value;
            if (!duration || !hours) {
                alert('Please select your time commitments');
                return false;
            }
            break;
    }
    return true;
}

function saveStepData() {
    switch (currentStep) {
        case 1:
            projectData.name = document.getElementById('projectName').value;
            projectData.category = document.getElementById('projectCategory').value;
            
            // Update AI question for step 2 based on category
            updateTimeQuestion();
            break;
        case 2:
            projectData.duration = document.getElementById('projectDuration').value;
            projectData.dailyHours = document.getElementById('dailyHours').value;
            break;
        case 3:
            // Save selected time slots
            projectData.timeSlots = [];
            document.querySelectorAll('.time-slot input:checked').forEach(checkbox => {
                const label = checkbox.nextElementSibling;
                projectData.timeSlots.push(label.querySelector('strong').textContent);
            });
            break;
    }
}

function updateTimeQuestion() {
    const category = projectData.category;
    const questions = {
        coding: "Coding projects often take longer than expected due to debugging and learning curves. Based on similar projects, what's a realistic timeline?",
        creative: "Creative projects can vary wildly in scope. Are you aiming for a quick prototype or a polished final piece?",
        learning: "Learning projects work best with consistent daily practice. How much new information can you realistically absorb per day?",
        fitness: "Fitness goals need time for your body to adapt. What's a sustainable pace that won't lead to burnout?",
        business: "Business projects often depend on external factors. What parts are fully within your control?",
        personal: "Personal development works best with small, consistent steps. What daily habits would move you forward?"
    };
    
    document.getElementById('timeQuestion').textContent = questions[category] || questions.learning;
}

function simulateCalendarAnalysis() {
    // Show loading for 2 seconds, then show results
    setTimeout(() => {
        document.querySelector('.analysis-header').style.display = 'none';
        document.getElementById('calendarResults').style.display = 'block';
        document.getElementById('scheduleNext').disabled = false;
        
        // Update schedule analysis based on project data
        updateScheduleAnalysis();
    }, 2000);
}

function updateScheduleAnalysis() {
    const category = projectData.category;
    const dailyHours = projectData.dailyHours;
    
    const analyses = {
        coding: "Perfect! I noticed you have longer blocks of uninterrupted time in the evenings - ideal for coding sessions where you need deep focus.",
        creative: "Great timing! Your weekend morning slots align with peak creative energy, and weekday evenings give you time to reflect on your work.",
        learning: "Excellent schedule! Morning sessions are perfect for absorbing new information, and evening reviews help with retention.",
        fitness: "Smart scheduling! I see you're free when your gym is less crowded, and the timing works well with your sleep schedule.",
        business: "Good planning! These slots give you time for both focused work and follow-up communications during business hours.",
        personal: "Thoughtful timing! These quiet periods will give you space for reflection without competing with other priorities."
    };
    
    document.getElementById('scheduleAnalysis').textContent = analyses[category] || analyses.learning;
    
    // Update integration question for step 4
    updateIntegrationQuestion();
}

function updateIntegrationQuestion() {
    const category = projectData.category;
    const questions = {
        coding: "Coding projects often stall when you hit bugs or get stuck. Would you like me to set up 'debugging break' reminders and suggest when to ask for help?",
        creative: "Creative projects can lose momentum when perfectionism kicks in. Should I remind you that 'done is better than perfect' and celebrate small wins?",
        learning: "Learning can feel overwhelming when progress seems slow. Would you like daily 'what did you discover?' check-ins to track insights?",
        fitness: "Fitness routines often break due to schedule conflicts or low energy days. Should I suggest backup plans for busy days?",
        business: "Business projects can get derailed by competing priorities. Would you like me to help you identify and protect your project time?",
        personal: "Personal development can feel abstract without clear milestones. Should I help you identify concrete signs of progress?"
    };
    
    document.getElementById('integrationQuestion').textContent = questions[category] || questions.learning;
}

function updateProjectSummary() {
    document.getElementById('summaryName').textContent = projectData.name;
    document.getElementById('summaryDuration').textContent = projectData.duration;
    document.getElementById('summarySchedule').textContent = `${projectData.timeSlots.length} time slots/week`;
    
    // Set reward based on category
    const rewards = {
        coding: "💻 Developer Sticker Pack",
        creative: "🎨 Artist Sticker Pack", 
        learning: "📚 Scholar Sticker Pack",
        fitness: "💪 Warrior Sticker Pack",
        business: "💼 Entrepreneur Sticker Pack",
        personal: "🌱 Growth Sticker Pack"
    };
    
    document.getElementById('summaryReward').textContent = rewards[projectData.category] || "🎯 Achievement Sticker Pack";
}

function createProject() {
    // Hide setup modal, show success
    document.getElementById('newProjectModal').classList.remove('active');
    document.getElementById('successModal').classList.add('active');
    
    // In real app: 
    // - Save project to database
    // - Create Google Calendar events
    // - Set up notification schedule
    // - Initialize progress tracking
    
    setTimeout(() => {
        // Add new project to dashboard
        addProjectToDashboard();
    }, 3000);
}

function closeSuccess() {
    document.getElementById('successModal').classList.remove('active');
}

function addProjectToDashboard() {
    const projectsContainer = document.querySelector('.projects');
    const newProject = document.createElement('div');
    newProject.className = 'project';
    newProject.dataset.project = projectData.name.toLowerCase().replace(/\s+/g, '');
    
    const categoryEmojis = {
        coding: "💻",
        creative: "🎨", 
        learning: "📚",
        fitness: "💪",
        business: "💼",
        personal: "🌱"
    };
    
    newProject.innerHTML = `
        <div class="project-header">
            <div class="project-name">${categoryEmojis[projectData.category]} ${projectData.name}</div>
            <div class="project-streak">🔥 0 days</div>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
        </div>
        <div class="project-actions">
            <button class="btn btn-primary" onclick="startSession('${projectData.name}')">Start Session</button>
            <button class="btn btn-success" onclick="checkOut('${projectData.name}')">Check Out</button>
        </div>
    `;
    
    // Insert before the last project
    const lastProject = projectsContainer.querySelector('.project:last-child');
    projectsContainer.insertBefore(newProject, lastProject);
}

// Existing Functions
function startSession(project) {
    // Update UI to show active session
    document.querySelectorAll('.project').forEach(p => p.classList.remove('active'));
    document.querySelector(`[data-project="${project}"]`).classList.add('active');
    
    // In a real app, this would start a timer and maybe send a calendar notification
    alert(`🚀 Started working on ${project}! Timer is now running.`);
}

function checkOut(project) {
    currentProject = project;
    
    // Simulate AI question generation (in real app, this would be a Claude API call)
    const questions = aiQuestions[project];
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    
    document.getElementById('aiQuestion').textContent = randomQuestion;
    document.getElementById('checkoutModal').classList.add('active');
}

function submitResponse() {
    const response = document.getElementById('userResponse').value;
    
    if (response.trim().length < 10) {
        alert('Please share a bit more detail about your session!');
        return;
    }

    // Hide question phase, show celebration
    document.getElementById('questionPhase').style.display = 'none';
    document.getElementById('celebrationPhase').style.display = 'block';
    
    // In real app: save response, update streak, calculate XP, check for new stickers
    updateStats();
}

function updateStats() {
    // Simulate XP gain and stat updates
    const currentXP = parseInt(document.getElementById('totalXP').textContent);
    document.getElementById('totalXP').textContent = currentXP + 25;
    
    // Update progress bar
    const progressBar = document.querySelector(`[data-project="${currentProject}"] .progress-fill`);
    const currentWidth = parseInt(progressBar.style.width);
    progressBar.style.width = Math.min(currentWidth + 5, 100) + '%';
}

function closeModal() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('questionPhase').style.display = 'block';
    document.getElementById('celebrationPhase').style.display = 'none';
    document.getElementById('userResponse').value = '';
}

// Sticker Collection Functions
function viewCollection() {
    document.getElementById('collectionModal').classList.add('active');
}

function closeCollection() {
    document.getElementById('collectionModal').classList.remove('active');
}

function showTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide tab content
    document.getElementById('availableTab').style.display = tabName === 'available' ? 'block' : 'none';
    document.getElementById('lockedTab').style.display = tabName === 'locked' ? 'block' : 'none';
}

function openDesignMode() {
    document.getElementById('designModal').classList.add('active');
}

function closeDesign() {
    document.getElementById('designModal').classList.remove('active');
}

function addSticker(emoji) {
    const canvas = document.getElementById('designCanvas');
    const sticker = document.createElement('div');
    sticker.className = 'placed-sticker';
    sticker.textContent = emoji;
    sticker.style.top = Math.random() * 150 + 'px';
    sticker.style.left = Math.random() * 250 + 'px';
    sticker.ondblclick = () => sticker.remove();
    canvas.appendChild(sticker);
}

function addText() {
    const text = prompt('Enter text for your page:');
    if (text) {
        const canvas = document.getElementById('designCanvas');
        const textElement = document.createElement('div');
        textElement.className = 'page-text';
        textElement.textContent = text;
        textElement.style.top = Math.random() * 150 + 'px';
        textElement.style.left = Math.random() * 200 + 'px';
        textElement.ondblclick = () => textElement.remove();
        canvas.appendChild(textElement);
    }
}

function saveDesign() {
    // Copy design from modal to main page
    const designCanvas = document.getElementById('designCanvas');
    const mainCanvas = document.getElementById('scrapbookCanvas');
    mainCanvas.innerHTML = designCanvas.innerHTML;
    
    alert('🎨 Your page design has been saved!');
    closeDesign();
}

function selectSticker(emoji) {
    // Visual feedback for selecting stickers
    event.target.style.transform = 'scale(1.2)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
    }, 200);
}

// Simulate real-time updates (in real app, this would come from backend)
setInterval(() => {
    const now = new Date();
    const hour = now.getHours();
    
    // Gentle reminder if it's evening and no check-ins today
    if (hour === 18 && Math.random() > 0.9) {
        // In real app: show notification or calendar reminder
        console.log('🔔 Gentle reminder: How did your projects go today?');
    }
}, 60000); // Check every minute