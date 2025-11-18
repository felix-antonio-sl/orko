# 11_artefactos_templates – Templates y artefactos de soporte

> ⚠️ **DISCLAIMER v1.0.0**: Los archivos de categorías (`01_templates_assessment.md`, `02_templates_planning.md`, etc.) en este directorio son **ÍNDICES CONCEPTUALES VACÍOS**. Los templates REALES operativos están ubicados en `/40_implementacion_metodologia/templates/` y son completamente funcionales.  
> **Decisión arquitectónica**: Para v1.0.0, este directorio documenta la taxonomía y propósito de templates, pero el contenido ejecutable vive en Layer 4 (implementación). Ver `GAPS_DIRECTORIOS_10_13.md` GAP-D1 para detalles.

Este directorio agrupa **templates y artefactos de trabajo** que soportan la ejecución de la metodología ORKO v1.0.0 en fases F1–F18 y playbooks P01–P15.

> Importante: este directorio **no define contratos canónicos**. Los contratos viven en `VOCABULARIO_CONTROLADO.yaml`, `DEPENDENCY_GRAPH.yaml`, los schemas (`context_pattern_schema.yaml`, `playbook_schema.yaml`, etc.) y los propios playbooks P01–P15. Los templates son artefactos operativos que instancian esos contratos en contextos concretos.

---

## §0 Propósito

- **Soportar las fases WSLC F1–F18** con artefactos concretos (formularios, hojas de cálculo, tableros) que faciliten la aplicación del método en terreno.
- **Acompañar a los playbooks P01–P15** ofreciendo estructuras listas para usar (matrices, checklists, dashboards) alineadas con los contratos existentes.
- **Mantener trazabilidad con CAP-17**: las auditorías de `validation_final_report.md` (§2.4) usan este directorio como fuente para verificar que los templates existen y están cableados a fases y casos de ejemplo, sin introducir nuevos contratos.

En ORKO v1.0.0 se asume que el contenido interno de muchos templates está en estado **MVO** (mínimo viable operativo); la prioridad ha sido asegurar **estructura + wiring** más que perfeccionar cada detalle de contenido.

---

## §1 Estructura del directorio

Los templates se organizan por tipo de uso:

- `assessment/`
  - Incluye templates para levantar contexto inicial y alinear visión.
  - Ejemplos: `T01_context_assessment.yaml`, `T02_vision_statement.md`, `T03_stakeholder_matrix.csv`.
  - Se utilizan principalmente en fases de Initiation (F1–F3) y en playbooks de diagnóstico/alineamiento (P01–P03).

- `planning/`
  - Contiene artefactos para planificar capacidades, flujos y datos.
  - Ejemplos: `T04_capacity_inventory.xlsx`, `T05_vsm_template.drawio`, `T06_data_catalog.xlsx`, `T07_okr_cascade.xlsx`.
  - Se conectan con fases de Development/Implementation (F4–F6, F10–F12) y con playbooks de planificación y diseño (p.ej. P03, P10, P11).

- `execution/`
  - Templates para la coordinación y revisión del trabajo en curso.
  - Ejemplos: `T08_weekly_checkin.md`, `T09_retrospective.md`, `T10_incident_report.md`, `T11_xanpan_board.png`.
  - Soportan principalmente fases de Operation/Evolution y playbooks orientados a ejecución continua y manejo de incidentes.

- `evolution/`
  - Artefactos para documentar decisiones, historias de usuario y métricas de evolución.
  - Ejemplos: `T12_adr_template.md`, `T13_user_story.md`, `T14_planning_poker.xlsx`, `T15_dora_dashboard.json`.
  - Se relacionan con fases F6/F15/F18 y con playbooks que capitalizan aprendizaje y evolución del sistema de trabajo.

- `compliance/`
  - Templates para gestionar obligaciones regulatorias y de seguridad.
  - Ejemplos: `T16_siem_configuration.yaml`, `T17_mgde_compliance_matrix.xlsx`, `T18_privacy_checklist.xlsx`, `T19_safety_plan_template.md`, `T20_donor_reporting_template.xlsx`.
  - Se conectan con tejidos/regulaciones específicas (p.ej. MGDE, privacidad, seguridad) y con fases/playbooks que requieren trazabilidad de cumplimiento.

- `context_specific/`
  - Artefactos especializados para ciertos contextos (p.ej. hypergrowth, sector público, salud).
  - Ejemplos: `hypergrowth_capacity_model.xlsx`, `volunteer_capacity_template.xlsx`, `crisis_mode_checklist.md`, `fda_510k_application_template.md`, `sanctions_vendor_whitelist.xlsx`, `contractor_raci_matrix.csv`.
  - Se usan de forma opcional según el contexto descrito en `context.yaml` de los casos y las decisiones de trayectorias/health gates.

---

## §2 Relación con fases, playbooks y casos

