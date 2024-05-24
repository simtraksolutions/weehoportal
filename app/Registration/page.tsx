"use client"
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/signup",
        {
          name,
          phone,
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      router.push("/login");
    } catch (error) {
      alert((error as any).response.data.error || "Registration error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-100 rounded-lg shadow">
        <div className="flex justify-center">
          <Image src="/images/Weeho.png" alt="Logo" width={130} height={50} />
        </div>
        <form onSubmit={handleSubmit} method="post" className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Signup</h2>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/user.png" alt="" width={24} height={24} />
            <input type="text" name="name" id="name" placeholder="Name" className="flex-1 bg-transparent outline-none px-2" 
              value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/telephone.png" alt="" width={24} height={24} />
            <input type="tel" name="phone" id="phone" placeholder="Phone number" className="flex-1 bg-transparent outline-none px-2" 
              value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/email.png" alt="" width={24} height={24} />
            <input type="email" name="email" id="email" placeholder="Email" className="flex-1 bg-transparent outline-none px-2" 
              value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/padlock.png" alt="" width={24} height={24} />
            <input type="password" name="password" id="password" placeholder="Password" className="flex-1 bg-transparent outline-none px-2" 
              value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/padlock.png" alt="" width={24} height={24} />
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="flex-1 bg-transparent outline-none px-2" 
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 rounded-full">Sign up</button>
          <p className="text-center">Already have an account? <Link legacyBehavior href="/login"><a className="text-blue-500">Log in here</a></Link></p>
        </form>
      </div>
    </div>
  );
}