// Generate animated stars background
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 100;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Quiz functionality
const quizData = [
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correct: 1
    },
    {
        question: "How many moons does Mars have?",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "What is the name of the first human to walk on the Moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
        correct: 1
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the closest star to Earth?",
        options: ["Alpha Centauri", "Sirius", "The Sun", "Proxima Centauri"],
        correct: 2
    },
    {
        question: "How long does it take for light from the Sun to reach Earth?",
        options: ["8 minutes", "1 hour", "1 day", "1 second"],
        correct: 0
    },
    {
        question: "What is the name of the galaxy we live in?",
        options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
        correct: 1
    },
    {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1
    },
    {
        question: "What is the temperature of space?",
        options: ["0°C", "-273°C", "100°C", "-200°C"],
        correct: 1
    },
    {
        question: "How many Earth years does it take for Neptune to orbit the Sun?",
        options: ["84 years", "165 years", "248 years", "12 years"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionElement);
    });
    
    document.getElementById('nextBtn').disabled = true;
    selectedAnswer = null;
}

function selectAnswer(index) {
    selectedAnswer = index;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[index].classList.add('selected');
    
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
        document.getElementById('score').textContent = score;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
        <div style="text-align: center;">
            <h3>Quiz Complete! 🎉</h3>
            <p>Your score: ${score}/${quizData.length}</p>
            <p>${getScoreMessage(score)}</p>
            <button class="btn" onclick="restartQuiz()">Restart Quiz</button>
        </div>
    `;
}

function getScoreMessage(score) {
    if (score === 10) return "Perfect! You're a space expert! 🚀";
    if (score >= 7) return "Great job! You know your space facts! 🌟";
    if (score >= 5) return "Good work! Keep learning about space! 🌙";
    return "Keep exploring! There's so much to discover! 🛸";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    document.getElementById('score').textContent = score;
    
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
        <div class="question" id="question">Loading question...</div>
        <div class="options" id="options"></div>
        <div class="quiz-controls">
            <button class="btn" id="nextBtn" onclick="nextQuestion()" disabled>Next Question</button>
            <div class="score">Score: <span id="score">0</span>/10</div>
        </div>
    `;
    
    loadQuestion();
}

// Carousel functionality
const carouselData = [
    {
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "Deep Space Nebula",
        description: "A stunning view of colorful cosmic clouds where stars are born"
    },
    {
        image: "https://images.unsplash.com/photo-1582649629615-5b9fe0c86e75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "Spiral Galaxy",
        description: "Magnificent spiral arms containing billions of stars"
    },
    {
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "Planetary System",
        description: "Exploring distant worlds orbiting alien suns"
    },
    {
        image: "https://images.unsplash.com/photo-1549144511-4d0e50bbf941?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "Asteroid Field",
        description: "Rocky remnants from the early solar system"
    },
    {
        image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "Space Station",
        description: "Humanity's outpost in the cosmos"
    }
];

let currentSlideIndex = 0;

function initializeCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const indicatorsContainer = document.getElementById('indicators');
    
    carouselData.forEach((slide, index) => {
        // Create slide
        const slideElement = document.createElement('div');
        slideElement.className = 'carousel-slide';
        slideElement.style.backgroundImage = `url(${slide.image})`;
        
        const slideContent = document.createElement('div');
        slideContent.className = 'slide-content';
        slideContent.innerHTML = `
            <h3>${slide.title}</h3>
            <p>${slide.description}</p>
        `;
        
        slideElement.appendChild(slideContent);
        carouselTrack.appendChild(slideElement);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.onclick = () => goToSlide(index);
        indicatorsContainer.appendChild(indicator);
    });
}

function updateCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const indicators = document.querySelectorAll('.indicator');
    
    carouselTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlideIndex);
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % carouselData.length;
    updateCarousel();
}

function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateCarousel();
}

// Auto-advance carousel
setInterval(nextSlide, 5000);

