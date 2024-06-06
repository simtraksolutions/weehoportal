"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [performer_email, setPerformerEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/performer_login",
        {
          performer_email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { access_token } = response.data;
      localStorage.setItem("access_token", access_token);
      // alert("Login successful!");
      router.push("/performer_dashboard");
    } catch (error) {
      alert((error as any).response?.data?.error || "Login error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-100 rounded-lg shadow">
        <div className="flex justify-center">
          <Image src="/images/Weeho.png" alt="Logo" width={130} height={50} />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Performer Login</h2>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/email.png" alt="" width={24} height={24} />
            <input
              type="email"
              name="performer_email"
              id="performer_email"
              placeholder="Performer Email"
              className="flex-1 bg-transparent outline-none px-2"
              value={performer_email}
              onChange={(e) => setPerformerEmail(e.target.value)}
            />
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
          <div className="text-center">
            <Link href="/forgot-password">
              <span className="text-blue-500 cursor-pointer">
                Forgot password?
              </span>
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 rounded-full"
          >
            Login
          </button>
          <p className="text-center">
            {" "}
            Dont have an account?{" "}
            <Link href="/performer_registration">
              <span className="text-blue-500 cursor-pointer">Signup here</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
