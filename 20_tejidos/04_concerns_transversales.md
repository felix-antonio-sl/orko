# CONCERNS TRANSVERSALES

**Primitivos:** P4_Límite, P5_Propósito  
**Status:** Propiedades cross-cutting, NO tejidos separados

---

## §1. SECURITY & LIMITS (P4)

### §1.1 Fundamento Ontológico

```yaml
Decisión_Arquitectural:
  "Security NO es tejido separado (TF6 eliminado)"
  "Security es P4.Límite aplicado TRANSVERSALMENTE a todos tejidos"
  
Razón:
  - Fuente teórica (02_primitivos.md): "Security es Límite transversal"
  - Security aplica a TF1 (capacidades), TF2 (flujos), TF3 (información)
  - Separar en tejido genera duplicación governance
  
Beneficio:
  ✓ Security by design (no bolt-on)
  ✓ Límites contextualizados por tejido
  ✓ Governance unificado
```

### §1.2 Aplicación por Tejido

```yaml
TF1_Capacity_Security:
  IAM:
    - Least privilege: Capacidad solo accede lo necesario
    - RBAC: Roles por capacity_type (C0, C1, C2, C3)
    - Delegation transparency: Algorítmico → Human accountability
    
  Guardrails (si Algorítmico):
    - Input validation: PII detection, injection prevention
    - Output validation: Schema, toxicity, faithfulness
    - Operational limits: Max cost, max time, rate limits
    - Scope limits: Allowed tools, data access, actions
    
  Compliance:
    - Audit trails: Every capacity execution logged
    - Model governance: Training data lineage, bias detection
    - Human oversight: Override mechanisms (I5_HAIC)
    
  Limits_Examples:
    - Límite_Técnico: API rate limit 1000 req/min
    - Límite_Económico: Budget $500/month per agent
    - Límite_Regulatorio: GDPR compliance for EU capacities
    - Límite_Organizacional: Approval required for C3 capacities

TF2_Flow_Security:
  Access_Control:
    - Execution permissions: Quién puede ejecutar flow
    - Step-level security: Capacidades autorizadas por step
    - HITL gates: Human approval required for critical steps
    
  Bounded_Autonomy:
    - Delegation mode (M1-M6) con límites explícitos
    - Escalation rules: Cuándo escalar a humano
    - Circuit breakers: Auto-stop si excede límites
    
  Compensation:
    - Rollback mechanisms: Revertir cambios si falla
    - Idempotency: Re-ejecutable sin efectos duplicados
    - Saga pattern: Compensaciones step-by-step
    
  Limits_Examples:
    - Límite_Operativo: Max 10 iterations multi-agent loop
    - Límite_Económico: $50 budget per workflow execution
    - Límite_Temporal: 5 min timeout per step
    - Límite_Scope: Whitelisted APIs only

TF3_Information_Security:
  Access_Control:
    - Row-level security: User solo ve sus datos
    - Column-level masking: PII oculto según role
    - Dataset permissions: RBAC on tables/collections
    
  Privacy:
    - PII detection: Automated scanning (emails, SSNs)
    - Masking: Hash, redact, tokenize, encrypt
    - Anonymization: K-anonymity, differential privacy
    - Consent management: Track user consents (GDPR)
    
  Encryption:
    - At rest: AES-256, KMS-managed keys
    - In transit: TLS 1.3, certificate pinning
    - End-to-end: For critical datasets
    
  Compliance:
    - Retention policies: Auto-delete after N days
    - Data residency: Store in specific regions (EU, US)
    - Audit logs: Immutable access history
    - Right to erasure: GDPR deletion workflows
    
  Limits_Examples:
    - Límite_Privacidad: PII masking obligatorio
    - Límite_Regulatorio: Max 90 días retención logs (GDPR)
    - Límite_Acceso: Solo analistas ven PII desmasked
    - Límite_Geográfico: EU data stays in EU
```

### §1.3 Security Score Unificado

