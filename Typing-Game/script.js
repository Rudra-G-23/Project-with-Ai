// Game variables
let score = 0;
let letters = [];
let dangerLetters = [];
let gameSpeed = 1500; // Default speed (easy)
let practiceOption = 'all';
let negativeMarking = false;
let targetScore = 50;
let isPaused = false;
let bgSound, clickSound, blastSound, dangerSound, celebrationSound, gameOverSound;
let lastLetterTime = 0;

// DOM elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const letterContainer = document.getElementById('letter-container');
const currentScoreElement = document.getElementById('current-score');
const finalScoreElement = document.getElementById('final-score');
const problemKeysElement = document.getElementById('problem-keys');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const restartButton = document.getElementById('restart-btn');
const negativeMarkingButton = document.getElementById('negative-marking');
const targetScoreInput = document.getElementById('target-score');
const dangerZone = document.getElementById('danger-zone');

// Load sounds
function loadSounds() {
    bgSound = new Audio('public/bg.mp3');
    clickSound = new Audio('public/click.mp3');
    blastSound = new Audio('public/blast.mp3');
    dangerSound = new Audio('public/danger.mp3');
    celebrationSound = new Audio('public/celebration.mp3');
    gameOverSound = new Audio('public/gameover.mp3');

    bgSound.loop = true;
}

// Event listeners
startButton.addEventListener('click', startGame);
pauseButton.addEventListener('click', togglePause);
restartButton.addEventListener('click', restartGame);
document.addEventListener('keydown', handleKeyPress);

// Option buttons
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        clickSound.play();
        const type = button.getAttribute('data-type');
        const value = button.getAttribute('data-value');
        
        if (type === 'speed') {
            gameSpeed = value === 'easy' ? 1500 : value === 'medium' ? 956 : 309;
            document.querySelectorAll('.option-btn[data-type="speed"]').forEach(btn => btn.classList.remove('selected'));
        } else if (type === 'practice') {
            practiceOption = value;
            document.querySelectorAll('.option-btn[data-type="practice"]').forEach(btn => btn.classList.remove('selected'));
            if (value === 'all') {
                document.querySelectorAll('.option-btn[data-type="practice"]').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            } else {
                document.querySelector('.option-btn[data-type="practice"][data-value="all"]').classList.remove('selected');
            }
        } else if (type === 'marking') {
            negativeMarking = !negativeMarking;
            button.textContent = negativeMarking ? 'On' : 'Off';
        }
        
        button.classList.add('selected');
    });
});

function startGame() {
    clickSound.play();
    score = 0;
    letters = [];
    dangerLetters = [];
    isPaused = false;
    lastLetterTime = 0;
    targetScore = parseInt(targetScoreInput.value) || 50;
    
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    currentScoreElement.textContent = score;
    dangerZone.innerHTML = '';
    
    bgSound.play();
    requestAnimationFrame(gameLoop);
}

function addLetter() {
    if (isPaused) return;
    
    const letter = getRandomLetter();
    const letterBox = document.createElement('div');
    letterBox.className = 'letter-box';
    letterBox.textContent = letter;
    letterBox.style.left = `${Math.random() * (letterContainer.clientWidth - 40)}px`;
    letterBox.style.top = '-40px';
    letterContainer.appendChild(letterBox);
    
    letters.push({ element: letterBox, letter: letter, startTime: Date.now() });
    
    animateLetterFall(letterBox);
}

function getRandomLetter() {
    let chars = '';
    switch (practiceOption) {
        case 'capital':
            chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
        case 'small':
            chars = 'abcdefghijklmnopqrstuvwxyz';
            break;
        case 'number':
            chars = '0123456789';
            break;
        default:
            chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,.';
    }
    return chars[Math.floor(Math.random() * chars.length)];
}

function animateLetterFall(letterBox) {
    let startTime = Date.now();
    
    function fall() {
        if (isPaused) {
            requestAnimationFrame(fall);
            return;
        }
        
        const elapsedTime = Date.now() - startTime;
        const progress = elapsedTime / gameSpeed;
        
        if (progress < 1) {
            const newY = progress * (letterContainer.clientHeight - 40);
            letterBox.style.top = `${newY}px`;
            requestAnimationFrame(fall);
        } else {
            handleMissedLetter(letterBox);
        }
    }
    
    fall();
}

function handleKeyPress(event) {
    if (isPaused || gameScreen.classList.contains('hidden')) return;
    
    const pressedKey = event.key.toLowerCase();
    const matchingLetterIndex = letters.findIndex(l => l.letter.toLowerCase() === pressedKey);
    
    if (matchingLetterIndex !== -1) {
        const { element, letter } = letters[matchingLetterIndex];
        element.style.transform = 'scale(1.2)';
        element.style.opacity = '0';
        createLetterFragments(element);
        setTimeout(() => {
            element.remove();
        }, 300);
        letters.splice(matchingLetterIndex, 1);
        updateScore(1);
        blastSound.play();
    } else if (negativeMarking) {
        updateScore(-1);
    }
}

