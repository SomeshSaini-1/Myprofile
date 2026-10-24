import './globals.css'

export const metadata = {
  title: 'Somesh Saini – Creative Full Stack & IoT Developer',
  description: 'Portfolio of Somesh Saini: MERN stack and ESP32 IoT projects.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
