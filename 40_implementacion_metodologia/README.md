# 40_implementacion_metodologia – Implementación ORKO v1.0.0

Este directorio agrupa los artefactos de **implementación práctica** de la metodología ORKO (Layer 4):

- `calculadoras/` – hojas de cálculo para apoyar decisiones clave (budget, contexto, salud organizacional, ROI, cumplimiento, convergencia).
- `dev_specs/` – especificaciones de desarrollo y validación (VOCAB, DEPENDENCY_GRAPH, scripts de cierre, schemas, checklists).
- `ejemplos/` – 6 casos completos (`*_completo/`) que instancian la metodología en contextos reales (startup, scaleup, enterprise, fintech, manufacturing, sector público).
- `templates/` – templates T01–T20 por categoría (assessment, planning, execution, evolution, compliance, context_specific).

En ORKO **v1.0.0**:

- El kernel semántico (`VOCABULARIO_CONTROLADO.yaml` + `DEPENDENCY_GRAPH.yaml`) y los scripts (`dependency_closure_script.py`) se validan en CAP-14.
- Las 6 calculadoras existen como artefactos de soporte y están cableadas a fases/kernel (F1/F3/F7/F9/F13), aunque varias actúan aún como placeholders a nivel de contenido.
- Los 6 casos en `ejemplos/` se usan como evidencia central en VG4 para evaluar invariantes `I1`–`I8`.

El detalle de cambios y alcance de la versión se documenta en:

- `CHANGELOG.md` – entradas de versión (incluyendo ORKO v1.0.0 / VG4).
- `30_metodologia_orko/17_validacion_final/validation_final_report.md` – síntesis de validación y recomendación de RELEASE.

## Release ORKO v1.0.0

Desde la perspectiva de implementación, la decisión de RELEASE ORKO v1.0.0 (CAP-21) se apoya en:

- Validación estructural del kernel y dev_specs (`dev_specs/`) en CAP-14.  
- Evidencias de los 6 casos `ejemplos/*_completo/` en CAP-15.  
- Catálogo de playbooks P01–P15 y `playbook_instances.yaml` cerrado como contrato estable (VG3, CAP-16/CAP-18).  
- Auditorías VG4 (I1–I8) documentadas en `30_metodologia_orko/17_validacion_final/validation_final_report.md` (§2–§3).

En ORKO v1.0.0 el estado de invariantes es:

- I3, I5, I6 → **PASSED**  
- I1, I2, I4, I7, I8 → **CONDITIONAL**

Los gaps asociados a invariantes `CONDITIONAL` (profundidad de templates/calculadoras/casos, completitud de `§0 FUNDAMENTO` en algunas fases y ausencia de validación empírica sistemática) se consideran **backlog conocido** post-1.0.0. El detalle se encuentra en `validation_final_report.md` §5.
