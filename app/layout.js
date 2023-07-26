export const metadata = {
  icons: {
    icon: "icon.svg",
    "apple-icon": "apple-icon.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
    );
}