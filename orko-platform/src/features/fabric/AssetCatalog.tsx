'use client';

import { useState, useEffect } from 'react';
import { useCreateDataAsset, useDataAssets, useDataAsset, useUpdateDataAsset } from '../dashboard/hooks';

interface AssetCatalogProps {
    orgSlug: string;
    assetId?: string;
    onClose: () => void;
    onSuccess: () => void;
}

export function AssetCatalog({ orgSlug, assetId, onClose, onSuccess }: AssetCatalogProps) {
    const [name, setName] = useState('');
    const [type, setType] = useState('DOCUMENT');
    const [description, setDescription] = useState('');
    const [source, setSource] = useState('');

    const { mutate: createAsset, isPending: isCreating, error: createError } = useCreateDataAsset();
    const { mutate: updateAsset, isPending: isUpdating, error: updateError } = useUpdateDataAsset();
    const { data: assets } = useDataAssets(orgSlug);
    const { data: existingAsset } = useDataAsset(assetId);

    useEffect(() => {
        if (existingAsset) {
            setName(existingAsset.name);
            setType(existingAsset.type);
            setDescription(existingAsset.description || '');
            setSource(existingAsset.source || '');
        }
    }, [existingAsset]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (assetId) {
            updateAsset({
                id: assetId,
                input: {
                    orgSlug,
                    name,
                    type,
                    description,
                    source
                }
            }, {
                onSuccess: () => {
                    onSuccess();
                }
            });
        } else {
            createAsset({
                orgSlug,
                name,
                type,
                description,
                source
            }, {
                onSuccess: () => {
                    setName('');
                    setDescription('');
                    setSource('');
                    onSuccess();
                }
            });
        }
    };

    const isPending = isCreating || isUpdating;
    const error = createError || updateError;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-surface border border-surface-highlight rounded-xl w-full max-w-4xl overflow-hidden flex flex-col shadow-2xl h-[80vh]">
                <div className="p-6 border-b border-surface-highlight flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">
                        {assetId ? 'Editar Activo de Información' : 'Catálogo de Activos de Información'}
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar: Create New Asset */}
                    <div className="w-1/3 border-r border-surface-highlight p-6 overflow-y-auto bg-surface-highlight/5">
                        <h3 className="text-lg font-semibold text-white mb-4">{assetId ? 'Editar Activo' : 'Nuevo Activo'}</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Nombre del Activo</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                    placeholder="Ej: Base de Datos Clientes"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Tipo</label>
                                <select
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                >
                                    <option value="DOCUMENT">Documento</option>
                                    <option value="DATABASE">Base de Datos</option>
                                    <option value="API">API / Servicio</option>
                                    <option value="REPORT">Reporte / Dashboard</option>
                                    <option value="KNOWLEDGE">Conocimiento Tácito</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Fuente / Origen</label>
                                <input
                                    type="text"
                                    value={source}
                                    onChange={(e) => setSource(e.target.value)}
                                    className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                    placeholder="Ej: ERP, CRM, Excel Local"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Descripción</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full bg-surface border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary h-24"
                                    placeholder="Descripción del contenido y propósito..."
                                />
                            </div>

                            {error && (
                                <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm">
                                    Error: {error.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full bg-primary hover:bg-primary-highlight text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                            >
                                {isPending ? (assetId ? 'Actualizando...' : 'Creando...') : (assetId ? 'Actualizar Activo' : 'Registrar Activo')}
                            </button>
                        </form>
                    </div>

                    {/* Main Area: Asset List */}
                    <div className="flex-1 p-6 overflow-y-auto">
                        <h3 className="text-lg font-semibold text-white mb-4">Inventario de Activos ({assets?.length || 0})</h3>

                        {assets && assets.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {assets.map((asset: any) => (
                                    <div key={asset.id} className="bg-surface-highlight border border-gray-700 rounded-lg p-4 hover:border-primary transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-medium text-white">{asset.name}</h4>
                                            <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                                                {asset.type}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{asset.description || 'Sin descripción'}</p>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                            {asset.source || 'Fuente no especificada'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-64 text-gray-500 border-2 border-dashed border-gray-700 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                                <p>No hay activos registrados</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
