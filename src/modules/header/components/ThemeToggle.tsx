'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { cn } from '@/utils/libs'

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className="flex flex-col gap-4">
            <MoonIcon
                className={cn('cursor-pointer', { 'opacity-60': theme === 'light' })}
                onClick={() => setTheme('dark')}
            />
            <SunIcon
                className={cn('cursor-pointer', { 'opacity-60': theme === 'dark' })}
                onClick={() => setTheme('light')}
            />
        </div>
    )
}
