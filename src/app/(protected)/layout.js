'use client';

import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import { useAuth } from "../lib/AuthContext";
import { redirect } from "next/navigation";

export default function ProtectedLayout({ children }) {
  const { user, loading } = useAuth();
  if (!loading && !user) {
    console.log("Redirecting to auth");
    redirect("/auth");
    

  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex">
        <SideNav />
        <main className="flex-grow lg:pl-64 bg-gray-50">
          {children}
        </main>
      </div>
      <footer className="bg-white py-4 border-t border-gray-200 lg:pl-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy;{new Date().getFullYear()} Slickbit Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 