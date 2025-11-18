'use client';

import { useState, useEffect } from 'react';
import { useRecordAssessment } from '@/features/dashboard/hooks';

interface AssessmentFormProps {
    initialScores: {
        arch: number;
        proc: number;
        data: number;
        ops: number;
    };
    orgId: string;
}

export function AssessmentForm({ initialScores, orgId }: AssessmentFormProps) {
    const [scores, setScores] = useState(initialScores);
    const mutation = useRecordAssessment();

    // Sync local state if initialScores change (e.g. after refetch)
    useEffect(() => {
        setScores(initialScores);
    }, [initialScores]);

    const handleChange = (dimension: keyof typeof scores, value: number) => {
        const newScores = { ...scores, [dimension]: value };
        setScores(newScores);
    };

    const handleSubmit = () => {
        mutation.mutate({
            orgId,
            arch: scores.arch,
            proc: scores.proc,
            data: scores.data,
            ops: scores.ops
        });
    };

    return (
        <div className="bg-surface/30 backdrop-blur-sm border border-surface-highlight rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Ingreso Manual de Diagnóstico</h3>
                <button
                    onClick={handleSubmit}
                    disabled={mutation.isPending}
                    className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary border border-primary/50 rounded hover:bg-primary/30 transition-colors disabled:opacity-50"
                >
                    {mutation.isPending ? 'Guardando...' : 'Guardar Cambios'}
                </button>
            </div>

            <div className="space-y-6">
                {/* Architecture */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-arch font-medium">Arquitectura (A_Score)</span>
                        <span className="text-white font-bold">{scores.arch}</span>
                    </div>
                    <input
                        type="range"
                        min="0" max="100"
                        value={scores.arch}
                        onChange={(e) => handleChange('arch', parseInt(e.target.value))}
                        className="w-full h-2 bg-surface-highlight rounded-lg appearance-none cursor-pointer accent-arch"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Legacy</span>
                        <span>Moderno</span>
                    </div>
                </div>

                {/* Processes */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-proc font-medium">Procesos (P_Score)</span>
                        <span className="text-white font-bold">{scores.proc}</span>
                    </div>
                    <input
                        type="range"
                        min="0" max="100"
                        value={scores.proc}
                        onChange={(e) => handleChange('proc', parseInt(e.target.value))}
                        className="w-full h-2 bg-surface-highlight rounded-lg appearance-none cursor-pointer accent-proc"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Ad-hoc</span>
                        <span>Optimizado</span>
                    </div>
                </div>

                {/* Data */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-data font-medium">Datos (D_Score)</span>
                        <span className="text-white font-bold">{scores.data}</span>
                    </div>
                    <input
                        type="range"
                        min="0" max="100"
                        value={scores.data}
                        onChange={(e) => handleChange('data', parseInt(e.target.value))}
                        className="w-full h-2 bg-surface-highlight rounded-lg appearance-none cursor-pointer accent-data"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Silo</span>
                        <span>Líquido</span>
                    </div>
                </div>

                {/* Operation */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-ops font-medium">Operación (O_Score)</span>
                        <span className="text-white font-bold">{scores.ops}</span>
                    </div>
                    <input
                        type="range"
                        min="0" max="100"
                        value={scores.ops}
                        onChange={(e) => handleChange('ops', parseInt(e.target.value))}
                        className="w-full h-2 bg-surface-highlight rounded-lg appearance-none cursor-pointer accent-ops"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Reactivo</span>
                        <span>Predictivo</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
