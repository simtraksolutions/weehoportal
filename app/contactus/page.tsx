"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from "axios";

export default function BookaneventPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    if (!token) {
      alert("Please log in first.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/contactus",
        {
          name,
          phone,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Message sent successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert((error as any).response?.data?.error || "Failed to send message.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-100 rounded-lg shadow">
        <div className="flex justify-center">
          <Image src="/images/Weeho.png" alt="Logo" width={130} height={50} />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-3xl font-bold text-center">Fill the form</h2>
          <h2 className="text-md text-center">Please enter below details</h2>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/user.png" alt="" width={24} height={24} />
            <input type="text" name="name" id="name" placeholder="Name" className="flex-1 bg-transparent outline-none px-2" />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/telephone.png" alt="" width={24} height={24} />
            <input type="tel" name="phone" id="phone" placeholder="Phone number" className="flex-1 bg-transparent outline-none px-2"
            value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/email.png" alt="" width={24} height={24} />
            <input type="email" name="email" id="email" placeholder="Email" className="flex-1 bg-transparent outline-none px-2"
            value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/schedule.png" alt="" width={24} height={24} />
            <input type="text" name="message" id="message" placeholder="Message" className="flex-1 bg-transparent outline-none px-2"
            value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 rounded-full">SUBMIT</button>
        </form>
        
        {/* Contact us section */}
        <div className="text-center">
          <p className="text-lg font-bold">Contact us</p>
          <p className="text-xl">+91 9883585647</p>
          <p className="text-xl">contact@weeho.in</p>
        </div>
      </div>
    </div>
  );
}
