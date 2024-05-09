export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <main className="flex gap-10">{children}</main>
}
