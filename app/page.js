import Link from 'next/link';

export default function Home() {
  return (
    <div className="container min-h-screen py-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-primary">Welcome to Jokes App</h1>
        <Link 
          href="/joke" 
          className="px-6 py-3 rounded-lg bg-primary text-black hover:bg-secondary transition-colors"
        >
          Get a Joke
        </Link>
      </div>
    </div>
  );
}
