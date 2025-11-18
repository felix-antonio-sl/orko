'use client';

import { Bell, Search } from 'lucide-react';

import { useOrganizationContext } from '@/context/OrganizationContext';

export function Header() {
    const { currentOrgSlug, setOrganization } = useOrganizationContext();

    return (
        <header className="h-16 border-b border-white/10 bg-surface/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold text-primary tracking-tight">ORKO</h1>
                <div className="h-6 w-px bg-white/10"></div>
                <div className="flex items-center space-x-2 text-sm">
                    <span className="text-gray-400">Organización:</span>
                    <select
                        value={currentOrgSlug}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
                    >
                        <option value="generic-corp" className="bg-surface text-white">Generic Corp</option>
                        <option value="gore-nuble" className="bg-surface text-white">GORE Ñuble</option>
                    </select>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="relative">
                    <Search className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </div>
                <div className="relative">
                    <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
                </div>
            </div>
        </header>
    );
}
