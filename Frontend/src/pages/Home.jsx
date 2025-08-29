import { useNavigate } from "react-router-dom";
import { BookOpen, Briefcase, DollarSign, Video, ArrowRight, Volume2, MessageCircle } from "lucide-react";
import { useState } from "react";

const audioMap = {
  "नमस्कार, नमस्ते": "/audio/hello.mp3",
  "शुभ प्रभात, नमस्कार, नमस्ते": "/audio/good-morning.mp3",
  "शुभ दिन, नमस्कार, नमस्ते": "/audio/hello-sg-pl.mp3",
  "शुभ साँझ, नमस्कार, नमस्ते": "/audio/good-evening.mp3",
  "शुभ रात्रि": "/audio/good-night.mp3",
  "बिदा हो, नमस्कार": "/audio/bye.mp3",
  "फेरि भेटौँला, नमस्कार": "/audio/goodbye.mp3",
  "हो, हुन्छ": "/audio/yes.mp3",
  "होइन, हुँदैन": "/audio/no.mp3",
  "शायद, सम्भवत:": "/audio/maybe.mp3",
  "हुन्छ, ठीक छ": "/audio/ok.mp3",
  "धन्यवाद": "/audio/thank-you.mp3",
  "केही छैन": "/audio/youre-welcome.mp3",
  "क्षमा गर्नुहोला, क्षमा पाउ": "/audio/excuse-me.mp3",
  "क्षमा गर्नुहोला, दुःख लाग्यो": "/audio/sorry.mp3",
  "मसँग … छ / मसँग … छैन": "/audio/i-have.mp3",
  "हामीसँग … छ / हामीसँग … छैन": "/audio/we-have.mp3",
  "… केहि छ / … केहि पनि छैन": "/audio/there-is.mp3",
  "मेरो नाम … हो ।": "/audio/my-name-is.mp3",
  "म … आएको हुँ ।": "/audio/im-from.mp3",
  "म … बर्षको भए ।": "/audio/im-years-old.mp3",
  "मेरो विवाह भएको छ / मेरो विवाह भएको छैन।": "/audio/married.mp3",
  "म एक्लै यात्रा गर्छु / म एक्लै यात्रा गर्दिन।": "/audio/traveling-alone.mp3",
  "म … बाट यात्रा गर्छु": "/audio/traveling-with.mp3",
  "यो मैले बुझ्न सकिन।": "/audio/i-dont-understand.mp3",
  "तपाईं … बोल्नुहुन्छ": "/audio/do-you-speak.mp3",
  "यहाँ कोही … बोल्छ": "/audio/anyone-speak.mp3",
  "अंग्रेजी": "/audio/english.mp3",
  "फ्रेन्च": "/audio/french.mp3",
  "कृपया त्यो लेख्नुहोस् ।": "/audio/write-it.mp3",
  "कृपया एक पल्ट दोर्याउनहोस्।": "/audio/repeat-it.mp3",
  "कृपया एकै छिन …": "/audio/just-a-moment.mp3",
  "शुन्य (०)": "/audio/zero.mp3",
  "एक (१)": "/audio/one.mp3",
  "दुई (२)": "/audio/two.mp3"
};

