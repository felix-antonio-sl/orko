# validation_final_report (draft)

## §0. Propósito

- Documentar el resultado de las validaciones finales de la metodología ORKO antes de declarar RELEASE 1.0.0.
- Integrar evidencias de:
  - Kernel (VOCAB + DEP_GRAPH + scripts) – CAP-14.
  - Expansión (fases F2/F4–F6/F8/F10–F12 + schemas + ejemplos) – CAP-15.
  - Playbooks P01–P15 + fases de evolución F14–F18 – CAP-16.
  - Validación VG4 (I1–I8 + casos) – CAP-17.

> Nota: Este reporte se apoya en documentos de detalle (validation_kernel_report.md, validation_expansion_report.md, 01_validacion_trazabilidad_i1_i8.md, etc.) y no los duplica; ofrece un resumen ejecutivo y conclusiones para decisión de RELEASE.

---

## §1. Estado de validaciones por CAP

### §1.1 CAP-14 – Kernel y expansión semántica (E1)

- Reportes esperados:
  - `validation_kernel_report.md` (VOCAB + DEP_GRAPH + dependency_closure_script).
  - `validation_expansion_report.md` (uso de VOCAB en docs, términos prohibidos, coverage, gaps).
  - `VOCAB_v1.1.x_NOTAS.md` (candidatos para futura versión de VOCAB, sin cambios en el kernel actual).
- Estado:
  - **DONE**: según `validation_kernel_report.md` (CAP-14, E1), el kernel semántico `v1.0.0-kernel` (`VOCABULARIO_CONTROLADO.yaml` + `DEPENDENCY_GRAPH.yaml`) es internamente consistente en términos de referencias, estructura DAG y ausencia de fases kernel huérfanas, validado vía `dependency_closure_script.py` sin introducir nuevas métricas más allá de `H_org`, `eta_org` y `ROI_Habilitacion`.
  - **DONE**: según `validation_expansion_report.md` (CAP-14, E1), la expansión (docs de metodología, playbooks, health gates y casos) no viola el contrato del kernel: no se detectan usos problemáticos de `terminos_prohibidos` en contratos núcleo, y las métricas candidatas (`handoff_ratio`, `cycle_time`, `capacity_gap_index`, etc.) se usan solo como señal de diseño/ejemplos, no como métricas canónicas ni `metric_id` en el grafo.
  - **DONE**: `VOCAB_v1.1.x_NOTAS.md` consolida el backlog de métricas y entidades candidatas observadas en arquitectura/fases/playbooks/casos para futuras versiones del VOCAB, sin modificar `VOCABULARIO_CONTROLADO.yaml` ni alterar el kernel actual.
  - **Notas:** la validación de CAP-14 es principalmente estructural/semántica (consistencia de YAML + revisión cualitativa de expansión); la validación empírica con datos operativos queda fuera del alcance de ORKO v1.0.0 y se propone como trabajo para `VOCAB v1.1.x` y releases posteriores.

### §1.2 CAP-15 – Casos y evidencias de aplicación (E2)

- Evidencias esperadas:
  - 6 casos completos en `40_implementacion_metodologia/ejemplos/*_completo` con:
    - `context.yaml` instancia de `context_pattern_schema.yaml`.
    - `trajectory.md` seleccionado vía `03_decision_matrix.md` + G1–G4.
    - `artefactos.md` listando fases, playbooks, templates y calculadoras usadas.
- Estado:
  - **DONE**: según OUTCOMEs E2-12 y E2-13 (CAP-15), los 6 casos tienen ahora:
    - `context.yaml` instancia limpia de `Schema_2_Context_Pattern`.
    - `trajectory.md` alineado con `03_decision_matrix.md` + G1–G4 (decisiones F3/F17 para trayectorias `Survival`/`Minimal`/`Avanzada`).
    - `artefactos.md` listando fases WSLC, playbooks P01–P15, templates y calculadoras usadas con IDs canónicos.
  - **TODO (E4)**: auditar que la narrativa de `trajectory.md` y `artefactos.md` por caso es coherente con VG4, P01–P15 y los contratos de fases/trayectorias.

