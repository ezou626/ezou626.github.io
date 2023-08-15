import {Roboto} from 'next/font/google';

import './globals.css'

const roboto = Roboto({
  weight: '300',
  subsets: ['latin']
});

export const metadata = {
  title: "Eric Zou",
  description: 'My Personal Website',
  icons: []
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel="mask-icon" href='/icon.svg' color="#FFFFFF"></link>
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
    );
}