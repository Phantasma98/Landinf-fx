"use server";

import nodemailer from "nodemailer";

// Initialize nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Reusable function to send emails
export async function sendEmail({ from, to, subject, text }) {
  try {
    const info = await transporter.sendMail({ from, to, subject, html: text });
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