### §1.3 CAP-16 – Playbooks P01–P15 + WSLC (E3)

- Objetivo:
  - Completar P06–P08 más allá de §0–§1 y redactar §0–§1 para P09–P15.
  - Asegurar que `playbook_schema.yaml` + `playbook_instances.yaml` cubren P01–P15 sin huecos y se alinean con `03_decision_matrix.md` y `02_health_gates.md`.
- Estado:
  - **DONE**: según OUTCOME E3-08 (CAP-16),
    - P06–P08 están completados más allá de §0–§1 (casos típicos, inputs adicionales, riesgos, relación con F11/F16/F17 y G4).
    - P09–P15 tienen §0 FUNDAMENTO y §1 INTERFAZ alineados con `playbook_schema.yaml`, `playbook_instances.yaml`, `playbooks_triggers_catalog.md` y `02_health_gates.md`.
    - `playbook_instances.yaml` mapea los escenarios de `03_decision_matrix.md` a playbooks clave sin huecos, cerrando VG3 (P01–P15) a nivel de contratos.
  - **TODO (E4)**: usar este catálogo completo como base para auditar la coherencia entre casos, gates y trayectorias en VG4.

### §1.4 CAP-17 – VG4 + RELEASE (E4)

- Objetivo:
  - Cerrar VG4 (I1–I8) y preparar la documentación de RELEASE 1.0.0.
- Estado actual (este reporte):
  - `03_vg4_validation_map.md` actualizado con evidencias de los 6 casos (CAP-17 bloque 1).
  - `01_validacion_trazabilidad_i1_i8.md` actualizado para reflejar uso cualitativo de los casos y límites de la validación.
  - **TODO**: completar auditorías globales y actualizar READMEs/CHANGELOG.

---

## §2. Auditorías globales (plan vs ejecución)

Las auditorías a ejecutar siguen la estructura descrita en `PLAN_ETAPA_4_COMPLETION.md` (§FASE 6 Auditoría Coherencia Completa), adaptadas al estado real del repositorio.

### §2.1 VOCABULARIO_CONTROLADO vs docs

- Chequeos previstos:
  - Términos prohibidos: uso de grep/rg para detectar términos no canónicos.
  - Coverage Layer 0–3: que los conceptos clave estén referenciados en fases/playbooks/trayectorias.
- Estado:
  - **Hecho (v0.1, basado en `validation_expansion_report.md`):**
    - Se ejecutaron greps de `terminos_prohibidos` y el barrido no encontró usos problemáticos en contratos núcleo de metodología (fases WSLC, playbooks, health gates, trayectorias); las apariciones detectadas se concentran en guías/meta-documentos donde se usan como ejemplos/antipatrones.
    - Se revisó el uso de métricas candidatas (`handoff_ratio`, `cycle_time`, `capacity_gap_index`, `tf3_data_quality_score`, etc.) confirmando que no aparecen como métricas canónicas en VOCAB ni como `metric_id` en el grafo; su uso actual es solo como señal de diseño/ejemplos, consistente con el contrato del kernel.
  - **Parcial / TODO:**
    - Falta una auditoría exhaustiva de coverage Layer 0–3 (que todos los conceptos clave de VOCAB estén efectivamente referenciados en fases/playbooks/trayectorias); por ahora se considera cubierta solo la parte crítica ligada a términos prohibidos y métricas canónicas vs candidatas.

### §2.2 DEPENDENCY_GRAPH vs archivos

- Chequeos previstos:
  - Todas las referencias de `DEPENDENCY_GRAPH.yaml` apuntan a archivos existentes.
  - Grafo sin ciclos no declarados; orphans controlados.
