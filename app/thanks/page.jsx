export default function Thanks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900 text-gray-900 dark:text-white px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-500">Thanks for reaching out!</h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8">
        I've received your message and will get back to you as soon as possible. 😊
      </p>
      <a href="/" className="text-blue-600 hover:text-blue-800 underline font-medium transition">
        ← Back to homepage
      </a>
    </div>
  );
} 