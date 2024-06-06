import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-md mx-auto p-4">
      <Head>
        <title>Personal Ceremony event</title>
      </Head>

      <div className="event-logo mb-4">
        <img src="images/Weeho.png" alt="Event Logo" className="w-36 sm:w-32" />
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 p-2 rounded-lg shadow-md mb-4">
        <img className="w-full object-cover" src="images/personalceremony.png" alt="Personal Ceremony Image" />
        <h1 className="text-2xl font-bold mt-4">Personal Ceremony</h1>
        <p>Weeho is welcoming you to the Personal Ceremony</p><br />

        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-sm">Embark on a journey of personal significance as we celebrate life's special moments together. Our Personal Ceremony event is a heartfelt occasion dedicated to marking life's milestones. Whether it's a birthday, anniversary, graduation, or any other personal achievement, this event is all about you. Join us for a virtual gathering filled with joy, laughter, and cherished memories. It's a time to reflect on the past, savor the present, and embrace the future with your loved ones by your side. Let's make your personal moments truly unforgettable!</p>
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