const content = {
  part1: [
    { english: "Hello!", nepali: "नमस्कार, नमस्ते", romanized: "namaskar, namaste" },
    { english: "Good morning! (sg/pl)", nepali: "शुभ प्रभात, नमस्कार, नमस्ते", romanized: "shuva pravat, namaskar, namaste" },
    { english: "Hello! (sg/pl)", nepali: "शुभ दिन, नमस्कार, नमस्ते", romanized: "shuva diin, namaskar, namaste" },
    { english: "Good evening! (sg/pl)", nepali: "शुभ साँझ, नमस्कार, नमस्ते", romanized: "shuva saanjh, namaskar, namaste" },
    { english: "Good night! (sg/pl)", nepali: "शुभ रात्रि", romanized: "shuva ratri" },
    { english: "Bye! (infml)", nepali: "बिदा हो, नमस्कार", romanized: "bidaa hau, namaskar" },
    { english: "Good bye! (fml.)", nepali: "फेरि भेटौँला, नमस्कार", romanized: "pheri bhetau̇la, namaskar" },
  ],
  part2: [
    { english: "Yes", nepali: "हो, हुन्छ", romanized: "ho, hunchha" },
    { english: "No", nepali: "होइन, हुँदैन", romanized: "hoina, hudaina" },
    { english: "Maybe", nepali: "शायद, सम्भवत:", romanized: "saayad, sambhawata" },
    { english: "OK", nepali: "हुन्छ, ठीक छ", romanized: "hunchha, thik chha" },
    { english: "Thank you!", nepali: "धन्यवाद", romanized: "dhanyabaad" },
    { english: "You're welcome! (m/f)", nepali: "केही छैन", romanized: "kehi chhaina" },
    { english: "Excuse me, … (sg/pl)", nepali: "क्षमा गर्नुहोला, क्षमा पाउ", romanized: "kshama garnuhola, kshama pau" },
  ],
  part3: [
    { english: "I'm sorry. (m/f)", nepali: "क्षमा गर्नुहोला, दुःख लाग्यो", romanized: "kshama garnuhola, dukha" },
    { english: "I have … / I don't have …", nepali: "मसँग … छ / मसँग … छैन", romanized: "ma sanga … chha / ma sanga … chhaina" },
    { english: "We have … / We don't have …", nepali: "हामीसँग … छ / हामीसँग … छैन", romanized: "haami sanga … chha / haami sanga … chhaina" },
    { english: "There is (no) …", nepali: "… केहि छ / … केहि पनि छैन", romanized: "… kehi chha / … kehi pani chhaina" },
    { english: "My name is …", nepali: "मेरो नाम … हो ।", romanized: "mero naam … ho." },
    { english: "I'm from …", nepali: "म … आएको हुँ ।", romanized: "ma … aaeko hu." },
    { english: "I'm … years old.", nepali: "म … बर्षको भए ।", romanized: "ma … barsa ko bhae" },
  ],
  part4: [
    { english: "I am married. / I am not married.", nepali: "मेरो विवाह भएको छ / मेरो विवाह भएको छैन।", romanized: "mero bibaha bhayeko chha / mero bibaha bhayeko chhaina" },
    { english: "I am traveling alone. / I am not traveling alone. (m/f)", nepali: "म एक्लै यात्रा गर्छु / म एक्लै यात्रा गर्दिन।", romanized: "ma eklai yatra garchhu / ma eklai yatra gardina" },
    { english: "I'm traveling with …", nepali: "म … बाट यात्रा गर्छु", romanized: "ma … bata garchhu" },
    { english: "I don't understand that. (m/f)", nepali: "यो मैले बुझ्न सकिन।", romanized: "yo maile bujhna sakina" },
    { english: "Do you speak …? (m/f)", nepali: "तपाईं … बोल्नुहुन्छ", romanized: "tapaai … bolnuhunchha" },
    { english: "Does anyone here speak …?", nepali: "यहाँ कोही … बोल्छ", romanized: "yaha kohi … bolchha" },
    { english: "English", nepali: "अंग्रेजी", romanized: "english" },
  ],
  part5: [
    { english: "French", nepali: "फ्रेन्च", romanized: "french" },
    { english: "Could you write that down please. (m/f)", nepali: "कृपया त्यो लेख्नुहोस् ।", romanized: "kripaya tyo lekhnuhos" },
    { english: "Could you please repeat that. (m/f)", nepali: "कृपया एक पल्ट दोर्याउनहोस्।", romanized: "kripaya ek palta dorryaaanuhos" },
    { english: "Just a moment please.", nepali: "कृपया एकै छिन …", romanized: "kripaya ekai chhinn …" },
    { english: "zero", nepali: "शुन्य (०)", romanized: "shunya" },
    { english: "one", nepali: "एक (१)", romanized: "ek" },
    { english: "two", nepali: "दुई (२)", romanized: "dui" },
  ]
};

