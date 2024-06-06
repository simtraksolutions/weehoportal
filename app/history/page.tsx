"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import axios from "axios";

interface Event {
  id: number;
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  event_date: string;
  occasion: string;
  performer_name: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<Event[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("No token found, please log in.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8080/history", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        setHistory(response.data);
      } catch (error: any) {
        setError(error.response?.data?.error || "Failed to fetch history");
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-100 rounded-lg shadow">
        <div className="flex justify-center">
          <Image src="/images/Weeho.png" alt="Logo" width={130} height={50} />
        </div>
        <h2 className="text-3xl font-bold text-center">Booking History</h2>
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : history.length > 0 ? (
          history.map((event) => (
        <div key={event.id} className="p-4 bg-white rounded-lg shadow mb-4">
          <div className="flex items-center px-3 py-2">
                <Image src="/images/user.png" alt="Name" width={24} height={24} />
                <span className="flex-1 bg-transparent outline-none px-2">
                  {event.name}
                </span>
              </div>
          <div className="flex items-center px-3 py-2">
            <Image src="/images/telephone.png" alt="" width={24} height={24} />
            <span className="flex-1 bg-transparent outline-none px-2">
                  {event.phone}
                </span>
          </div>
          <div className="flex items-center px-3 py-2">
            <Image src="/images/location.png" alt="" width={24} height={24} />
            <span className="flex-1 bg-transparent outline-none px-2">
                  {event.city}
                </span>
          </div>
          <div className="flex items-center px-3 py-2">
              <Image src="/images/location.png" alt="State" width={24} height={24} />
              <span className="flex-1 bg-transparent outline-none px-2">
                {event.state}
              </span>
          </div>
          <div className="flex items-center px-3 py-2">
            <Image src="/images/calendar (1).png" alt="" width={24} height={24} />
            <span className="flex-1 bg-transparent outline-none px-2">
                  {event.event_date}
            </span>
          </div>
          <div className="flex items-center px-3 py-2">
            <Image src="/images/opportunity.png" alt="" width={24} height={24} />
            <span className="flex-1 bg-transparent outline-none px-2">
                  {event.occasion}
            </span>
          </div>
          <div className="flex items-center px-3 py-2">
            <Image src="/images/microphone.png" alt="Performer Name" width={24} height={24} />
            <span className="flex-1 bg-transparent outline-none px-2">
              {event.performer_name}
            </span>
          </div>
        </div>
        ))
        ) : (
          <p className="text-center">No booking history found.</p>
        )}
      </div>
    </div>
  );
}