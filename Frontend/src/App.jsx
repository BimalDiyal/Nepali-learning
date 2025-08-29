import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AuthHeader from './components/AuthHeader';
import DifficultySelector from './components/DifficultySelector';
import LessonCard from './components/LessonCard';
import QuizQuestion from './components/QuizQuestion';
import QuizResults from './components/QuizResults';

import Home from './pages/Home';
import Payment from './pages/Payment';
import Lessons from './pages/Lessons';
import Quiz from './pages/Quiz';
import About from './pages/About';
import Contact from './pages/Contact';
import Price from './pages/Price';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import Affiliate from './pages/Affiliate';
import LiveClasses from './pages/LiveClasses';
import Culture from './pages/Culture';
import Grammar from './pages/Grammar';
import Learning from './pages/Learning';
import Live from './pages/Live';
import Scholarship from './pages/Scholarship';
import Vocabulary from './pages/Vocabulary';
import PageNotFound from './pages/PageNotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Products from './pages/Products';
import Refund from './pages/Refund';
import DemoCourses from './pages/DemoCourses';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/authHeader" element={<AuthHeader />} />
        <Route path="/difficultySelector" element={<DifficultySelector />} />
        <Route path="/quizQuestion" element={<QuizQuestion />} />
        <Route path="/lessonCard" element={<LessonCard />} />
        <Route path="/quizResults" element={<QuizResults />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/liveClasses" element={<LiveClasses />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/live" element={<Live />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/products" element={<Products />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/demo-courses" element={<DemoCourses />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
