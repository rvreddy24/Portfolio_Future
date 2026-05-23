// Project Data
const projects = [
    {
        title: "Autonomous LinkedIn AI Pipeline",
        description: "A fully autonomous, self-orchestrating system that scrapes daily AI news, generates structured JSON posts using Gemini 2.5 Flash, routes drafts to Telegram for human-in-the-loop review, and uses a Playwright stealth poster to publish them.",
        technologies: ["Python", "Gemini 2.5 Flash API", "Playwright", "Telegram Bot API", "SQLite", "launchd"],
        icon: "fab fa-linkedin-in",
        color: "#0077B5",
        link: "https://github.com/rvreddy24/autonomous-linkedin-pipeline"
    },
    {
        title: "Basic Environmental Monitoring System",
        description: "Developed a real-time temperature and humidity monitoring system using ESP32 and DHT11, with LED indicators and customizable user interface.",
        technologies: ["ESP32", "C++", "DHT11", "Serial Communication"],
        icon: "fas fa-temperature-high",
        color: "#4CAF50"
    },
    {
        title: "Data Upload Using Bluetooth",
        description: "Implemented BLE communication on ESP32 to broadcast temperature, humidity, and battery level data for real-time mobile access.",
        technologies: ["ESP32", "BLE", "DHT11", "nRF Connect"],
        icon: "fab fa-bluetooth-b",
        color: "#2196F3"
    },
    {
        title: "Cloud Data Upload Using WiFi",
        description: "Used ESP32 and Flask to transmit real-time sensor data over WiFi for centralized monitoring and display.",
        technologies: ["ESP32", "Flask", "WiFi", "JSON", "HTTP"],
        icon: "fas fa-cloud-upload-alt",
        color: "#FF9800"
    },
    {
        title: "Medical Insurance Cost Analysis",
        description: "Comprehensive analysis of medical insurance cost drivers to provide insights for healthcare planning and policies.",
        technologies: ["Python", "Pandas", "Scikit-Learn", "Statsmodels"],
        icon: "fas fa-hospital",
        color: "#E91E63"
    },
    {
        title: "Advertising Sales Prediction",
        description: "Built a linear regression model to predict sales based on advertising budgets in TV, radio, and newspapers.",
        technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
        icon: "fas fa-chart-line",
        color: "#FF5722"
    },
    {
        title: "Text Classification & Sentiment Analysis",
        description: "Developed sentiment analysis and text classification models using deep learning for IMDb and 20 Newsgroups datasets.",
        technologies: ["Keras", "TensorFlow", "NLTK", "Neural Networks"],
        icon: "fas fa-comment-dots",
        color: "#673AB7"
    },
    {
        title: "Emotion Detection Using MobileNetV2",
        description: "Developed an emotion detection model using MobileNetV2 architecture, trained on facial expression data to classify emotions.",
        technologies: ["TensorFlow", "Keras", "MobileNetV2", "Python"],
        icon: "fas fa-smile",
        color: "#9C27B0"
    },
    {
        title: "Data Visualization Project",
        description: "Developed interactive dashboards with Tableau, Power BI, and custom Python visuals for trend exploration and analysis.",
        technologies: ["Tableau", "Power BI", "Python", "Data Visualization"],
        icon: "fas fa-chart-bar",
        color: "#00BCD4"
    },
    {
        title: "Data Analysis & SQL Project",
        description: "Used SQL for complex data analysis, increased customer spending by 12%, built a Python feedback pipeline, and ensured data integrity.",
        technologies: ["SQL", "Python", "Data Analysis", "ETL"],
        icon: "fas fa-database",
        color: "#3F51B5"
    },
    {
        title: "Faceguard - Facial Detection & Recognition",
        description: "Implemented facial recognition using machine learning for secure and accurate authentication across diverse use cases.",
        technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
        icon: "fas fa-user-shield",
        color: "#607D8B"
    }
];

