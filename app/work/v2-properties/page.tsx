import type { Metadata } from "next";
import V2PropertiesClientPage from "./V2PropertiesClientPage";

export const metadata: Metadata = {
    title: "V2 Properties Case Study | Luxury Real Estate Platform | Scalix Labs",
    description: "Explore how Scalix Labs engineered an upscale digital real estate platform for V2 Properties, showcasing premium luxury apartments, villas, and commercial spaces with qualified buyer advisory funnels.",
};

export default function V2PropertiesCaseStudyPage() {
    return <V2PropertiesClientPage />;
}
