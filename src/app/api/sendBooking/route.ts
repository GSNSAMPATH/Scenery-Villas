// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

//   const { name, email, phone, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: "Missing fields" });
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail", // You can use any email service
//       auth: {
//         user: process.env.EMAIL_USER, // your email
//         pass: process.env.EMAIL_PASS, // your email password or app password
        
//       },
//     });

//     console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_TO, // where you want to receive booking requests
//       subject: `New Booking Request from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Phone: ${phone || "N/A"}
//         Message: ${message}
//       `,
//     });

//     res.status(200).json({ message: "Booking sent successfully" });
//   } catch (error) {
//     console.error("Email send error:", error);
//     res.status(500).json({ message: "Failed to send booking" });
//   }
// }



import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Booking Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Message: ${message}
      `,
    });

    return NextResponse.json({ message: "Booking sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ message: "Failed to send booking" }, { status: 500 });
  }
}