// API Integration
async function fetchSpaceData(type) {
    const apiDataContainer = document.getElementById('apiData');
    apiDataContainer.innerHTML = '<div class="loading">Loading space data...</div>';
    
    try {
        let data;
        
        switch (type) {
            case 'people':
                data = await fetchPeopleInSpace();
                break;
            case 'apod':
                data = await fetchAstronomyPicture();
                break;
            case 'mars':
                data = await fetchMarsWeather();
                break;
            case 'iss':
                data = await fetchISSLocation();
                break;
            default:
                throw new Error('Unknown data type');
        }
        
        displayApiData(data, type);
    } catch (error) {
        apiDataContainer.innerHTML = `<div class="error">Error fetching data: ${error.message}</div>`;
    }
}

async function fetchPeopleInSpace() {
    const response = await fetch('http://api.open-notify.org/astros.json');
    if (!response.ok) throw new Error('Failed to fetch people in space data');
    return await response.json();
}

async function fetchAstronomyPicture() {
    // Note: This would require NASA API key in production
    // For demo purposes, we'll simulate the response
    return {
        title: "Astronomy Picture of the Day",
        explanation: "This is a simulated astronomy picture. In a real implementation, you would need to register for a NASA API key at https://api.nasa.gov/",
        url: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: new Date().toLocaleDateString()
    };
}

async function fetchMarsWeather() {
    // Simulated Mars weather data
    const temperatures = [-80, -75, -70, -65, -60];
    const conditions = ['Clear', 'Dusty', 'Partly Cloudy', 'Windy'];
    
    return {
        sol: Math.floor(Math.random() * 3000) + 1000,
        temperature: temperatures[Math.floor(Math.random() * temperatures.length)],
        condition: conditions[Math.floor(Math.random() * conditions.length)],
        pressure: Math.floor(Math.random() * 200) + 600,
        season: 'Northern Spring'
    };
}

async function fetchISSLocation() {
    const response = await fetch('http://api.open-notify.org/iss-now.json');
    if (!response.ok) throw new Error('Failed to fetch ISS location');
    return await response.json();
}

function displayApiData(data, type) {
    const apiDataContainer = document.getElementById('apiData');
    let html = '';
    
    switch (type) {
        case 'people':
            html = `
                <div class="data-item">
                    <h3>People Currently in Space: ${data.number}</h3>
                    ${data.people.map(person => `
                        <p><strong>${person.name}</strong> - ${person.craft}</p>
                    `).join('')}
                </div>
            `;
            break;
            
        case 'apod':
            html = `
                <div class="data-item">
                    <h3>${data.title}</h3>
                    <p><strong>Date:</strong> ${data.date}</p>
                    <img src="${data.url}" alt="${data.title}" class="apod-image">
                    <p>${data.explanation}</p>
                </div>
            `;
            break;
            
        case 'mars':
            html = `
                <div class="data-item">
                    <h3>Mars Weather Report</h3>
                    <p><strong>Sol (Mars Day):</strong> ${data.sol}</p>
                    <p><strong>Temperature:</strong> ${data.temperature}°C</p>
                    <p><strong>Condition:</strong> ${data.condition}</p>
                    <p><strong>Pressure:</strong> ${data.pressure} Pa</p>
                    <p><strong>Season:</strong> ${data.season}</p>
                </div>
            `;
            break;
            
        case 'iss':
            html = `
                <div class="data-item">
                    <h3>International Space Station Location</h3>
                    <p><strong>Latitude:</strong> ${parseFloat(data.iss_position.latitude).toFixed(2)}°</p>
                    <p><strong>Longitude:</strong> ${parseFloat(data.iss_position.longitude).toFixed(2)}°</p>
                    <p><strong>Timestamp:</strong> ${new Date(data.timestamp * 1000).toLocaleString()}</p>
                    <p>The ISS is currently orbiting Earth at approximately 408 km altitude.</p>
                </div>
            `;
            break;
    }
    
    apiDataContainer.innerHTML = html;
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    loadQuestion();
    initializeCarousel();
    
    // Show initial message
    document.getElementById('apiData').innerHTML = `
        <div style="text-align: center;">
            <h3>⭐ Welcome to StellarLab!</h3>
            <p>Click any button above to fetch real-time space data and explore the cosmos!</p>
        </div>
    `;
});