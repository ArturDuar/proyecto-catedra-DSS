"use client";

import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DashboardLayout({ children }) {

  return (
    <div>
        <Header/>
        <div className="min-vh">
            {children}
        </div>
        <Footer/>
    </div>
  );
}
