const LessonCard = ({ lesson, onMarkAsLearned }) => (
  <div
    className={`border p-4 rounded shadow-sm ${
      lesson.isLearned ? "bg-green-100" : "bg-white"
    }`}
  >
    <p>
      <strong>English:</strong> {lesson.english}
    </p>
    <p>
      <strong>Nepali:</strong> {lesson.nepali}
    </p>
    <button
      className="mt-4 px-5 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
      onClick={() => onMarkAsLearned(lesson._id)}
      disabled={lesson.isLearned}
    >
      {lesson.isLearned ? "Learned" : "Mark as Learned"}
    </button>
  </div>
);

export default LessonCard;
