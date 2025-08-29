// Quiz Service with daily quizzes, difficulty levels, and audio pronunciation
export const DIFFICULTY_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
};

export const DIFFICULTY_CONFIG = {
  [DIFFICULTY_LEVELS.BEGINNER]: {
    name: 'Beginner',
    minQuestions: 20,
    maxQuestions: 25,
    color: 'green',
    description: 'Basic vocabulary and simple phrases'
  },
  [DIFFICULTY_LEVELS.INTERMEDIATE]: {
    name: 'Intermediate',
    minQuestions: 20,
    maxQuestions: 30,
    color: 'orange',
    description: 'Common phrases and basic grammar'
  },
  [DIFFICULTY_LEVELS.ADVANCED]: {
    name: 'Advanced',
    minQuestions: 20,
    maxQuestions: 35,
    color: 'red',
    description: 'Complex sentences and advanced vocabulary'
  }
};

// Sample quiz data: English questions, Nepali answers, voice only for Nepali words
export const sampleQuizData = {
  beginner: [
    {
      id: 1,
      question: "What is the Nepali word for 'Hello'?",
      options: [
        { text: "नमस्ते", audio: null },
        { text: "धन्यवाद", audio: null },
        { text: "माफ गर्नुहोस्", audio: null },
        { text: "स्वागत छ", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'नमस्ते' means 'Hello' in Nepali."
    },
    {
      id: 2,
      question: "How do you say 'Thank you' in Nepali?",
      options: [
        { text: "धन्यवाद", audio: null },
        { text: "नमस्ते", audio: null },
        { text: "रोटी", audio: null },
        { text: "पानी", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'धन्यवाद' means 'Thank you' in Nepali."
    },
    {
      id: 3,
      question: "What is the Nepali word for 'Water'?",
      options: [
        { text: "पानी", audio: null },
        { text: "दूध", audio: null },
        { text: "चिया", audio: null },
        { text: "रोटी", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'पानी' means 'Water' in Nepali."
    },
    {
      id: 4,
      question: "How do you say 'Bread' in Nepali?",
      options: [
        { text: "रोटी", audio: null },
        { text: "पानी", audio: null },
        { text: "दूध", audio: null },
        { text: "चिया", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'रोटी' means 'Bread' in Nepali."
    },
    {
      id: 5,
      question: "What is the Nepali word for 'Milk'?",
      options: [
        { text: "दूध", audio: null },
        { text: "पानी", audio: null },
        { text: "रोटी", audio: null },
        { text: "चिया", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'दूध' means 'Milk' in Nepali."
    },
    {
      id: 6,
      question: "How do you say 'Tea' in Nepali?",
      options: [
        { text: "चिया", audio: null },
        { text: "पानी", audio: null },
        { text: "रोटी", audio: null },
        { text: "दूध", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'चिया' means 'Tea' in Nepali."
    },
    {
      id: 7,
      question: "What is the Nepali word for 'Rice'?",
      options: [
        { text: "भात", audio: null },
        { text: "दाल", audio: null },
        { text: "तरकारी", audio: null },
        { text: "मासु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'भात' means 'Rice' in Nepali."
    },
    {
      id: 8,
      question: "How do you say 'Lentils' in Nepali?",
      options: [
        { text: "दाल", audio: null },
        { text: "भात", audio: null },
        { text: "तरकारी", audio: null },
        { text: "मासु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'दाल' means 'Lentils' in Nepali."
    },
    {
      id: 9,
      question: "What is the Nepali word for 'Vegetables'?",
      options: [
        { text: "तरकारी", audio: null },
        { text: "भात", audio: null },
        { text: "दाल", audio: null },
        { text: "मासु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तरकारी' means 'Vegetables' in Nepali."
    },
    {
      id: 10,
      question: "How do you say 'Meat' in Nepali?",
      options: [
        { text: "मासु", audio: null },
        { text: "भात", audio: null },
        { text: "दाल", audio: null },
        { text: "तरकारी", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'मासु' means 'Meat' in Nepali."
    },
    {
      id: 11,
      question: "What is the Nepali word for 'House'?",
      options: [
        { text: "घर", audio: null },
        { text: "ढोका", audio: null },
        { text: "झ्याल", audio: null },
        { text: "छाना", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'घर' means 'House' in Nepali."
    },
    {
      id: 12,
      question: "How do you say 'Door' in Nepali?",
      options: [
        { text: "ढोका", audio: null },
        { text: "घर", audio: null },
        { text: "झ्याल", audio: null },
        { text: "छाना", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'ढोका' means 'Door' in Nepali."
    },
    {
      id: 13,
      question: "What is the Nepali word for 'Window'?",
      options: [
        { text: "झ्याल", audio: null },
        { text: "घर", audio: null },
        { text: "ढोका", audio: null },
        { text: "छाना", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'झ्याल' means 'Window' in Nepali."
    },
    {
      id: 14,
      question: "How do you say 'Roof' in Nepali?",
      options: [
        { text: "छाना", audio: null },
        { text: "घर", audio: null },
        { text: "ढोका", audio: null },
        { text: "झ्याल", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'छाना' means 'Roof' in Nepali."
    },
    {
      id: 15,
      question: "What is the Nepali word for 'Book'?",
      options: [
        { text: "किताब", audio: null },
        { text: "कलम", audio: null },
        { text: "कागज", audio: null },
        { text: "छापा", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'किताब' means 'Book' in Nepali."
    },
    {
      id: 16,
      question: "How do you say 'Pen' in Nepali?",
      options: [
        { text: "कलम", audio: null },
        { text: "किताब", audio: null },
        { text: "कागज", audio: null },
        { text: "छापा", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'कलम' means 'Pen' in Nepali."
    },
    {
      id: 17,
      question: "What is the Nepali word for 'Paper'?",
      options: [
        { text: "कागज", audio: null },
        { text: "किताब", audio: null },
        { text: "कलम", audio: null },
        { text: "छापा", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'कागज' means 'Paper' in Nepali."
    },
    {
      id: 18,
      question: "How do you say 'School' in Nepali?",
      options: [
        { text: "स्कूल", audio: null },
        { text: "कलेज", audio: null },
        { text: "विश्वविद्यालय", audio: null },
        { text: "कक्षा", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'स्कूल' means 'School' in Nepali."
    },
    {
      id: 19,
      question: "What is the Nepali word for 'Teacher'?",
      options: [
        { text: "शिक्षक", audio: null },
        { text: "विद्यार्थी", audio: null },
        { text: "प्रधानाध्यापक", audio: null },
        { text: "सहायक", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'शिक्षक' means 'Teacher' in Nepali."
    },
    {
      id: 20,
      question: "How do you say 'Student' in Nepali?",
      options: [
        { text: "विद्यार्थी", audio: null },
        { text: "शिक्षक", audio: null },
        { text: "प्रधानाध्यापक", audio: null },
        { text: "सहायक", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'विद्यार्थी' means 'Student' in Nepali."
    },
    {
      id: 21,
      question: "What is the Nepali word for 'Father'?",
      options: [
        { text: "बुबा", audio: null },
        { text: "आमा", audio: null },
        { text: "दाजु", audio: null },
        { text: "दिदी", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'बुबा' means 'Father' in Nepali."
    },
    {
      id: 22,
      question: "How do you say 'Mother' in Nepali?",
      options: [
        { text: "आमा", audio: null },
        { text: "बुबा", audio: null },
        { text: "दाजु", audio: null },
        { text: "दिदी", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'आमा' means 'Mother' in Nepali."
    },
    {
      id: 23,
      question: "What is the Nepali word for 'Brother'?",
      options: [
        { text: "दाजु", audio: null },
        { text: "दिदी", audio: null },
        { text: "बुबा", audio: null },
        { text: "आमा", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'दाजु' means 'Brother' in Nepali."
    },
    {
      id: 24,
      question: "How do you say 'Sister' in Nepali?",
      options: [
        { text: "दिदी", audio: null },
        { text: "दाजु", audio: null },
        { text: "बुबा", audio: null },
        { text: "आमा", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'दिदी' means 'Sister' in Nepali."
    },
    {
      id: 25,
      question: "What is the Nepali word for 'Friend'?",
      options: [
        { text: "साथी", audio: null },
        { text: "परिवार", audio: null },
        { text: "पडोसी", audio: null },
        { text: "सहपाठी", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'साथी' means 'Friend' in Nepali."
    }
  ],
  intermediate: [
    {
      id: 26,
      question: "What is the Nepali word for 'Excuse me'?",
      options: [
        { text: "माफ गर्नुहोस्", audio: null },
        { text: "धन्यवाद", audio: null },
        { text: "नमस्ते", audio: null },
        { text: "पानी", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'माफ गर्नुहोस्' means 'Excuse me' in Nepali."
    },
    {
      id: 27,
      question: "How do you say 'Welcome' in Nepali?",
      options: [
        { text: "स्वागत छ", audio: null },
        { text: "नमस्ते", audio: null },
        { text: "धन्यवाद", audio: null },
        { text: "पानी", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'स्वागत छ' means 'Welcome' in Nepali."
    },
    {
      id: 28,
      question: "What is the Nepali word for 'Good morning'?",
      options: [
        { text: "शुभ प्रभात", audio: null },
        { text: "शुभ दिन", audio: null },
        { text: "शुभ रात्री", audio: null },
        { text: "शुभ सन्ध्या", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'शुभ प्रभात' means 'Good morning' in Nepali."
    },
    {
      id: 29,
      question: "How do you say 'Good night' in Nepali?",
      options: [
        { text: "शुभ रात्री", audio: null },
        { text: "शुभ प्रभात", audio: null },
        { text: "शुभ दिन", audio: null },
        { text: "शुभ सन्ध्या", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'शुभ रात्री' means 'Good night' in Nepali."
    },
    {
      id: 30,
      question: "What is the Nepali word for 'How are you?'?",
      options: [
        { text: "तपाईं कसरी हुनुहुन्छ?", audio: null },
        { text: "तपाईंको नाम के हो?", audio: null },
        { text: "तपाईं कहाँ बस्नुहुन्छ?", audio: null },
        { text: "तपाईं कति वर्षको हुनुहुन्छ?", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तपाईं कसरी हुनुहुन्छ?' means 'How are you?' in Nepali."
    },
    {
      id: 31,
      question: "How do you say 'What is your name?' in Nepali?",
      options: [
        { text: "तपाईंको नाम के हो?", audio: null },
        { text: "तपाईं कसरी हुनुहुन्छ?", audio: null },
        { text: "तपाईं कहाँ बस्नुहुन्छ?", audio: null },
        { text: "तपाईं कति वर्षको हुनुहुन्छ?", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तपाईंको नाम के हो?' means 'What is your name?' in Nepali."
    },
    {
      id: 32,
      question: "What is the Nepali word for 'Where do you live?'?",
      options: [
        { text: "तपाईं कहाँ बस्नुहुन्छ?", audio: null },
        { text: "तपाईंको नाम के हो?", audio: null },
        { text: "तपाईं कसरी हुनुहुन्छ?", audio: null },
        { text: "तपाईं कति वर्षको हुनुहुन्छ?", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तपाईं कहाँ बस्नुहुन्छ?' means 'Where do you live?' in Nepali."
    },
    {
      id: 33,
      question: "How do you say 'How old are you?' in Nepali?",
      options: [
        { text: "तपाईं कति वर्षको हुनुहुन्छ?", audio: null },
        { text: "तपाईंको नाम के हो?", audio: null },
        { text: "तपाईं कसरी हुनुहुन्छ?", audio: null },
        { text: "तपाईं कहाँ बस्नुहुन्छ?", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तपाईं कति वर्षको हुनुहुन्छ?' means 'How old are you?' in Nepali."
    },
    {
      id: 34,
      question: "What is the Nepali word for 'I love you'?",
      options: [
        { text: "म तपाईंलाई माया गर्छु", audio: null },
        { text: "म तपाईंलाई मन पराउँछु", audio: null },
        { text: "म तपाईंलाई सम्झन्छु", audio: null },
        { text: "म तपाईंलाई चाहन्छु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'म तपाईंलाई माया गर्छु' means 'I love you' in Nepali."
    },
    {
      id: 35,
      question: "How do you say 'I like you' in Nepali?",
      options: [
        { text: "म तपाईंलाई मन पराउँछु", audio: null },
        { text: "म तपाईंलाई माया गर्छु", audio: null },
        { text: "म तपाईंलाई सम्झन्छु", audio: null },
        { text: "म तपाईंलाई चाहन्छु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'म तपाईंलाई मन पराउँछु' means 'I like you' in Nepali."
    },
    {
      id: 36,
      question: "What is the Nepali word for 'I am fine'?",
      options: [
        { text: "म राम्रो छु", audio: null },
        { text: "म ठिक छु", audio: null },
        { text: "म खुसी छु", audio: null },
        { text: "म स्वस्थ छु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'म राम्रो छु' means 'I am fine' in Nepali."
    },
    {
      id: 37,
      question: "How do you say 'I am happy' in Nepali?",
      options: [
        { text: "म खुसी छु", audio: null },
        { text: "म राम्रो छु", audio: null },
        { text: "म ठिक छु", audio: null },
        { text: "म स्वस्थ छु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'म खुसी छु' means 'I am happy' in Nepali."
    },
    {
      id: 38,
      question: "What is the Nepali word for 'I am healthy'?",
      options: [
        { text: "म स्वस्थ छु", audio: null },
        { text: "म राम्रो छु", audio: null },
        { text: "म ठिक छु", audio: null },
        { text: "म खुसी छु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'म स्वस्थ छु' means 'I am healthy' in Nepali."
    },
    {
      id: 39,
      question: "How do you say 'I am tired' in Nepali?",
      options: [
        { text: "म थकित छु", audio: null },
        { text: "म राम्रो छु", audio: null },
        { text: "म ठिक छु", audio: null },
        { text: "म खुसी छु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'म थकित छु' means 'I am tired' in Nepali."
    },
    {
      id: 40,
      question: "What is the Nepali word for 'I am hungry'?",
      options: [
        { text: "म भोकाएको छु", audio: null },
        { text: "म राम्रो छु", audio: null },
        { text: "म ठिक छु", audio: null },
        { text: "म खुसी छु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'म भोकाएको छु' means 'I am hungry' in Nepali."
    }
  ],
  advanced: [
    {
      id: 41,
      question: "What is the Nepali word for 'I miss you'?",
      options: [
        { text: "म तपाईंलाई सम्झन्छु", audio: null },
        { text: "म तपाईंलाई माया गर्छु", audio: null },
        { text: "म तपाईंलाई मन पराउँछु", audio: null },
        { text: "म तपाईंलाई चाहन्छु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'म तपाईंलाई सम्झन्छु' means 'I miss you' in Nepali."
    },
    {
      id: 42,
      question: "How do you say 'I need you' in Nepali?",
      options: [
        { text: "म तपाईंलाई चाहन्छु", audio: null },
        { text: "म तपाईंलाई माया गर्छु", audio: null },
        { text: "म तपाईंलाई मन पराउँछु", audio: null },
        { text: "म तपाईंलाई सम्झन्छु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'म तपाईंलाई चाहन्छु' means 'I need you' in Nepali."
    },
    {
      id: 43,
      question: "What is the Nepali word for 'How is your day?'?",
      options: [
        { text: "तपाईंको दिन कसरी छ?", audio: null },
        { text: "तपाईं कसरी हुनुहुन्छ?", audio: null },
        { text: "तपाईंको स्वास्थ्य कसरी छ?", audio: null },
        { text: "तपाईंको काम कसरी छ?", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तपाईंको दिन कसरी छ?' means 'How is your day?' in Nepali."
    },
    {
      id: 44,
      question: "How do you say 'How is your health?' in Nepali?",
      options: [
        { text: "तपाईंको स्वास्थ्य कसरी छ?", audio: null },
        { text: "तपाईंको दिन कसरी छ?", audio: null },
        { text: "तपाईं कसरी हुनुहुन्छ?", audio: null },
        { text: "तपाईंको काम कसरी छ?", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तपाईंको स्वास्थ्य कसरी छ?' means 'How is your health?' in Nepali."
    },
    {
      id: 45,
      question: "What is the Nepali word for 'How is your work?'?",
      options: [
        { text: "तपाईंको काम कसरी छ?", audio: null },
        { text: "तपाईंको दिन कसरी छ?", audio: null },
        { text: "तपाईंको स्वास्थ्य कसरी छ?", audio: null },
        { text: "तपाईं कसरी हुनुहुन्छ?", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तपाईंको काम कसरी छ?' means 'How is your work?' in Nepali."
    },
    {
      id: 46,
      question: "How do you say 'What do you do?' in Nepali?",
      options: [
        { text: "तपाईं के गर्नुहुन्छ?", audio: null },
        { text: "तपाईं कहाँ काम गर्नुहुन्छ?", audio: null },
        { text: "तपाईंको पेशा के हो?", audio: null },
        { text: "तपाईं कति कमाउनुहुन्छ?", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तपाईं के गर्नुहुन्छ?' means 'What do you do?' in Nepali."
    },
    {
      id: 47,
      question: "What is the Nepali word for 'Where do you work?'?",
      options: [
        { text: "तपाईं कहाँ काम गर्नुहुन्छ?", audio: null },
        { text: "तपाईं के गर्नुहुन्छ?", audio: null },
        { text: "तपाईंको पेशा के हो?", audio: null },
        { text: "तपाईं कति कमाउनुहुन्छ?", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तपाईं कहाँ काम गर्नुहुन्छ?' means 'Where do you work?' in Nepali."
    },
    {
      id: 48,
      question: "How do you say 'What is your profession?' in Nepali?",
      options: [
        { text: "तपाईंको पेशा के हो?", audio: null },
        { text: "तपाईं के गर्नुहुन्छ?", audio: null },
        { text: "तपाईं कहाँ काम गर्नुहुन्छ?", audio: null },
        { text: "तपाईं कति कमाउनुहुन्छ?", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तपाईंको पेशा के हो?' means 'What is your profession?' in Nepali."
    },
    {
      id: 49,
      question: "What is the Nepali word for 'How much do you earn?'?",
      options: [
        { text: "तपाईं कति कमाउनुहुन्छ?", audio: null },
        { text: "तपाईं के गर्नुहुन्छ?", audio: null },
        { text: "तपाईं कहाँ काम गर्नुहुन्छ?", audio: null },
        { text: "तपाईंको पेशा के हो?", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'तपाईं कति कमाउनुहुन्छ?' means 'How much do you earn?' in Nepali."
    },
    {
      id: 50,
      question: "How do you say 'I understand' in Nepali?",
      options: [
        { text: "म बुझ्छु", audio: null },
        { text: "म जान्छु", audio: null },
        { text: "म सिक्छु", audio: null },
        { text: "म सोच्छु", audio: null }
      ],
      correctAnswer: 0,
      explanation: "'म बुझ्छु' means 'I understand' in Nepali."
    }
  ]
};

// Get today's date for daily quiz
export const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0]; // YYYY-MM-DD format
};

// Get daily quiz from backend
export const getDailyQuiz = async (difficulty = 'beginner') => {
  const res = await fetch(`http://localhost:5000/api/quiz?difficulty=${difficulty}`);
  if (!res.ok) throw new Error('Failed to fetch quiz');
  return await res.json();
};

// Shuffle array with seed for consistent daily results
function shuffleArray(array, seed) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor((seed + i) % (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Audio utility functions - use text-to-speech for Nepali words
export const playAudio = (audioUrl, nepaliText) => {
  if (nepaliText) {
    // Use text-to-speech for Nepali words
    speakText(nepaliText);
  } else if (audioUrl) {
    const audio = new Audio(audioUrl);
    audio.play().catch(error => {
      console.log('Audio playback failed:', error);
    });
  }
};

// Text-to-speech for Nepali words
export const speakText = (text) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ne-NP'; // Nepali language
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  }
};

// Calculate quiz score and performance
export const calculateScore = (answers, questions) => {
  let correct = 0;
  const results = questions.map((question, index) => {
    const isCorrect = answers[index] === question.correctAnswer;
    if (isCorrect) correct++;
    return {
      question: question.question,
      userAnswer: answers[index],
      correctAnswer: question.correctAnswer,
      isCorrect,
      explanation: question.explanation
    };
  });
  
  const percentage = Math.round((correct / questions.length) * 100);
  
  return {
    score: correct,
    total: questions.length,
    percentage,
    results
  };
};

// For demo, getQuizHistory will just return an empty array or you can implement a backend endpoint if needed
export const getQuizHistory = async () => {
  // Not implemented in backend, return []
  return [];
};

// Save quiz result to backend
export const saveQuizResult = async (result) => {
  const res = await fetch('http://localhost:5000/api/quiz/result', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  });
  if (!res.ok) throw new Error('Failed to save quiz result');
  return await res.json();
};
