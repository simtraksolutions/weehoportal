import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-md mx-auto p-4">
      <Head>
        <title>Birthday Party event</title>
      </Head>

      <div className="event-logo mb-4">
        <img src="images/Weeho.png" alt="Event Logo" className="w-36 sm:w-32" />
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 p-2 rounded-lg shadow-md mb-4">
        <img className="w-full object-cover" src="images/djsetup1.jpg" alt="Birthday Party Image" />
        <h1 className="text-2xl font-bold mt-4">Birthday Party</h1>
        <p>Weeho is welcoming you to the birthday party</p><br />

        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-sm">Join us for a fantastic birthday celebration that promises to be a day filled with joy, laughter, and unforgettable memories. Our dedicated team of event planners is here to ensure that your special day is nothing short of extraordinary. Whether you're planning a surprise party for a loved one or organizing your own birthday bash, we've got you covered.</p>
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