```yaml
Security_Score = weighted_avg(
  IAM_Coverage         × 25%,  # % assets con access control
  Encryption_Coverage  × 20%,  # % data encrypted
  Compliance_Rate      × 25%,  # % policies compliant
  Incident_Rate        × 20%,  # (1 - Incidents/Ops)
  Audit_Completeness   × 10%   # % ops con audit trail
)

Threshold: ≥ 80 (más alto que otros tejidos)
Critical: Security_Score < 70 → Block critical changes

Por_Tejido:
  TF1_Security_Score: IAM capacities + Guardrails algorítmicos
  TF2_Security_Score: Flow permissions + Bounded autonomy + Compensation
  TF3_Security_Score: Data encryption + PII masking + Compliance
  
H_org_Integration:
  Security_Score → H3_Técnico (sub-component)
  Si Security_Score < 80 → H_org penalizado 20%
```

### §1.4 Security Governance Framework

```yaml
Security_Layers:
  
  Prevention:
    - Authentication: MFA, SSO, passwordless
    - Authorization: RBAC, ABAC, zero trust
    - Input validation: Injection prevention
    - Guardrails: Operational limits
    
  Detection:
    - SIEM: Log aggregation, correlation rules
    - Anomaly detection: ML-based, behavioral
    - Drift monitoring: Model performance degradation
    - PII scanning: Automated data discovery
    
  Response:
    - Incident playbooks: Documented procedures
    - Automated remediation: Circuit breakers, rollbacks
    - Escalation: HITL when confidence < threshold
    - Forensics: Immutable audit trails
    
  Recovery:
    - Backups: Immutable, air-gapped
    - Disaster recovery: RPO/RTO targets
    - Compensation: Saga rollbacks
    - Post-mortem: Root cause analysis

Security_Principles (PD_SEC):
  PD_SEC_01_Zero_Trust: "Never trust, always verify"
  PD_SEC_02_Defense_in_Depth: "Multiple layers, no single point of failure"
  PD_SEC_03_Least_Privilege: "Minimal permissions required"
  PD_SEC_04_Fail_Safe: "Secure defaults, fail closed"
  PD_SEC_05_Transparency: "Audit trails, explainability"
  PD_SEC_06_Human_Override: "Always available (I5_HAIC)"
```

---

## §2. PURPOSE & GOVERNANCE (P5)

### §2.1 Fundamento Ontológico

```yaml
Decisión_Arquitectural:
  "Purpose NO es tejido tecnológico"
  "Purpose es MECANISMO GOVERNANCE que vincula tejidos con OKRs"
  
Razón:
  - P5.Propósito DIRECCIONA otros primitivos (P1, P2, P3)
  - Purpose no es operación tech per se
  - Es sistema transversal alignment business ↔ tech
  
Implementación:
  - metodologia_orko.md: OKR system completo
  - Cada tejido: purpose linkage explícito
  - H_org: Agregación métricas tejidos → progreso OKRs
```

### §2.2 OKR Linkage por Tejido

```yaml
TF1_Capacity_Purpose:
  Ejemplo_OKR: "Mejorar time-to-market features"
  
  Linkage:
    - Capacity.purpose.linked_okrs → [okr-q1-ttm]
    - Contribución: Developer velocity (story points/sprint)
    - Métrica: TF1_Efficiency (value delivered / cost)
    
  Alignment:
    - Team OKR: "Aumentar velocity 20%"
    - Capacity: Senior developers, AI copilots
    - Resultado: Velocity aumenta → OKR progresa

TF2_Flow_Purpose:
  Ejemplo_OKR: "Reducir cycle time deployment 50%"
  
  Linkage:
    - Flow.purpose.linked_okrs → [okr-q1-cycle-time]
    - Contribución: Automated CI/CD reduce manual steps
    - Métrica: TF2_Efficiency (time saved / total time)
    
  Alignment:
    - Org OKR: "Deploy 10x/day"
    - Flow: CI/CD pipeline automated
    - Resultado: Deployment time 5min → OKR achieved

TF3_Information_Purpose:
  Ejemplo_OKR: "Decisiones data-driven en <24h"
  
  Linkage:
    - InformationAsset.purpose.linked_okrs → [okr-q1-data-driven]
    - Contribución: Dashboards tiempo real, ML predictions
    - Métrica: TF3_Freshness + TF3_Adoption
    
  Alignment:
    - Unit OKR: "90% decisiones con data"
    - Information: Real-time dashboards, predictive models
    - Resultado: Decision latency <1h → OKR progresses
```

### §2.3 Jerarquía OKRs y Cascade

