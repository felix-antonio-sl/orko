'use client';

import { useOrganization } from '@/features/dashboard/hooks';
import { GraphCanvas } from '@/features/fabric/GraphCanvas';
import { FlowEditor } from '@/features/fabric/FlowEditor';
import { StructureEditor } from '@/features/fabric/StructureEditor';
import { AssetCatalog } from '@/features/fabric/AssetCatalog';
import ObjectiveModal from '@/features/fabric/ObjectiveModal';
import { useState, useRef, useEffect } from 'react';

export default function FabricsPage() {
    const { data: org, isLoading, error, refetch } = useOrganization('generic-corp');
    const [selectedNode, setSelectedNode] = useState<any>(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [isStructureEditorOpen, setIsStructureEditorOpen] = useState(false);
    const [isAssetCatalogOpen, setIsAssetCatalogOpen] = useState(false);
    const [isObjectiveModalOpen, setIsObjectiveModalOpen] = useState(false);

    const [editingFlowId, setEditingFlowId] = useState<string | undefined>(undefined);
    const [editingTeamId, setEditingTeamId] = useState<string | undefined>(undefined);
    const [editingPersonId, setEditingPersonId] = useState<string | undefined>(undefined);
    const [editingAssetId, setEditingAssetId] = useState<string | undefined>(undefined);
    const [editingObjectiveId, setEditingObjectiveId] = useState<string | undefined>(undefined);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    if (isLoading) return <div className="text-white">Cargando tejidos...</div>;
    if (error) return <div className="text-red-500">Error: {JSON.stringify(error)}</div>;
    if (!org || !org.fabric) return <div className="text-white">No hay datos de tejidos disponibles.</div>;

    const { fabric } = org;

    // Transform data for react-force-graph if needed, but our API structure matches well
    // We need mutable objects for d3-force, so we clone them
    const graphData = {
        nodes: fabric.nodes.map(n => ({ ...n })),
        links: fabric.links.map(l => ({ ...l }))
    };

    const handleCreateFlow = () => {
        setEditingFlowId(undefined);
        setIsEditorOpen(true);
        setIsDropdownOpen(false);
    };

    const handleCreateStructure = () => {
        setEditingTeamId(undefined);
        setEditingPersonId(undefined);
        setIsStructureEditorOpen(true);
        setIsDropdownOpen(false);
    };

    const handleCreateAsset = () => {
        setEditingAssetId(undefined);
        setIsAssetCatalogOpen(true);
        setIsDropdownOpen(false);
    };

    const handleCreateObjective = () => {
        setEditingObjectiveId(undefined);
        setIsObjectiveModalOpen(true);
        setIsDropdownOpen(false);
    };

    const handleEditNode = () => {
        if (!selectedNode) return;

        switch (selectedNode.type) {
            case 'ValueStream':
                setEditingFlowId(selectedNode.id);
                setIsEditorOpen(true);
                break;
            case 'Team':
                setEditingTeamId(selectedNode.id);
                setEditingPersonId(undefined);
                setIsStructureEditorOpen(true);
                break;
            case 'Person':
                setEditingPersonId(selectedNode.id);
                setEditingTeamId(undefined);
                setIsStructureEditorOpen(true);
                break;
            case 'DataAsset':
                setEditingAssetId(selectedNode.id);
                setIsAssetCatalogOpen(true);
                break;
            case 'StrategicObjective':
                setEditingObjectiveId(selectedNode.id);
                setIsObjectiveModalOpen(true);
                break;
        }
    };

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Tejidos Organizacionales</h1>
                    <p className="text-gray-400 mt-1">Visualización de la red de equipos, flujos y activos.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="bg-primary hover:bg-primary-highlight text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                        >
                            <span>+</span> Nuevo Nodo
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-surface border border-surface-highlight rounded-lg shadow-xl z-50 overflow-hidden">
                                <button
                                    onClick={handleCreateFlow}
                                    className="w-full text-left px-4 py-3 text-white hover:bg-surface-highlight transition-colors flex items-center gap-2"
                                >
                                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                    Flujo de Valor
                                </button>
                                <button
                                    onClick={handleCreateStructure}
                                    className="w-full text-left px-4 py-3 text-white hover:bg-surface-highlight transition-colors flex items-center gap-2"
                                >
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    Equipo / Persona
                                </button>
                                <button
                                    onClick={handleCreateAsset}
                                    className="w-full text-left px-4 py-3 text-white hover:bg-surface-highlight transition-colors flex items-center gap-2"
                                >
                                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                    Activo de Información
                                </button>
                                <button
                                    onClick={handleCreateObjective}
                                    className="w-full text-left px-4 py-3 text-white hover:bg-surface-highlight transition-colors flex items-center gap-2"
                                >
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    Objetivo Estratégico
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="flex space-x-2">
                        <div className="flex items-center space-x-1">
                            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                            <span className="text-xs text-gray-400">Equipos</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            <span className="text-xs text-gray-400">Personas</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                            <span className="text-xs text-gray-400">Flujos</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                            <span className="text-xs text-gray-400">Activos</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                            <span className="text-xs text-gray-400">Objetivos</span>
                        </div>
                        <div className="mx-2 border-l border-gray-600"></div>
                        <div className="flex items-center space-x-1">
                            <svg width="16" height="4" className="inline-block">
                                <line x1="0" y1="2" x2="16" y2="2" stroke="#3b82f6" strokeWidth="2" />
                            </svg>
                            <span className="text-xs text-gray-400">MEMBER_OF</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg width="16" height="4" className="inline-block">
                                <line x1="0" y1="2" x2="16" y2="2" stroke="#f59e0b" strokeWidth="2" />
                            </svg>
                            <span className="text-xs text-gray-400">EXECUTED_BY</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg width="16" height="4" className="inline-block">
                                <line x1="0" y1="2" x2="16" y2="2" stroke="#a855f7" strokeWidth="2" />
                            </svg>
                            <span className="text-xs text-gray-400">PRODUCES</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg width="16" height="4" className="inline-block">
                                <line x1="0" y1="2" x2="16" y2="2" stroke="#d8b4fe" strokeWidth="2" />
                            </svg>
                            <span className="text-xs text-gray-400">CONSUMES</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg width="16" height="4" className="inline-block">
                                <line x1="0" y1="2" x2="16" y2="2" stroke="#ef4444" strokeWidth="2" />
                            </svg>
                            <span className="text-xs text-gray-400">CONTRIBUTES_TO</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-0">
                {/* Main Graph Area */}
                <div className="lg:col-span-3 h-full min-h-[500px]">
                    <GraphCanvas
                        data={graphData}
                        onNodeClick={setSelectedNode}
                    />
                </div>

                {/* Side Panel */}
                <div className="lg:col-span-1 bg-surface/30 border border-surface-highlight rounded-xl p-6 overflow-y-auto">
                    <h3 className="text-lg font-semibold text-white mb-4">Detalles del Nodo</h3>
                    {selectedNode ? (
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs text-gray-500 uppercase">ID</label>
                                <p className="text-white font-mono text-sm">{selectedNode.id}</p>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 uppercase">Etiqueta</label>
                                <p className="text-xl font-bold text-primary">{selectedNode.label}</p>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 uppercase">Tipo</label>
                                <span className="inline-block px-2 py-1 rounded bg-white/10 text-white text-sm mt-1">
                                    {selectedNode.type}
                                </span>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <button
                                    onClick={handleEditNode}
                                    className="w-full bg-surface-highlight hover:bg-surface-highlight/80 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    {selectedNode.type === 'ValueStream' ? 'Editar Flujo' :
                                        selectedNode.type === 'Team' ? 'Editar Equipo' :
                                            selectedNode.type === 'Person' ? 'Editar Persona' :
                                                selectedNode.type === 'DataAsset' ? 'Editar Activo' :
                                                    selectedNode.type === 'StrategicObjective' ? 'Editar Objetivo' : 'Editar Nodo'}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-400 text-sm">Selecciona un nodo en el gráfico para ver sus detalles.</p>
                    )}
                </div>
            </div>

            {isEditorOpen && (
                <FlowEditor
                    orgSlug={org.slug}
                    flowId={editingFlowId}
                    onClose={() => setIsEditorOpen(false)}
                    onSuccess={() => {
                        window.location.reload();
                    }}
                />
            )}

            {isStructureEditorOpen && (
                <StructureEditor
                    orgSlug={org.slug}
                    teamId={editingTeamId}
                    personId={editingPersonId}
                    onClose={() => setIsStructureEditorOpen(false)}
                    onSuccess={() => {
                        window.location.reload();
                    }}
                />
            )}

            {isAssetCatalogOpen && (
                <AssetCatalog
                    orgSlug={org.slug}
                    assetId={editingAssetId}
                    onClose={() => setIsAssetCatalogOpen(false)}
                    onSuccess={() => {
                        window.location.reload();
                    }}
                />
            )}

            <ObjectiveModal
                isOpen={isObjectiveModalOpen}
                onClose={() => setIsObjectiveModalOpen(false)}
                orgSlug={org.slug}
                objectiveId={editingObjectiveId}
            />
        </div>
    );
}
