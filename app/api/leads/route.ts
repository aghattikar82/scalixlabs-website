import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        let leadId = "fallback-id";
        let leadName = body.Name || body.name || "Unknown Lead";

        // 1. Try to Save to Database via Prisma (This will fail on Vercel with local SQLite)
        try {
            const lead = await prisma.lead.create({
                data: {
                    source: body.Source || "Website Form",
                    name: leadName,
                    email: body.Email || "",
                    phone: body.Phone || body.phone || null,
                    company: body.Company || body.company || null,
                    website: body.Website || body.website || null,
                    industry: body.Industry || body.industry || null,
                    revenue: body.revenue || null,
                    runningAds: body.runningAds || null,
                    adBudget: body.Budget || body.adBudget || null,
                    goal: body.goal || null,
                    timeline: body.timeline || null,
                    description: body.description || null,
                    marketingSpend: body.marketingSpend || null,
                    expectedRevenueGoal: body.expectedRevenueGoal || null,
                    teamSize: body.teamSize || null,
                }
            });
            leadId = lead.id;
            leadName = lead.name;
        } catch (dbError) {
            console.warn("Could not save to local database (expected on Vercel):", dbError);
            // We gracefully degrade here so the email still gets sent
        }

        // 2. Send Server-Side Email via FormSubmit
        try {
            await fetch('https://formsubmit.co/ajax/contact.scalixlabs@gmail.com', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: `New Lead from Scalix Labs: ${leadName}`,
                    ...body
                })
            });
        } catch (emailError) {
            console.error("Failed to send email notification", emailError);
            // Optionally handle email failure if needed
        }

        return NextResponse.json({ success: true, leadId: leadId }, { status: 200 });
    } catch (error) {
        console.error("Lead capture failed:", error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
