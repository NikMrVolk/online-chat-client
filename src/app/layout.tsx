import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '@/modules/header/view'
import { cn } from '@/utils/libs'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Online Chat',
    description: 'Chat with your friends in real-time',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="h-full" lang="en">
            <body className={cn('grid min-h-svh grid-cols-rootTemplate', inter.className)}>
                <Header />
                {children}
            </body>
        </html>
    )
}
