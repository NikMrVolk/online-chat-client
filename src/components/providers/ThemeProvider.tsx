import { ThemeProvider } from 'next-themes'

export const Provider = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider attribute="selector">{children}</ThemeProvider>
)
