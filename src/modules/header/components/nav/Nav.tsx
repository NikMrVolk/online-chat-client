import { HomeIcon, MailIcon, SettingsIcon } from 'lucide-react'

import { NavElement } from './NavElement'

import { ROUTES } from '@/utils/constants'

const navElements = [
    {
        IconComponent: HomeIcon,
        route: ROUTES.HOME,
    },
    {
        IconComponent: MailIcon,
        route: ROUTES.SOCIALS,
    },
    {
        IconComponent: SettingsIcon,
        route: ROUTES.SETTINGS,
    },
]

export const Nav = () => (
    <nav className="w-full px-3">
        <ul className="flex flex-col items-center gap-8">
            {navElements.map(({ IconComponent, route }) => (
                <NavElement key={route} route={route}>
                    <IconComponent />
                </NavElement>
            ))}
        </ul>
    </nav>
)