- Estado:
  - **Hecho (estructura del grafo, ver `validation_kernel_report.md`):**
    - `dependency_closure_script.py` se ejecutó sobre `VOCABULARIO_CONTROLADO.yaml` y `DEPENDENCY_GRAPH.yaml` con resultado `[SUMMARY] All dependency checks passed.` sin mensajes `[REF]`, `[DAG]` ni `[ORPHAN]`, lo que respalda que el grafo es un DAG, que las referencias entre fases/playbooks/trayectorias y VOCAB son consistentes y que no hay fases kernel huérfanas.
  - **Limitaciones / TODO:**
    - El script solo razona sobre estructuras YAML (VOCAB y DEP_GRAPH) y no verifica la existencia física de todos los archivos Markdown/YAML referenciados en el repositorio.
    - Una auditoría completa de `DEPENDENCY_GRAPH.yaml` vs archivos (por ejemplo, que cada fase/playbook/trayectoria tenga su documento correspondiente) queda pendiente como trabajo adicional de CAP-17 o backlog post-1.0.0.

### §2.3 §0 FUNDAMENTO en 18/18 fases

- Chequeos previstos:
  - Todas las fases F1–F18 tienen §0 FUNDAMENTO completo y referencian correctamente VOCAB/teoremas/fundamentos.
- Estado:
  - **Hecho (v0.1, presencia de `§0 FUNDAMENTO` por fase):**
    - Fases con `§0 FUNDAMENTO` explícito (`PASSED` bajo el criterio mínimo de presencia de la sección):
      - F2 – Vision Definition
      - F4 – Capability Mapping
      - F5 – Flow Design
      - F6 – Information Architecture
      - F8 – Limits Definition
      - F10 – Quick Wins
      - F11 – Fabric Deployment
      - F12 – State Transition
    - Fases sin `§0 FUNDAMENTO` explícito en la versión actual (`CONDITIONAL` bajo este criterio):
      - F1 – Context Assessment (archivo prácticamente vacío/esqueleto).
      - F3 – Trajectory Selection
      - F7 – Purpose Cascade
      - F9 – Target State Design
      - F13 – Health Monitoring
      - F14 – Incident Response
      - F15 – Continuous Execution
      - F16 – Learning Loops
      - F17 – Adaptation
      - F18 – Convergence Check
  - **Limitaciones / TODO:**
    - Esta clasificación v0.1 solo considera presencia/ausencia de la sección `§0 FUNDAMENTO`; no evalúa todavía la calidad ni completitud del contenido YAML en cada fase.
    - Fases marcadas como `CONDITIONAL` requieren que se redacte/complemente §0 en futuras iteraciones (CAP-17 o backlog post-1.0.0), alineando explícitamente axiomas, primitivos, invariantes, dominios y relación con el kernel según `GUIA_AUTOR_CONTENIDO.md`.
    - Incluso en las fases `PASSED`, sería deseable una auditoría cualitativa posterior que revise la alineación fina de §0 a `VOCABULARIO_CONTROLADO.yaml` y a los teoremas fundacionales.

### §2.4 Templates y calculadoras

- Chequeos previstos:
  - Templates clave (T01–T25) existen y son usables mínimamente.
  - Calculadoras en `40_implementacion_metodologia/calculadoras/` están presentes y referenciadas en docs.
