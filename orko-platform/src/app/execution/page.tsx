'use client';

import { useOrganization } from '@/features/dashboard/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { request } from 'graphql-request';
import { START_PLAYBOOK } from '@/features/dashboard/graphql/operations';
import { useState } from 'react';

const API_URL = typeof window !== 'undefined'
    ? `${window.location.origin}/api/graphql`
    : 'http://localhost:3000/api/graphql';

export default function ExecutionPage() {
    const { data: org, isLoading, error } = useOrganization('generic-corp');
    const queryClient = useQueryClient();
    const [isStarting, setIsStarting] = useState(false);

    const startPlaybookMutation = useMutation({
        mutationFn: async ({ orgId, code }: { orgId: string, code: string }) => {
            const data = await request(API_URL, START_PLAYBOOK, { orgId, code });
            return data.startPlaybook;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['organization'] });
            setIsStarting(false);
        },
    });

    if (isLoading) return <div className="text-white">Cargando ejecución...</div>;
    if (error) return <div className="text-red-500">Error: {JSON.stringify(error)}</div>;
    if (!org) return <div className="text-white">No hay datos disponibles.</div>;

    const { activePlaybooks, strategy } = org;
    const recommendedPlaybooks = strategy?.playbooks || [];

    const handleStartPlaybook = (code: string) => {
        setIsStarting(true);
        startPlaybookMutation.mutate({ orgId: org.id, code });
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">El Motor (Execution)</h1>
                    <p className="text-gray-400 mt-1">Gestión y seguimiento de iniciativas estratégicas.</p>
                </div>
                <div className="px-4 py-2 rounded-lg border border-surface-highlight bg-surface/30">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Iniciativas Activas</span>
                    <p className="text-xl font-bold text-white text-right">{activePlaybooks?.length || 0}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Active Column */}
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-xl font-semibold text-white flex items-center">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        En Curso
                    </h3>

                    {activePlaybooks && activePlaybooks.length > 0 ? (
                        <div className="grid gap-4">
                            {activePlaybooks.map((run: any) => (
                                <div key={run.id} className="bg-surface/30 border border-surface-highlight rounded-xl p-6 flex justify-between items-center">
                                    <div>
                                        <div className="flex items-center space-x-3 mb-2">
                                            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{run.playbookCode}</span>
                                            <h4 className="text-lg font-medium text-white">
                                                {recommendedPlaybooks.find((p: any) => p.code === run.playbookCode)?.name || run.playbookCode}
                                            </h4>
                                        </div>
                                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                                            <span>Iniciado: {new Date(parseInt(run.startedAt)).toLocaleDateString()}</span>
                                            <span>Estado: {run.status}</span>
                                        </div>
                                    </div>
                                    <div className="w-32">
                                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                                            <span>Progreso</span>
                                            <span>{run.progress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${run.progress}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-surface/10 border border-dashed border-surface-highlight rounded-xl p-12 text-center">
                            <p className="text-gray-500">No hay playbooks en ejecución.</p>
                            <p className="text-sm text-gray-600 mt-1">Selecciona uno de los recomendados para comenzar.</p>
                        </div>
                    )}
                </div>

                {/* Recommended Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white">Disponibles</h3>
                    <div className="grid gap-4">
                        {recommendedPlaybooks.map((playbook: any) => {
                            const isActive = activePlaybooks?.some((run: any) => run.playbookCode === playbook.code);
                            return (
                                <div key={playbook.id} className={`bg-surface/30 border border-surface-highlight rounded-xl p-6 ${isActive ? 'opacity-50 pointer-events-none' : ''}`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-xs font-mono text-gray-400 bg-gray-800 px-2 py-1 rounded">{playbook.code}</span>
                                            <h4 className="text-md font-medium text-white">{playbook.name}</h4>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-4">{playbook.description}</p>
                                    <button
                                        onClick={() => handleStartPlaybook(playbook.code)}
                                        disabled={isActive || isStarting}
                                        className="w-full py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isActive ? 'En Curso' : 'Iniciar Playbook'}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
