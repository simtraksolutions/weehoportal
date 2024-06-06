import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-md mx-auto p-4">
      <Head>
        <title>Corporate Party event</title>
      </Head>

      <div className="event-logo mb-4">
        <img src="images/Weeho.png" alt="Event Logo" className="w-36 sm:w-32" />
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 p-2 rounded-lg shadow-md mb-4">
        <img className="w-full object-cover" src="images/corporateparty.png" alt="Corporate Party Image" />
        <h1 className="text-2xl font-bold mt-4">Corporate Party</h1>
        <p>Weeho is welcoming you to the Corporate Party</p><br />

        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-sm">Elevate your corporate gatherings with our virtual Corporate Party! Join us for an exclusive online event that blends professional networking with a touch of entertainment and relaxation. Enjoy engaging discussions, team-building activities, and perhaps even a few surprises. It's the perfect opportunity to celebrate your team's hard work and strengthen professional relationships, all from the convenience of your screen. Join us for an unforgettable virtual corporate experience!</p>
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