- Estado:
  - **Hecho (estructura y wiring v0.1):**
    - Se confirma la presencia de las 6 calculadoras previstas en `40_implementacion_metodologia/calculadoras/`:
      - `budget_parametric_allocator.xlsx`, `context_decision_matrix.xlsx`, `convergence_tracker.xlsx`, `health_score_calculator.xlsx`, `regulatory_compliance_tracker.xlsx`, `roi_estimator.xlsx`.
    - Las 6 calculadoras existen como archivos `.xlsx` aunque actualmente son esencialmente placeholders (peso 0 bytes); la auditoría de esta versión se limita a verificar su existencia y la coherencia del wiring con fases y contratos, no el contenido interno ni las fórmulas.
    - El árbol de templates en `40_implementacion_metodologia/templates/` contiene T01–T03 (assessment), T04–T07 (planning), T08–T11 (execution), T12–T15 (evolution) y T16–T20 (compliance), alineado con lo descrito en `out/40_implementacion_metodologia.md`.
    - Según `PLAN_ETAPA_1_KERNEL.md` y `SPEC_ARQUITECTURA_DEFINITIVA.md`, se valida el wiring básico entre fases kernel y artefactos:
      - F1 usa `T01_context_assessment.yaml` como artefacto principal para poblar el contexto.
      - F3 usa `context_decision_matrix.xlsx` como herramienta principal para seleccionar trayectoria `Survival/Minimal/Avanzada`.
      - F7 usa `T07_okr_cascade.xlsx` para alinear OKR L4→L3→L2→L1.
      - F9 usa `T12_adr_template.md` para documentar decisiones arquitectónicas (ADR) y `e6_target`.
      - F13 usa `health_score_calculator.xlsx` como calculadora clave para dashboards de `H_org` y señales de drift.
    - En tres casos revisados en detalle (`01_startup_50p_completo`, `02_scaleup_200p_completo`, `06_gore_nuble_completo`), las referencias a templates y calculadoras en `artefactos.md` son coherentes con la estructura real del árbol y con el tipo de contexto:
      - Todos referencian `T01_context_assessment.yaml` más plantillas de assessment/context_specific/compliance acordes al caso (p.ej. `crisis_mode_checklist.md`, `hypergrowth_capacity_model.xlsx`, matrices MGDE y reporting público).
      - Las calculadoras listadas en cada caso corresponden a un subconjunto de las 6 calculadoras globales y refuerzan el rol de F3/F13 (selección de trayectoria vía `context_decision_matrix.xlsx` y monitoreo H_org/ROI vía `health_score_calculator.xlsx`/`roi_estimator.xlsx`/`convergence_tracker.xlsx`/`regulatory_compliance_tracker.xlsx`).
  - **Limitaciones / backlog:**
    - No se inspecciona el contenido interno de los archivos `.xlsx` ni se valida la corrección de fórmulas o modelos numéricos; la auditoría actual se limita a presencia y wiring conceptual.
    - No se ha verificado exhaustivamente la cobertura T01–T25 (sólo una muestra representativa vía casos y planes); completar/ajustar el catálogo de templates y su documentación detallada queda como backlog explícito post-1.0.0, salvo que aparezca un `[NEED]` específico.

### §2.5 Casos de ejemplo

- Chequeos previstos:
  - 6 casos con los 3 artefactos básicos (`context.yaml`, `trajectory.md`, `artefactos.md`).
  - Referencias coherentes a trayectorias, fases y playbooks.