```yaml
OKR_Hierarchy:
  L4_Organization:
    Example: "Liderar mercado SaaS América Latina"
    Horizon: Estratégico (3-5 años)
    Owner: CEO (Capacity.Humano, C3)
    
  L3_Unit:
    Example: "Product: Lanzar 5 features enterprise Q1"
    Horizon: Táctico (trimestre)
    Owner: VP Product (Capacity.Humano, C2-C3)
    Linked: L4
    
  L2_Team:
    Example: "Auth Team: Implementar SSO SAML"
    Horizon: Táctico (sprint)
    Owner: Engineering Manager (Capacity.Humano, C2)
    Linked: L3
    
  L1_Individual:
    Example: "Completar SAML integration con Okta"
    Horizon: Inmediato (semanas)
    Owner: Senior Dev (Capacity.Humano, C2)
    Linked: L2

Cascade_Mechanism:
  1. L4 define dirección estratégica
  2. L3 descompone en objetivos unidad
  3. L2 deriva OKRs equipos tácticos
  4. L1 asigna tareas individuales
  
  Alignment_Check:
    ∀ OKR_hijo: Contribuye a OKR_padre
    Métrica: Alignment_Score = Σ(peso × progreso) / Σ peso
    
  Tejidos_Contribution:
    - TF1: Capacidades ejecutan tareas → L1, L2
    - TF2: Flujos automatizan procesos → L2, L3
    - TF3: Información mide progreso → L3, L4
```

### §2.4 Métricas H_org y Purpose Alignment

```yaml
H_org_Formula:
  H_org = weighted_avg(
    H1_Humano       × 30%,
    H2_Arquitectura × 25%,
    H3_Técnico      × 20%,  ← Tejidos contribuyen aquí
    H4_Percepción   × 15%,
    H5_Decisión     × 10%
  )
  
H3_Técnico_Breakdown:
  H3_Técnico = weighted_avg(
    TF1_Score × 30%,
    TF2_Score × 35%,
    TF3_Score × 35%
  )
  
  Nota: Security_Score es factor en TODOS tejidos
        Si Security < 80 → H3 penalizado

Purpose_Alignment_Metric:
  
  Per_Fabric:
    TF_Purpose_Alignment = (
      Σ OKR.progress × asset_contribution
    ) / Total_OKRs_Linked
    
  Organizational:
    Purpose_Alignment_Global = weighted_avg(
      TF1_Purpose_Alignment × 30%,
      TF2_Purpose_Alignment × 35%,
      TF3_Purpose_Alignment × 35%
    )
    
  Threshold: ≥ 70%
  Alert: < 60% → "Tech not serving business objectives"
```

---

## §3. INTERFACE LAYER (UX/UI)

### §3.1 Fundamento Ontológico

```yaml
Decisión_Arquitectural:
  "UX/UI NO es tejido fundamental (TF7 eliminado)"
  "UX/UI es INTERFACE LAYER transversal (presentation)"
  
Razón:
  - UX/UI NO deriva de primitivo P1-P5 standalone
  - UX/UI es MANIFESTACIÓN de P3 (información) hacia P1.Humano (interacción)
  - Separar dificulta coherencia visual cross-tejidos
  
Analogía:
  OSI Layer 6 (Presentation) es capa, no módulo separado
  MVC View es capa transversal, no componente standalone
  
Tratamiento:
  Design System UNIFICADO sirve a TF1, TF2, TF3
  Cada tejido especifica QUÉ visualiza, Interface Layer especifica CÓMO
```

### §3.2 Design System Unificado

```yaml
Design_System:
  
  Foundation:
    Design_Tokens:
      Colors: {Primary, Secondary, Neutral, Semantic}
      Typography: {Font_families, Sizes, Weights, Line_heights}
      Spacing: {4px, 8px, 16px, 24px, 32px, 48px, 64px}
      Elevation: {Shadows, Z_index levels}
      
    Grid_System:
      Columns: 12-column grid
      Breakpoints: {Mobile: 320px, Tablet: 768px, Desktop: 1024px, Wide: 1440px}
      Gutters: 16px (mobile), 24px (desktop)
      
  Components (Atomic Design):
    Atoms:
      - Button, Input, Label, Icon, Badge, Avatar
      
    Molecules:
      - Form_Field (Label + Input + Error)
      - Search_Bar (Input + Icon + Button)
      - Card_Header (Avatar + Title + Actions)
      
    Organisms:
      - Navigation_Bar, Data_Table, Chart, Modal, Sidebar
      
    Templates:
      - Dashboard_Layout, Form_Layout, List_Detail
      
    Pages:
      - Capacity_Management, Flow_Designer, Data_Explorer
      
  Patterns_Catalog:
    Navigation: Top_nav, side_nav, breadcrumbs, tabs
    Data_Display: Tables, cards, charts, timelines
    Feedback: Toasts, modals, inline_errors, progress
    Input: Forms, autocomplete, file_upload, date_picker
```

