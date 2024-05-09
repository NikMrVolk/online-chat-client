import { HomeIcon, MailIcon, SettingsIcon } from 'lucide-react'

import { ROUTES } from '@/utils/constants'

const navElements = [
    {
        component: HomeIcon,
        route: ROUTES.HOME,
    },
    {
        component: MailIcon,
        route: ROUTES.SOCIALS,
    },
    {
        component: SettingsIcon,
        route: ROUTES.SETTINGS,
    },
]

export const Nav = () => (
    <nav className="flex flex-col gap-8">
        {navElements.map(({ component: Component, route }) => (
            <Component key={route} className="cursor-pointer" />
        ))}
    </nav>
)
