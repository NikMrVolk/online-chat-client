import { HomeIcon, MailIcon, SettingsIcon } from 'lucide-react'

const navElements = [
    {
        component: HomeIcon,
        route: '/',
    },
    {
        component: MailIcon,
        route: '/socials',
    },
    {
        component: SettingsIcon,
        route: '/settings',
    },
]

export const Nav = () => (
    <nav className="flex flex-col gap-8">
        {navElements.map(({ component: Component, route }) => (
            <Component key={route} className="cursor-pointer" />
        ))}
    </nav>
)
