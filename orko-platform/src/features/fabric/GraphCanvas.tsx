'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ForceGraph2D with no SSR to avoid window issues
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
    ssr: false
});

interface GraphCanvasProps {
    data: {
        nodes: any[];
        links: any[];
    };
    onNodeClick?: (node: any) => void;
}

export function GraphCanvas({ data, onNodeClick }: GraphCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

    useEffect(() => {
        if (containerRef.current) {
            setDimensions({
                width: containerRef.current.clientWidth,
                height: containerRef.current.clientHeight
            });
        }
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full bg-surface/30 rounded-xl overflow-hidden border border-surface-highlight">
            <ForceGraph2D
                width={dimensions.width}
                height={dimensions.height}
                graphData={data}
                nodeLabel="label"
                nodeColor={(node: any) => {
                    if (node.type === 'Team') return '#3b82f6'; // Blue
                    if (node.type === 'Person') return '#10b981'; // Green
                    if (node.type === 'ValueStream') return '#f59e0b'; // Yellow
                    return '#6b7280'; // Gray
                }}
                nodeRelSize={6}
                linkColor={() => '#ffffff30'}
                onNodeClick={onNodeClick}
                backgroundColor="#00000000" // Transparent
            />
        </div>
    );
}
