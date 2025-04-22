// Tarot card data - using Rider-Waite deck
const tarotDeck = [
    { name: "The Fool", image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg", upright: "Beginnings, innocence, spontaneity", reversed: "Recklessness, risk-taking" },
    { name: "The Magician", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg", upright: "Manifestation, resourcefulness, power", reversed: "Manipulation, poor planning" },
    { name: "The High Priestess", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg", upright: "Intuition, sacred knowledge, divine feminine", reversed: "Secrets, disconnected from intuition" },
    { name: "The Empress", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg", upright: "Femininity, beauty, nature, nurturing", reversed: "Creative block, dependence" },
    { name: "The Emperor", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg", upright: "Authority, structure, control", reversed: "Tyranny, rigidity, domination" },
    { name: "The Hierophant", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg", upright: "Tradition, conformity, morality", reversed: "Rebellion, subversiveness" },
    { name: "The Lovers", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Papus_Atout_06-amoureux-lover.png", upright: "Partnerships, duality, union", reversed: "Loss of balance, one-sidedness" },
    { name: "The Chariot", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg", upright: "Direction, control, willpower", reversed: "Lack of control, opposition" },
    { name: "Strength", image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg", upright: "Inner strength, bravery, compassion", reversed: "Self-doubt, weakness" },
    { name: "The Hermit", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg", upright: "Soul-searching, introspection, being alone", reversed: "Isolation, loneliness" },
    { name: "Wheel of Fortune", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg", upright: "Change, cycles, inevitable fate", reversed: "No control, bad luck" },
    { name: "Justice", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg", upright: "Cause and effect, clarity, truth", reversed: "Dishonesty, unfairness" },
    { name: "The Hanged Man", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg", upright: "Sacrifice, release, martyrdom", reversed: "Stalling, needless sacrifice" },
    { name: "Death", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg", upright: "End of cycle, beginnings, change", reversed: "Fear of change, stagnation" },
    { name: "Temperance", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg", upright: "Middle path, patience, finding meaning", reversed: "Extremes, excess" },
    { name: "The Devil", image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg", upright: "Addiction, materialism, playfulness", reversed: "Freedom, release, reclaiming power" },
    { name: "The Tower", image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg", upright: "Sudden upheaval, broken pride, disaster", reversed: "Disaster avoided, delayed disaster" },
    { name: "The Star", image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg", upright: "Hope, faith, rejuvenation", reversed: "Faithlessness, discouragement" },
    { name: "The Moon", image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg", upright: "Unconscious, illusions, intuition", reversed: "Confusion, fear, misinterpretation" },
    { name: "The Sun", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg", upright: "Joy, success, celebration", reversed: "Negativity, depression" },
    { name: "Judgement", image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg", upright: "Reflection, reckoning, awakening", reversed: "Lack of self awareness, doubt" },
    { name: "The World", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg", upright: "Fulfillment, harmony, completion", reversed: "Incompletion, lack of closure" },
    // Minor Arcana - Sample cards
    { name: "Ace of Wands", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Ace_of_Wands%2C_Waite-Smith_Tarot_Deck%2C_Yale_University.jpg", upright: "Inspiration, new opportunities", reversed: "Delays, lack of motivation" },
    { name: "Three of Cups", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Three_of_Cups%2C_Waite-Smith_Tarot_Deck%2C_Yale_University.jpg/640px-Three_of_Cups%2C_Waite-Smith_Tarot_Deck%2C_Yale_University.jpg", upright: "Celebration, friendship", reversed: "Isolation, loneliness" },
    { name: "Queen of Pentacles", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pents13.jpg/640px-Pents13.jpg", upright: "Practicality, nurturing", reversed: "Financial insecurity" },
    { name: "Knight of Swords", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Swords12.jpg/640px-Swords12.jpg", upright: "Action, ambition", reversed: "Aggression, impulsiveness" },
    { name: "Ten of Cups", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cups10.jpg/640px-Cups10.jpg", upright: "Harmony, happy family", reversed: "Disconnection, conflict" }
];


// DOM elements
const introScreen = document.getElementById('introScreen');
const mainContent = document.getElementById('mainContent');
const beginBtn = document.getElementById('beginBtn');
const nameInput = document.getElementById('nameInput');
const questionInput = document.getElementById('questionInput');
const userNameInput = document.getElementById('userName');
const submitName = document.getElementById('submitName');
const greetingName = document.getElementById('greetingName');
const userQuestion = document.getElementById('userQuestion');
const submitQuestion = document.getElementById('submitQuestion');
const cardDisplay = document.getElementById('cardDisplay');
const drawButton = document.getElementById('drawButton');
const resetButton = document.getElementById('resetButton');
const spreadType = document.getElementById('spreadType');
const readingResult = document.getElementById('readingResult');
const readingControls = document.getElementById('readingControls');
const cardModal = document.getElementById('cardModal');
const modalCard = document.getElementById('modalCard');
const modalInterpretation = document.getElementById('modalInterpretation');
const closeModal = document.querySelector('.close');

// App state
let currentReading = [];
let userName = '';
let userQuestionText = '';

// Initialize the app
function initApp() {
    // Start with intro screen
    introScreen.classList.remove('hidden');
    mainContent.classList.add('hidden');

    // Set up event listeners
    beginBtn.addEventListener('click', beginReading);
    submitName.addEventListener('click', saveName);
    submitQuestion.addEventListener('click', saveQuestion);
    drawButton.addEventListener('click', drawCards);
    resetButton.addEventListener('click', resetReading);
    closeModal.addEventListener('click', () => cardModal.style.display = 'none');

    // Allow pressing Enter in name input
    userNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveName();
    });

    // Allow pressing Enter in question textarea
    userQuestion.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            saveQuestion();
        }
    });
}

// Begin the reading process
function beginReading() {
    introScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');

    // Show name input first
    nameInput.classList.remove('hidden');
    questionInput.classList.add('hidden');
    readingControls.classList.add('hidden');
}

// Save the user's name
function saveName() {
    userName = userNameInput.value.trim();

    if (!userName) {
        alert("Please enter your name, dear seeker.");
        return;
    }

    // Personalize the greeting
    greetingName.textContent = userName;

    // Move to question input
    nameInput.classList.add('hidden');
    questionInput.classList.remove('hidden');
}

// Save the user's question
function saveQuestion() {
    userQuestionText = userQuestion.value.trim();

    if (!userQuestionText) {
        alert("The cards require a question to focus their wisdom.");
        return;
    }

    // Move to card selection
    questionInput.classList.add('hidden');
    readingControls.classList.remove('hidden');

    // Update instructions
    cardDisplay.querySelector('.instructions p').textContent =
        `Focus on your question: "${userQuestionText.substring(0, 30)}${userQuestionText.length > 30 ? '...' : ''}"`;
}

// Draw cards function
async function drawCards() {
    // Clear previous reading
    cardDisplay.innerHTML = '';
    readingResult.classList.remove('show');

    // Show loading state
    drawButton.disabled = true;
    drawButton.innerHTML = '<div class="loading"></div>';

    // Determine number of cards to draw
    const numCards = parseInt(spreadType.value);

    // Shuffle and draw cards
    const shuffledDeck = [...tarotDeck].sort(() => Math.random() - 0.5);
    currentReading = shuffledDeck.slice(0, numCards).map(card => {
        const isReversed = Math.random() > 0.5;
        return { ...card, reversed: isReversed };
    });

    // Display cards with animation
    await displayCardsWithAnimation(currentReading);

    // Get AI interpretation
    await getAIInterpretation(currentReading);

    // Reset button state
    drawButton.disabled = false;
    drawButton.textContent = 'Draw Cards';
}

// Display cards with animation
function displayCardsWithAnimation(cards) {
    return new Promise(resolve => {
        let delay = 0;

        cards.forEach((card, index) => {
            setTimeout(() => {
                const cardElement = document.createElement('div');
                cardElement.className = `tarot-card ${card.reversed ? 'reversed' : ''}`;
                cardElement.style.backgroundImage = `url(${card.image})`;
                cardElement.style.opacity = '0';
                cardElement.style.transform = 'translateY(50px) rotate(-5deg)';

                // Store card data on element
                cardElement.dataset.name = card.name;
                cardElement.dataset.image = card.image;
                cardElement.dataset.meaning = card.reversed ? card.reversed : card.upright;
                cardElement.dataset.reversed = card.reversed;

                // Add click event for modal
                cardElement.addEventListener('click', () => showCardModal(card));

                cardDisplay.appendChild(cardElement);

                // Animate card appearance
                setTimeout(() => {
                    cardElement.style.opacity = '1';
                    cardElement.style.transform = card.reversed
                        ? 'rotate(180deg)'
                        : 'translateY(0) rotate(0)';
                }, 50);

                // Resolve after last card
                if (index === cards.length - 1) {
                    setTimeout(resolve, 500);
                }
            }, delay);

            delay += 300; // Stagger animations
        });
    });
}

// Show card modal
function showCardModal(card) {
    modalCard.style.backgroundImage = `url(${card.image})`;
    modalCard.className = `modal-card ${card.reversed ? 'reversed' : ''}`;

    modalInterpretation.innerHTML = `
        <h3>${card.name} ${card.reversed ? '(Reversed)' : ''}</h3>
        <p><strong>Lady M. says:</strong> ${card.reversed ? card.reversed : card.upright}</p>
    `;

    cardModal.style.display = 'block';
}

async function getAIInterpretation(cards) {
    try {

       const userQuestion = document.getElementById('userQuestion').value.trim();
        // Prepare prompt for AI
        const spreadName = spreadType.options[spreadType.selectedIndex].text;
        const cardList = cards.map(card =>
            `${card.name} ${card.reversed ? '(Reversed)' : ''}`
        ).join(', ');

        let prompt;

        if (userQuestion) {
            prompt = `When answering the question, please address ${userName} in a casual way. Give me a personalized tarot reading interpretation for this question:
            "${userQuestion}". The answer should be as tailered and specific as possible. The reading is a ${spreadName} spread with these cards: ${cardList}.
            Provide a specific interpretation about what this combination means in relation to the question,
             Keep the tone approachable. `;
        } else {
            prompt = `Give me a general tarot reading interpretation for a ${spreadName} spread
            with these cards: ${cardList}. Provide an interpretation of what this combination means,
            about 2-3 paragraphs. Keep the tone mystical but approachable.`;
        }

        // Use AIConsole API (free tier)
        // Note: You'll need to sign up at https://aiconsole.io for an API key
        console.log(JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: {'role': 'user', 'content': prompt}, //prompt
            max_tokens: 500,
            temperature: 0.7}))
        const response = await fetch('https://api.chatanywhere.com.cn/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-uuekjuBsiqjpVNGWWqgvUWyEbLq4wd4k0fL8vJu7IZ247RpR' // Replace with your actual API key
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{'role': 'user', 'content': prompt}], //prompt
                max_tokens: 500,
                temperature: 0.7
            })
        });

        const data = await response.json();


        let formattedInterpretation = data.choices[0].message.content;

        // Option 1: Replace literal \n with <br> (if API returns \n)
        formattedInterpretation = formattedInterpretation.replace(/\n/g, '<br>');

        // Display interpretation
        readingResult.innerHTML = `
            <h2>Lady M.'s Reading for ${userName}</h2>
            <p><strong>Your Question:</strong> ${userQuestionText}</p>
            <p><strong>Cards drawn:</strong> ${cardList}</p>
            <div class="interpretation">
                <p><strong>🔮 Lady M. gazes into the cards and says...</strong></p>
                <p>${formattedInterpretation}</p>
            </div>
        `;

         // Show with animation
         setTimeout(() => {
             readingResult.classList.add('show');
         }, 100);

     } catch (error) {
         console.error('Error getting AI interpretation:', error);

         // Fallback interpretation
         const userQuestion = document.getElementById('userQuestion').value.trim();
         readingResult.innerHTML = `
             <h2>Your Reading</h2>
             ${userQuestion ? `<p><strong>Your Question:</strong> ${userQuestion}</p>` : ''}
             <p>Sorry, we couldn't connect to the wisdom of the cards right now.
             Please try again later or meditate on the cards you've drawn.</p>
             <p><strong>Cards drawn:</strong> ${cards.map(card =>
                 `${card.name} ${card.reversed ? '(Reversed)' : ''}`
             ).join(', ')}</p>
         `;

         readingResult.classList.add('show');
     }
 }

// Reset reading
function resetReading() {
    // Reset to name input
    nameInput.classList.remove('hidden');
    questionInput.classList.add('hidden');
    readingControls.classList.add('hidden');
    readingResult.classList.remove('show');

    // Clear inputs
    userNameInput.value = '';
    userQuestion.value = '';

    // Reset card display
    cardDisplay.innerHTML = `
        <div class="instructions">
            <p>The cards await your question...</p>
            <div class="sparkle">✧</div>
        </div>
    `;

    currentReading = [];
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === cardModal) {
        cardModal.style.display = 'none';
    }
});

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
