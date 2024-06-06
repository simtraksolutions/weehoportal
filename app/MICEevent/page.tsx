import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen-md mx-auto p-4">
      <Head>
        <title>MICE event</title>
      </Head>

      <div className="event-logo mb-4">
        <img src="images/Weeho.png" alt="Event Logo" className="w-36 sm:w-32" />
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 p-2 rounded-lg shadow-md mb-4">
        <img className="w-full object-cover" src="images/miceevent.jpg" alt="MICE event Image" />
        <h1 className="text-2xl font-bold mt-4">MICE event</h1>
        <p>Weeho is welcoming you to the MICE event</p><br />

        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-sm">MICE events serve as dynamic platforms for businesses to connect, strategize, and showcase their innovations. These multifaceted gatherings intertwine meetings, incentives, conferencing, and exhibitions to foster collaboration and drive growth. By combining diverse elements, MICE events cultivate a vibrant environment where ideas flourish, relationships deepen, and opportunities abound. Whether it's networking sessions, incentive programs, informative conferences, or captivating exhibitions, MICE events cater to the multifaceted needs of modern enterprises, igniting creativity and propelling progress.</p>
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
