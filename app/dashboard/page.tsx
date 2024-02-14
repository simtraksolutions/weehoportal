import Image from 'next/image';

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="logo-container">
          <div className="logo">
            <Image src="/images/Weeho.png" alt="Logo" width={130} height={40} />
          </div>
        </div>
        <div className="hero-heading bg-cover bg-center text-white py-20">
          <h1 className="text-4xl text-black flex justify-center ">Dashboard</h1>
        </div>
        <div className="flex justify-center gap-8"> {/* Added gap between items */}
          <div className="section flex flex-col items-center"> {/* Added flex and items-center */}
            <a href="bookanevent.html">
              <div className="box">
                <Image src="/images/bookanevent.jpeg" alt="bookanevent Icon" width={120} height={120} className="section-icon" />
                <h3>Book an event</h3>
              </div>
            </a>
          </div>
          <div className="section flex flex-col items-center"> {/* Added flex and items-center */}
            <a href="performers.html">
              <div className="box">
                <Image src="/images/performers.jpeg" alt="performers Icon" width={120} height={130} className="section-icon" />
                <h3 className='flex justify-center'>Performers</h3>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-4"> {/* Adjusted margin top */}
          <div className="section flex flex-col items-center"> {/* Added flex and items-center */}
            <a href="history.html">
              <div className="box">
                <Image src="/images/history.jpeg" alt="history Icon" width={120} height={130} className="section-icon" />
                <h3>History</h3>
              </div>
            </a>
          </div>
          <div className="section flex flex-col items-center"> {/* Added flex and items-center */}
            <a href="contactus.html">
              <div className="box">
                <Image src="/images/contactus.jpeg" alt="contactus Icon" width={120} height={130} className="section-icon" />
                <h3 className='flex justify-center'>Contact us</h3>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-4"> {/* Adjusted margin top */}
          <div className="section flex flex-col items-center"> {/* Added flex and items-center */}
            <a href="login.html">
              <div className="box">
                <Image src="/images/logout.jpeg" alt="Logout Icon" width={120} height={130} className="section-icon" />
                <h3 className='flex justify-center'>Logout</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
