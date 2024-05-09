import { DoorOpenIcon } from 'lucide-react'

import { ThemeToggle } from './components'
import { Nav } from './components/nav'

export const Header = () => (
    <header className="flex min-h-svh flex-col items-center justify-between pb-4 pt-8">
        <Nav />
        <div className="flex flex-col gap-8">
            <ThemeToggle />
            <DoorOpenIcon className="cursor-pointer text-red-500" />
        </div>
    </header>
)
