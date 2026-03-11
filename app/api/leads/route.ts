import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // 1. Save to Database via Prisma
        const lead = await prisma.lead.create({
            data: {
                source: body.Source || "Website Form",
                name: body.Name || "",
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

        // 2. Send Server-Side Email via FormSubmit
        // We use fetch to FormSubmit to avoid needing a full SMTP backend
        try {
            await fetch('https://formsubmit.co/ajax/contact.scalixlabs@gmail.com', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: `New Lead from Scalix Labs: ${lead.name}`,
                    ...body
                })
            });
        } catch (emailError) {
            console.error("Failed to send email notification", emailError);
            // We don't throw here because the lead was successfully saved to the DB
        }

        return NextResponse.json({ success: true, leadId: lead.id }, { status: 200 });
    } catch (error) {
        console.error("Lead capture failed:", error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