function createLetterFragments(element) {
    const fragmentCount = 10;
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < fragmentCount; i++) {
        const fragment = document.createElement('div');
        fragment.className = 'letter-fragment';
        fragment.style.left = `${rect.left + rect.width / 2}px`;
        fragment.style.top = `${rect.top + rect.height / 2}px`;
        fragment.style.setProperty('--tx', `${(Math.random() - 0.5) * 50}px`);
        fragment.style.setProperty('--ty', `${(Math.random() - 0.5) * 50}px`);
        fragment.style.setProperty('--rot', `${Math.random() * 360}deg`);
        fragment.style.backgroundColor = getRandomColor();
        document.body.appendChild(fragment);
        
        setTimeout(() => fragment.remove(), 200);
    }
}

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
}

function handleMissedLetter(letterBox) {
    const missedLetter = letters.find(l => l.element === letterBox);
    if (missedLetter) {
        letters = letters.filter(l => l !== missedLetter);
        addToDangerZone(missedLetter.letter);
        letterBox.remove();
        dangerSound.play();
    }
}

function addToDangerZone(letter) {
    if (dangerLetters.length < 10) {
        dangerLetters.push(letter);
        const dangerLetter = document.createElement('div');
        dangerLetter.className = 'danger-letter';
        dangerLetter.textContent = letter;
        dangerZone.appendChild(dangerLetter);
    }
    
    if (dangerLetters.length >= 10) {
        endGame();
    }
}

function updateScore(points) {
    score += points;
    currentScoreElement.textContent = score;
    
    if (score % targetScore === 0 && score > 0) {
        celebrate();
    }
    
    if (score < -20) {
        endGame();
    }
}

function togglePause() {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
    if (isPaused) {
        bgSound.pause();
        letters.forEach(letter => {
            letter.element.style.animationPlayState = 'paused';
        });
    } else {
        bgSound.play();
        letters.forEach(letter => {
            letter.element.style.animationPlayState = 'running';
        });
    }
}

function endGame() {
    bgSound.pause();
    gameOverSound.play();
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    finalScoreElement.textContent = score;
    displayProblemKeys();
}

function displayProblemKeys() {
    problemKeysElement.innerHTML = '';
    const problemKeys = {};
    dangerLetters.forEach(letter => {
        problemKeys[letter] = (problemKeys[letter] || 0) + 1;
    });
    
    Object.entries(problemKeys)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .forEach(([key, count]) => {
            const keyElement = document.createElement('div');
            keyElement.className = 'problem-key';
            keyElement.textContent = key;
            problemKeysElement.appendChild(keyElement);
        });
}

function restartGame() {
    clickSound.play();
    endScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    letterContainer.innerHTML = '';
    dangerZone.innerHTML = '';
    score = 0;
    letters = [];
    dangerLetters = [];
}

function celebrate() {
    celebrationSound.play();
    const celebration = document.createElement('div');
    celebration.id = 'celebration';
    celebration.style.position = 'absolute';
    celebration.style.top = '0';
    celebration.style.left = '0';
    celebration.style.width = '100%';
    celebration.style.height = '100%';
    celebration.style.pointerEvents = 'none';
    gameScreen.appendChild(celebration);

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        celebration.appendChild(confetti);
    }

    setTimeout(() => {
        celebration.remove();
    }, 5000);
}

function gameLoop(currentTime) {
    if (!isPaused) {
        cleanupLetters();
        
        // Add a new letter at regular intervals based on gameSpeed
        if (currentTime - lastLetterTime > gameSpeed) {
            addLetter();
            lastLetterTime = currentTime;
        }
    }
    requestAnimationFrame(gameLoop);
}

function cleanupLetters() {
    const containerBottom = letterContainer.clientHeight;
    letters = letters.filter(letter => {
        const letterBottom = letter.element.offsetTop + letter.element.offsetHeight;
        if (letterBottom > containerBottom) {
            letter.element.remove();
            addToDangerZone(letter.letter);
            return false;
        }
        return true;
    });
}

// Initialize the game
document.querySelector('.option-btn[data-type="practice"][data-value="all"]').classList.add('selected');
document.querySelector('.option-btn[data-type="speed"][data-value="medium"]').classList.add('selected');

// Ensure the game works on window resize
window.addEventListener('resize', () => {
    if (!gameScreen.classList.contains('hidden')) {
        letters.forEach(letter => {
            const maxX = letterContainer.clientWidth - 40;
            let currentX = parseFloat(letter.element.style.left);
            if (currentX > maxX) {
                letter.element.style.left = `${maxX}px`;
            }
        });
    }
});

// Load sounds when the page is loaded
window.addEventListener('load', loadSounds);