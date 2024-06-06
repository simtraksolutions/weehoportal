import Image from "next/image";
import Link from "next/link";

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
          <h1 className="text-4xl text-black flex justify-center ">
            Dashboard
          </h1>
        </div>
        <div className="flex justify-center gap-8">
          {" "}
          <div className="section flex flex-col items-center">
            {" "}
            <Link href="/performer_profile">
              <div className="box">
                <Image
                  src="/images/performers.jpeg"
                  alt="Profile Icon"
                  width={120}
                  height={130}
                  className="section-icon"
                />
                <h3 className="flex justify-center">Profile</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {" "}
          <div className="section flex flex-col items-center">
            {" "}
            <Link href="/performer_history">
              <div className="box">
                <Image
                  src="/images/history.jpeg"
                  alt="history Icon"
                  width={120}
                  height={130}
                  className="section-icon"
                />
                <h3>History</h3>
              </div>
            </Link>
          </div>
          <div className="section flex flex-col items-center">
            {" "}
            <Link href="/contactus">
              <div className="box">
                <Image
                  src="/images/contactus.jpeg"
                  alt="contactus Icon"
                  width={120}
                  height={130}
                  className="section-icon"
                />
                <h3 className="flex justify-center">Contact us</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {" "}
          <div className="section flex flex-col items-center">
            {" "}
            <Link href="/performer_logout">
              <div className="box">
                <Image
                  src="/images/logout.jpeg"
                  alt="Logout Icon"
                  width={120}
                  height={130}
                  className="section-icon"
                />
                <h3 className="flex justify-center">Logout</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
