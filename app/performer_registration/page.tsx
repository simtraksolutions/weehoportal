"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function PerformerSignupPage() {
  const [performerName, setPerformerName] = useState("");
  const [performerPhone, setPerformerPhone] = useState("");
  const [performerEmail, setPerformerEmail] = useState("");
  const [performance, setPerformance] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const performanceTypes = [
    "Actor",
    "Comedian",
    "Dancer",
    "Singer",
    "Magician",
    "Musician",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/performer_registration",
        {
          performer_name: performerName,
          performer_phone: performerPhone,
          performer_email: performerEmail,
          performance,
          password,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      router.push("/performer_login");
    } catch (error) {
      console.log("registration error");
      alert((error as any).response.data.error || "Registration error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-100 rounded-lg shadow">
        <div className="flex justify-center">
          <Image src="/images/Weeho.png" alt="Logo" width={130} height={50} />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Performer Signup</h2>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/user.png" alt="" width={24} height={24} />
            <input
              type="text"
              name="performer_name"
              id="performer_name"
              placeholder="Performer Name"
              className="flex-1 bg-transparent outline-none px-2"
              value={performerName}
              onChange={(e) => setPerformerName(e.target.value)}
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/telephone.png" alt="" width={24} height={24} />
            <input
              type="tel"
              name="performer_phone"
              id="performer_phone"
              placeholder="Phone number"
              className="flex-1 bg-transparent outline-none px-2"
              value={performerPhone}
              onChange={(e) => setPerformerPhone(e.target.value)}
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/email.png" alt="" width={24} height={24} />
            <input
              type="email"
              name="performer_email"
              id="performer_email"
              placeholder="Email"
              className="flex-1 bg-transparent outline-none px-2"
              value={performerEmail}
              onChange={(e) => setPerformerEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/list.png" alt="" width={24} height={24} />
            <select
              title="select performance type"
              name="performance"
              id="performance"
              className="flex-1 bg-transparent outline-none px-2"
              value={performance}
              onChange={(e) => setPerformance(e.target.value)}
            >
              <option value="" disabled>
                Select Performance Type
              </option>
              {performanceTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/padlock.png" alt="" width={24} height={24} />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="flex-1 bg-transparent outline-none px-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/padlock.png" alt="" width={24} height={24} />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="flex-1 bg-transparent outline-none px-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 rounded-full"
          >
            Sign up
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link legacyBehavior href="/performer_login">
              <a className="text-blue-500">Log in here</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
