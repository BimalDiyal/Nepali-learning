# Audio Files for Nepali Quiz Pronunciation

This directory contains audio files for the Nepali language quiz pronunciation features.

## File Structure

The audio files should follow this naming convention:

### Question Audio Files
- `namaste.mp3` - Pronunciation of "नमस्ते"
- `thankyou_question.mp3` - Question asking "How do you say 'Thank you' in Nepali?"
- `water_question.mp3` - Question asking "What is the Nepali word for 'Water'?"
- `i_like_you_question.mp3` - Question about "म तपाईंलाई मन पराउँछु"
- `how_is_your_day_question.mp3` - Question about "तपाईंको दिन कसरी छ?"

### Answer Option Audio Files
- `hello.mp3` - Pronunciation of "Hello"
- `goodbye.mp3` - Pronunciation of "Goodbye"
- `thankyou.mp3` - Pronunciation of "Thank you"
- `please.mp3` - Pronunciation of "Please"
- `dhanyabad.mp3` - Pronunciation of "धन्यवाद"
- `maaf_garne.mp3` - Pronunciation of "माफ गर्नुहोस्"
- `swagat_cha.mp3` - Pronunciation of "स्वागत छ"
- `pani.mp3` - Pronunciation of "पानी"
- `dudh.mp3` - Pronunciation of "दूध"
- `chiya.mp3` - Pronunciation of "चिया"
- `roti.mp3` - Pronunciation of "रोटी"
- `i_like_you.mp3` - Pronunciation of "I like you"
- `i_love_you.mp3` - Pronunciation of "I love you"
- `i_miss_you.mp3` - Pronunciation of "I miss you"
- `i_need_you.mp3` - Pronunciation of "I need you"
- `how_are_you.mp3` - Pronunciation of "How are you?"
- `how_is_your_day.mp3` - Pronunciation of "How is your day?"
- `what_is_your_name.mp3` - Pronunciation of "What is your name?"
- `where_are_you_from.mp3` - Pronunciation of "Where are you from?"

### Explanation Audio Files
- `namaste_explanation.mp3` - Explanation of "नमस्ते (Namaste) is a traditional greeting meaning 'Hello'"
- `dhanyabad_explanation.mp3` - Explanation of "धन्यवाद (Dhanyabad) means 'Thank you'"
- `pani_explanation.mp3` - Explanation of "पानी (Pani) means 'Water'"
- `i_like_you_explanation.mp3` - Explanation of "म तपाईंलाई मन पराउँछु (Ma tapailai man parauchhu) means 'I like you'"
- `how_is_your_day_explanation.mp3` - Explanation of "तपाईंको दिन कसरी छ? (Tapailko din kasari chha?) means 'How is your day?'"

## Audio Requirements

- **Format**: MP3
- **Quality**: 128kbps or higher
- **Duration**: Keep explanations under 10 seconds
- **Language**: Clear Nepali pronunciation with English translations where appropriate

## How to Add Audio Files

1. Record or obtain audio files with clear Nepali pronunciation
2. Name them according to the convention above
3. Place them in this directory
4. The quiz will automatically detect and use these files

## Fallback System

If audio files are not available or fail to load, the system will automatically fall back to:
1. Browser's text-to-speech (TTS) functionality
2. Display text-only content

## Testing Audio

To test if audio files are working:
1. Open the quiz page
2. Click on audio buttons next to questions and answers
3. Check browser console for any audio loading errors
4. Ensure browser allows audio playback

## Note

The quiz system is designed to work even without audio files, using text-to-speech as a fallback. However, for the best learning experience, high-quality audio files with native Nepali pronunciation are recommended. 