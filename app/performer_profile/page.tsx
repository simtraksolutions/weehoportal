"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PerformerDashboardPage() {
  const [performer, setPerformer] = useState({
    performer_name: "",
    performer_phone: "",
    performer_email: "",
    performance: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchPerformerDetails = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          alert("Please log in first.");
          router.push("/performer_login");
          return;
        }

        const performerResponse = await axios.get(
          "http://localhost:8080/performer_profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPerformer(performerResponse.data);
      } catch (error) {
        console.error("Error fetching performer details:", error);
      }
    };

    fetchPerformerDetails();
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-2xl p-8 space-y-4 bg-gray-100 rounded-lg shadow">
        <div className="flex justify-center mb-4">
          <Image src="/images/Weeho.png" alt="Logo" width={130} height={50} />
        </div>
        <h2 className="text-2xl font-bold text-center">Performer Dashboard</h2>
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="text-xl font-semibold mb-2">Profile</h3>
          <p>
            <strong>Name:</strong> {performer.performer_name}
          </p>
          <p>
            <strong>Phone:</strong> {performer.performer_phone}
          </p>
          <p>
            <strong>Email:</strong> {performer.performer_email}
          </p>
          <p>
            <strong>Performance Type:</strong> {performer.performance}
          </p>
        </div>
      </div>
    </div>
  );
}
