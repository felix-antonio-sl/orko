'use client';

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

interface HOrgRadarProps {
    data: {
        subject: string;
        A: number;
        fullMark: number;
    }[];
}

export function HOrgRadar({ data }: HOrgRadarProps) {
    return (
        <div className="w-full h-[400px] bg-surface/30 backdrop-blur-sm border border-surface-highlight rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
            <h3 className="text-lg font-semibold text-white absolute top-4 left-6 z-10">Visualización H_org</h3>

            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="#333" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                        name="H_org"
                        dataKey="A"
                        stroke="#8b5cf6"
                        strokeWidth={3}
                        fill="#8b5cf6"
                        fillOpacity={0.3}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#161622', borderColor: '#1f1f2e', color: '#fff' }}
                        itemStyle={{ color: '#8b5cf6' }}
                    />
                </RadarChart>
            </ResponsiveContainer>

            <div className="absolute bottom-4 right-6 flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-xs text-gray-400">Estado Actual</span>
            </div>
        </div>
    );
}