- **Fases F1–F18:**
  - Los templates de `assessment/` se anclan a tareas típicas de F1–F3 (levantar contexto, visión y stakeholders).
  - `planning/` y `execution/` se usan a lo largo de F4–F12 para planificar y operar capacidades y flujos.
  - `evolution/` da soporte a fases de aprendizaje y evolución (F6, F15, F18).
  - `compliance/` y `context_specific/` se activan cuando las fases tocan riesgos regulatorios/sectoriales relevantes.

- **Playbooks P01–P15:**
  - Cada playbook puede referenciar uno o más templates de este directorio como parte de sus pasos (por ejemplo, checklists, matrices de decisión o dashboards).
  - CAP-16 y CAP-18 congelan P01–P15 como contratos; este README solo describe cómo los templates los apoyan, sin cambiar triggers ni métricas definidas en esos playbooks.

- **Casos de ejemplo:**
  - En `40_implementacion_metodologia/ejemplos/*_completo/artefactos.md` se documenta qué templates se usaron en cada caso (p.ej. `startup_50p`, `scaleup_200p`, `gore_nuble`).
  - CAP-17 (§2.4–§2.5 de `validation_final_report.md`) valida que las referencias a templates desde los casos son coherentes con este árbol de archivos.

---

## §3 Estado en ORKO v1.0.0

- El árbol de templates (`assessment/`, `planning/`, `execution/`, `evolution/`, `compliance/`, `context_specific/`) está **consolidado a nivel de nombres y rutas** y fue auditado en CAP-17 como parte de `validation_final_report.md`.
- Muchos archivos son **placeholders operativos** (contenido mínimo o aún por refinar); esto es aceptable para ORKO v1.0.0 bajo CAP-19 siempre que:
  - No se introduzcan nuevas métricas fuera del VOCAB.
  - No se modifiquen contratos de fases/playbooks/health gates.
  - Cualquier gap de profundidad se documente como backlog en `validation_final_report.md` §5.
- La evolución futura de estos templates (contenido más rico, ejemplos, variantes por contexto) deberá pasar por nuevos CAP post‑1.0.0, manteniendo alineamiento con el kernel y con los contratos vigentes.

# 11_artefactos_templates – Templates y artefactos clave

Este bloque agrupa los **templates y artefactos de trabajo** que dan soporte a las fases WSLC (F1–F18), a los playbooks P01–P15 y a los casos de `40_implementacion_metodologia/ejemplos/*_completo/`.

En ORKO **v1.0.0**, los templates se materializan principalmente en:

- `40_implementacion_metodologia/templates/assessment/` – Templates de evaluación inicial (ej. T01_context_assessment, T02_vision_statement, T03_stakeholder_matrix).
- `40_implementacion_metodologia/templates/planning/` – Herramientas de planificación (ej. inventario de capacidad, VSM, data catalog, OKR cascade).
- `40_implementacion_metodologia/templates/execution/` – Soporte a la ejecución (check-ins, retros, incidentes, tableros de trabajo).
- `40_implementacion_metodologia/templates/evolution/` – Artefactos para decisiones y aprendizaje (ADR template, user stories, dinámicas de planificación, dashboards).
- `40_implementacion_metodologia/templates/compliance/` – Plantillas ligadas a cumplimiento regulatorio/contextos con alta exigencia (matrices MGDE, checklists de privacidad, safety plans, reporting donantes).
- `40_implementacion_metodologia/templates/context_specific/` – Templates contextuales que complementan los anteriores (checklists de crisis, matrices RACI específicas, plantillas de capacidad voluntaria, etc.).

Los templates se conectan con las fases y playbooks a través de los contratos existentes (sin cambiarlos):

- F1 usa `T01_context_assessment.yaml` como artefacto principal para levantar el perfil de contexto.
- F3 se apoya en templates y calculadoras de contexto (`context_decision_matrix.xlsx`, plantillas de trayectorias) para decidir entre `Survival`/`Minimal`/`Avanzada`.
- F7/F9 usan templates de planificación (OKR cascade, ADR) para aterrizar decisiones estratégicas en artefactos concretos.
- F13/F15/F16/F17 se apoyan en plantillas y dashboards para monitorear H_org, registrar aprendizajes y ajustar trayectorias.

Las auditorías de CAP-17/CAP-19 revisan este bloque desde dos ángulos:

- **Estructura y wiring:** validar que el árbol de templates T01–T20 existe en `40_implementacion_metodologia/templates/` y que su uso declarado en fases/playbooks/casos es coherente con los contratos actuales.
- **Evidencia en casos:** comprobar que, en los casos revisados (`startup_50p`, `scaleup_200p`, `gore_nuble`), los templates referenciados en `artefactos.md` existen realmente y son razonables para el contexto (assessment, planning, compliance, etc.).

Este README no introduce nuevos contratos ni IDs; solo describe el rol de los templates ya presentes y remite a:

- `40_implementacion_metodologia/templates/` para el detalle de archivos.
- `40_implementacion_metodologia/CHANGELOG.md` y `30_metodologia_orko/17_validacion_final/validation_final_report.md` para el alcance y las limitaciones de ORKO v1.0.0 en materia de templates y artefactos.

