# P15 – Adaptive Cadence

## Estado: mvo

### Propósito
Ajustar cadencias operativas frente a shocks (hypergrowth / crisis) manteniendo control de riesgo y continuidad.

### Trigger
- hypergrowth flag = true AND handoff_ratio > 0.20 OR G1/G2 activado por F13.

### Fases relacionadas
F3, F13, F15, F17

### Actividades (pasos)
1. Immediate cadence freeze: reducir WIP y establecer M1 cadence.  
2. Triage: identificar backlogs que impactan continuidad.  
3. Capacity rebalancing: invocar P10 (Capacity Gap Resolution).  
4. Communication/expectation plan (P14) si clientes afectados.  
5. Transition plan a steady cadence: roadmap de 4–8 semanas.

### Outputs
- `adaptive_cadence_policy.md`  
- `cadence_rebalancing_plan.xlsx`  
- `post_adaptation_review.md` 

### RACI
- R: Delivery Lead  
- A: PMO / Sponsor  
- C: TF1/TF2 leads, HR (if staffing changes)  
- I: Governance Board

### Acceptance criteria
- WIP reduzido > 40% en primera fase de 2 semanas o riesgo mitigado  
- Indicadores DORA/throughput recuperan tendencia esperada en 8 semanas

### Notas
- Debe estar instrumentado con SLOs en F15 (Continuous Execution).