- Estado:
  - **Hecho (estructura + muestras profundas v0.1):**
    - Cada caso en `40_implementacion_metodologia/ejemplos/*_completo/` contiene:
      - `README.md`, `context.yaml`, `trajectory.md`, `artefactos.md`.
    - Los 6 `context.yaml` tienen contenido (no vacíos) y, según OUTCOMEs E2-12 y E2-13 (CAP-15), son instancias limpias de `Schema_2_Context_Pattern`.
    - Se revisaron en detalle tres casos representativos:
      - `01_startup_50p_completo`
      - `02_scaleup_200p_completo`
      - `06_gore_nuble_completo`
    - En los tres casos, `trajectory.md`:
      - Declara explícitamente la trayectoria base (`Minimal`) y la relaciona con escenarios `DM2`/`DM3` (y, cuando corresponde, `DM1`/`DM4`/`DM5`) de `03_decision_matrix.md`.
      - Describe cómo F3 (Trajectory Selection) y F17 (Adaptation) usan G1–G4 (`02_health_gates.md`) para activar playbooks P01–P15 coherentes con el contexto (recovery, optimización, upgrade).
    - En los tres casos, `artefactos.md`:
      - Lista un subconjunto consistente de fases F1–F18 alineado con la trayectoria `Minimal` y con los contratos de fases (Initiation/Development/Implementation/Evolution).
      - Referencia únicamente playbooks dentro del catálogo P01–P15 (sin IDs "fantasma"), en combinaciones que coinciden con los escenarios descritos en `trajectory.md` (por ejemplo, P01/P02/P09/P10/P11/P15 para recuperación y optimización en Minimal, y P05–P07 cuando hay upgrade a Avanzada).
      - Usa templates y calculadoras que existen realmente en `40_implementacion_metodologia/templates/` y `40_implementacion_metodologia/calculadoras/`, coherentes con el tipo de contexto (startup/scaleup vs sector público y compliance).
  - **Limitaciones / backlog:**
    - No se ha revisado todavía con el mismo nivel de detalle el contenido de los 6 `trajectory.md`/`artefactos.md`; la auditoría profunda se limitó a 3 casos representativos.
    - No se ha verificado cada referencia fina contra `playbook_instances.yaml` (la consistencia de VG3 se asume por CAP-16 y CAP-18); una revisión más exhaustiva de mapeos caso↔playbooks queda como backlog post-1.0.0 salvo que aparezca un `[NEED]` explícito.
    - Sería deseable, en releases futuras, enriquecer la narrativa de casos (más métricas de ejemplo, decisiones explícitas F3/F17 con datos simulados) para fortalecer la evidencia empírica más allá de la coherencia contractual actual.
        - `artefactos.md` agrega playbooks de transformación P05–P07 además de P01–P03, P09–P11, P15; todos estos IDs existen en `playbook_instances.yaml` y se enganchan a health gates/métricas coherentes con el escenario de scaleup.
      - `06_gore_nuble_completo`:
        - `context.yaml` modela un gobierno regional (sector público) con trayectoria base `Minimal` y riesgo político/reputacional alto.
        - `trajectory.md` usa DM2/DM3 como escenarios dominantes y DM1/DM5 para episodios de crisis, alineado con G2/G3/G1 de `02_health_gates.md`.
        - `artefactos.md` lista fases F1–F6, F8–F13, F16, F17 y playbooks P01, P02, P03, P09–P11, P15; todos los IDs corresponden a entradas válidas en `playbook_instances.yaml` y se apoyan en templates/compliance específicos del sector público.
    - En los tres casos revisados, no se detectaron inconsistencias evidentes entre contexto → trayectoria → fases/playbooks → health gates/decision_matrix; las referencias a P01–P15, G1–G4 y trayectorias son coherentes con los contratos actuales.
  - **Parcial / TODO:**
    - No se ha realizado aún una auditoría narrativa detallada de `README.md`, `trajectory.md` y `artefactos.md` en los 6 casos; la revisión profunda se limitó a tres casos representativos.
    - Falta sistematizar un procedimiento estándar de auditoría end-to-end por caso (paso a paso) y aplicarlo de forma homogénea a los 6 casos; este trabajo se considera backlog post-1.0.0 salvo que se detecte un bloqueo crítico durante la revisión.
    - La auditoría detallada se aplicó solo a 3 de los 6 casos; para los otros 3 se mantiene la validación estructural (existencia de archivos y `context.yaml` conforme a schema) y se asume coherencia según CAP-15/CAP-16.
    - No se han revisado aún en detalle todos los `README.md` ni la redacción completa de `trajectory.md`/`artefactos.md` en los 6 casos; una auditoría narrativa completa y un barrido sistemático de referencias a P01–P15/health gates se propone como trabajo post‑1.0.0 o como parte de futuras mejoras de VG4.

---

## §3. Síntesis por invariante I1–I8

