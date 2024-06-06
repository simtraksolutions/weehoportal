import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-md mx-auto p-4">
      <Head>
        <title>Corporate Celebration event</title>
      </Head>

      <div className="event-logo mb-4">
        <img src="images/Weeho.png" alt="Event Logo" className="w-36 sm:w-32" />
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 p-2 rounded-lg shadow-md mb-4">
        <img className="w-full object-cover" src="images/corporatecelebration.jpeg" alt="Corporate Celebration Image" />
        <h1 className="text-2xl font-bold mt-4">Corporate Celebration</h1>
        <p>Weeho is welcoming you to the Corporate Celebration</p><br />

        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-sm">Get ready to celebrate success and achievements at our Corporate Celebration event. It's a time to honor milestones, hard work, and the collective effort of your team. Join us for a virtual gathering that combines professional achievements with the spirit of celebration. Recognize your company's triumphs, reward dedication, and set the stage for an exciting future. With engaging activities, inspiring speeches, and a dash of fun, it's the perfect occasion to boost team morale and create unforgettable corporate memories.</p>
      </div>

      <div className="mt-2">
        <Link href="/Bookanevent">
          <button className="inline-block px-5 py-3 text-white text-sm bg-orange-500 rounded-md">Book this Event</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
