import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-md mx-auto p-4">
      <Head>
        <title>Friends Party event</title>
      </Head>

      <div className="event-logo mb-4">
        <img src="images/Weeho.png" alt="Event Logo" className="w-36 sm:w-32" />
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 p-2 rounded-lg shadow-md mb-4">
        <img className="w-full object-cover" src="images/friends.jpeg" alt="Friends Party Image" />
        <h1 className="text-2xl font-bold mt-4">Friends Party</h1>
        <p>Weeho is welcoming you to the friends party</p><br />

        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-sm">Get ready to bring the party to your screens! Join us for a virtual Friends Party where the laughter never stops, and the good times keep rolling. Whether you're catching up with old pals or making new ones, this online gathering is all about fun, games, and unforgettable moments. Let's celebrate the joy of friendship from the comfort of your own home. Get your virtual party hats on and come join us for a night you won't want to miss!</p>
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
