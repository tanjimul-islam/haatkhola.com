import { Noto_Sans_Bengali } from "next/font/google";

import "./globals.css";
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "HaatKhola - হাটখোলা",
  description: "Your Trusted E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={notoSansBengali.className}>
      <body className={`antialiased `}>
      <script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1057799606043862');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1057799606043862&ev=PageView&noscript=1"
/></noscript>
        {children}</body>
    </html>
  );
}
