'use client';

import { useState, useEffect } from 'react';
import { useCreateStrategicObjective, useStrategicObjective, useUpdateStrategicObjective } from '@/features/dashboard/hooks';

interface ObjectiveModalProps {
    isOpen: boolean;
    onClose: () => void;
    orgSlug: string;
    objectiveId?: string;
}

export default function ObjectiveModal({ isOpen, onClose, orgSlug, objectiveId }: ObjectiveModalProps) {
    const createObjective = useCreateStrategicObjective();
    const updateObjective = useUpdateStrategicObjective();
    const { data: existingObjective } = useStrategicObjective(objectiveId);

    const [description, setDescription] = useState('');
    const [type, setType] = useState('STRATEGIC');
    const [status, setStatus] = useState('ACTIVE');

    useEffect(() => {
        if (existingObjective) {
            setDescription(existingObjective.description);
            setType(existingObjective.type);
            setStatus(existingObjective.status);
        }
    }, [existingObjective]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('🎯 [ObjectiveModal] Submit initiated');
        console.log('🎯 [ObjectiveModal] orgSlug:', orgSlug);
        console.log('🎯 [ObjectiveModal] description:', description);
        console.log('🎯 [ObjectiveModal] type:', type);
        console.log('🎯 [ObjectiveModal] status:', status);

        if (!description.trim()) {
            console.error('❌ [ObjectiveModal] Description is empty');
            alert('La descripción es obligatoria');
            return;
        }

        if (!orgSlug) {
            console.error('❌ [ObjectiveModal] orgSlug is missing!');
            alert('Error: No hay organización seleccionada');
            return;
        }

        const input = {
            orgSlug: orgSlug,
            description,
            type,
            status
        };

        console.log('🎯 [ObjectiveModal] Calling mutation with input:', input);

        try {
            if (objectiveId) {
                await updateObjective.mutateAsync({
                    id: objectiveId,
                    input: {
                        orgSlug,
                        description,
                        type,
                        status
                    }
                });
                console.log('✅ [ObjectiveModal] Update successful');
            } else {
                const result = await createObjective.mutateAsync(input);
                console.log('✅ [ObjectiveModal] Creation successful:', result);
            }

            // Reset form
            setDescription('');
            setType('STRATEGIC');
            setStatus('ACTIVE');

            console.log('🎯 [ObjectiveModal] Closing modal and reloading...');
            onClose();
            window.location.reload(); // Reload to refresh graph
        } catch (error: any) {
            console.error('❌ [ObjectiveModal] Mutation error:', error);
            console.error('❌ [ObjectiveModal] Error message:', error?.message);
            console.error('❌ [ObjectiveModal] Error response:', error?.response);
            console.error('❌ [ObjectiveModal] Full error:', JSON.stringify(error, null, 2));
            alert(`Error al ${objectiveId ? 'actualizar' : 'crear'} el objetivo estratégico: ${error?.message || 'Error desconocido'}`);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                        {objectiveId ? 'Editar Objetivo Estratégico' : 'Nuevo Objetivo Estratégico'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Descripción *
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={3}
                            placeholder="Ej: Mejorar la satisfacción del cliente en un 20%"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tipo
                        </label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="STRATEGIC">Estratégico</option>
                            <option value="TACTICAL">Táctico</option>
                            <option value="OPERATIONAL">Operacional</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Estado
                        </label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="ACTIVE">Activo</option>
                            <option value="PLANNED">Planificado</option>
                            <option value="COMPLETED">Completado</option>
                            <option value="ARCHIVED">Archivado</option>
                        </select>
                    </div>

                    <div className="flex gap-2 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={createObjective.isPending || updateObjective.isPending}
                            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                        >
                            {createObjective.isPending || updateObjective.isPending ? 'Guardando...' : (objectiveId ? 'Actualizar Objetivo' : 'Crear Objetivo')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
