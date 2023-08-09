import {Roboto} from 'next/font/google';

import './globals.css'

const roboto = Roboto({
  weight: '300',
  subsets: ['latin']
})

export const metadata = {
  title: "Eric Zou"
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
    );
}