const items = [
  {
    icon: <BookOpen className="text-orange-500 w-10 h-10" />,
    title: "Nepali Learn Language Blog",
    desc: "Dive deeper into the world of languages with our blog. Packed with language tips, cultural tidbits, and language app reviews, our blog aims to complement your learning journey.",
    link: "/blog",
  },
  {
    icon: <Briefcase className="text-orange-500 w-10 h-10" />,
    title: "Nepali Learn Live",
    desc: "Experience the power of personalized learning with our one-on-one Nepali tutoring sessions. No matter what your language goals are, our tutors are here to help.",
    link: "/live",
  },
  {
    icon: <DollarSign className="text-orange-500 w-10 h-10" />,
    title: "Nepali Learn Scholarship",
    desc: "Are you a student planning on studying abroad? Don't miss your chance to win $1,000 and a free lifetime membership to Nepali Learn.",
    link: "/scholarship",
  },
  {
    icon: <Video className="text-orange-500 w-10 h-10" />,
    title: "Nepali Affiliate Program",
    desc: "Become part of our affiliate program, where your love for Nepali Learn can turn into exciting rewards.",
    link: "/affiliate",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("part1");
  const playAudio = (text) => {
    const audioSrc = audioMap[text];
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    } else {
      alert(`No audio file found for: "${text}"`);
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-[550px] text-white" style={{ backgroundImage: "url('https://www.collegenp.com/uploads/2023/10/Traditional-Dances,-Music,-and-Arts-in-Nepal.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Master Nepali, Connect with Culture</h1>
          <p className="max-w-2xl text-lg md:text-2xl text-gray-100 mb-8 drop-shadow">
            Learn Nepali with interactive lessons, games, and real-life practice. Start your journey to fluency and cultural connection today!
          </p>
          <a href="/lessons" className="border-2 border-white text-white hover:bg-white hover:text-[#133251] font-bold px-8 py-3 rounded-full transition-colors">
            Start Learning Now
          </a>
        </div>
      </header>

      {/* Section: Effective Way */}
      <section className="bg-white py-16 px-6">
        <h1 className="text-5xl font-bold text-center mb-16 text-[#1c1b1a] leading-tight">
          The effective way to learn a <br /> language online
        </h1>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://hotlanguage.com/wp-content/uploads/2023/12/nepali.png.webp"
            alt="People talking"
            className="w-full h-[500px] object-cover rounded-xl shadow-md"
          />
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-[#1c1b1a]">Learn to speak a new language with confidence</h2>
            <p className="text-gray-700 text-lg">
              With NP, you'll learn practical and useful skills that you can apply right away — so you can reach your goal of having real-life conversations faster.
            </p>
            <p className="text-gray-700 text-lg">
              Our platform combines proven teaching methods with interactive technology, making language learning not just effective, but enjoyable. You'll practice real conversations, listen to native speakers, and get instant feedback. Whether you're a complete beginner or looking to polish your skills, our step-by-step approach ensures you build a strong foundation and progress with confidence.
            </p>
            <p className="text-gray-700 text-lg">
              We focus on what matters most: speaking, listening, and understanding Nepali in real-life situations. Our lessons are designed to be short, engaging, and practical, so you can fit learning into your busy schedule and see results quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Learn at Your Pace */}
      <section className="bg-[#fefcf9] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-semibold text-[#1c1b1a] mb-6">Learn at your own pace</h2>
            <p className="text-gray-800 text-lg mb-4">
              Achieve your goals with course material that's tailored to your proficiency level, interests, and time commitment.
            </p>
            <p className="text-gray-800 text-lg mb-4">
              Life is busy, and everyone learns differently. That's why we let you set your own pace. Whether you want to study for five minutes a day or dive in for an hour, you're in control. Our platform tracks your progress, celebrates your milestones, and adapts to your needs, so you always feel motivated and supported.
            </p>
            <p className="text-gray-800 text-lg mb-8">
              You can revisit lessons anytime, practice with quizzes, and review vocabulary as often as you like. With flexible learning paths and bite-sized content, mastering Nepali fits perfectly into your lifestyle.
            </p>
          </div>
          <img
            src="https://talkpal.ai/wp-content/uploads/2024/05/Talkpal-Illustration-for-Vocabulary244.png"
            alt="Learning app"
            className="rounded-xl shadow-lg w-full h-[400px]"
          />
        </div>
      </section>

      {/* Section: Develop Skills */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://www.tesolcourse.com/images/ai/DALL%C2%B7E%202024-07-05%2014.58.26%20-%20A%20joyful%20classroom%20scene%20with%20young%20TEFL_TESOL%20students%20being%20taught%20by%20a%20young%20adult%20teacher,%20set%20in%20a%20South%20American%20country.%20The%20students.webp"
              alt="Woman learning on phone"
              className="rounded-xl shadow-lg w-full h-[500px]"
            />
            <div className="absolute bottom-4 left-4 flex gap-4">
              <div className="bg-[#fca77e] text-black px-4 py-2 rounded-md grid items-center gap-2">
                <span>✏️</span><span className="font-medium">Writing</span>
              </div>
              <div className="bg-[#ffe36e] text-black px-4 py-2 rounded-md grid items-center gap-2">
                <span>🔊</span><span className="font-medium">Listening</span>
              </div>
              <div className="bg-[#6c3ab2] text-white px-4 py-2 rounded-md grid items-center gap-2">
                <span>🎤</span><span className="font-medium">Speaking</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-semibold text-[#1c1b1a] mb-6">Develop your language skills</h2>
            <p className="text-gray-800 text-lg mb-4">
              Sharpen your pronunciation, build conversation skills, and explore culture bites with our interactive lessons.
            </p>
            <p className="text-gray-800 text-lg mb-4">
              Our courses go beyond memorizing words. You'll practice speaking, listening, reading, and writing in Nepali, with real-world scenarios and cultural insights. Each lesson is crafted to help you communicate naturally and confidently, whether you're traveling, working, or connecting with friends and family.
            </p>
            <p className="text-gray-800 text-lg mb-8">
              With audio from native speakers, instant feedback, and fun practice activities, you'll develop all the skills you need to thrive in Nepali conversations. Discover the joy of learning a new language and open the door to new opportunities and friendships.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Additional Offers */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-black text-center">Love Learn Nepali? Here's more!</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="space-y-4 bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all">
              {item.icon}
              <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
              <button
                onClick={() => navigate(item.link)}
                className="text-black hover:text-orange-500 mt-1"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* The most important words in Nepali: (PRESERVED SECTION) */}
      <div className="text-center px-4 py-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">
          The most important words in Nepali:
        </h2>
        <div className="flex justify-center space-x-4 mb-6">
          {[1, 2, 3, 4, 5].map((part) => (
            <button
              key={part}
              className={`border px-4 py-1 rounded-md  ${activeTab === `part${part}` ? "bg-blue-200 font-semibold" : "hover:bg-blue-100"
                }`}
              onClick={() => setActiveTab(`part${part}`)}
            >
              Part {part}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mb-6 ">
          <span className="text-3xl">English</span>
          <span className="text-3xl">Nepali</span>
        </div>
        <div className="space-y-4 ">
          {content[activeTab].map((item, index) => (
            <div key={index} className="flex items-start md:items-center pb-4 ">
              <button onClick={() => playAudio(item.english)} className="mr-4 mt-1 text-blue-700" title="Play">
                <Volume2 />
              </button>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div>{item.english}</div>
                <div className="font-medium">{item.nepali}</div>
                <div className=" text-gray-700">{item.romanized}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-[#133251] to-cyan-600 rounded-lg p-8 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Have questions about learning Nepali? We're here to help you on your language learning journey.
          </p>
         <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-[#133251] font-bold px-8 py-3 rounded-full transition-colors">
              Contact Us
            </a>
        </div>
      </section>
    </div>
  );
};

export default Home;