> Síntesis basada en `01_validacion_trazabilidad_i1_i8.md`, CAP-14–CAP-16 y las auditorías de CAP-17/CAP-19 (casos, templates, calculadoras). Cada invariante se etiqueta como `PASSED` o `CONDITIONAL` para ORKO v1.0.0; no se contemplan estados `FAILED` mientras los riesgos estén documentados en §5 (backlog post-1.0.0).

- **I1 – Minimalidad**: **CONDITIONAL**  
  - El diseño conecta GENOME ↔ FENOTIPO a nivel conceptual (`out/00_fundamentos_teoricos.md`, `out/30_metodologia_orko.md`, `SPEC_ARQUITECTURA_DEFINITIVA.md`) y los 6 casos muestran que el stack puede instanciarse en contextos diversos. La validación sigue centrada en existencia/consistencia de artefactos; falta evidencia empírica sistemática por contexto.

- **I2 – Ortogonalidad**: **CONDITIONAL**  
  - La separación de capas (arquitectura, tejidos, WSLC, playbooks, gobernanza) está documentada (`out/10_arquitectura_orko.md`, `out/20_tejidos.md`) y ejemplificada en los 6 casos, pero aún no se han explorado suficientemente escenarios límite ni métricas cuantitativas que prueben ortogonalidad en operación.

- **I3 – Trazabilidad extremo-a-extremo**: **PASSED**  
  - Existe una cadena explícita GENOME → VOCAB (`VOCABULARIO_CONTROLADO.yaml`) → DEP_GRAPH (`DEPENDENCY_GRAPH.yaml` + `dependency_closure_script.py`) → Fases/Playbooks/Trayectorias → Health gates (`02_health_gates.md`) → Governance/Board (`01_team_structure_raci.md`, `board_coordinación.md`), validada por CAP-14. `03_vg4_validation_map.md` y `01_validacion_trazabilidad_i1_i8.md` documentan esta cadena, y los 3 casos auditados en detalle (`startup_50p`, `scaleup_200p`, `gore_nuble`) muestran rutas coherentes de contexto a acciones/playbooks. El gap principal es la ausencia de un procedimiento estándar de auditoría end-to-end por caso, que se traslada a backlog.

- **I4 – Contratos y capas**: **CONDITIONAL**  
  - Las interfaces de fases Development/Implementation (`F4`, `F5`, `F6`, `F10`, `F11`, `F12`) y schemas (`context_pattern_schema.yaml`, `compliance_framework_schema.yaml`) están definidas canónicamente y se usan en casos; el DEP_GRAPH refleja dependencias entre capas. Falta conectar de forma sistemática estos contratos con métricas de resultado por caso (cómo cambios en F4/F5 se reflejan en `H_org`/`eta_org`/`ROI_Habilitacion` en los 6 contextos).

- **I5 – Accountability humana (HAIC)**: **PASSED**  
  - La combinación de `01_team_structure_raci.md`, `02_health_gates.md` y el uso sistemático de `board_coordinación.md` establece quién detecta/decide/ejecuta/audita en escenarios G1–G4 y en CAP-x. No existe aún un RACI fino por playbook ni evidencia empírica externa, pero el diseño actual refleja claramente que las responsabilidades clave permanecen en humanos y que AI/automatización operan como soporte.

- **I6 – Trajectory-awareness**: **PASSED**  
  - Las trayectorias (`01_minimal_6_12_meses.md`, `02_avanzada_18_36_meses.md`, `04_survival_0_10K.md`) y `03_decision_matrix.md`/`02_health_gates.md` estructuran las decisiones de F3/F17, y los 6 casos documentan explícitamente en `trajectory.md` cómo se elige y adapta la trayectoria según G1–G4 y contexto. Falta estandarizar la anotación del estado de trayectoria en artefactos operativos (backlogs, OKR, etc.), pero el diseño + casos se considera suficiente para 1.0.0.

