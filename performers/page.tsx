import Image from 'next/image';
import Link from 'next/link';

const PerformersPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-4 rounded-lg shadow">
        <div className="flex justify-center">
          <Image src="/images/Weeho.png" alt="Logo" width={130} height={50} />
        </div>
        <h2 className="text-3xl font-bold text-center mb-4">Categories Of Performers</h2>
        <div className="flex flex-col space-y-4">
          <Link href="/performers/actor">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              <Image src="/images/user.png" alt="" width={24} height={24} />
              <span className="ml-2">Actor</span>
            </div>
          </Link>
          <Link href="/performers/comedian">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              <Image src="/images/clown.png" alt="" width={24} height={24} />
              <span className="ml-2">Comedian</span>
            </div>
          </Link>
          <Link href="/performers/dancer">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              <Image src="/images/dancing.png" alt="" width={24} height={24} />
              <span className="ml-2">Dancer</span>
            </div>
          </Link>
          <Link href="/performers/singer">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              <Image src="/images/microphone.png" alt="" width={24} height={24} />
              <span className="ml-2">Singer</span>
            </div>
          </Link>
          <Link href="/performers/magician">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              <Image src="/images/magic-hat.png" alt="" width={24} height={24} />
              <span className="ml-2">Magician</span>
            </div>
          </Link>
          <Link href="/performers/musician">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              <Image src="/images/piano.png" alt="" width={24} height={24} />
              <span className="ml-2">Musician</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PerformersPage;
