import { Bell, Search, ChevronDown } from 'lucide-react';

export function Header() {
    return (
        <header className="flex items-center justify-between h-16 px-6 bg-surface/50 backdrop-blur-md border-b border-surface-highlight sticky top-0 z-10">
            <div className="flex items-center">
                <div className="relative group">
                    <button className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        <span>Organización: <span className="text-white">Generic Corp</span></span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
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
