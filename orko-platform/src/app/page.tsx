'use client';

import { useEffect } from 'react';
import { HOrgRadar } from '@/features/dashboard/HOrgRadar';
import { AssessmentForm } from '@/features/assessment/AssessmentForm';
import { useOrganization } from '@/features/dashboard/hooks';

export default function DashboardPage() {
  // Hardcoded slug for MVP - in real app this comes from context/route
  const { data: org, isLoading, error } = useOrganization('generic-corp');

  if (isLoading) return <div className="text-white">Cargando datos de la organización...</div>;
  if (error) return <div className="text-red-500">Error al cargar datos: {JSON.stringify(error)}</div>;
  if (!org) return <div className="text-white">Organización no encontrada. Asegúrate de crearla en la base de datos.</div>;

  const hOrg = org.health?.score || 0;
  const scores = {
    arch: org.health?.dimensions.find(d => d.dimension === 'Architecture')?.value || 0,
    proc: org.health?.dimensions.find(d => d.dimension === 'Processes')?.value || 0,
    data: org.health?.dimensions.find(d => d.dimension === 'Data')?.value || 0,
    ops: org.health?.dimensions.find(d => d.dimension === 'Operation')?.value || 0,
  };

  const getHealthGate = (score: number) => {
    if (score < 60) return { label: 'G1: Crítico', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' };
    if (score < 70) return { label: 'G2: Riesgo', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' };
    if (score < 80) return { label: 'G3: Estable', color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' };
    return { label: 'G4: Óptimo', color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' };
  };

  const gate = getHealthGate(hOrg);

  const radarData = [
    { subject: 'Arquitectura', A: scores.arch, fullMark: 100 },
    { subject: 'Procesos', A: scores.proc, fullMark: 100 },
    { subject: 'Datos', A: scores.data, fullMark: 100 },
    { subject: 'Operación', A: scores.ops, fullMark: 100 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Salud Organizacional (H_org)</h1>
          <p className="text-gray-400 mt-1">Evaluación en tiempo real de la entropía y coherencia del sistema.</p>
        </div>
        <div className={`px-4 py-2 rounded-lg border ${gate.bg} ${gate.border} flex items-center space-x-3`}>
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase tracking-wider">Estado Actual</p>
            <p className={`text-xl font-bold ${gate.color}`}>{gate.label}</p>
          </div>
          <div className={`text-4xl font-black ${gate.color}`}>{Math.round(hOrg)}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <HOrgRadar data={radarData} />
        <AssessmentForm initialScores={scores} orgId={org.id} />
      </div>

      {/* Contextual Insights */}
      {org.strategy && (
        <div className="bg-surface/30 border border-surface-highlight rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Insights del Sistema</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-surface rounded-lg border border-surface-highlight">
              <p className="text-xs text-gray-500 uppercase">Foco Estratégico</p>
              <p className="text-lg font-medium text-ops mt-1">{org.strategy.focus}</p>
              <p className="text-sm text-gray-400 mt-2">{org.strategy.description}</p>
            </div>
            <div className="p-4 bg-surface rounded-lg border border-surface-highlight">
              <p className="text-xs text-gray-500 uppercase">Playbook Recomendado</p>
              <p className="text-lg font-medium text-primary mt-1">
                {org.strategy.playbooks[0]?.code}: {org.strategy.playbooks[0]?.name}
              </p>
              <p className="text-sm text-gray-400 mt-2">{org.strategy.playbooks[0]?.description}</p>
            </div>
            <div className="p-4 bg-surface rounded-lg border border-surface-highlight">
              <p className="text-xs text-gray-500 uppercase">Trayectoria</p>
              <p className="text-lg font-medium text-white mt-1">{org.strategy.trajectory}</p>
              <p className="text-sm text-gray-400 mt-2">
                {org.strategy.trajectory === 'SURVIVAL' ? 'Riesgo de regresión si no se aborda.' :
                  org.strategy.trajectory === 'MINIMAL' ? 'Estabilidad lograda, buscar eficiencia.' :
                    'Alta adaptabilidad y resiliencia.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