// Hex to RGB Converter for transparent glows
function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '255, 255, 255';
}

// Load Projects into Bento Grid
function loadProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';
    
    projects.forEach((project, index) => {
        const delay = (index + 1) * 50;
        const rgb = hexToRgb(project.color);
        
        const projectCard = `
            <div class="bento-card" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="project-glow-header" style="height: 160px; background: radial-gradient(circle at center, rgba(${rgb}, 0.15) 0%, rgba(0,0,0,0.4) 100%); border-radius: 20px; margin-bottom: 24px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(${rgb}, 0.25); position: relative; overflow: hidden;">
                    <div style="position: absolute; width: 120px; height: 120px; background: ${project.color}; opacity: 0.12; filter: blur(40px); border-radius: 50%;"></div>
                    <i class="${project.icon}" style="font-size: 52px; color: ${project.color}; filter: drop-shadow(0 0 12px rgba(${rgb}, 0.45)); position: relative; z-index: 1;"></i>
                </div>
                <h3 class="card-title" style="font-size: 20px; margin-bottom: 10px; font-weight: 600;">${project.title}</h3>
                <p class="card-desc" style="font-size: 14px; line-height: 1.6; margin-bottom: 20px; min-height: 72px;">${project.description}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                    ${project.technologies.map(tech => 
                        `<span style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); padding: 5px 12px; border-radius: 12px; font-size: 11px; color: #d1d1d6; font-weight: 500;">${tech}</span>`
                    ).join('')}
                </div>
                <a href="${project.link || '#'}" ${project.link ? 'target="_blank"' : ''} class="project-explore-link" style="color: ${project.color};">
                    Explore Project <i class="fas fa-chevron-right" style="font-size: 10px;"></i>
                </a>
            </div>
        `;
        projectsContainer.innerHTML += projectCard;
    });
}

// Interactive Terminal Logic
function initTerminal() {
    const terminalInput = document.getElementById('terminalInput');
    const terminalBody = document.getElementById('terminalBody');
    if (!terminalInput || !terminalBody) return;

    terminalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputVal = terminalInput.value.trim();
            if (inputVal === '') return;

            // Log command in terminal
            appendTerminalOutput(`raj@varshith:~$ ${inputVal}`);

            // Process command
            const command = inputVal.toLowerCase();
            processTerminalCommand(command);

            // Clear and scroll
            terminalInput.value = '';
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });
}

function appendTerminalOutput(text, isGreen = false) {
    const terminalBody = document.getElementById('terminalBody');
    const inputRow = terminalBody.querySelector('.terminal-input-row');
    if (!terminalBody || !inputRow) return;
    
    const line = document.createElement('div');
    line.className = 'terminal-output-line';
    if (isGreen) {
        line.style.color = '#00ff66';
    }
    line.textContent = text;
    
    terminalBody.insertBefore(line, inputRow);
}

function processTerminalCommand(cmd) {
    switch (cmd) {
        case 'help':
            appendTerminalOutput('Available pathways:\n  [profile]   - Output portfolio overview\n  [education] - Display Ph.D. status\n  [skills]    - Fetch Technical Arsenal\n  [projects]  - List experimental systems\n  [contact]   - Print communication routes\n  [clear]     - Flush screen buffer', true);
            break;
        case 'clear':
            const terminalBody = document.getElementById('terminalBody');
            if (terminalBody) {
                const lines = terminalBody.querySelectorAll('.terminal-output-line');
                lines.forEach(line => line.remove());
            }
            break;
        case 'profile':
            appendTerminalOutput('PROFILE: Raj Varshith Reddy\nROLE: Data Scientist / AI Researcher\nPURSING: Ph.D. in Data Science\nMISSION: Fusing secure edge-IoT intelligence with deep optimization models.', true);
            break;
        case 'education':
            appendTerminalOutput('UNIVERSITY: University of Missouri\nDEGREE: Ph.D. in Data Science\nGPA: 3.9+\nFOCUS: IoT cluster security vulnerabilities, real-time secure networks, advanced deep learning.', true);
            break;
        case 'skills':
            appendTerminalOutput('LANGUAGES: Python, C++, SQL\nFRAMEWORKS: PyTorch, TensorFlow, Keras, Flask\nDATA_DEV: Tableau, Power BI, Pandas, Scikit-Learn\nHARDWARE: ESP32, MQTT protocols, BLE sensors', true);
            break;
        case 'projects':
            appendTerminalOutput('DEPLOYED SYSTEMS:\n  - Environmental Monitor (ESP32/DHT11)\n  - BLE Broadcast telemetry\n  - Cloud Upload (Flask/WiFi)\n  - Sentiment Neural Net (Keras/TensorFlow)\n  - Sales Linear Regression Predictor\n  - MobileNetV2 Emotion Detector\n  - Facial recognition engine', true);
            break;
        case 'contact':
            appendTerminalOutput('DATALINK CHANNELS:\n  - EMAIL: rajvarshithreddy@gmail.com\n  - LINKEDIN: linkedin.com/in/raj-varshith-reddy-malgireddy-\n  - GITHUB: github.com/rvreddy24', true);
            break;
        default:
            appendTerminalOutput(`Error: Pathway "${cmd}" not recognized. Type "help" to list available pathways.`);
    }
}

// AI Chat Agent Widget Logic
function initAIAgent() {
    const aiBubble = document.getElementById('aiAgentBubble');
    const aiPanel = document.getElementById('aiAgentPanel');
    const aiClose = document.getElementById('aiAgentClose');

    if (!aiBubble || !aiPanel || !aiClose) return;

    aiBubble.addEventListener('click', () => {
        aiPanel.classList.toggle('active');
    });

    aiClose.addEventListener('click', () => {
        aiPanel.classList.remove('active');
    });
}

function askAIAgent(question) {
    const aiInput = document.getElementById('aiAgentInput');
    if (!aiInput) return;
    aiInput.value = question;
    sendAgentMessage();
}

function sendAgentMessage() {
    const aiInput = document.getElementById('aiAgentInput');
    const aiChatBody = document.getElementById('aiAgentChatBody');
    if (!aiInput || !aiChatBody) return;

    const userText = aiInput.value.trim();
    if (userText === '') return;

    // Append User Message
    appendAgentMsg(userText, 'user');
    aiInput.value = '';

    // Pulse loading bot message
    const loadingId = appendAgentMsg('Thinking...', 'bot', true);
    
    // Simulate AI cognitive delay
    setTimeout(() => {
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.remove();

        const responseText = getAIAgentResponse(userText);
        appendAgentMsg(responseText, 'bot');
        aiChatBody.scrollTop = aiChatBody.scrollHeight;
    }, 800);
}

function appendAgentMsg(text, sender, isLoading = false) {
    const aiChatBody = document.getElementById('aiAgentChatBody');
    if (!aiChatBody) return '';
    const msgId = 'msg-' + Math.random().toString(36).substr(2, 9);
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const msgDiv = document.createElement('div');
    msgDiv.id = msgId;
    msgDiv.className = `ai-msg ai-msg-${sender}`;
    if (isLoading) {
        msgDiv.style.fontStyle = 'italic';
        msgDiv.style.opacity = '0.7';
    }
    
    msgDiv.innerHTML = `
        <div>${text}</div>
        <div class="ai-msg-time">${time} [${sender === 'bot' ? 'SYS' : 'USR'}]</div>
    `;
    
    aiChatBody.appendChild(msgDiv);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;
    return msgId;
}

function getAIAgentResponse(text) {
    const query = text.toLowerCase();
    
    if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
        return "Greetings, system visitor! I am VARSHITH_AI. I can supply real-time facts about Raj Varshith's work. Try asking about his 'Ph.D.', 'skills', or 'projects'.";
    }
    if (query.includes('who is') || query.includes('varshith') || query.includes('raj')) {
        return "Raj Varshith is a Data Scientist & Innovator currently pursuing his Ph.D. in Data Science at the University of Missouri. He develops optimized AI systems, secure IoT clusters, and predictive data forecasting frameworks.";
    }
    if (query.includes('phd') || query.includes('ph.d') || query.includes('research') || query.includes('university') || query.includes('missouri')) {
        return "Raj is currently pursuing a Ph.D. in Data Science at the University of Missouri, maintaining a 3.9+ research GPA. His work focuses on secure real-time networks, embedded system cluster security, and neural net optimizations.";
    }
    if (query.includes('skills') || query.includes('tech') || query.includes('languages') || query.includes('arsenal')) {
        return "His Technical Arsenal includes:\n- Languages: Python, C++, SQL\n- ML/Deep Learning: PyTorch, TensorFlow, NLP, Computer Vision\n- Data/BI: Tableau, Power BI, Scikit-Learn, Pandas\n- IoT: ESP32 hardware protocols, MQTT, BLE transmission.";
    }
    if (query.includes('project') || query.includes('models') || query.includes('systems')) {
        return "He has built 15+ systems, including a real-time Environmental Monitor (ESP32/DHT11), BLE telematics Broadcasts, a Flask WiFi Cloud database, deep IMDb classifiers, and high-accuracy MobileNetV2 Emotion Detectors.";
    }
    if (query.includes('contact') || query.includes('email') || query.includes('connect') || query.includes('linkedin')) {
        return "You can establish a link with Raj Varshith via:\n- Email: rajvarshithreddy@gmail.com\n- LinkedIn: linkedin.com/in/raj-varshith-reddy-malgireddy-\n- GitHub: github.com/rvreddy24\n\nOr submit a contact request using the sleek Contact Form directly on the page!";
    }
    if (query.includes('certif') || query.includes('net') || query.includes('ugc')) {
        return "Raj holds several notable certifications, including the prestigious national UGC NET credential, Cisco IoT networking certifications, Cyber Security, and advanced Python certificates.";
    }
    return "Query parsed. However, that specific dataset falls outside my local core profile. Try asking about his 'Ph.D. Research', 'Select Projects', or 'Technical Arsenal'!";
}

// Neural Canvas Visualizer
function initNeuralCanvas() {
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Resize canvas
    function resize() {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    let phase = 0;
    function animate() {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        ctx.clearRect(0, 0, width, height);
        
        // Draw digital matrix grid background
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
        ctx.lineWidth = 1;
        for (let i = 0; i < width; i += 20) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, height);
            ctx.stroke();
        }
        for (let j = 0; j < height; j += 15) {
            ctx.beginPath();
            ctx.moveTo(0, j);
            ctx.lineTo(width, j);
            ctx.stroke();
        }
        
        // Render 3 fluid harmonic waves
        const waves = [
            { amplitude: 15, frequency: 0.015, speed: 0.03, color: 'rgba(0, 255, 102, 0.65)' }, // Academic Green
            { amplitude: 10, frequency: 0.022, speed: 0.06, color: 'rgba(191, 90, 242, 0.5)' },  // Skills Purple
            { amplitude: 6, frequency: 0.030, speed: 0.08, color: 'rgba(0, 240, 255, 0.45)' }    // Cyber Cyan
        ];
        
        waves.forEach(wave => {
            ctx.beginPath();
            ctx.strokeStyle = wave.color;
            ctx.lineWidth = wave === waves[0] ? 2 : 1;
            
            for (let x = 0; x < width; x++) {
                const y = height / 2 + Math.sin(x * wave.frequency + phase * wave.speed) * wave.amplitude;
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();
        });
        
        phase++;
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    initTerminal();
    initAIAgent();
    initNeuralCanvas();
});