### §3.3 Aplicación por Tejido

```yaml
TF1_Capacity_UIs:
  Páginas:
    - Capacity_Registry: Lista capacidades, filters, search
    - Capacity_Detail: Contract view, métricas, lifecycle
    - Agent_Designer: Visual config LLM agents (guardrails, tools)
    - Performance_Dashboard: Success_rate, latency, cost por capacity
    
  Componentes_Específicos:
    - Capacity_Card: Avatar, name, type (C0-C3), status badge
    - Guardrail_Config: Form para input/output validation rules
    - Delegation_Selector: M1-M6 mode picker con tooltips
    - Trajectory_Chart: Time-series success_rate, drift alerts

TF2_Flow_UIs:
  Páginas:
    - Flow_Designer: Visual DAG editor (drag-drop steps)
    - Flow_Execution_Monitor: Real-time status, logs, traces
    - HITL_Approval_Queue: Pending human approvals, context
    - Flow_Analytics: Cycle_time trends, handoff analysis
    
  Componentes_Específicos:
    - DAG_Canvas: Visual workflow con edges, step cards
    - Step_Card: Capacity icon, input/output schemas, timeout
    - HITL_Checkpoint: Human approval dialog con context
    - Circuit_Breaker_Status: Green/yellow/red indicator

TF3_Information_UIs:
  Páginas:
    - Data_Catalog: Searchable assets, lineage viewer
    - Dashboard_Builder: Drag-drop charts, filters, drill-down
    - RAG_Search: Semantic search interface con citations
    - Data_Quality_Dashboard: Quality scores, lineage gaps, alerts
    
  Componentes_Específicos:
    - Asset_Card: Schema preview, quality badge, freshness
    - Lineage_Graph: Interactive DAG upstream/downstream
    - Quality_Scorecard: Completeness, accuracy, freshness meters
    - RAG_Result: Answer + cited sources + relevance score
```

### §3.4 Accessibility (WCAG AA)

```yaml
Accessibility_Requirements:
  
  WCAG_2.1_AA_Compliance:
    Perceivable:
      - Alt text: All images, icons
      - Contrast: 4.5:1 text, 3:1 UI components
      - Responsive: Text resize up to 200% without loss
      
    Operable:
      - Keyboard nav: Tab order, focus indicators, shortcuts
      - No timing: Or user can extend, disable
      - Seizures: No flashing content > 3x/second
      
    Understandable:
      - Language: HTML lang attribute, consistent labels
      - Predictable: Consistent navigation, no surprise changes
      - Input assistance: Error messages, labels, instructions
      
    Robust:
      - Semantic HTML: Proper heading hierarchy, landmarks
      - ARIA: Labels, roles, live regions when needed
      - Compatibility: Works with assistive tech (NVDA, JAWS)
      
  Testing:
    Automated: axe-core, Lighthouse accessibility audit
    Manual: Screen reader testing, keyboard-only navigation
    Users: Testing with people with disabilities
    
  Metric:
    Accessibility_Score = (
      (Automated_issues_fixed / Total_automated_issues) × 40% +
      (Manual_test_pass_rate) × 40% +
      (User_feedback_positive_rate) × 20%
    ) × 100
    
    Target: ≥ 90%
```

### §3.5 Performance (Core Web Vitals)