- **I7 – Coherencia entre capas**: **CONDITIONAL**  
  - El diseño de capas (fundamentos, arquitectura, tejidos, WSLC, playbooks, governance) es coherente a nivel conceptual y se refleja en los casos, pero todavía faltan ejemplos exhaustivos y validaciones cruzadas (por dominio/tejido/fase) y métricas específicas que prueben esta coherencia en escenarios complejos.

- **I8 – Consistencia temporal/adaptación**: **CONDITIONAL**  
  - Existen mecanismos explícitos para leer el tiempo y adaptar (F6, F10–F12, F15, F18; G1–G4; quick wins; deployment/state_transition; cadencias) y el board ofrece un registro temporal de decisiones, reforzado por los 6 casos. Sin embargo, no se han definido aún KPIs temporales adicionales ni series de tiempo concretas más allá de las métricas canónicas, por lo que la validación de I8 es cualitativa y se clasifica como CONDITIONAL.

---

## §4. Conclusión de RELEASE (borrador)

> Condiciones previas (ya cumplidas):
> - CAP-14 (E1) con OUTCOME registrado (`E1-10`) y kernel/expansión validados (VOCAB + DEP_GRAPH + reports).
> - CAP-15 (E2) con OUTCOMEs E2-12/E2-13 y 6 casos completos (`context`+`trajectory`+`artefactos`).
> - CAP-16 (E3) con OUTCOME E3-08 y catálogo P01–P15 cerrado como contrato.
> - CAP-17 (E4) con auditorías §2.1–§2.5 completadas en modo v0.1 y síntesis por invariante I1–I8 en §3.

- **Recomendación de E4 (VG4/RELEASE 1.0.0):**  
  - A la luz de:
    - La consistencia estructural del kernel `v1.0.0-kernel` (CAP-14, E1).
    - La existencia de 6 casos completos que ejercitan trayectorias, health gates y playbooks en contextos diversos (CAP-15, E2).
    - El catálogo P01–P15 estable y alineado con gates/decision_matrix (CAP-16, E3).
    - Las auditorías globales de §2 (VOCAB vs docs, DEP_GRAPH vs YAML, §0 FUNDAMENTO, templates/calculadoras, casos) y la clasificación I1–I8 en §3 (varias invariantes PASSED, otras CONDITIONAL pero documentadas).
  - **E4 recomienda declarar ORKO v1.0.0** como RELEASE válida **aun con gaps**, siempre que:
    - Los gaps listados en §2 (coverage incompleto Layer 0–3, ausencia de `§0 FUNDAMENTO` en 10/18 fases, auditorías parciales en templates/calculadoras/casos) y §5 se acepten explícitamente como backlog post-1.0.0.
    - No surjan, en la revisión final del Capitán, nuevos hallazgos que representen un bloqueo directo (por ejemplo, incoherencias graves en contratos o referencias críticas rotas) que requieran un `[NEED]` antes de release.

 - **Lectura de I1–I8 para la decisión:**  
  - Invariantes con estado **PASSED (diseño/diseño+casos)**: I3, I5, I6.  
  - Invariantes con estado **CONDITIONAL (diseño)**: I1, I2, I4, I7, I8.  
  - E4 entiende, según CAP-19, que estas condiciones son **no bloqueantes** para 1.0.0 si quedan documentadas con claridad en §3 y §5 y se tratan como backlog explícito.

---

## §5. Gaps y backlog post-1.0.0

- **G1 – §0 FUNDAMENTO incompleto en fases F1–F18 (I1/I3/I4/I7)**  
  - 10/18 fases (F1, F3, F7, F9, F13–F18) están en estado `CONDITIONAL` respecto a `§0 FUNDAMENTO` (solo presencia parcial o ausencia de la sección).  
  - **Backlog:** completar/redactar `§0 FUNDAMENTO` en estas fases, alineando explícitamente axiomas, primitivos, invariantes, dominios y relación con el kernel según `GUIA_AUTOR_CONTENIDO.md`, y revisar cualitativamente las 8 fases ya marcadas como PASSED.

