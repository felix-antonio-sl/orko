import React from 'react';

interface DecisionMatrixProps {
    hOrg: number;
    trajectory: string;
}

export function DecisionMatrix({ hOrg, trajectory }: DecisionMatrixProps) {
    // Map H_org (0-100) to Y position (bottom to top)
    // We'll use a simple 3-zone grid

    const getPosition = (score: number) => {
        // Invert Y because SVG 0 is top
        return 100 - score;
    };

    const yPos = getPosition(hOrg);

    // Complexity is hardcoded for now as we don't measure it yet
    const xPos = 50;

    return (
        <div className="relative w-full aspect-square bg-surface/30 border border-surface-highlight rounded-xl p-4 overflow-hidden">
            <h3 className="text-lg font-semibold text-white mb-2 absolute top-4 left-4 z-10">Matriz de Decisión</h3>

            {/* Grid Background */}
            <div className="absolute inset-0 p-12">
                <div className="w-full h-full border-l border-b border-gray-700 relative">
                    {/* Zones */}
                    <div className="absolute bottom-0 left-0 w-full h-[60%] bg-red-500/5 border-t border-red-500/20 flex items-end justify-end p-2">
                        <span className="text-xs text-red-500 font-bold uppercase">Survival Mode</span>
                    </div>
                    <div className="absolute bottom-[60%] left-0 w-full h-[20%] bg-yellow-500/5 border-t border-yellow-500/20 flex items-end justify-end p-2">
                        <span className="text-xs text-yellow-500 font-bold uppercase">Minimal Viable Agility</span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-[20%] bg-green-500/5 flex items-end justify-end p-2">
                        <span className="text-xs text-green-500 font-bold uppercase">Advanced / Liquid</span>
                    </div>

                    {/* Point */}
                    <div
                        className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out"
                        style={{ left: `${xPos}%`, top: `${yPos}%` }}
                    >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-surface border border-surface-highlight px-2 py-1 rounded text-xs whitespace-nowrap text-white">
                            H_org: {Math.round(hOrg)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Axis Labels */}
            <div className="absolute bottom-4 left-0 w-full text-center text-xs text-gray-500 uppercase tracking-widest">
                Complejidad del Entorno
            </div>
            <div className="absolute left-4 top-0 h-full flex items-center">
                <div className="transform -rotate-90 text-xs text-gray-500 uppercase tracking-widest whitespace-nowrap">
                    Salud Organizacional (H_org)
                </div>
            </div>
        </div>
    );
}