```yaml
Core_Web_Vitals:
  
  LCP (Largest Contentful Paint):
    Target: < 2.5 seconds
    Measures: Loading performance
    Optimization:
      - Image optimization (WebP, lazy loading)
      - CDN for static assets
      - Server-side rendering (SSR)
      
  FID (First Input Delay):
    Target: < 100 milliseconds
    Measures: Interactivity
    Optimization:
      - Code splitting, lazy load JS
      - Minimize main thread work
      - Web workers for heavy tasks
      
  CLS (Cumulative Layout Shift):
    Target: < 0.1
    Measures: Visual stability
    Optimization:
      - Size attributes on images/videos
      - No content injection above fold
      - Font loading strategy (font-display)
      
  Performance_Score:
    Formula: AVG(LCP_pass, FID_pass, CLS_pass)
    LCP_pass = (Pages LCP < 2.5s / Total_pages) × 100
    FID_pass = (Pages FID < 100ms / Total_pages) × 100
    CLS_pass = (Pages CLS < 0.1 / Total_pages) × 100
    
    Threshold: ≥ 75% (Google "Good" threshold)
```

---

## §4. OBSERVABILITY

### §4.1 Fundamento

```yaml
Observability_Definition:
  "Capacidad de entender estado interno sistema
   observando sus outputs externos (logs, metrics, traces)"
   
Status: Cross-Cutting Concern (NO tejido)

Aplicación: TODOS tejidos deben ser observables

Pillars:
  - Logs: Structured events (JSON), context
  - Metrics: Time-series numerical data
  - Traces: Request flows cross-service
  - Alerts: Proactive notifications
```

### §4.2 Aplicación por Tejido

```yaml
TF1_Capacity_Observability:
  Logs:
    - Capacity lifecycle transitions
    - Capacity executions (start, end, errors)
    - Guardrail violations
    - Human overrides
    
  Metrics:
    - capacity.success_rate
    - capacity.latency_p50_p99
    - capacity.cost_per_execution
    - capacity.utilization
    - capacity.drift_score (si algorítmico)
    
  Traces:
    - Capacity called by which flow
    - Upstream/downstream dependencies
    
  Alerts:
    - Capacity_Down: availability < 0.95
    - Drift_Detected: performance drop > 5%
    - Budget_Exceeded: cost > planned

TF2_Flow_Observability:
  Logs:
    - Flow executions (triggered, steps, completed/failed)
    - HITL checkpoints (escalated, approved, rejected)
    - Compensation events (rollback triggered)
    
  Metrics:
    - flow.success_rate
    - flow.avg_cycle_time
    - flow.cost_per_execution
    - flow.handoff_ratio
    - flow.stp_rate
    
  Traces:
    - End-to-end flow execution (step-by-step)
    - Cross-service calls (TF1 capacities, TF3 data)
    
  Alerts:
    - Flow_Failure_Spike: error_rate > 10%
    - HITL_Timeout: human no responde
    - Budget_Exceeded: cost > limit

TF3_Information_Observability:
  Logs:
    - Data pipeline executions
    - Data quality check results
    - Access events (who, what, when)
    - PII detection events
    
  Metrics:
    - information.quality_score
    - information.freshness_age
    - information.access_count
    - information.storage_size
    - information.query_latency
    
  Traces:
    - Lineage DAG (upstream → downstream)
    - Query execution plans
    
  Alerts:
    - Quality_Degradation: score < 90
    - Freshness_SLA_Miss: age > threshold
    - PII_Unmasked: PII detected without masking
    - Storage_Quota_Exceeded: size > limit
```

### §4.3 Unified Observability Platform

```yaml
Platform_Architecture:
  
  Collection:
    Agents: OpenTelemetry collectors
    Protocols: OTLP (logs, metrics, traces unified)
    
  Storage:
    Logs: Elasticsearch, Loki
    Metrics: Prometheus, InfluxDB
    Traces: Jaeger, Tempo
    
  Visualization:
    Dashboards: Grafana (unified view)
    Alerts: Grafana Alerting, PagerDuty
    
  Analysis:
    Query: PromQL (metrics), LogQL (logs)
    Correlation: Trace_ID links logs + metrics + traces
    Anomaly_Detection: ML-based (Prometheus Anomaly Detector)
    
Unified_Dashboard:
  Views:
    - Executive: H_org, TF1_Score, TF2_Score, TF3_Score
    - TF1: Capacity health, utilization, costs
    - TF2: Flow success rates, cycle times, incidents
    - TF3: Data quality, freshness, lineage coverage
    - Security: Security_Score, incidents, compliance
```

---

**Status:** ✅ Transversal concerns especificados (Security, Purpose, Interface, Observability)
