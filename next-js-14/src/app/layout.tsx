import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import './globals.css';

export const metadata: Metadata = {
  title: 'React forms',
  description: 'Generated by create next app',
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body>
        <AntdRegistry>{props.children}</AntdRegistry>
      </body>
    </html>
  );
}
