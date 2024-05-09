'use client'

import { usePathname, useRouter } from 'next/navigation'

import { cn } from '@/utils/libs'

interface NavLinkProps {
    route: string
    children: React.ReactNode
}

export const NavElement = ({ route, children }: NavLinkProps) => {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <li
            className={cn('flex w-full cursor-pointer justify-center rounded-md py-2 transition-all duration-200', {
                'bg-blue/80 text-white hover:bg-blue': route === pathname,
                'hover:bg-blue/30': route !== pathname,
            })}
            onClick={() => router.push(route)}
        >
            {children}
        </li>
    )
}
