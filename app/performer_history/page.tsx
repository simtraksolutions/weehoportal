"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PerformerDashboardPage() {
  const [events, setEvents] = useState([]);
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
        const eventsResponse = await axios.get(
          "http://localhost:8080/performer_history",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEvents(eventsResponse.data);
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
        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Your Booked Events</h3>
          {events.length === 0 ? (
            <p>No events booked.</p>
          ) : (
            <ul className="space-y-2">
              {events.map((event: any, index: number) => (
                <li key={index} className="border-b border-gray-300 pb-2">
                  {/* <p>
                    <strong>Event ID:</strong> {event.id}
                  </p> */}
                  <p>
                    <strong>Event Creator Name:</strong> {event.name}
                  </p>
                  <p>
                    <strong>City:</strong> {event.city}
                  </p>
                  <p>
                    <strong>State:</strong> {event.state}
                  </p>
                  <p>
                    <strong>Event Date:</strong> {event.event_date}
                  </p>
                  <p>
                    <strong>Occasion:</strong> {event.occasion}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
