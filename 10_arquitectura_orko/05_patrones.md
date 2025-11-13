# PARTE V: PATTERNS Y ANTI-PATTERNS CATÁLOGO

- [PARTE V: PATTERNS Y ANTI-PATTERNS CATÁLOGO](#parte-v-patterns-y-anti-patterns-catálogo)
  - [§1. FUNDAMENTOS PATTERNS](#1-fundamentos-patterns)
  - [§2. PATTERNS D1: ARQUITECTURA](#2-patterns-d1-arquitectura)
    - [PATTERN D1.1: TEAM TOPOLOGY ALIGNED](#pattern-d11-team-topology-aligned)
    - [PATTERN D1.2: DELEGATION LADDER](#pattern-d12-delegation-ladder)
    - [PATTERN D1.3: PURPOSE CASCADE](#pattern-d13-purpose-cascade)
  - [§3. PATTERNS D2: PERCEPCIÓN](#3-patterns-d2-percepción)
    - [PATTERN D2.1: OBSERVABLE INSTRUMENTATION](#pattern-d21-observable-instrumentation)
  - [§4. PATTERNS D3: DECISIÓN](#4-patterns-d3-decisión)
    - [PATTERN D3.1: RICE PRIORITIZATION](#pattern-d31-rice-prioritization)
    - [PATTERN D3.2: WIP LIMIT ENFORCEMENT](#pattern-d32-wip-limit-enforcement)
  - [§5. PATTERNS D4: OPERACIÓN](#5-patterns-d4-operación)
    - [PATTERN D4.1: CONTINUOUS DEPLOYMENT](#pattern-d41-continuous-deployment)
    - [PATTERN D4.2: OBSERVABILITY TRIAD](#pattern-d42-observability-triad)
    - [AP11: MATRIX ORGANIZATIONS](#ap11-matrix-organizations)
    - [AP12: PROCESS OWNERS SEPARADOS](#ap12-process-owners-separados)
    - [AP13: RAINBOW GROUPS](#ap13-rainbow-groups)
    - [AP14: ACTIVITY-BASED TEAMS](#ap14-activity-based-teams)
  - [§6. CROSS-CUTTING PATTERNS](#6-cross-cutting-patterns)
    - [PATTERN X1: HEALTH SCORE DASHBOARD](#pattern-x1-health-score-dashboard)
    - [PATTERN X2: QUARTERLY PLANNING RITUAL](#pattern-x2-quarterly-planning-ritual)
  - [§7. ANTI-PATTERNS CATÁLOGO EXTENDIDO](#7-anti-patterns-catálogo-extendido)
    - [AP1: CONWAY'S LAW IGNORED](#ap1-conways-law-ignored)
    - [AP2: AUTOMATION BLINDNESS](#ap2-automation-blindness)
    - [AP3: ORPHAN OKRS](#ap3-orphan-okrs)
    - [AP4: OBSERVABILITY THEATER](#ap4-observability-theater)
    - [AP5: HIPPO PRIORITIZATION](#ap5-hippo-prioritization)
    - [AP6: THRASHING](#ap6-thrashing)
    - [AP7: BIG BANG RELEASES](#ap7-big-bang-releases)
    - [AP8: PRINTF DEBUGGING](#ap8-printf-debugging)
    - [AP9: METRICS WITHOUT ACTION](#ap9-metrics-without-action)
    - [AP10: IVORY TOWER ARCHITECTURE](#ap10-ivory-tower-architecture)
  - [§8. REMEDIATION PLAYBOOKS](#8-remediation-playbooks)
    - [PLAYBOOK R1: LOW H\_ORG RECOVERY](#playbook-r1-low-h_org-recovery)
    - [PLAYBOOK R2: HANDOFF REDUCTION](#playbook-r2-handoff-reduction)
    - [PLAYBOOK R3: OKR ALIGNMENT](#playbook-r3-okr-alignment)
    - [PLAYBOOK R4-R6: TRANSFORMATION ROADMAP](#playbook-r4-r6-transformation-roadmap)
  - [§9. PATTERN SELECTION GUIDE](#9-pattern-selection-guide)

## §1. FUNDAMENTOS PATTERNS

```yaml
Definición_Pattern:
  "Pattern = Solución recurrente a problema común en contexto específico,
   derivada de principios diseño (Parte II) y validada empíricamente."

Origen_Derivación:
  - Base teórica: 8 Invariantes (I1-I8)
  - Operacionalización: 75 Principios Diseño (PD1-PD75)
  - Catálisis: Patterns emergen de aplicar principios
  
Estructura_Pattern:
  Por cada pattern:
    - Name: Identificador memorable
    - Context: Cuándo aplicar
    - Problem: Qué problema resuelve
    - Solution: Cómo implementar
    - Consequences: Trade-offs, efectos secundarios
    - Related_Principles: PD vinculados
    - Related_Contracts: Contratos usados
    - Verification: Cómo validar correcta aplicación
    - Anti-Pattern: Qué NO hacer

Organización_Catálogo:
  Agrupados por dominio primario:
    - D1 Patterns: Arquitectura organizacional
    - D2 Patterns: Observabilidad
    - D3 Patterns: Decisión y priorización
    - D4 Patterns: Operación y delivery
    - Cross-Cutting: Multi-dominio
```

## §2. PATTERNS D1: ARQUITECTURA

### PATTERN D1.1: TEAM TOPOLOGY ALIGNED

```yaml
Context:
  - Organización con múltiples equipos (>3 teams)
  - Flujos de valor identificados
  - Handoffs frecuentes entre equipos
  
Problem:
  "Estructura organizacional genera friction: handoffs lentos, 
   dependencies bloqueantes, comunicación overhead."
  
  Síntoma: A3_Handoff_Ratio > 30% en flujos críticos

Solution:
  
  Paso_1_Mapear_Value_Streams:
    - Identificar 3-5 flujos críticos (VSM, D4.1)
    - Calcular handoff_ratio actual
    - Identificar capacidades involucradas
    
  Paso_2_Aplicar_Conway:
    Principio: "Estructura debe reflejar arquitectura deseada"
    
    Acción:
      - Agrupar capacidades que participan mismo flujo
      - Minimizar dependencies entre equipos
      - Target: Equipo end-to-end ownership flujo
      
  Paso_3_Definir_Team_Topologies:
    Tipos (según Team Topologies - Skelton):
      
      Stream_Aligned_Team:
        - Ownership flujo valor completo
        - Cross-functional (backend, frontend, QA)
        - Long-lived, stable
        - Ejemplo: "Checkout Team" (todo checkout flow)
        
      Enabling_Team:
        - Capacita otros equipos (I4 clasificación contextual)
        - Temporal interaction
        - Ejemplo: "Platform Engineering" (habilita autonomía)
        
      Complicated_Subsystem_Team:
        - Especialización profunda área compleja
        - Ejemplo: "ML Platform Team" (algorítmicos C2+)
        
      Platform_Team:
        - Producto interno (self-service)
        - Reduce cognitive load stream teams
        - Ejemplo: "Developer Platform Team"
        
  Paso_4_Establecer_Interaction_Modes:
    - Collaboration: Trabajo conjunto (discovery phase)
    - X-as-a-Service: Consumo asíncrono (APIs)
    - Facilitation: Enabling team → Stream team
    
Consequences:
  Positivos:
    + Handoffs reducidos (target < 20%)
    + Flow efficiency aumenta
    + Autonomía equipos (faster decisions)
    + Cognitive load reducido (clear boundaries)
    
  Negativos:
    - Requiere reorg (disruptivo corto plazo)
    - Puede duplicar capacidades (trade-off)
    - Requiere madurez técnica (platform capabilities)

Related_Principles:
  - PD5: Minimizar handoffs
  - PD9: Clasificación contextual
  - PD10: Ownership explícito

Related_Contracts:
  - C1 (Capacidad): composition, role
  - C2 (Flujo): steps, handoff_count
  
Verification:
  Métricas:
    - A3_Handoff_Ratio < 20%
    - Team autonomy index > 0.80 (% decisiones sin dependencies)
    - Lead time reducido 30-50%
    
  Queries:
    - Q1 (Capacidades por flujo): Verificar ownership
    - A3 handoff metric (Parte IV)

Anti-Pattern: CONWAY'S LAW IGNORED
  
  Síntoma:
    - Estructura funcional (Frontend Dept, Backend Dept, QA Dept)
    - Flujo cruza 5+ equipos
    - Handoff_ratio > 40%
    
  Problema:
    "Estructura no alineada con flujos genera friction masivo"
    
  Consecuencias:
    - Lead time alto (90th %ile > 1 mes)
    - Blame culture (handoffs = responsabilidad diluida)
    - Calidad baja (nadie owner end-to-end)
    
  Refactoring:
    Aplicar TEAM TOPOLOGY ALIGNED (este pattern)
```

### PATTERN D1.2: DELEGATION LADDER

```yaml
Context:
  - Capacidades algorítmicas (C0-C2) operando
  - Decisión/acción delegable de humano a algorítmico
  - Confianza en algorítmico variable (trajectory)
  
Problem:
  "¿Cuándo delegar decisión/acción a capacidad algorítmica?
   Delegar muy rápido → errores costosos
   Delegar muy lento → no capturar eficiencia"
  
  Origen: I6 (Trajectory-Awareness), véase **03_invariantes.md** (I1–I8)

Solution:
  
  Progressive_Delegation_Modes:
    Basado_En: teoria_orko.md Modos M1-M6
    
    M1_Manual_Total:
      Human_Role: Ejecuta 100% acción
      Algorítmico_Role: NO participa
      Cuándo: Nueva tarea, alta criticidad, zero trajectory
      Ejemplo: Primer deployment nueva aplicación
      
    M2_Sugerencia:
      Human_Role: Decide y ejecuta
      Algorítmico_Role: Sugiere opción (human puede ignorar)
      Cuándo: Algorítmico learning, low confidence
      Ejemplo: IDE code completion (human acepta/rechaza)
      Transition: M1→M2 cuando trajectory > 10 ejecuciones
      
    M3_Recomendación:
      Human_Role: Decide (veto power)
      Algorítmico_Role: Recomienda fuertemente
      Cuándo: Confidence media, decisiones reversibles
      Ejemplo: Autoscaling recommendations (human aprueba)
      Transition: M2→M3 cuando accuracy > 70%
      
    M4_Automatización_Supervisada:
      Human_Role: Supervisa, interviene si anomalía
      Algorítmico_Role: Ejecuta automáticamente
      Cuándo: Confidence alta, monitoring robusto
      Ejemplo: Auto-deploy staging (human watches)
      Transition: M3→M4 cuando accuracy > 85% Y monitoring real-time
      
    M5_Automatización_Excepción:
      Human_Role: Interviene solo si alerta
      Algorítmico_Role: Ejecuta, alerta anomalías
      Cuándo: Confidence muy alta, low-risk
      Ejemplo: Auto-scaling production (alerta si threshold)
      Transition: M4→M5 cuando error_rate < 5% Y false_positive < 10%
      
    M6_Automatización_Completa:
      Human_Role: Audita periódicamente (post-hoc)
      Algorítmico_Role: Totalmente autónomo
      Cuándo: Confidence extrema, well-understood domain
      Ejemplo: DNS auto-remediation, cache warming
      Transition: M5→M6 cuando error_rate < 1% Y 6+ meses stable
      
  Reglas_Transición:
    
    R1_No_Saltar_Niveles:
      "NO permitido M1 → M4 directamente"
      Justificación: Confianza debe construirse gradual
      Excepción: Migración de otro sistema con trajectory comprobada
      
    R2_Rollback_Si_Degrada:
      IF accuracy degrada > 20% THEN rollback 1 nivel
      IF incident crítico THEN rollback a M1 (manual total)
      
    R3_Humano_Accountable_Siempre:
      ∀ nivel M1-M6: Human capacity_id accountable resultado (I5)
      Algorítmico NO tiene accountability legal/ética
      
  Implementación_Técnica:
    
    Metadata_Capacidad_Algorítmica:
      ```yaml
      capacity:
        id: auto-deploy-bot
        substrate: Algorítmico
        capacity_type: C1
        delegation:
          current_mode: M4
          trajectory:
            executions: 543
            success_rate: 0.92
            last_incident: 2024-10-15
          transitions:
            - from: M1, to: M2, date: 2024-01-10, reason: "10 manual deploys ok"
            - from: M2, to: M3, date: 2024-03-15, reason: "accuracy 75%"
            - from: M3, to: M4, date: 2024-06-20, reason: "accuracy 88%, monitoring live"
          accountable_capacity_id: uuid-sre-lead
      ```

Consequences:
  Positivos:
    + Safety: Delegación gradual reduce risk
    + Efficiency: Captura automation benefits progresivamente
    + Learning: Trajectory informa evolution
    + Accountability: Human always responsible (I5)
    
  Negativos:
    - Overhead: Tracking modes per capacity
    - Discipline: Requiere NO saltar niveles
    - Monitoring: M4-M6 requieren observabilidad robusta

Related_Principles:
  - PD14: Accountability humana (I5)
  - PD15: Delegación gradual
  - PD16: Trajectory tracking

Related_Contracts:
  - C1 (Capacidad): delegation metadata, accountability
  
Verification:
  Métricas:
    - % capacidades algorítmicas con delegation mode definido (target: 100%)
    - Incident rate por modo (M6 debe ser < M4)
    - Transition velocity (meses promedio M1→M6)
    
  Auditoría:
    - Review quarterly delegation levels
    - Validate no mode jumps (M1→M4+)
    - Verify accountable_capacity_id presente

Anti-Pattern: AUTOMATION BLINDNESS
  
  Síntoma:
    - Deploy algorítmico en M6 sin trajectory
    - Human NO supervisa M4-M5
    - Incident algorítmico → "no vimos venir"
    
  Problema:
    "Over-trust en automation sin validar confiabilidad"
    
  Consecuencias:
    - Incidents críticos (downtime, data loss)
    - Violación I5 (accountability diluida)
    - Loss of control (no rollback plan)
    
  Ejemplos_Reales:
    - Knight Capital (2012): $440M pérdida, algo M6 sin supervision
    - AWS S3 Outage (2017): Typo comando automatizado
    
  Refactoring:
    1. Rollback a M3 (human approval)
    2. Instrument monitoring robusto
    3. Build trajectory (≥100 executions)
    4. Progressive delegation M3→M4→M5→M6
```

### PATTERN D1.3: PURPOSE CASCADE

```yaml
Context:
  - Organización multi-nivel (individual → team → unit → org)
  - OKRs o goals definidos nivel org
  - Necesidad alineación vertical
  
Problem:
  "Equipos/individuos trabajan sin claridad cómo contribuyen a propósito org.
   Resultado: esfuerzo misaligned, motivation baja, suboptimización."
  
  Síntoma: A4_Alignment_OKRs < 60%

Solution:
  
  Estructura_Jerárquica:
    Basado_En: R11 (Propósito_Jerarquía), véase **03_invariantes.md** (I1–I8)
    
    Niveles:
      L4_Organización:
        - Scope: Company-wide
        - Horizon: Anual (visión 1-3 años)
        - Owners: C-level
        - Ejemplo: "Liderar mercado SaaS LATAM (ARR $50M)"
        
      L3_Unidad:
        - Scope: Business unit / Department
        - Horizon: Quarterly-Anual
        - Owners: VPs, Directors
        - Ejemplo: "Product: Lanzar 10 enterprise features Q1-Q4"
        - Constraint: parent_purpose_id = L4
        
      L2_Equipo:
        - Scope: Team (5-9 personas)
        - Horizon: Quarterly
        - Owners: Team Leads, Engineering Managers
        - Ejemplo: "Auth Team: Implementar SSO enterprise-grade Q1"
        - Constraint: parent_purpose_id = L3
        
      L1_Individual:
        - Scope: Persona
        - Horizon: Sprint-Quarterly
        - Owners: Individual contributor
        - Ejemplo: "Engineer: Completar SAML Okta integration Sprint 5"
        - Constraint: parent_purpose_id = L2
        
  Propiedades_Cascada:
    
    P1_Parent_Link:
      ∀ propósito (excepto L4): MUST have parent_purpose_id
      Query Q4 (Path to Root) MUST succeed
      
    P2_Contribution_Explicit:
      ∀ child purpose: explain HOW contribuye a parent
      
      Ejemplo:
        L2 "Auth Team SSO": 
          contributes_to: L3 "10 enterprise features"
          contribution: "SSO es 1 de 10 features enterprise"
          
    P3_Metrics_Aligned:
      child.key_results → parent.key_results (causal link)
      
      Ejemplo:
        Parent KR: "10 features shipped"
        Child KR: "1 feature (SSO) shipped" → contributes 10%
        
    P4_Timeline_Nested:
      child.end_date ≤ parent.end_date (no desborde)
      
  Implementación_Workshop:
    
    Fase_1_Top_Down (Planning):
      - L4 (C-level) define org OKRs (annual kick-off)
      - L3 (VPs) draft unit OKRs (alignment session)
      - Review L4 ← L3 (verify contribution)
      - Commit L3 OKRs
      
    Fase_2_Middle (Cascading):
      - L2 (Teams) draft team OKRs (team planning)
      - Review L3 ← L2 (verify contribution)
      - Commit L2 OKRs
      
    Fase_3_Bottom (Execution):
      - L1 (Individuals) draft personal OKRs (1:1s)
      - Review L2 ← L1 (verify contribution)
      - Commit L1 OKRs
      
    Duration: 2-3 semanas (inicio quarter)
    
  Tracking_Continuo:
    
    Weekly_Updates:
      - Individuals update L1 progress
      - Roll-up automático L1 → L2 (weighted avg)
      
    Bi-Weekly_Reviews:
      - Teams review L2 progress
      - Identify at-risk OKRs
      
    Monthly_Executive:
      - VPs review L3 progress con C-level
      - Adjust if needed (pivot OKRs)
      
    Quarterly_Retrospective:
      - Score final OKRs (% completed)
      - Lessons learned (qué funcionó/no)
      - Plan next quarter cascade

Consequences:
  Positivos:
    + Alignment vertical (everyone knows "why")
    + Motivation increased (purpose clarity)
    + Prioritization easier (if not aligned, defer)
    + Accountability clear (ownership per level)
    
  Negativos:
    - Overhead: Planning 2-3 semanas/quarter
    - Rigidity: Puede limitar oportunismo (tradeoff)
    - Cascading lento: Changes L4 → L1 toman semanas

Related_Principles:
  - PD11: Alineación propósitos
  - PD12: Jerarquía pull
  - PD13: Propósito rastreable

Related_Contracts:
  - C5 (Propósito): parent_id, contribution
  
Related_Artefactos:
  - D1.3 Purpose Cascade (visual)
  - D3.1 OKR Planning Canvas

Verification:
  Métricas:
    - A4_Alignment_OKRs > 85%
    - % propósitos con parent_id (target: 100% L1-L3)
    - Alignment_Score = Σ(peso_child × progress) / Σ peso
    
  Queries:
    - Q4 (Path to Root): Todo propósito alcanza L4

Anti-Pattern: ORPHAN OKRS
  
  Síntoma:
    - Teams definen OKRs sin link a org
    - OKRs individuales sin link a team
    - Q4 (Path to Root) falla
    
  Problema:
    "Trabajo desconectado de propósito org → waste"
    
  Consecuencias:
    - Suboptimización (local maxima, global suboptimal)
    - Frustración (trabajo no valorado)
    - Misalignment (conflictos entre teams)
    
  Refactoring:
    1. Audit propósitos sin parent (Q4 check)
    2. Workshopping: Link to parent o deprecate
    3. Enforce: No commit OKR sin parent_id (L1-L3)
```

## §3. PATTERNS D2: PERCEPCIÓN

### PATTERN D2.1: OBSERVABLE INSTRUMENTATION

```yaml
Context:
  - Sistema productivo operando
  - Necesidad visibilidad estado (D2 responsabilidad)
  - Limitado presupuesto observability tools
  
Problem:
  "¿Qué instrumentar para tener visibilidad sin overwhelm?
   Instrumentar todo → noise, costo alto
   Instrumentar poco → blind spots"
  
  Síntoma: P1_Coverage_Observables < 70%

Solution:
  
  Priorización_16_Observables:
    Basado_En: véase **03_invariantes.md** (I1–I8) (EX1-8, IN1-8)
    
    Tier_1_Critical (MUST have):
      Externos:
        - EX5 Feedback Clientes (NPS, CSAT, support tickets)
        - EX3 Regulatorio (compliance deadlines)
        
      Internos:
        - IN1 Velocidad Entrega (DORA lead time)
        - IN4 Calidad Outputs (defect rate, incidents)
        - IN7 Violaciones Límites (compliance, security)
        - IN8 Debt Técnico (incident frequency, hotfix rate)
        
      Justificación: Risk mitigation (customers, compliance, quality)
      
    Tier_2_Important (SHOULD have):
      Externos:
        - EX1 Demanda Clientes (pipeline, inbound leads)
        - EX4 Tecnológico (vulnerabilities, platform updates)
        
      Internos:
        - IN2 Salud Capacidades (engagement, turnover)
        - IN3 Eficiencia Flujos (flow efficiency)
        - IN5 Utilización Capacidades (idle vs overload)
        - IN6 Alineación Propósitos (OKR progress)
        
      Justificación: Performance optimization
      
    Tier_3_Nice_to_Have:
      Externos:
        - EX2 Competidores (market intelligence)
        - EX6 Disruptivo (emerging business models)
        - EX7 Social (brand sentiment)
        - EX8 Económico (market conditions)
        
      Justificación: Strategic foresight
      
  Implementación_Gradual:
    
    Fase_1 (Mes 1-2):
      - Instrument Tier 1 (6 observables críticos)
      - Manual tracking (spreadsheet)
      - Weekly review
      Target: P1_Coverage = 37.5% (6/16)
      
    Fase_2 (Mes 3-4):
      - Instrument Tier 2 (6 observables importantes)
      - Semi-automated (scripts + dashboard)
      - Bi-weekly review
      Target: P1_Coverage = 75% (12/16)
      
    Fase_3 (Mes 5-6):
      - Instrument Tier 3 (4 observables strategic)
      - Automated dashboard (real-time)
      - Monthly review
      Target: P1_Coverage = 100% (16/16)
      
  Técnicas_Instrumentación:
    
    Para_Externos:
      EX5 Feedback:
        - Source: Zendesk API, survey tools
        - Metric: NPS score, CSAT rolling avg
        - Freshness: Daily
        
      EX3 Regulatorio:
        - Source: Legal team notifications, compliance calendar
        - Metric: # upcoming deadlines próximos 90 días
        - Freshness: Weekly
        
    Para_Internos:
      IN1 Velocidad:
        - Source: GitHub commits, CI/CD timestamps
        - Metric: Lead time commit → deploy (p50, p90)
        - Freshness: Real-time
        
      IN4 Calidad:
        - Source: Incident tracking, test results
        - Metric: Defect density, incident rate
        - Freshness: Real-time
        
      IN7 Violaciones:
        - Source: SIEM logs, policy checks
        - Metric: COUNT(violations) per type
        - Freshness: Event-driven
        
  Anomaly_Detection_Setup:
    
    Statistical_Baseline:
      - Collect 4 semanas data mínimo
      - Calculate mean, stddev per observable
      - Threshold: mean ± 2σ
      
    Alerting:
      - IF value > threshold THEN log anomaly (D2.2)
      - Severity based on deviation:
        * 2-3σ: Warning
        * 3-4σ: High
        * >4σ: Critical

Consequences:
  Positivos:
    + Visibilidad incrementada (blind spots reducidos)
    + Priorización ROI (Tier 1 primero)
    + Anomaly detection temprana
    + Decision-making informado
    
  Negativos:
    - Esfuerzo instrumentación (1-2 person-months)
    - Maintenance overhead (dashboards, alerts)
    - False positives iniciales (tuning required)

Related_Principles:
  - PD19: Observabilidad completa
  - PD20: Signal vs noise

Related_Contracts:
  - C3 (Información): observable_id, freshness
  
Related_Artefactos:
  - D2.1 Dashboard 16 Observables

Verification:
  Métricas:
    - P1_Coverage > 75% (Tier 1+2 instrumentados)
    - P2_Freshness > 90% (observables actualizados)
    - P3_Latencia_Detección < 24h (anomalías detectadas rápido)

Anti-Pattern: OBSERVABILITY THEATER
  
  Síntoma:
    - Dashboard con 50+ métricas
    - Nadie mira dashboard
    - Anomalías NO detectadas (P3 latencia > 1 semana)
    
  Problema:
    "Instrumentar todo sin priorizar → information overload → no action"
    
  Consecuencias:
    - Wasted effort (dashboards no usados)
    - Blind spots (métricas críticas buried en noise)
    - Incidents NOT prevented
    
  Refactoring:
    1. Audit: ¿Qué métricas realmente se usan?
    2. Prune: Eliminar bottom 50% unused
    3. Focus: Tier 1 visible, alertado
    4. Review: Monthly relevance check
```

## §4. PATTERNS D3: DECISIÓN

### PATTERN D3.1: RICE PRIORITIZATION

```yaml
Context:
  - Portfolio de iniciativas > capacidad disponible (typical)
  - Necesidad priorización objetiva
  - Stakeholders con preferencias conflictivas
  
Problem:
  "¿Cómo priorizar iniciativas cuando todo es 'high priority'?"
  
  Síntoma: D3_Portfolio_Balance desbalanceado (todo urgent)

Solution:
  
  Framework_RICE:
    Fórmula: Score = (Reach × Impact × Confidence) / Effort
    
    Reach:
      Definición: # usuarios/clientes afectados por período
      
      Ejemplos:
        - Feature B2C: 10,000 users/month
        - Feature enterprise: 50 customers/quarter
        - Infrastructure: 100% engineering (200 people)
        
      Units: Usuarios o capacidades afectadas
      
    Impact:
      Definición: Magnitud efecto por usuario (escala 0.25-3)
      
      Escala:
        3.0 = Massive impact (game-changer, 10x improvement)
        1.0 = High impact (significativo, 3x improvement)
        0.5 = Medium impact (noticeable, 1.5x improvement)
        0.25 = Low impact (minimal, 1.1x improvement)
        
      Ejemplos:
        - SSO enterprise: 3.0 (massive - unblocks sales)
        - Performance optimization: 0.5 (medium - users notice)
        - UI polish: 0.25 (low - nice to have)
        
    Confidence:
      Definición: Certeza estimaciones (escala 0.5-1.0)
      
      Escala:
        1.0 = High confidence (validated data, clear requirements)
        0.8 = Medium confidence (some data, assumptions reasonable)
        0.5 = Low confidence (hypothesis, high uncertainty)
        
      Ejemplos:
        - Customer-requested feature: 1.0 (validated demand)
        - Optimization hypothesis: 0.8 (data suggests benefit)
        - Speculative bet: 0.5 (uncertain)
        
    Effort:
      Definición: Person-months trabajo total
      
      Incluye:
        - Development time (coding, testing)
        - Design time (UX, architecture)
        - Deployment time (migration, training)
        - Maintenance (ongoing, amortizado)
        
      Ejemplos:
        - Small feature: 0.5 person-months
        - Medium feature: 2 person-months
        - Large initiative: 10 person-months
        
  Ejemplo_Cálculo:
    
    Initiative_A_SSO:
      Reach: 50 enterprise customers
      Impact: 3.0 (massive - unblocks $2M ARR)
      Confidence: 0.8 (validated with sales)
      Effort: 3 person-months
      Score = (50 × 3.0 × 0.8) / 3 = 40
      
    Initiative_B_API:
      Reach: 200 developers
      Impact: 1.0 (high - better DX)
      Confidence: 0.8
      Effort: 6 person-months
      Score = (200 × 1.0 × 0.8) / 6 = 26.7
      
    Initiative_C_UI_Redesign:
      Reach: 10,000 users
      Impact: 0.5 (medium - aesthetics)
      Confidence: 0.5 (uncertain adoption)
      Effort: 4 person-months
      Score = (10,000 × 0.5 × 0.5) / 4 = 625
      
    Priorización: C (625) > A (40) > B (26.7)
    
  Implementación_Workflow:
    
    Input_Gathering:
      - Collect initiatives (backlog, stakeholders)
      - Workshop: Estimate RICE per initiative (2-4 horas)
      - Participants: Product, Engineering, Data
      
    Scoring:
      - Calculate RICE score per initiative
      - Sort descending (highest first)
      - Bucket: Now / Next / Later
      
    Capacity_Allocation:
      - Capacity available = Team throughput × period
      - Allocate top-scored hasta capacity full
      - Defer resto (explicit "Later")
      
    Review_Cadence:
      - Re-score quarterly (new data, context changed)
      - Add new initiatives (continuous)
      - Archive completed (track actuals vs estimates)

Consequences:
  Positivos:
    + Objectivity (formula-driven, less politics)
    + Transparency (stakeholders see scoring)
    + ROI-focused (maximize value/effort)
    + Confidence-adjusted (uncertainty accounted)
    
  Negativos:
    - Estimación required (effort uncertainty)
    - Gaming risk (inflate reach/impact)
    - Ignores dependencies (puede priorizar blocked initiative)

Related_Principles:
  - PD22: Priorización explícita
  - PD23: Portfolio balance

Related_Artefactos:
  - D3.2 Portfolio Board (RICE scores visible)

Verification:
  Métricas:
    - D3_Portfolio_Balance: 70% Now, 20% Next, 10% Later
    - D4_Execution_Rate > 70% (high-scored actually deliver value)
    - Correlation RICE_score vs actual_value delivered

Anti-Pattern: HIPPO PRIORITIZATION
  
  Síntoma:
    - Iniciativas priorizadas por "Highest Paid Person Opinion"
    - RICE score calculado pero ignorado
    - Low-RICE initiatives en "Now"
    
  Problema:
    "Decisión política override datos → suboptimal allocation"
    
  Consecuencias:
    - Low ROI (effort desperdiciado)
    - Team frustration (scoring exercise inútil)
    - Misaligned outcomes (prioridades personales vs org)
    
  Refactoring:
    1. Executive alignment: C-level commit seguir RICE
    2. Transparency: Publish scores público
    3. Override process: If override RICE, document WHY
    4. Retrospective: Compare RICE predictions vs actuals
```

### PATTERN D3.2: WIP LIMIT ENFORCEMENT

```yaml
Context:
  - Multiple iniciativas en progreso simultáneamente
  - Limited capacidad disponible
  - Lead times incrementando
  
Problem:
  "Too much work-in-progress → context switching, nothing finishes"
  
  Síntoma: D3 cycle time > 2× baseline

Solution:
  
  Calcular_WIP_Limit:
    Fórmula: WIP_max = Throughput × Lead_Time_Target
    
    Ejemplo:
      Team throughput: 4 features/quarter
      Lead time target: 4 weeks
      Period: 12 weeks
      WIP_max = 4 × (4/12) ≈ 1-2 initiatives simultáneas
      
  Enforcement_Rules:
    - IF WIP = WIP_max THEN NO new work starts
    - Finish work before starting new
    - Blocked work NO cuenta hacia WIP (parking lot)
    
  Beneficios:
    + Lead time reducido 40-60%
    + Focus increased
    + Throughput maintained or improved

Related_Principles:
  - PD24: Flow optimization

Related_Artefactos:
  - D3.2 Portfolio Board (WIP visible)

Anti-Pattern: THRASHING
  
  Síntoma: WIP = 3× capacity, nothing finishes
  Refactoring: Apply WIP limit immediately
```

## §5. PATTERNS D4: OPERACIÓN

### PATTERN D4.1: CONTINUOUS DEPLOYMENT

```yaml
Context:
  - Software delivery team
  - Testing automated
  - Rollback capability exists
  
Problem:
  "Manual deploys → slow feedback, batch risk"

Solution:
  
  Pipeline_Stages:
    1. Commit → CI (build + unit tests) < 10 min
    2. Deploy staging → E2E tests < 30 min
    3. Deploy canary 5% → monitor < 1h
    4. Deploy 100% → monitor < 4h
    
  Automated_Rollback:
    IF error_rate > 2× baseline THEN auto-rollback
    
  Beneficios:
    + DORA M1: Multiple deploys/day
    + M2: Lead time < 1 day
    + M3: Change failure < 15%

Related_Principles:
  - PD27: Fast feedback
  - PD28: Small batches

Anti-Pattern: BIG BANG RELEASES
  
  Síntoma: Monthly/quarterly deploys, high failure rate
  Refactoring: Incremental CD adoption
```

### PATTERN D4.2: OBSERVABILITY TRIAD

```yaml
Context:
  - Production system operating
  - Incidents occur
  - Root cause analysis difficult
  
Problem:
  "Can't debug production issues effectively"

Solution:
  
  Three_Pillars:
    
    Logs:
      - Structured (JSON format)
      - Contextual (trace_id, user_id)
      - Searchable (ELK, Splunk)
      
    Metrics:
      - RED (Rate, Errors, Duration)
      - USE (Utilization, Saturation, Errors)
      - Business metrics (conversions, revenue)
      
    Traces:
      - Distributed tracing (Jaeger, DataDog)
      - Request flow visibility
      - Latency breakdown per service
      
  Integration:
    - Correlation IDs link logs ↔ metrics ↔ traces
    - Single pane dashboard
    - Alert → log → trace workflow

Related_Principles:
  - PD19: Observabilidad completa

Related_Artefactos:
  - D4.2 DORA Dashboard
  - D4.3 Incident Log

Anti-Pattern: PRINTF DEBUGGING
  
  Síntoma: No structured logging, manual SSH to debug
  Refactoring: Implement triad incrementally
```

### AP11: MATRIX ORGANIZATIONS

```yaml
Origen: AOC AP1 (Matrix Organizations)

Síntoma:
  - Dual reporting: Employee → Manager funcional AND Project manager
  - Autoridad fragmentada (no unique 'A')
  - Accountability ambigua (culpan al otro)
  - Conflicto prioridades (¿quién decide?)

Problema:
  "Matrix viola P1_Entrelazamiento_A-A (autoridad-accountability separados)"

Consecuencias:
  - Decisiones lentas (escalations constantes)
  - Meetings excesivos (coordinate conflicts)
  - Stress alto (employees in middle)
  - Performance mediocre (no ownership)
  - Politics dominate (lobbying, no merit)

Manifestación_Física:
  - Calendario saturado reuniones coordinación
  - Emails CC: listas largas (CYA behavior)
  - Decision velocity <1 per week (parálisis)

Remediation:
  1. Eliminar dual reporting:
     - Feature teams (stream-aligned): Single manager, end-to-end
     - Project manager → Product owner DENTRO team (no external)
  2. Functional expertise → Guilds:
     - Informal communities practice (no reporting line)
     - Knowledge sharing, no authority
  3. RACI único:
     - Por cada outcome: Exactamente 1 'A'
     - Validate matriz compliance 100%

Related_Principles:
  - PD18: Accountability Humana (violado por matrix)
  - PD31: Cohesión Máxima (matrix baja cohesion)
```

### AP12: PROCESS OWNERS SEPARADOS

```yaml
Origen: AOC AP2 (Process Owners separate from Executors)

Síntoma:
  - "Process owner" tiene autoridad sobre proceso
  - Executors implementan pero no controlan diseño
  - Process owner optimiza proceso, ignora outcome

Problema:
  "Autoridad-Accountability split (violates PD18)"

Consecuencias:
  - Procesos complejos (owner no ejecuta, no simplifica)
  - Compliance theater (check boxes, no value)
  - Innovation killed (executors no empowered)
  - Improvements slow (owner no siente pain)

Ejemplo_Real:
  - "Deployment Process Owner" (no deploys)
  - Define proceso complejo 15 steps, 8 approvals
  - Team frustrationsufre delays, no puede mejorar
  
Remediation:
  1. Reunificar:
     - Executor team OWNS process design (live it daily)
     - "Process owner" → Coach/Consultant (no authority)
  2. Continuous improvement by doers:
     - Kaizen ownership en team ejecutor
     - Measure pain (cycle time, errors)
     - Simplify directamente (no approval external)

Related_Principles:
  - P1 AOC: Entrelazamiento A-A (restaurar)
  - PD18: Accountability Humana
```

### AP13: RAINBOW GROUPS

```yaml
Origen: AOC AP3 (Mixed Archetypos Incompatibles)

Síntoma:
  - Team mezcla arquetipos incompatibles
  - Ej: Mismo team hace innovation (α) AND operations (β)
  - Valores conflictivos (speed vs stability)

Problema:
  "Viola PD32_Incompatibilidad_α_β (y similares PD33-35)"

Consecuencias:
  - Innovation sufre (no time, risk-averse)
  - Operations sufre (instability, tech debt)
  - Team identity confused ("¿qué somos?")
  - Mediocrity: Neither innovates NOR operates well
  - Context switching alto (cognitive load)
  - Internal conflicts (prioritization fights)

Detección:
  IF Capacity.archetype combina {α,β} OR {γ,δ} OR {γ,ε} OR {δ,ε}
  THEN alert("Rainbow Group - Incompatibilidad detectada")

Remediation:
  1. Separar dominios:
     - Dominio_A (α Creadores): R&D, new products, innovation
     - Dominio_B (β Operadores): Production, SRE, operations
  2. Define interfaces claras:
     - APIs, SLAs bien documentados
     - Handoff protocols (α → β transition)
  3. NO merge:
     - Mantener separados permanentemente
     - Resist presión consolidar "por eficiencia"

Metrics_Success:
  - Archetypal_Purity (A6) > 80% per domain
  - Team identity clear (survey "somos X")
  - Performance improvement both sides (+20% typical)

Related_Principles:
  - PD32-35: Incompatibilidades arquetipos
  - PD31: Cohesión Máxima (rainbow baja cohesion)
```

### AP14: ACTIVITY-BASED TEAMS

```yaml
Origen: AOC AP4 (Activity-Based Teams)

Síntoma:
  - Teams organizados por actividad, no outcome
  - Ej: "Testing team", "Deployment team", "Frontend team"
  - Especialización funcional extrema

Problema:
  "Maximiza handoffs (opuesto PD3_Acoplamiento_Mínimo + PD31_Cohesión)"

Consecuencias:
  - Handoffs maximizados (>40% typical)
  - Wait time dominante (dependencies everywhere)
  - Accountability difusa (nadie owns outcome)
  - Optimization local, no end-to-end
  - Cycle time >>2x benchmark
  - Blame games ("not my job")
  - Customer unhappy (nobody owns experience)

Ejemplo_Típico:
  Feature request flow:
  PM → Design → Backend → Frontend → QA → DevOps → Production
  6+ handoffs, 45 días cycle time (10% touch time)

Remediation:
  1. Reorganizar por VALUE_STREAM:
     - Feature teams (stream-aligned): Own outcome end-to-end
     - Cross-functional: All skills inside team
       * PM/UX + Backend + Frontend + QA integrated
  2. Minimize handoffs:
     - Target: <20% interactions external
     - Team autonomy: >70% decisions internal
  3. Shared services → Platform teams:
     - DevOps → Platform team (self-service CI/CD)
     - Infrastructure → APIs (no tickets)

Metrics_Success:
  - H3_O3_Handoff_Waste < 20%
  - Cycle time reduction 30-50%
  - Team satisfaction +2 points (ownership)

Related_Principles:
  - PD3: Acoplamiento Mínimo (<20% handoffs)
  - PD31: Cohesión Máxima (cross-functional cohesion)
  - PD7: Relaciones Explícitas (interfaces claras)
```

## §6. CROSS-CUTTING PATTERNS

### PATTERN X1: HEALTH SCORE DASHBOARD

```yaml
Context:
  - Organization operating ORKO
  - Need holistic health visibility
  - Executive reporting required

Problem:
  "How to measure organizational health objectively?"

Solution:
  
  Implement_H_org:
    - Calculate monthly A_Score, P_Score, D_Score, O_Score
    - Aggregate H_org = weighted average
    - Dashboard visible to all
    - Trigger interventions if H_org < 70
    
  Executive_Review:
    - Monthly review with C-level
    - Drill-down on red components
    - Action plans for improvement
    - Track trends quarter-over-quarter

Related_Principles:
  - All 30 principles contribute to scores

Related_Artefactos:
  - §6 Parte IV (H_org integrado)
```

### PATTERN X2: QUARTERLY PLANNING RITUAL

```yaml
Context:
  - Quarter ending, next quarter planning
  - All 4 domains need alignment

Problem:
  "Coordinating D1-D4 planning"

Solution:
  
  3-Week_Cycle:
    
    Week_1_Retrospective:
      - Review H_org (all scores)
      - Identify problems (anomaly log review)
      - Lessons learned workshops
      
    Week_2_Strategy:
      - D3: OKR planning (cascade L4→L1)
      - D1: Structure adjustments if needed
      - D2: Observable targets next quarter
      
    Week_3_Execution:
      - D4: Capacity allocation to OKRs
      - Portfolio board population
      - Commitment ceremony
      
  Outputs:
    - Purpose Cascade updated (D1.3)
    - OKR Canvas per team (D3.1)
    - Portfolio Board committed (D3.2)
    - DORA targets set (D4.2)

Related_Principles:
  - PD11: Alignment
  - PD22: Explicit prioritization
```

## §7. ANTI-PATTERNS CATÁLOGO EXTENDIDO

### AP1: CONWAY'S LAW IGNORED

Covered in Pattern D1.1

### AP2: AUTOMATION BLINDNESS

Covered in Pattern D1.2

### AP3: ORPHAN OKRS

Covered in Pattern D1.3

### AP4: OBSERVABILITY THEATER

Covered in Pattern D2.1

### AP5: HIPPO PRIORITIZATION

Covered in Pattern D3.1

### AP6: THRASHING

Covered in Pattern D3.2

### AP7: BIG BANG RELEASES

Covered in Pattern D4.1

### AP8: PRINTF DEBUGGING

Covered in Pattern D4.2

### AP9: METRICS WITHOUT ACTION

```yaml
Síntoma:
  - Dashboards completos pero nadie actúa
  - Anomalías detectadas, no resueltas
  - P5_Actionability < 30%

Problema:
  "Observar sin intervenir → waste"

Consecuencias:
  - False sense of control
  - Problems compound
  - Team ignores metrics ("boy who cried wolf")

Remediation:
  1. Por cada métrica: Define QUIEN actúa cuando threshold
  2. Playbook: Anomaly → Owner → Action en 48h
  3. Review: Monthly actionability rate
  4. Prune: Eliminar métricas sin action owner
```

### AP10: IVORY TOWER ARCHITECTURE

```yaml
Síntoma:
  - D1 diseña estructura sin D4 input
  - Reorgs sin validar con equipos
  - A3_Handoffs empeora post-reorg

Problema:
  "Arquitectura desconectada de operación"

Consecuencias:
  - Structure-reality mismatch
  - Team frustration
  - Productivity drop post-reorg

Remediation:
  1. D1 ← D4 feedback loop (friction signals)
  2. Pilot reorgs (1 team, validate)
  3. VSM before/after comparison
  4. Rollback if A_Score degrades > 15%
```

## §8. REMEDIATION PLAYBOOKS

### PLAYBOOK R1: LOW H_ORG RECOVERY

**Nota**: Este playbook es versión conceptual. Para implementación ejecutable completa ver ../30_metodologia_orko/06_playbooks_recovery/ §2 (Manuales R1-R6).

```yaml
Trigger: H_org < 70 (Critical threshold)

Manuales_Espec\u00edficos_Metodolog\u00eda:
  - ../30_metodologia_orko/06_playbooks_recovery/P01_low_h_org_recovery.md §2.1: Manual R1 (Recuperación Salud General, 4 fases, 12-16 sem)
  - ../30_metodologia_orko/06_playbooks_recovery/P02_handoff_reduction.md §2.2: Manual R2 (Reducción Traspasos, VSM, 6-8 sem)
  - ../30_metodologia_orko/06_playbooks_recovery/P03_okr_alignment.md §2.3: Manual R3 (Alineación OKRs, Cascada, 4-6 sem)
  - ../30_metodologia_orko/06_playbooks_recovery/P04_security_remediation.md §2.4: Manual R4 (Reinicio Gobernanza, Policy-as-Code, 3-4 sem)
  - ../30_metodologia_orko/07_playbooks_transformation/P05_bounded_autonomy_m6.md §2.5: Manual R5 (Impulso Observabilidad, Data quality, 4-6 sem)
  - ../30_metodologia_orko/07_playbooks_transformation/P06_pilot_transformation.md §2.6: Manual R6 (Marco Decisión, Q1-Q6, 4-5 sem)
  
  Cada manual incluye: fases ejecutables, métricas éxito, templates, roles, timelines

Steps_Conceptuales:
  
  1. Diagnose (Week 1):
     - Identify lowest score (A/P/D/O)
     - Drill down components
     - Root cause (5 Whys)
     - Seleccionar manual(es) aplicable(s)
     
  2. Stabilize (Week 2-4):
     - FREEZE new initiatives (PD30)
     - Focus bottleneck domain
     - Daily standups on recovery
     
  3. Intervene (Week 5-8):
     - Apply manual específico (R1-R6)
     - Measure improvement weekly
     - Adjust if not improving
     
  4. Validate (Week 9-12):
     - Re-calculate H_org
     - IF ≥ 70 THEN exit recovery mode
     - ELSE repeat cycle

Success_Criteria:
  - H_org ≥ 70 sustained 2 months
  - No component < 60
```

### PLAYBOOK R2: HANDOFF REDUCTION

```yaml
Trigger: A3_Handoff_Ratio > 30%

Steps:
  
  1. Map (Week 1):
     - VSM 3 critical flows (D4.1)
     - Identify all handoffs
     - Calculate waste per handoff
     
  2. Analyze (Week 2):
     - Classify handoffs:
       * Eliminable (move capacity to same team)
       * Reducible (async integration)
       * Necessary (different expertise)
       
  3. Restructure (Week 3-4):
     - Apply Team Topology pattern (D1.1)
     - Move capacities to reduce handoffs
     - Define new team boundaries
     
  4. Verify (Week 5-8):
     - Re-measure handoff ratio
     - Target: < 20%
     - Monitor flow efficiency improvement

Success_Criteria:
  - A3 < 20%
  - Flow efficiency +20%
```

### PLAYBOOK R3: OKR ALIGNMENT

```yaml
Trigger: A4_Alignment < 70%

Steps:
  
  1. Audit (Week 1):
     - Query Q4 all purposes
     - Identify orphans (no parent)
     - Identify conflicts (competing goals)
     
  2. Workshop (Week 2):
     - Facilitated cascade session
     - Link orphans to parents
     - Resolve conflicts
     
  3. Commit (Week 3):
     - Leadership approval cascade
     - Publish OKR tree visible
     - Update Portfolio board
     
  4. Track (Ongoing):
     - Weekly progress updates
     - Monthly alignment score
     - Quarterly refresh

Success_Criteria:
  - A4 > 85%
  - 0 orphan OKRs
  - Path to root 100%
```

### PLAYBOOK R4-R6: TRANSFORMATION ROADMAP

```yaml
R4_PILOT_TRANSFORMATION:
  Trigger: H_org ≥ 70 AND readiness assessment passed
  
  Objetivo:
    Validar ORKO approach en value stream aislado, bajo riesgo
    
  Duración: 12-16 semanas
  
  Fases_Clave:
    - Selection (Week 1-2): Criterios pilot (criticidad media, willing team)
    - Design (Week 3-4): Target topology (AT1 stream-aligned)
    - Execution (Week 5-12): Restructure, empower, monitor
    - Validation (Week 13-16): Measure vs baseline
    
  Success_Criteria:
    - Cycle time -20%
    - Handoffs < 30% (interim target)
    - Team satisfaction >4/5
    - Stakeholders approve scale
    
  Output: Pilot validated → Proceed R5 (Scale)

R5_SCALE_TRANSFORMATION:
  Trigger: R4 successful AND C-level commitment
  
  Objetivo:
    Extender ORKO a 50-80% organización, systematize
    
  Duración: 6-9 meses
  
  Wave_Strategy:
    - Wave 1 (Month 1-3): Adjacent value streams (2-3 teams)
    - Wave 2 (Month 4-6): Core value streams (4-6 teams)
    - Wave 3 (Month 7-9): Remaining (long tail)
    
  Systemic_Changes:
    - Architecture Council deployed (governance)
    - Guilds formed (practice communities)
    - Platforms built (DevOps, Data, ML self-service)
    - Observability deployed (H_org tracking)
    
  Output: 50-80% org operating ORKO → Proceed R6 (Optimization)

R6_OPTIMIZATION_CONTINUOUS:
  Trigger: R5 completed AND H_org ≥ 70 sustained
  
  Objetivo:
    Fine-tune, institutionalize, sustain improvements
    
  Duración: 6-12 meses (transition to steady-state)
  
  Activities:
    - Kaizen velocity: >3 mejoras/quarter per stream
    - Platform maturity: v2+ iterations
    - Culture embedding: Principles in performance reviews
    - Advanced patterns: Complicated Subsystems (AT4) where needed
    
  Sustainability:
    - Internal capability (no external consultants)
    - Architecture Council self-sustaining
    - Automated governance (Policy Engine)
    
  Success_Criteria:
    - H_org > 80 sustained 6 months
    - All dimensions >70
    - Kaizen velocity high
    - Self-sustaining operations

Total_Timeline_R4-R6: 24-36 meses (pilot → optimization)

Related_Documents:
- ../30_metodologia_orko/README.md: Detalles completos playbooks transformación
  - Fase 0 Assessment: Ver L1_Assessment_ORKO (metodología)
```

## §9. PATTERN SELECTION GUIDE

```yaml
Decision_Tree:

  IF H_org < 70:
    → Apply PLAYBOOK R1 (Recovery)
    
  IF A3_Handoffs > 30%:
    → Apply PATTERN D1.1 (Team Topology)
    → Apply PLAYBOOK R2 (Handoff Reduction)
    
  IF A4_Alignment < 70%:
    → Apply PATTERN D1.3 (Purpose Cascade)
    → Apply PLAYBOOK R3 (OKR Alignment)
    
  IF P1_Coverage < 75%:
    → Apply PATTERN D2.1 (Observable Instrumentation)
    
  IF D3_Balance broken:
    → Apply PATTERN D3.1 (RICE Prioritization)
    
  IF D3 cycle time high:
    → Apply PATTERN D3.2 (WIP Limit)
    
  IF O1_FlowEfficiency < 40%:
    → Apply PATTERN D4.1 (Value Stream Map + optimize)
    
  IF M2_LeadTime > target:
    → Apply PATTERN D4.1 (Continuous Deployment)
    
  IF M4_MTTR > 1 day:
    → Apply PATTERN D4.2 (Observability Triad)
```
