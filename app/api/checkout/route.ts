import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-28.acacia" as any,
});

export async function POST(request: Request) {
  try {
    const { toolName, price } = await request.json();
    const unitAmount = Math.round(price * 100); // Μετατροπή σε cents (π.χ. 3€ = 300 cents)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: toolName || "Utility Hub Digital Service",
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/tools/resume-builder?unlocked=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/tools/resume-builder`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
