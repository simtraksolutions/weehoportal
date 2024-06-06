"use client"
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import axios from "axios";

export default function BookaneventPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [event_date, setEventDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [selectedPerformer, setSelectedPerformer] = useState("");

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry"
  ];

  const performers = {
    Actor: ["Actor1", "Actor2", "Actor3"],
    Comedian: ["Comedian1", "Comedian2"],
    Dancer: ["Dancer1", "Dancer2"],
    Singer: ["Mandeep", "Naviin", "Rupali", "performer"],
    Magician: ["Magician1", "Magician2"],
    Musician: ["Musician1", "Musician2"],
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    if (!token) {
      alert("Please log in first.");
      return;
    }
    try {
      await axios.post(
        "http://localhost:8080/Bookanevent",
        {
          name,
          phone,
          email,
          city,
          state,
          event_date,
          occasion,
          performer_name: selectedPerformer,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Event booked successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setCity("");
      setState("");
      setEventDate("");
      setOccasion("");
      setSelectedPerformer("");
    } catch (error) {
      alert((error as any).response?.data?.error || "Booking event error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-100 rounded-lg shadow">
        <div className="flex justify-center">
          <Image src="/images/Weeho.png" alt="Logo" width={130} height={50} />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Book an Event</h2>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/user.png" alt="" width={24} height={24} />
            <input type="text" name="name" id="name" placeholder="Name" className="flex-1 bg-transparent outline-none px-2"
            value={name} onChange={(e) => setName(e.target.value)} />
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
            <Image src="/images/location.png" alt="" width={24} height={24} />
            <input type="text" name="city" id="city" placeholder="City" className="flex-1 bg-transparent outline-none px-2"
            value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/list.png" alt="" width={24} height={24} />
            <select name="state" id="state" className="flex-1 bg-transparent outline-none px-2" title="Select a State"
            value={state} onChange={(e) => setState(e.target.value)}>
              <option value="" disabled>Select a State</option>
              {indianStates.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/calendar (1).png" alt="" width={24} height={24} />
            <input type="date" name="eventDate" id="eventDate" title="eventDate" className="flex-1 bg-transparent outline-none px-2"
            value={event_date} onChange={(e) => setEventDate(e.target.value)} />
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/list.png" alt="" width={24} height={24} />
            <select name="occasion" id="occasion" className="flex-1 bg-transparent outline-none px-2" title="Select an Occasion"
            value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option value="" disabled>Select an Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
            <Image src="/images/list.png" alt="" width={24} height={24} />
            <select name="performer" id="performer" className="flex-1 bg-transparent outline-none px-2" title="Select a Performer (Optional)"
            value={selectedPerformer} onChange={(e) => setSelectedPerformer(e.target.value)} >
              <option value="">Select a Performer (Optional)</option>
              {Object.entries(performers).map(([category, names], index) => (
                <optgroup key={index} label={category}>
                  {names.map((name, idx) => (
                    <option key={idx} value={name}>
                      {name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 rounded-full">Book now</button>
        </form>
      </div>
    </div>
  );
}