- **G2 – Coverage VOCAB Layer 0–3 vs docs/playbooks/trayectorias (I1/I2/I7)**  
  - La auditoría de VOCAB vs docs en §2.1 se centra en términos prohibidos y métricas canónicas vs candidatas; el coverage exhaustivo de conceptos Layer 0–3 en fases/playbooks/trayectorias sigue pendiente.  
  - **Backlog:** diseñar y ejecutar una auditoría sistemática de coverage (ej. checklists o scripts) que recorra VOCAB.layer_0–layer_3 y verifique su uso en `30_metodologia_orko/` y `40_implementacion_metodologia/`.

- **G3 – Profundidad en templates y calculadoras (I1/I4/I7/I8)**  
  - Templates y calculadoras existen y están conectados a casos, pero su contenido es en muchos casos esquelético y no se ha validado usabilidad ni cobertura completa (T01–T25).  
  - **Backlog:**
    - Completar contenido y ejemplos de uso en templates clave (assessment, compliance, context_specific) y en las 6 calculadoras.
    - Alinear explícitamente estos artefactos con fases/playbooks y, cuando corresponda, con métricas de salida ligadas a `H_org`, `eta_org`, `ROI_Habilitacion`.

- **G4 – Auditorías end-to-end por caso (I2/I3/I4/I6/I7/I8)**  
  - La auditoría profunda se ha aplicado solo a 3 casos (`startup_50p`, `scaleup_200p`, `gore_nuble`); los otros 3 se validan estructuralmente pero no se han recorrido en detalle.  
  - **Backlog:**
    - Definir un procedimiento estándar de auditoría por caso (paso a paso desde `context.yaml` hasta playbooks/templates/calculadoras y decisiones de trayectoria) y aplicarlo a los 6 casos.
    - Documentar hallazgos caso por caso (p.ej., en un anexo o en futuras versiones de `01_validacion_trazabilidad_i1_i8.md`).

- **G5 – Métricas y validación empírica (I2/I4/I7/I8)**  
  - La validación de ORKO v1.0.0 es principalmente estructural/conceptual; no existen aún KPIs adicionales ni series de tiempo más allá de las métricas canónicas, ni datos empíricos de producción.  
  - **Backlog:**
    - Diseñar métricas adicionales (candidatas ya listadas en `VOCAB_v1.1.x_NOTAS.md`, como `handoff_ratio`, `capacity_gap_index`, etc.) y promover las más críticas a versión futura de VOCAB siguiendo el proceso formal (update VOCAB + DEP_GRAPH + `dependency_closure_script.py`).
    - Probar la metodología en entornos reales y utilizar datos observados para refinar gates, decision_matrix y playbooks.

- **G6 – RACI por playbook y anotación de trayectoria/tiempo en artefactos (I5/I6/I8)**  
  - El RACI actual cubre health gates y roles de alto nivel, pero no hay RACI fino por playbook ni una convención estándar para anotar trayectoria activa y eventos temporales en artefactos operativos.  
  - **Backlog:**
    - Diseñar plantillas RACI por playbook y mecanismos ligeros para registrar trayectoria/gates en artefactos como backlogs, OKR, casos y reportes.

- **G7 – Automatización parcial de auditorías (I3/I8)**  
  - Algunas validaciones (VOCAB vs DEP_GRAPH) ya cuentan con scripts (`dependency_closure_script.py`), pero otras (coverage VOCAB vs docs, auditoría por caso, checks de templates/calculadoras) siguen siendo manuales.  
  - **Backlog:**
    - Diseñar scripts o checklists semi-automatizados que faciliten re-ejecutar VG4 en futuras versiones, reduciendo esfuerzo manual y riesgo de omisiones.
