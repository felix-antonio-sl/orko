# ORKO Framework

**Fundamento Riguroso para la Transformación Digital Organizacional**

[![Licencia](https://img.shields.io/badge/Licencia-Propietaria-red.svg)]()
[![Estado](https://img.shields.io/badge/Estado-Layers%200--2%20Production%20Ready-green.svg)]()
[![Origen](https://img.shields.io/badge/Origen-GORE%20Ñuble-lightgrey.svg)]()
[![Contratos](https://img.shields.io/badge/OpenAPI-3.1-brightgreen.svg)]()

---

## 🎯 ¿Qué es ORKO?

**ORKO** es un marco arquitectónico formal para transformación digital organizacional, derivado de primeros principios y validado empíricamente en el **Gobierno Regional de Ñuble, Chile**. A diferencia de frameworks ad-hoc, ORKO ofrece trazabilidad completa desde teoría fundamental hasta implementación operable.

### **Estructura en 5 Capas**

```
Teoría Pura       → Arquitectura Lógica → Tech Fabrics    → Metodología      → Plataforma Software
(Axiomas, Primitivos) (Contratos, Principios) (OpenAPI, Patterns) (18 Fases, Playbooks) (Runtime, CI/CD)
```

### **Innovaciones Clave**

1. **Framework Genoma/Fenotipo**  
   Separación explícita entre invariantes universales [GENOMA] (50 elementos: A1-A5, P1-P5, I1-I8, C1-C5, E6-E7, R14-R15, PD1-PD40) y configuraciones contextuales [FENOTIPO] (59 elementos: thresholds, tech stacks, templates). Elimina confusión "ORKO es complejo" → **Genoma ORKO = 41 elementos teóricos**, fenotipo = expresiones aplicadas.

2. **Trazabilidad Bidireccional Completa**  
   Toda decisión arquitectónica deriva formalmente desde axiomas:  
   `A1-A5 (axiomas) → P1-P5 (primitivos) → I1-I8 (invariantes) → C1-C5 (contratos) → E1-E7 (entidades) → PD1-PD76 (principios) → TF1-TF3 (tejidos) → OpenAPI 3.1 (APIs)`

3. **Ortogonalidad Verificada**  
   - **5 primitivos ortogonales** (P1-P5): Capacidad, Flujo, Información, Límite, Propósito (Teorema T2)  
   - **4 dominios ortogonales** (D1-D4): Arquitectura, Percepción, Decisión, Operación (6 pares validados)  
   - **3 tejidos ortogonales** (TF1-TF3): Capacity, Flow, Information (simplificación SIGMA 4→3)

4. **Human-AI Collaboration (I5-HAIC)**  
   Invariante [GENOMA] garantiza primacía humana explícita: toda decisión algorítmica tiene `accountable_human`, 6 modos delegación (M1-M6), explainability obligatoria (PD21), audit trails completos (E7).

5. **Autosuficiencia Semántica**  
   Layers 0+1+2 operan standalone. Referencias académicas (AOC/Meyer, Kelly/KHM, ADP/Alter) integradas como "protocolo interno" ORKO. Directorio `90_referencias_fundacionales/` opcional para profundización.

---

## 🏗️ Arquitectura: Sistema de 5 Capas

**Framework Genoma/Fenotipo**: Separación explícita entre invariantes universales ([GENOMA]) y configuraciones contextuales ([FENOTIPO]) para máxima claridad cognitiva.

```
┌─────────────────────────────────────────────────────────────┐
│ Layer 4: PLATAFORMA [FENOTIPO]                              │
│ Runtime, SDKs, CI/CD → Estado: Contratos listos (20_tejidos)│
├─────────────────────────────────────────────────────────────┤
│ Layer 3: METODOLOGÍA [FENOTIPO] 🟡 80% Completo             │
│ 18 fases WSLC + 15 playbooks → 30_metodologia_orko/         │
│ F1-F18 (Kernel+Expansion: ✅), Playbooks P01-P15: 🟡        │
├─────────────────────────────────────────────────────────────┤
│ Layer 2: TEJIDOS [GENOMA+FENOTIPO] ✅ PRODUCTION-READY       │
│ TF1 Capacity, TF2 Flow, TF3 Information                     │
│ Contratos OpenAPI 3.1 validados (96% field coverage)        │
├─────────────────────────────────────────────────────────────┤
│ Layer 1: ARQUITECTURA [GENOMA+FENOTIPO] ✅ PRODUCTION-READY  │
│ C1-C5 (contratos), E1-E7 (entidades), PD1-PD76 (principios) │
│ R1-R15 (relaciones), 20+ patterns, AP1-AP8 (anti-patterns)  │
├─────────────────────────────────────────────────────────────┤
│ Layer 0: FUNDAMENTOS [GENOMA] ✅ PRODUCTION-READY            │
│ A1-A5 (axiomas), P1-P5 (primitivos), I1-I8 (invariantes)    │
│ D1-D4 (dominios), T1-T6 (teoremas), V_org (ecuación)        │
└─────────────────────────────────────────────────────────────┘
```

**Trazabilidad Vertical (I3)**: `A1-A5 → P1-P5 → I1-I8 → C1-C5 → E1-E7 → PD1-PD76 → TF1-TF3 → OpenAPI 3.1` (100% verificada).

---

## 📂 Estructura del Repositorio

```
orko/
├── 00_fundamentos_teoricos/           # Capa 0: Teoría Pura ✅
├── 10_arquitectura_orko/              # Capa 1: Arquitectura Lógica ✅
├── 20_tejidos/                        # Capa 2: Tejidos Tecnológicos ✅
│   └── implementacion_tejidos/        #   Contratos OpenAPI validados
├── 30_metodologia_orko/               # Capa 3: Metodología Ejecutable
├── 40_implementacion_metodologia/     # Capa 4: Plataforma (En Progreso)
└── 90_referencias_fundacionales/      # Fuentes Académicas (Opcional)
```

---

## 🚀 Inicio Rápido

### 🎯 Para Tomadores de Decisión (30 min)

**Objetivo**: Comprender el núcleo [GENOMA] sin detalles de implementación.

1. **[README.md §12](#arquitectura-sistema-de-5-capas)** — Arquitectura 5 capas, framework Genoma/Fenotipo
2. **[00_fundamentos_teoricos/01_axiomas.md](00_fundamentos_teoricos/01_axiomas.md)** — 5 axiomas irreducibles (A1-A5)
3. **[00_fundamentos_teoricos/02_primitivos.md](00_fundamentos_teoricos/02_primitivos.md)** — 5 primitivos mínimos (P1-P5)
4. **[00_fundamentos_teoricos/03_invariantes.md §1-5](00_fundamentos_teoricos/03_invariantes.md)** — 8 invariantes (I1-I8: Minimalidad, Ortogonalidad, HAIC)
5. **[README.md §Estado](#estado-del-proyecto)** — Métricas de calidad y estado actual

**Resultado**: Capacidad de evaluar adecuación ORKO para contexto organizacional.

### 💻 Para Arquitectos & Metodológos (1-2 días)

**Día 1: Fundamentos + Arquitectura**

1. **Layer 0 - Teoría** (4-6 horas)
   - [00_fundamentos_teoricos/00_introduccion.md](00_fundamentos_teoricos/00_introduccion.md) — Guía completa
   - [01_axiomas.md](00_fundamentos_teoricos/01_axiomas.md) → [02_primitivos.md](00_fundamentos_teoricos/02_primitivos.md) → [03_invariantes.md](00_fundamentos_teoricos/03_invariantes.md)
   - [04_ciclo_fundamental.md](00_fundamentos_teoricos/04_ciclo_fundamental.md) — SDA (Sense-Decide-Act) + WSLC
   - [05_dominios.md](00_fundamentos_teoricos/05_dominios.md) — D1-D4 ortogonales
   - [06_teoremas_fundamentales.md](00_fundamentos_teoricos/06_teoremas_fundamentales.md) — T1-T6 validación formal

2. **Layer 1 - Arquitectura** (2-3 horas)
   - [10_arquitectura_orko/00_introduccion.md](10_arquitectura_orko/00_introduccion.md) — Guía navegación
   - [01_contratos.md](10_arquitectura_orko/01_contratos.md) — C1-C5, E6-E7 (schemas formales)
   - [02_diseño.md](10_arquitectura_orko/02_diseño.md) — PD1-PD76 principios (Genoma + Fenotipo)
   - [03_relaciones.md](10_arquitectura_orko/03_relaciones.md) — R1-R15, Q1-Q28, M1-M17

**Día 2: Tejidos + Metodología**

3. **Layer 2 - Tejidos** (3-4 horas)
   - [20_tejidos/00_introduccion_tejidos.md](20_tejidos/00_introduccion_tejidos.md) — Derivación P→TF
   - [01_TF1_capacity.md](20_tejidos/01_TF1_capacity.md) — Capacity management (M1-M6 delegation)
   - [02_TF2_flow.md](20_tejidos/02_TF2_flow.md) — Flow orchestration (E7 execution tracking)
   - [03_TF3_information.md](20_tejidos/03_TF3_information.md) — Information lifecycle (lakehouse)
   - [implementacion_tejidos/contracts/openapi/](20_tejidos/implementacion_tejidos/contracts/openapi/) — Contratos OpenAPI 3.1

4. **Layer 3 - Metodología** (2-3 horas)
   - [30_metodologia_orko/README.md](30_metodologia_orko/README.md) — 18 fases WSLC overview
   - [01_fases_initiation/](30_metodologia_orko/01_fases_initiation/) — F1-F3 (Context, Vision, Trajectory)
   - [02_fases_development/](30_metodologia_orko/02_fases_development/) — F4-F9 (Capability, Flow, State)
   - [40_implementacion_metodologia/calculadoras/](40_implementacion_metodologia/calculadoras/) — Health score, convergence tracker

**Resultado**: Capacidad de diseñar arquitectura ORKO-compliant y ejecutar metodología.

### 🔧 Para Implementadores (Referencia continua)

- **Contratos OpenAPI**: [20_tejidos/implementacion_tejidos/contracts/openapi/](20_tejidos/implementacion_tejidos/contracts/openapi/)
- **Schemas**: [40_implementacion_metodologia/dev_specs/schemas/](40_implementacion_metodologia/dev_specs/schemas/)
- **Scripts validación**: [40_implementacion_metodologia/dev_specs/scripts/](40_implementacion_metodologia/dev_specs/scripts/)
- **Anti-patterns**: [10_arquitectura_orko/05_patrones.md §6](10_arquitectura_orko/05_patrones.md) (AP1-AP8 a evitar)
- **Ejemplos casos**: [40_implementacion_metodologia/ejemplos/](40_implementacion_metodologia/ejemplos/) (startup, scaleup, enterprise)

---

## ✨ Logros Recientes (Nov 2025)

### **Milestone 1: Layers 0+1+2 Production-Ready** ✅

**Fundamentos Teóricos (Layer 0)**
- ✅ Framework Genoma/Fenotipo: 50 elementos [GENOMA] + 59 [FENOTIPO] clasificados
- ✅ Trazabilidad formal: A1-A5 → P1-P5 → I1-I8 → D1-D4 + T1-T6 (teoremas) + V_org (ecuación maestra)
- ✅ Modelo relacional: E1-E5 (primitivos), R1-R13 (relaciones fundamentales)
- ✅ Autosuficiencia semántica: ADP/ALM/KHM/Kelly integrados, 90_referencias opcional

**Arquitectura (Layer 1)**
- ✅ Contratos C1-C5: Especificaciones formales operables desde P1-P5
- ✅ Entidades extendidas: E6 (Estado Arquitectónico), E7 (Ejecución Flujo)
- ✅ Relaciones extendidas: R14 (State Transitions), R15 (Transition-Flow)
- ✅ 76 Principios PD1-PD76: 40 [GENOMA] desde I1-I8, 36 [FENOTIPO] desde AOC/Kelly/G##
- ✅ Anti-Patterns AP1-AP8: Síntomas, causas, remediation, trazabilidad completa
- ✅ Queries & Métricas: Q1-Q28 (operacionales), M1-M17 (DORA, health, governance)

**Tejidos Tecnológicos (Layer 2)**
- ✅ Arquitectura TF1-TF3: Capacity, Flow, Information (SIGMA 4 tejidos → ORKO 3 tejidos ortogonales)
- ✅ Contratos OpenAPI 3.1: TF1, TF2, TF3, E6 validados (96% field coverage)
- ✅ DRY enforcement: Tipos compartidos (DelegationMode) via base.yaml
- ✅ 0 divergencias críticas: escalation_rule, data_access_scope cerrados
- ✅ 7 gaps menores v2.1: Documentados en [DIVERGENCIAS.md](20_tejidos/implementacion_tejidos/DIVERGENCIAS.md)
- ✅ Deployment-ready: SDKs, CI/CD, validación E6/E7

### **Milestone 2: Layer 3 Metodología** 🟡 80% Completo

**18 Fases WSLC (Work System Life Cycle)**
- ✅ F1-F13: Initiation → Development → Implementation completas
- ✅ F14-F18: Operation + Evolution con §0 estable (estructura documentada)

**15 Playbooks Operacionales**
- 🟡 P01-P08: Recovery playbooks (handoff, alignment, capacity)
- 🟡 P09-P13: Governance playbooks (anti-pattern detection, compliance)
- 🟡 P14-P15: Client management & expectation setting

**Artefactos de Soporte**
- ✅ Templates: WSLC phases, playbooks, schemas
- ✅ Schemas: Context, compliance, calculadoras (health_score, convergence)
- ✅ Scripts: Validación, generación calculadoras, dependency closure
- ✅ Ejemplos: 3 casos completos (startup 50p, scaleup 200p, enterprise 2000p)

---

## 🎯 Roadmap: Próximas Fases

**Principio**: Desarrollo incremental preservando invariantes [GENOMA], extendiendo [FENOTIPO] según validación empírica.

### **Phase 1: Layer 3 Completion** 🟡 En Progreso (Q1 2026)

**Playbooks P01-P15**
- 🟡 Recovery playbooks (P01-P08): Handoff reduction, OKR alignment, capacity lifecycle
- 🟡 Governance playbooks (P09-P13): Anti-pattern detection, portfolio optimization
- 🟡 Client management (P14-P15): Expectation setting, communication protocols

**Trayectorias Contextuales**
- 🟡 Survival: Mínimo viable organizacional (H_org ≥70)
- 🟡 Minimal: Core ORKO (F1-F9, TF1-TF3)
- 🟡 Standard: Framework completo (F1-F18, P01-P15)
- 🟡 Advanced: Optimización multi-objetivo (ROI, velocity, resilience)

**Governance & Métricas**
- 🟡 Definiciones operacionales: H_org (health score), V_org (value equation), η_org (eficiencia)
- 🟡 Calculadoras ejecutables: health_score, convergence_tracker, context_decision_matrix
- 🟡 Gates de validación: Phase gates (VG1-VG4), trayectoria readiness

### **Phase 2: Layer 4 Platform** 🔴 Planned (Q2-Q3 2026)

**Runtime Implementations**
- 🔴 TF1 SDK (Python): Capacity management APIs
- 🔴 TF2 SDK (Python): Flow orchestration runtime
- 🔴 TF3 SDK (Python): Information lifecycle ops
- 🔴 E6/E7 State Engine: Architectural snapshots & execution tracking

**Platform Services**
- 🔴 CI/CD Pipeline: Automated validation (I1-I8 enforcement)
- 🔴 Observability Stack: Real-time DORA metrics (M1-M4)
- 🔴 Governance Dashboard: Multi-domain health (Q27, M5-M9)

### **Phase 3: Validación & Refinamiento** 🔴 Planned (Q4 2026)

**Validación Formal**
- 🔴 Mecanización teoremas T1-T6: TLA+ (minimalidad, ortogonalidad, completitud)
- 🔴 Model checking: Verificación invariantes I1-I8 en estados arquitectónicos E6
- 🔴 Property-based testing: Generación automática test cases desde contratos C1-C5

**Validación Empírica**
- 🔴 Caso GORE Ñuble: 18 meses operación, H_org tracking, convergence analysis
- 🔴 Benchmarks cross-industry: Comparación DORA metrics (deployment frequency, lead time, MTTR, CFR)
- 🔴 Publicación datasets: Anonymized snapshots E6, lineage graphs R5/R14, transformation trajectories

**Extensiones Regulatorias**
- 🔴 Matriz de controles: MGDE ↔ P4_Límite, GDPR ↔ TF3_Information, HIPAA ↔ TF1_Capacity
- 🔴 Gobernanza HAIC (I5): Responsabilidad legal por delegation mode (M1-M6), audit trails (E7), explainability (PD21)
- 🔴 Playbooks compliance: Incident response (P14), breach notification, rollback procedures

### **Desafíos Arquitectónicos Abiertos**

**Escalabilidad E6/E7** (Prioridad: Alta)
- Estimación storage: E6 snapshots (daily × 180 days × org_size), compresión (delta encoding)
- Políticas retención: RPO/RTO trade-offs, GDPR compliance (right to erasure)
- Performance budgets: Queries Q1-Q28 < 2s p95 (PD73), snapshot generation < 5min

**Migración Esquemas** (Prioridad: Media)
- Versionado semántico: E1-E7 schemas, backward compatibility guarantees
- Idempotencia: Migration scripts (up/down), rollback SLAs
- Blue-green deployments: Zero-downtime transitions, automated testing

---

## 📊 Estado del Proyecto

| Layer | Estado | [GENOMA] Invariantes | [FENOTIPO] Instancias | Próximos Pasos |
|-------|--------|---------------------|----------------------|----------------|
| **0: Fundamentos** | ✅ 100% | A1-A5, P1-P5, I1-I8, D1-D4, T1-T6, V_org, E1-E5, R1-R13 | H_org thresholds, SADE 16 observables, scores AOC | Mecanización TLA+ (T1-T6) |
| **1: Arquitectura** | ✅ 100% | C1-C5, E6-E7, R14-R15, PD1-PD40 | PD41-PD76, Q1-Q28, M1-M17, AP1-AP8 | Matriz controles (GDPR/HIPAA) |
| **2: Tejidos** | ✅ 96% | TF1-TF3 schemas, DelegationMode, E6/E7 APIs | OpenAPI 3.1 (tf1/tf2/tf3/e6.yaml) | SDKs Python (TF1-TF3) |
| **3: Metodología** | 🟡 80% | F1-F18 (18 fases WSLC) estructura | P01-P15 playbooks, trayectorias, calculadoras | Validación gates VG1-VG4 |
| **4: Plataforma** | 🔴 30% | Contratos deployment-ready | — | Runtime + CI/CD pipeline |

### **Métricas de Calidad**

**Coherencia Formal**
- ✅ Trazabilidad vertical: 100% (A1-A5 → P1-P5 → I1-I8 → C1-C5 → E1-E7 → PD1-PD76 → TF1-TF3 → OpenAPI)
- ✅ Ortogonalidad: P1-P5 independientes (T2), D1-D4 ortogonales (6 pares validados)
- ✅ Minimalidad: 5 axiomas irreducibles (T3), 5 primitivos necesarios y suficientes (T1)
- ✅ Completitud ontológica: P1-P5 expresan todo concepto organizacional (T1)

**Alineamiento Specs ↔ Contratos**
- ✅ TF1 Capacity: 95% field coverage (2 gaps menores v2.1)
- ✅ TF2 Flow: 95% field coverage (5 gaps menores v2.1)
- ✅ TF3 Information: 99% field coverage (0 gaps)
- ✅ E6 State: 98% field coverage (0 gaps)
- ✅ Divergencias críticas: 0 (escalation_rule ✅, data_access_scope ✅)

**Principios de Diseño**
- ✅ DRY enforcement: Tipos compartidos (base.yaml), E1-E5 reusados en E6-E7
- ✅ Autosuficiencia semántica: AOC/Kelly/KHM/ADP integrados, 90_referencias opcional
- ✅ Framework Genoma/Fenotipo: 50 elementos [GENOMA] + 59 [FENOTIPO] clasificados

**Documentación & Artefactos**
- ✅ Layers 0+1+2: 100% completo (~165KB specs + ~80KB contratos)
- 🟡 Layer 3: 80% completo (F1-F18 ✅, P01-P15 🟡, trayectorias 🟡)
- 🔴 Layer 4: 30% completo (arquitectura definida, specs listos)

---

## 🤝 Contribuciones

**Estado**: Desarrollo activo, documentación pública.

Áreas de interés para colaboración futura:

- **Verificación Formal**: Mecanización teoremas T1-T6 (TLA+, Alloy, Coq, Isabelle)
- **Validación Empírica**: Aplicación framework en nuevos contextos, publicación datasets
- **Implementación Layer 4**: SDKs Python (TF1-TF3), runtime E6/E7, CI/CD pipeline
- **Extensiones Regulatorias**: Mapeo GDPR/HIPAA/MGDE ↔ contratos ORKO

**Contacto**: Felix Sanhueza — [felix-antonio-sl/orko](https://github.com/felix-antonio-sl/orko)

---

## 📄 Licencia

**Propietaria** — © 2024-2025 Felix Sanhueza. Todos los derechos reservados.

Release open-source planificado (Apache 2.0 / MIT) post-validación formal y empírica.

---

<div align="center">

**ORKO Framework**

*Desde Primeros Principios hasta Producción, Rigurosamente.*

**Layers 0+1+2 Production-Ready** | **Layer 3 Metodología 80%** | **Noviembre 2025**

`A1-A5 → P1-P5 → I1-I8 → C1-C5 → E1-E7 → PD1-PD76 → TF1-TF3 → OpenAPI 3.1`

</div>
