import type { Metadata } from "next";
import SLNHomesClientPage from "./SLNHomesClientPage";

export const metadata: Metadata = {
    title: "SLN Homes Case Study | Co-Living & Accommodation Web Platform | Scalix Labs",
    description: "Discover how Scalix Labs designed and engineered a high-converting web platform for SLN Homes in Bengaluru, increasing room bookings and direct inquiries by 240%.",
};

export default function SLNHomesCaseStudyPage() {
    return <SLNHomesClientPage />;
}
