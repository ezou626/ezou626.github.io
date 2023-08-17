import {Roboto} from 'next/font/google';

import './globals.css'

const roboto = Roboto({
  weight: '300',
  subsets: ['latin']
});

export const metadata = {
  title: "Eric Zou",
  description: 'My Personal Website',
  generator: 'Next.js',
  applicationName: 'Eric Zou\'s Personal Website',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Website'],
  colorScheme: 'light',
  creator: 'Eric Zou',
  publisher: 'Github',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    // other: [
    //   { rel: 'mask-icon' },
    //   { url: '/mask-icon.svg', type: 'image/svg+xml',  color: "#325758"},
    // ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
    );
}