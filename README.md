# ORKO Framework

**Fundamento Riguroso para la Transformación Digital Organizacional**

[![Licencia](https://img.shields.io/badge/Licencia-Propietaria-red.svg)]()
[![Estado](https://img.shields.io/badge/Estado-Layers%200--2%20Production%20Ready-green.svg)]()
[![Origen](https://img.shields.io/badge/Origen-GORE%20Ñuble-lightgrey.svg)]()
[![Contratos](https://img.shields.io/badge/OpenAPI-3.1-brightgreen.svg)]()

---

## 🎯 ¿Qué es ORKO?

ORKO es un **marco arquitectónico** para la transformación digital, nacido de la necesidad de gestionar y modernizar sistemas complejos en el **Gobierno Regional de Ñuble, Chile**. Desde este origen práctico, el proyecto pivota ambiciosamente para ofrecer un sistema formal y adaptable a cualquier organización.

A diferencia de metodologías ad-hoc, ORKO propone:

- **Fundamento teórico formal** (Axiomas, Primitivos, Invariantes).
- **Arquitectura operacional** (Contratos, Principios, Relaciones).
- **Metodología ejecutable** (Fases, Playbooks, Trayectorias).

**Innovaciones Clave:**

- **Trazabilidad bidireccional** desde axiomas hasta implementación (contratos OpenAPI).
- **Framework Genoma/Fenotipo**: Separación explícita entre invariantes arquitectónicos (genoma) y configuraciones contextuales (fenotipo).
- **Autosuficiencia semántica**: Layers 0+1+2 standalone, referencias académicas como lentes inspiracionales opcionales.

---

## 🏗️ Arquitectura: Sistema de 5 Capas

```
┌─────────────────────────────────────────────────────────────┐
│ Capa 4: PLATAFORMA                                          │
│ Implementación software, artefactos desplegables            │
│ └─ Estado: En desarrollo                                   │
├─────────────────────────────────────────────────────────────┤
│ Capa 3: METODOLOGÍA                                         │
│ 18 fases WSLC, playbooks, trayectorias, governance         │
│ └─ Estado: Diseñada (30_metodologia_orko/)                │
├─────────────────────────────────────────────────────────────┤
│ Capa 2: TEJIDOS TECNOLÓGICOS ✅ PRODUCTION-READY            │
│ TF1-TF3: Capacity, Flow, Information + Concerns Transv.    │
│ └─ 20_tejidos/ (specs + OpenAPI 3.1 validados)            │
├─────────────────────────────────────────────────────────────┤
│ Capa 1: ARQUITECTURA ✅ PRODUCTION-READY                     │
│ Contratos C1-C5, Principios PD1-PD76, Relaciones R1-R15    │
│ └─ 10_arquitectura_orko/ (anti-patterns AP1-AP8 completos)│
├─────────────────────────────────────────────────────────────┤
│ Capa 0: FUNDAMENTOS TEÓRICOS ✅ PRODUCTION-READY             │
│ Axiomas A1-A5, Primitivos P1-P5, Invariantes I1-I8         │
│ └─ 00_fundamentos_teoricos/ (Framework Genoma/Fenotipo)   │
└─────────────────────────────────────────────────────────────┘
```

**Propiedad de Trazabilidad (I3):** Trazabilidad bidireccional completa verificada: A1-A5 → P1-P5 → I1-I8 → C1-C5 → TF1-TF3 → OpenAPI.

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

### Para Ejecutivos (30 min lectura)

1. **[00_fundamentos_teoricos/01_axiomas.md](00_fundamentos_teoricos/01_axiomas.md)** — Los 5 axiomas irreducibles.
2. **[00_fundamentos_teoricos/02_primitivos.md](00_fundamentos_teoricos/02_primitivos.md)** — Los 5 primitivos mínimos.
3. **[00_fundamentos_teoricos/03_invariantes.md](00_fundamentos_teoricos/03_invariantes.md)** — Framework Genoma/Fenotipo (I5).
4. **[10_arquitectura_orko/00_introduccion.md](10_arquitectura_orko/00_introduccion.md)** — Resumen de la arquitectura.
5. **[20_tejidos/00_introduccion_tejidos.md](20_tejidos/00_introduccion_tejidos.md)** — TF1-TF3 operacionales.

### Para Arquitectos (6-8 horas)

1. **Capa 0** (00_fundamentos_teoricos/) — Framework teórico completo + Genoma/Fenotipo.
2. **Capa 1** (10_arquitectura_orko/) — C1-C5, PD1-PD76, AP1-AP8, patterns y playbooks.
3. **Capa 2** (20_tejidos/) — TF1-TF3 specs + contratos OpenAPI + validación E6/E7.
4. **90_referencias_fundacionales/** — Lentes inspiracionales (AOC, Kelly, KHM, STS) [opcional].

---

## ✨ Logros Recientes (Nov 2025)

### **Milestone: Layers 0+1+2 Production-Ready**

- ✅ **Framework Genoma/Fenotipo**: Clasificación completa de 109 elementos (50 [GENOMA] + 59 [FENOTIPO])
- ✅ **Anti-Patterns AP1-AP8**: Desarrollo completo con síntoma, problema, consecuencias, remediation y trazabilidad
- ✅ **Arquitectura TF1-TF3**: Simplificación SIGMA 4 tejidos → ORKO 3 tejidos + 2 concerns transversales
- ✅ **Autosuficiencia Semántica**: ADP/ALM/KHM integrados como protocolo interno ORKO, 90_referencias opcional
- ✅ **Contratos OpenAPI 3.1**: TF1, TF2, TF3, E6 validados con DRY enforcement (DelegationMode unificado)
- ✅ **Coherencia Vertical**: Trazabilidad bidireccional A1-A5 → P1-P5 → I1-I8 → C1-C5 → TF1-TF3 → OpenAPI verificada
- ✅ **Validación Integral**: 06_validacion_final.md + 07_architectural_state_management.md (E6) completos

**Calidad Arquitectónica:**

- **96% field coverage** specs markdown ↔ contratos OpenAPI (post-cierre gaps críticos TF2)
- **0 divergencias críticas** (escalation_rule ✅, data_access_scope ✅ cerrados)
- 7 gaps menores pendientes v2.1 (TF2: 5, TF1: 2) - documentados en [DIVERGENCIAS.md](20_tejidos/implementacion_tejidos/DIVERGENCIAS.md)
- Deployment-ready para generación SDKs y plataforma CI/CD

---

## 🎯 Roadmap y Desafíos Abiertos

ORKO es un proyecto ambicioso en desarrollo. La siguiente lista representa nuestra hoja de ruta y los desafíos que estamos abordando activamente para fortalecer el framework.

1. **Validación Formal y Empírica:**
    - **Desafío:** Las afirmaciones sobre la preservación de invariantes (ej. "100%") y los resultados empíricos (ej. `H_org` 35→72) requieren evidencia robusta.
    - **Roadmap:** Publicar artefactos de prueba formales (TLA+/Alloy), junto con los datasets y protocolos de las validaciones empíricas para garantizar la reproducibilidad y la revisión por pares.

2. **Definición de un "ORKO Mínimo Viable" (MVO):**
    - **Desafío:** El framework completo (76 principios, 5 capas) puede ser abrumador y costoso de adoptar.
    - **Roadmap:** Definir un subconjunto priorizado de contratos, principios y artefactos para las trayectorias "Mínima" y "Survival", enfocado en entregar valor rápido con una carga burocrática mínima.

3. **Escalabilidad y Coste de Estados (E6/E7):**
    - **Desafío:** La captura de snapshots arquitectónicos (E6) y trazas de ejecución (E7) puede generar un volumen de datos masivo.
    - **Roadmap:** Desarrollar una arquitectura técnica de referencia que aborde la estimación de tamaño, RPO/RTO, políticas de retención (GDPR), y estrategias de compresión para asegurar la viabilidad económica y operativa.

4. **Gobernanza de la Delegación Humano-IA (M1-M6):**
    - **Desafío:** La especificación actual de los modos de delegación (TF1) no detalla la responsabilidad legal ni los procesos de auditoría para decisiones algorítmicas.
    - **Roadmap:** Crear políticas ejecutables que definan la responsabilidad legal por modo, criterios auditables para "guardrails integrales" y playbooks de incidentes para fallos de agentes autónomos.

5. **Catálogo de Controles Regulatorios:**
    - **Desafío:** Las menciones a MGDE, GDPR e HIPAA son aspiracionales sin un mapeo técnico concreto.
    - **Roadmap:** Construir una "Matriz de Controles Regulatorios" que mapee requisitos legales a controles técnicos y organizacionales de ORKO, con evidencia de cumplimiento.

6. **Especificación Operativa de Contratos OpenAPI:** ✅ RESUELTO (Core), 🟡 Extensiones Pendientes
    - **Completado:** 
      - ✅ Contratos TF1, TF2, TF3, E6 validados y alineados 96% field coverage
      - ✅ DRY enforcement implementado (DelegationMode unificado via base.yaml)
      - ✅ Gaps críticos cerrados (escalation_rule, data_access_scope en TF2)
      - ✅ Specs actualizadas coherentes con contratos OpenAPI
    - **Pendiente v2.1:** 
      - 🟡 Modelo de errores estándar (4xx/5xx)
      - 🟡 Scopes de seguridad (OAuth/OIDC)
      - 🟡 Estrategia de versionado (semantic versioning)
      - 🟡 7 gaps menores documentados en [DIVERGENCIAS.md](20_tejidos/implementacion_tejidos/DIVERGENCIAS.md)

7. **Definiciones Operacionales de Métricas:**
    - **Desafío:** Métricas como `H_org` y `V_org` necesitan definiciones matemáticas precisas y algoritmos de cálculo transparentes.
    - **Roadmap:** Publicar la formulación exacta de las métricas clave, incluyendo tratamiento de datos ausentes, ventanas de tiempo y análisis de sensibilidad.

8. **Estrategia de Migración de Esquemas (PD74):**
    - **Desafío:** El principio de "Ruta de Migración Documentada" es teórico y necesita ser probado.
    - **Roadmap:** Desarrollar y probar una estrategia de versionado por entidad, con scripts de migración idempotentes y planes de rollback con SLAs definidos.

---

## 📊 Estado del Proyecto

| Capa | Estado | Elementos Clave | Próximos Pasos |
|------|--------|----------------|----------------|
| **Layer 0** | ✅ **Production-Ready** | A1-A5, P1-P5, I1-I8, Framework Genoma/Fenotipo | Verificación formal (TLA+) |
| **Layer 1** | ✅ **Production-Ready** | C1-C5, PD1-PD76, AP1-AP8, R1-R15, E6-E7 | Catálogo controles regulatorios |
| **Layer 2** | ✅ **Production-Ready** | TF1-TF3, Contratos OpenAPI 3.1 validados | Implementación SDKs + plataforma |
| **Layer 3** | 🟡 **Diseñada** | 18 fases WSLC, playbooks, trayectorias | Validación empírica metodología |
| **Layer 4** | 🔴 **En Desarrollo** | Arquitectura definida, contratos listos | Implementación runtime + CI/CD |

**Métricas de Calidad:**

- ✅ Coherencia vertical: 100% (trazabilidad A→P→I→C→TF→OpenAPI)
- ✅ Alineamiento specs↔OpenAPI: 96% field coverage (TF1: 95%, TF2: 95%, TF3: 99%, E6: 98%)
- ✅ Divergencias críticas: 0 (escalation_rule ✅, data_access_scope ✅ cerrados)
- ✅ Autosuficiencia semántica: Sí (90_referencias opcional)
- ✅ DRY enforcement: Sí (tipos compartidos en base.yaml)
- 📈 Completitud documentación: Layers 0+1+2 = 100%, Layer 3 = 80%, Layer 4 = 30%

---

## 🤝 Contribuciones

ORKO es un proyecto en desarrollo activo. Las contribuciones son bienvenidas, especialmente en las áreas de:

- **Verificación Formal:** Ayuda para mecanizar pruebas de teoremas (Coq, Isabelle, TLA+).
- **Casos de Uso:** Aplicación del framework en nuevos contextos y publicación de resultados.
- **Implementación de Tejidos:** Desarrollo de los paquetes de Python para los tejidos tecnológicos.

---

## 📄 Licencia

**Propietaria** — © 2024-2025 Felix Sanhueza. Todos los derechos reservados.

Se planea un futuro release bajo una licencia open-source permisiva (Apache 2.0 o MIT).

---

**ORKO** — *Desde Primeros Principios hasta Producción, Rigurosamente.*

**Última actualización**: Noviembre 2025 — Milestone: Layers 0+1+2 Production-Ready
