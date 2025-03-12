import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    // Here you would typically integrate with an email service like SendGrid, Mailgun, etc.
    // For now, we'll just log the data and return a success response
    console.log("Contact form submission:", {
      name,
      email,
      message,
      to: "pasindumadushanr04@gmail.com", // Recipient email address
    })

    // In a real implementation, you would send the email here
    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: "pasindumadushanr04@gmail.com",
    //   from: email,
    //   subject: `New message from ${name}`,
    //   text: message,
    // })

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}

