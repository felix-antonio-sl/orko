'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface OrganizationContextType {
    currentOrgSlug: string;
    setOrganization: (slug: string) => void;
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(undefined);

export function OrganizationProvider({ children }: { children: ReactNode }) {
    const [currentOrgSlug, setCurrentOrgSlug] = useState('generic-corp');

    useEffect(() => {
        const saved = localStorage.getItem('orko-org-slug');
        if (saved) {
            setCurrentOrgSlug(saved);
        }
    }, []);

    const setOrganization = (slug: string) => {
        setCurrentOrgSlug(slug);
        localStorage.setItem('orko-org-slug', slug);
        // Force a hard reload to ensure all queries refetch with new context if needed, 
        // though react-query should handle it if keys are correct.
        // For now, let's rely on react state updates.
    };

    return (
        <OrganizationContext.Provider value={{ currentOrgSlug, setOrganization }}>
            {children}
        </OrganizationContext.Provider>
    );
}

export function useOrganizationContext() {
    const context = useContext(OrganizationContext);
    if (context === undefined) {
        throw new Error('useOrganizationContext must be used within an OrganizationProvider');
    }
    return context;
}
