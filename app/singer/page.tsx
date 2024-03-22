// pages/performers/singer/index.js
import Image from 'next/image';

const SingerPage = () => {
  // Define singer data
  const singers = [
    { name: 'Mandeep Singh', imageSrc: '/images/mandeep.jpg', className: 'singer1' },
    { name: 'Rupali Bhattacharjee', imageSrc: '/images/rupali.jpg', className: 'singer2' },
    { name: 'Naviin Gandharv', imageSrc: '/images/naviin.jpg', className: 'singer3' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-7xl p-8 space-y-8 w-full">
      <header className="flex justify-between items-center py-6">
          <div className="flex items-center justify-center space-x-4">
            <Image src="/images/Weeho.png" alt="Logo" width={105} height={105} className="rounded-full" />
          </div>
          <h1 className="text-3xl font-bold flex justify-center">Singers</h1>
          <div className="w-10 h-10">
            <Image src="/images/profile-icon.jpeg" alt="Profile Icon" width={40} height={40} className="rounded-full" />
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {singers.map((singer, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow p-4 flex flex-col items-center ${singer.className}`}>
              <Image src={singer.imageSrc} alt={singer.name} width={200} height={200} className="rounded-full" />
              <p className="mt-4 text-lg font-semibold">{singer.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingerPage;
