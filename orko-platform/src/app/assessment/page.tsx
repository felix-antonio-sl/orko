'use client';

import { AssessmentForm } from '@/features/assessment/AssessmentForm';
import { useOrganization } from '@/features/dashboard/hooks';

export default function AssessmentPage() {
    const { data: org } = useOrganization();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">El Espejo (Diagnóstico)</h1>
                <p className="text-gray-400 mt-1">Evalúa la salud organizacional (H_org) en 4 dimensiones.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-surface/30 border border-surface-highlight rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Nueva Evaluación</h2>
                    {org ? (
                        <AssessmentForm
                            orgId={org.id}
                            initialScores={{
                                arch: org.health?.dimensions?.find((d: any) => d.dimension === 'Architecture')?.value || 0,
                                proc: org.health?.dimensions?.find((d: any) => d.dimension === 'Processes')?.value || 0,
                                data: org.health?.dimensions?.find((d: any) => d.dimension === 'Data')?.value || 0,
                                ops: org.health?.dimensions?.find((d: any) => d.dimension === 'Operation')?.value || 0,
                            }}
                        />
                    ) : (
                        <div className="text-gray-400">Cargando organización...</div>
                    )}
                </div>

                <div className="bg-surface/30 border border-surface-highlight rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Historial</h2>
                    <p className="text-gray-500">El historial de evaluaciones se mostrará aquí.</p>
                </div>
            </div>
        </div>
    );
}
