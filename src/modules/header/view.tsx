import { DoorOpenIcon, MoonIcon, SunIcon } from 'lucide-react'

import { Nav } from './components'

export const Header = () => (
    <header className="flex min-h-svh flex-col items-center justify-between pb-4 pt-8">
        <Nav />
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <MoonIcon className="cursor-pointer" />
                <SunIcon className="cursor-pointer" />
            </div>
            <DoorOpenIcon className="cursor-pointer text-red-500" />
        </div>
    </header>
)
