import Image from "next/image";
import Link from "next/link";

const EventPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-4 rounded-lg shadow">
        <div className="flex justify-center">
          <Image src="/images/Weeho.png" alt="Logo" width={130} height={50} />
        </div>
        <h2 className="text-3xl font-bold text-center mb-4">
          Categories Of Events
        </h2>
        <div className="flex flex-col space-y-4">
          <Link href="/birthdayparty">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              {/* <Image
                src="/images/birthday.png"
                alt="Birthday Party"
                width={24}
                height={24}
              /> */}
              <span className="ml-2">Birthday Party</span>
            </div>
          </Link>
          <Link href="/corporatecelebration">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              {/* <Image
                src="/images/coorporate-celebration.png"
                alt="Corporate Celebration"
                width={24}
                height={24}
              /> */}
              <span className="ml-2">Corporate Celebration</span>
            </div>
          </Link>
          <Link href="/corporateparty">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              {/* <Image
                src="/images/coorporate-party.png"
                alt="Corporate Party"
                width={24}
                height={24}
              /> */}
              <span className="ml-2">Corporate Party</span>
            </div>
          </Link>
          <Link href="/familygettogether">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              {/* <Image
                src="/images/family-gettogether.png"
                alt="Family Gettogether"
                width={24}
                height={24}
              /> */}
              <span className="ml-2">Family Gettogether</span>
            </div>
          </Link>
          <Link href="/friendsparty">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              {/* <Image
                src="/images/friends-party.png"
                alt="Friends Party"
                width={24}
                height={24}
              /> */}
              <span className="ml-2">Friends Party</span>
            </div>
          </Link>
          <Link href="/MICEevent">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              {/* <Image
                src="/images/mice-event.png"
                alt="MICE Event"
                width={24}
                height={24}
              /> */}
              <span className="ml-2">MICE Event</span>
            </div>
          </Link>
          <Link href="/personalceremony">
            <div className="bg-gray-100 flex items-center px-3 py-2 rounded">
              {/* <Image
                src="/images/personal-ceremony.png"
                alt="Personal Ceremony"
                width={24}
                height={24}
              /> */}
              <span className="ml-2">Personal Ceremony</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
