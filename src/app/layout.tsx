import { Inter } from 'next/font/google'

import { cn } from '@/utils/libs'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="h-full" lang="en">
            <body className={cn('min-h-svh', inter.className)}>{children}</body>
        </html>
    )
}
