"use client";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        alert("No token found, please log in.");
        router.push("/login");
        return;
      }

      try {
        await axios.get("http://localhost:8080/logout", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        localStorage.removeItem("access_token");
        alert("Logout successful");
        router.push("/login");
      } catch (error) {
        alert((error as any).response?.data?.error || "Logout error");
        router.push("/login");
      }
    };

    logoutUser();
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <p>Logging out...</p>
    </div>
  );
}
