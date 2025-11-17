# P14 – Client Expectation Management

## Estado: mvo

### Propósito
Mitigar brechas entre expectativas de usuarios/clientes y entregables percibidos que impactan H_org.

### Trigger
- Condición primaria: "Medición de satisfacción/expectativa cruzada con H_org muestra brecha > X y drift detectado por F13"
- Ejemplo: NPS drop > 10 pts y H_org caída de 8 pts en 30 días.

### Fases relacionadas
F1, F3, F13, F16

### Entradas
- dashboards_h_org (F13)
- customer_feedback.md (TF2/TF3)
- case_instances (14_casos_uso/case_instances.yaml)

### Actividades (pasos)
1. Confirmar gap: validar datos con TF3, reproducir evidencia.  
2. Runbook de comunicación: preparar mensaje público/privado.  
3. Alineamiento interno: convocar SAC/PO/Arquitectura para acciones correctivas.  
4. Quick wins: priorizar P10/P11 si el gap técnico; P13 si es político.  
5. Cerrar con informe (customer_commitment.md) y KPI de seguimiento.

### Output
- `client_expectation_action_plan.md` 
- `communication_pack.zip` 
- `postmortem_client_expectation.md` 

### RACI
- R: Product Owner, Head of Delivery  
- A: Sponsor L1 (human)  
- C: Architecture, TF3 lead, Communications  
- I: Board governance

### Acceptance criteria
- Comunicación emitida y confirmada por stakeholder clave  
- Plan de acciones priorizado y estimado  
- Indicadores (NPS/H_org) con mejora en 30–90 días

### Notas
- Debe enlazarse con `playbook_instances.yaml` y con el dashboard de KPIs.
