import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-md mx-auto p-4">
      <Head>
        <title>Family get-together event</title>
      </Head>

      <div className="event-logo mb-4">
        <img src="images/Weeho.png" alt="Event Logo" className="w-36 sm:w-32" />
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 p-2 rounded-lg shadow-md mb-4">
        <img className="w-full object-cover" src="images/familygettogether.jpg" alt="Family get-together Image" />
        <h1 className="text-2xl font-bold mt-4">Family get-together</h1>
        <p>Weeho is welcoming you to the Family get-together</p><br />

        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-sm">Reconnect with your roots and create lasting memories at our Family Get-Together event. It's a time to bring generations together, share stories, and relish the warmth of family bonds. Join us for a virtual gathering that transcends distance and allows us to celebrate our shared heritage and love. Whether it's a holiday, special occasion, or simply an opportunity to catch up, this event is all about family. Come together for laughter, love, and a sense of togetherness that knows no boundaries. Your family, your story, your unforgettable moments.</p>
      </div>

      <div className="mt-2">
        <Link href="/your_booking_link">
          <button className="inline-block px-5 py-3 text-white text-sm bg-orange-500 rounded-md">Book this Event</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
