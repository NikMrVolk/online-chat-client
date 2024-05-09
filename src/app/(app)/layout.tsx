import { Header } from '@/modules/header/view'

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="grid min-h-svh grid-cols-rootTemplate">
            <Header />
            <main>{children}</main>
        </div>
    )
}
