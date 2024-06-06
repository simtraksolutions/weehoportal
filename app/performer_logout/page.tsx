"use client";

import { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        alert("No token found, please log in.");
        router.push("/performer_login");
        return;
      }

      try {
        await axios.get("http://localhost:8080/logout", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        localStorage.removeItem("access_token");
        alert("Logout successful");
        router.push("/performer_login");
      } catch (error) {
        alert((error as any).response?.data?.error || "Logout error");
        // router.push("/login");
      }
    };

    logoutUser();
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-orange-500 to-amber-900 text-white">
      <div className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          {/* Replace this src with your logo URL */}
          <Image src="/images/Weeho.png" alt="Logo" width={130} height={50} />
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="animate-spin h-5 w-5 text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0l4 4-4 4V4a8 8 0 11-8 8z"
            ></path>
          </svg>
          <p className="text-lg font-medium text-gray-700">Logging out...</p>
        </div>
      </div>
    </div>
  );
}
