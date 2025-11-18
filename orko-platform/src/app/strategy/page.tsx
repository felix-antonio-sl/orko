'use client';

import { useOrganization } from '@/features/dashboard/hooks';
import { DecisionMatrix } from '@/features/strategy/DecisionMatrix';

export default function StrategyPage() {
    const { data: org, isLoading, error } = useOrganization('generic-corp');

    if (isLoading) return <div className="text-white">Cargando estrategia...</div>;
    if (error) return <div className="text-red-500">Error: {JSON.stringify(error)}</div>;
    if (!org || !org.strategy) return <div className="text-white">No hay datos de estrategia disponibles.</div>;

    const { strategy, health } = org;
    const hOrg = health?.score || 0;

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">La Brújula (Strategy)</h1>
                    <p className="text-gray-400 mt-1">Matriz de decisión y trayectorias recomendadas.</p>
                </div>
                <div className="px-4 py-2 rounded-lg border border-surface-highlight bg-surface/30 text-right">
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Trayectoria Actual</p>
                    <p className="text-xl font-bold text-primary">{strategy.trajectory}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Matrix */}
                <div className="space-y-6">
                    <DecisionMatrix hOrg={hOrg} trajectory={strategy.trajectory} />

                    <div className="bg-surface/30 border border-surface-highlight rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Análisis de Situación</h3>
                        <p className="text-gray-300 mb-4">{strategy.description}</p>
                        <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500 uppercase">Foco Principal:</span>
                            <span className="text-sm font-bold text-white bg-primary/20 px-2 py-1 rounded">{strategy.focus}</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Playbooks */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white">Playbooks Recomendados</h3>
                    <div className="grid gap-4">
                        {strategy.playbooks.map((playbook) => (
                            <div key={playbook.id} className="group bg-surface/30 border border-surface-highlight hover:border-primary/50 rounded-xl p-6 transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{playbook.code}</span>
                                        <h4 className="text-lg font-medium text-white group-hover:text-primary transition-colors">{playbook.name}</h4>
                                    </div>
                                    <span className="text-gray-500 group-hover:text-white transition-colors">→</span>
                                </div>
                                <p className="text-sm text-gray-400">{playbook.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mt-8">
                        <h4 className="text-blue-400 font-semibold mb-2">💡 Insight Táctico</h4>
                        <p className="text-sm text-blue-200/80">
                            Para avanzar al siguiente nivel, prioriza la reducción de la deuda técnica en la dimensión de <strong>Arquitectura</strong> antes de intentar escalar los procesos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
