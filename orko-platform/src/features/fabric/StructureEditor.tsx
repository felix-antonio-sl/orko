'use client';

import { useState, useMemo, useEffect } from 'react';
import { useCreateTeam, useCreatePerson, useCapacities, useAddMemberToTeam, useTeam, usePerson, useUpdateTeam, useUpdatePerson } from '../dashboard/hooks';

interface StructureEditorProps {
    orgSlug: string;
    teamId?: string;
    personId?: string;
    onClose: () => void;
    onSuccess: () => void;
}

export function StructureEditor({ orgSlug, teamId, personId, onClose, onSuccess }: StructureEditorProps) {
    const [activeTab, setActiveTab] = useState<'TEAM' | 'PERSON' | 'ASSIGNMENT'>(
        teamId ? 'TEAM' : personId ? 'PERSON' : 'TEAM'
    );

    // Team State
    const [teamName, setTeamName] = useState('');
    const [teamType, setTeamType] = useState('SQUAD');
    const [teamDescription, setTeamDescription] = useState('');

    // Person State
    const [personName, setPersonName] = useState('');
    const [personRole, setPersonRole] = useState('');
    const [personEmail, setPersonEmail] = useState('');

    // Assignment State
    const [selectedTeamId, setSelectedTeamId] = useState('');
    const [selectedPersonId, setSelectedPersonId] = useState('');

    const { mutate: createTeam, isPending: isCreatingTeam, error: createTeamError } = useCreateTeam();
    const { mutate: updateTeam, isPending: isUpdatingTeam, error: updateTeamError } = useUpdateTeam();
    const { mutate: createPerson, isPending: isCreatingPerson, error: createPersonError } = useCreatePerson();
    const { mutate: updatePerson, isPending: isUpdatingPerson, error: updatePersonError } = useUpdatePerson();
    const { mutate: addMember, isPending: isAddingMember, error: assignmentError } = useAddMemberToTeam();

    // Fetch existing data if editing
    const { data: existingTeam } = useTeam(teamId);
    const { data: existingPerson } = usePerson(personId);

    useEffect(() => {
        if (existingTeam && activeTab === 'TEAM') {
            setTeamName(existingTeam.name);
            setTeamType(existingTeam.type);
            setTeamDescription(existingTeam.description || '');
        }
    }, [existingTeam, activeTab]);

    useEffect(() => {
        if (existingPerson && activeTab === 'PERSON') {
            setPersonName(existingPerson.name);
            setPersonRole(existingPerson.role);
            setPersonEmail(existingPerson.email || '');
        }
    }, [existingPerson, activeTab]);

    const { data: capacities } = useCapacities(orgSlug);

    const teams = useMemo(() => capacities?.filter((c: any) => c.type === 'Team') || [], [capacities]);
    const people = useMemo(() => capacities?.filter((c: any) => c.type === 'Person') || [], [capacities]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (activeTab === 'TEAM') {
            if (teamId) {
                updateTeam({
                    id: teamId,
                    input: {
                        orgSlug,
                        name: teamName,
                        type: teamType,
                        description: teamDescription
                    }
                }, {
                    onSuccess: () => onSuccess()
                });
            } else {
                createTeam({
                    orgSlug,
                    name: teamName,
                    type: teamType,
                    description: teamDescription
                }, {
                    onSuccess: () => onSuccess()
                });
            }
        } else if (activeTab === 'PERSON') {
            if (personId) {
                updatePerson({
                    id: personId,
                    input: {
                        orgSlug,
                        name: personName,
                        role: personRole,
                        email: personEmail
                    }
                }, {
                    onSuccess: () => onSuccess()
                });
            } else {
                createPerson({
                    orgSlug,
                    name: personName,
                    role: personRole,
                    email: personEmail
                }, {
                    onSuccess: () => onSuccess()
                });
            }
        } else {
            if (!selectedTeamId || !selectedPersonId) return;
            addMember({
                teamId: selectedTeamId,
                personId: selectedPersonId
            }, {
                onSuccess: () => onSuccess()
            });
        }
    };

    const isSaving = isCreatingTeam || isUpdatingTeam || isCreatingPerson || isUpdatingPerson || isAddingMember;
    const error = createTeamError || updateTeamError || createPersonError || updatePersonError || assignmentError;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-surface border border-surface-highlight rounded-xl w-full max-w-2xl overflow-hidden flex flex-col shadow-2xl">
                <div className="p-6 border-b border-surface-highlight flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">
                        {teamId ? 'Editar Equipo' : personId ? 'Editar Persona' : 'Nuevo Elemento Estructural'}
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex border-b border-surface-highlight">
                    <button
                        className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'TEAM' ? 'bg-primary/10 text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        onClick={() => setActiveTab('TEAM')}
                    >
                        Equipo
                    </button>
                    <button
                        className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'PERSON' ? 'bg-primary/10 text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        onClick={() => setActiveTab('PERSON')}
                    >
                        Persona
                    </button>
                    <button
                        className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === 'ASSIGNMENT' ? 'bg-primary/10 text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        onClick={() => setActiveTab('ASSIGNMENT')}
                    >
                        Asignaciones
                    </button>
                </div>

                <div className="p-6">
                    <form id="structure-form" onSubmit={handleSubmit} className="space-y-6">
                        {activeTab === 'TEAM' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Nombre del Equipo</label>
                                    <input
                                        type="text"
                                        value={teamName}
                                        onChange={(e) => setTeamName(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                        placeholder="Ej: Squad Alpha"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Tipo de Equipo</label>
                                    <select
                                        value={teamType}
                                        onChange={(e) => setTeamType(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                    >
                                        <option value="SQUAD">Squad (Multidisciplinario)</option>
                                        <option value="CHAPTER">Chapter (Especialidad)</option>
                                        <option value="TRIBE">Tribe (Dominio de Negocio)</option>
                                        <option value="COE">CoE (Centro de Excelencia)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Descripción</label>
                                    <textarea
                                        value={teamDescription}
                                        onChange={(e) => setTeamDescription(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary h-24"
                                        placeholder="Propósito del equipo..."
                                    />
                                </div>
                            </>
                        )}

                        {activeTab === 'PERSON' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Nombre Completo</label>
                                    <input
                                        type="text"
                                        value={personName}
                                        onChange={(e) => setPersonName(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                        placeholder="Ej: Ana Silva"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Rol / Cargo</label>
                                    <input
                                        type="text"
                                        value={personRole}
                                        onChange={(e) => setPersonRole(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                        placeholder="Ej: Product Owner"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={personEmail}
                                        onChange={(e) => setPersonEmail(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                        placeholder="ana.silva@empresa.com"
                                    />
                                </div>
                            </>
                        )}

                        {activeTab === 'ASSIGNMENT' && (
                            <>
                                <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg mb-4">
                                    <p className="text-sm text-blue-200">
                                        Asigna una persona a un equipo para establecer una relación de pertenencia (MEMBER_OF).
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Equipo</label>
                                    <select
                                        value={selectedTeamId}
                                        onChange={(e) => setSelectedTeamId(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                        required
                                    >
                                        <option value="">Seleccione un equipo...</option>
                                        {teams.map((team: any) => (
                                            <option key={team.id} value={team.id}>{team.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Persona</label>
                                    <select
                                        value={selectedPersonId}
                                        onChange={(e) => setSelectedPersonId(e.target.value)}
                                        className="w-full bg-surface-highlight border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
                                        required
                                    >
                                        <option value="">Seleccione una persona...</option>
                                        {people.map((person: any) => (
                                            <option key={person.id} value={person.id}>{person.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </>
                        )}

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg text-sm">
                                Error: {error.message}
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
                        form="structure-form"
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
                            activeTab === 'TEAM' ? (teamId ? 'Actualizar Equipo' : 'Crear Equipo') :
                                activeTab === 'PERSON' ? (personId ? 'Actualizar Persona' : 'Crear Persona') : 'Asignar Miembro'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
