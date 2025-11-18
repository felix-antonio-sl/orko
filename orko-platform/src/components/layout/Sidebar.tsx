import Link from 'next/link';
import { LayoutDashboard, Activity, Compass, PlayCircle, Layers } from 'lucide-react';

const navigation = [
  { name: 'Tablero', icon: LayoutDashboard, href: '/' },
  { name: 'Diagnóstico', icon: Activity, href: '/' }, // TODO: Separate page
  { name: 'Estrategia', icon: Compass, href: '/strategy' },
  { name: 'Ejecución', icon: PlayCircle, href: '/execution' },
  { name: 'Tejidos', icon: Layers, href: '/fabrics' },
];

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-surface border-r border-surface-highlight h-screen">
      <div className="flex items-center justify-center h-16 border-b border-surface-highlight">
        <h1 className="text-2xl font-bold text-primary tracking-wider">ORKO</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-300 rounded-md hover:bg-surface-highlight hover:text-white transition-colors group"
          >
            <item.icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-primary transition-colors" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-surface-highlight">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            E
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Estratega</p>
            <p className="text-xs text-gray-500">View Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
