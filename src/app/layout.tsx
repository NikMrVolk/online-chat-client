import { Inter } from 'next/font/google'

import { Provider } from '@/components/providers'
import { cn } from '@/utils/libs'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={cn('min-h-svh', inter.className)}>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}
