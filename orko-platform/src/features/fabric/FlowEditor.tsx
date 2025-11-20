'use client';

import { useState, useEffect } from 'react';
import { useCreateFlow, useFlow, useUpdateFlow } from '../dashboard/hooks';

interface FlowEditorProps {
    orgSlug: string;
    flowId?: string;
    onClose: () => void;
    onSuccess: () => void;
}

export function FlowEditor({ orgSlug, flowId, onClose, onSuccess }: FlowEditorProps) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [flowType, setFlowType] = useState('CORE');
    const [cognitiveLevel, setCognitiveLevel] = useState('C0');
    const [outcome, setOutcome] = useState('');
    const [customer, setCustomer] = useState('');
    const [owner, setOwner] = useState('');
    const [criticality, setCriticality] = useState('MEDIUM');
    const [steps, setSteps] = useState<{ name: string; capacityId: string; timeoutSeconds: number; inputs: string; outputs: string }[]>([
        { name: 'Inicio', capacityId: '', timeoutSeconds: 0, inputs: '', outputs: '' }
    ]);

    const { data: flowData, isLoading: isLoadingFlow } = useFlow(flowId);
    const { mutate: createFlow, isPending: isCreating, error: createError } = useCreateFlow();
    const { mutate: updateFlow, isPending: isUpdating, error: updateError } = useUpdateFlow();

    useEffect(() => {
        if (flowData) {
            setName(flowData.name);
            setDescription(flowData.description || '');
            setFlowType(flowData.flowType);
            setCognitiveLevel(flowData.cognitiveLevel);
            setOutcome(flowData.outcome || '');
            setCustomer(flowData.customer || '');
            setOwner(flowData.owner || '');
            setCriticality(flowData.criticality || 'MEDIUM');
            if (flowData.steps && flowData.steps.length > 0) {
                setSteps(flowData.steps.map((s: any) => ({
                    name: s.name,
                    capacityId: s.capacityId || '',
                    timeoutSeconds: s.timeoutSeconds || 0,
                    inputs: s.inputs || '',
                    outputs: s.outputs || ''
                })));
            }
        }
    }, [flowData]);

    const handleAddStep = () => {
        setSteps([...steps, { name: '', capacityId: '', timeoutSeconds: 0, inputs: '', outputs: '' }]);
    };

    const handleRemoveStep = (index: number) => {
        setSteps(steps.filter((_, i) => i !== index));
    };

    const handleStepChange = (index: number, field: string, value: any) => {
        const newSteps = [...steps];
        (newSteps[index] as any)[field] = value;
        setSteps(newSteps);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const input = {
            orgSlug,
            name,
            description,
            flowType,
            cognitiveLevel,
            outcome,
            customer,
            owner,
            criticality,
            steps: steps.map(s => ({
                name: s.name,
                capacityId: s.capacityId || null,
                timeoutSeconds: parseInt(s.timeoutSeconds as any) || 0,
                inputs: s.inputs || null,
                outputs: s.outputs || null
            }))
        };

        if (flowId) {
            updateFlow({ id: flowId, input }, {
                onSuccess: () => onSuccess()
            });
        } else {
            createFlow(input, {
                onSuccess: () => onSuccess()
            });
        }
    };

    const isSaving = isCreating || isUpdating;
    const error = createError || updateError;

    if (flowId && isLoadingFlow) {
        return (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="text-white">Cargando flujo...</div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-surface border border-surface-highlight rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
                <div className="p-6 border-b border-surface-highlight flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">{flowId ? 'Editar Flujo' : 'Nuevo Flujo de Valor'}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <form id="flow-form" onSubmit={handleSubmit} className="space-y-8">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Nombre del Flujo</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                        placeholder="Ej: Reporte Diario"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Descripción</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary h-24"
                                        placeholder="Propósito del flujo..."
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Tipo de Flujo</label>
                                    <select
                                        value={flowType}
                                        onChange={(e) => setFlowType(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                    >
                                        <option value="CORE">Core (Operativo)</option>
                                        <option value="SUPPORT">Soporte</option>
                                        <option value="STRATEGIC">Estratégico</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Nivel Cognitivo (TF2)</label>
                                    <select
                                        value={cognitiveLevel}
                                        onChange={(e) => setCognitiveLevel(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                    >
                                        <option value="C0">C0: Rutinario (Sin varianza)</option>
                                        <option value="C1">C1: Técnico (Varianza acotada)</option>
                                        <option value="C2">C2: Adaptativo (Alta incertidumbre)</option>
                                    </select>
                                    <p className="text-xs text-gray-500 mt-1">Define la autonomía y guardarraíles necesarios.</p>
                                </div>
                            </div>
                        </div>

                        {/* Teleological Validation (Axiom A3) */}
                        <div className="border border-surface-highlight rounded-lg p-6 space-y-4 bg-surface-highlight/20">
                            <div className="flex items-center gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-lg font-semibold text-white">Validación Teleológica (A3)</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">
                                        Outcome (Resultado Esperado) <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={outcome}
                                        onChange={(e) => setOutcome(e.target.value)}
                                        className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary h-20"
                                        placeholder="¿Qué entrega este flujo?"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">
                                        Customer (Cliente) <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={customer}
                                        onChange={(e) => setCustomer(e.target.value)}
                                        className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                        placeholder="¿Quién recibe el valor?"
                                        required
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Interno o Externo</p>
                                </div>
                            </div>

                            {!customer && (
                                <div className="bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 p-3 rounded-lg text-sm flex items-start gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span><strong>Flujo Huérfano:</strong> Un flujo sin cliente definido es "Grasa" (Waste) según Axiom A3.</span>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Owner (Responsable)</label>
                                    <input
                                        type="text"
                                        value={owner}
                                        onChange={(e) => setOwner(e.target.value)}
                                        className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                        placeholder="Persona/Equipo responsable"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Criticidad</label>
                                    <select
                                        value={criticality}
                                        onChange={(e) => setCriticality(e.target.value)}
                                        className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                    >
                                        <option value="LOW">Baja</option>
                                        <option value="MEDIUM">Media</option>
                                        <option value="HIGH">Alta</option>
                                        <option value="CRITICAL">Crítica</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Steps Editor */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-white">Pasos del Flujo</h3>
                                <button
                                    type="button"
                                    onClick={handleAddStep}
                                    className="text-sm text-primary hover:text-primary-highlight font-medium flex items-center gap-1"
                                >
                                    + Agregar Paso
                                </button>
                            </div>
                            <div className="space-y-3">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex gap-4 items-start bg-surface-highlight/50 p-4 rounded-lg border border-surface-highlight">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-highlight text-gray-400 font-mono text-sm shrink-0 mt-1">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <input
                                                type="text"
                                                value={step.name}
                                                onChange={(e) => handleStepChange(index, 'name', e.target.value)}
                                                placeholder="Nombre del paso"
                                                className="bg-surface border border-gray-700 rounded px-3 py-2 text-white text-sm focus:border-primary outline-none"
                                                required
                                            />
                                            <input
                                                type="text"
                                                value={step.capacityId}
                                                onChange={(e) => handleStepChange(index, 'capacityId', e.target.value)}
                                                placeholder="Ejecutado por (Capacidad/Rol)"
                                                className="bg-surface border border-gray-700 rounded px-3 py-2 text-white text-sm focus:border-primary outline-none"
                                            />
                                            <input
                                                type="number"
                                                value={step.timeoutSeconds}
                                                onChange={(e) => handleStepChange(index, 'timeoutSeconds', e.target.value)}
                                                placeholder="Timeout (seg)"
                                                className="bg-surface border border-gray-700 rounded px-3 py-2 text-white text-sm focus:border-primary outline-none"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveStep(index)}
                                            className="text-gray-500 hover:text-red-500 mt-2"
                                            disabled={steps.length === 1}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg text-sm">
                                Error al {flowId ? 'actualizar' : 'crear'} el flujo: {error.message}
                            </div>
                        )}
                    </form>
                </div>

                <div className="p-6 border-t border-surface-highlight flex justify-end gap-4 bg-surface">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        form="flow-form"
                        disabled={isSaving}
                        className="bg-primary hover:bg-primary-highlight text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {isSaving ? (
                            <>
                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Guardando...
                            </>
                        ) : (
                            flowId ? 'Actualizar Flujo' : 'Crear Flujo'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
