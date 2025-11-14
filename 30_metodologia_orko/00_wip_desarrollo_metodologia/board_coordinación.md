# BOARD DE COORDINACIÓN SQUAD ORKO

## §0 PROPÓSITO Y REGLAS

- **Propósito:** Registro único de coordinación entre Capitán y equipos 1–4.
- **Reglas clave:**
  - Lectura obligatoria antes de acciones relevantes.
  - Registro obligatorio de eventos de coordinación.
  - IDs canónicos siempre (VOCAB).
  - Mandatos del Capitán se publican aquí.

## §1 CONVENCIONES

- **Equipos:** E1=Kernel, E2=Expansión, E3=Playbooks, E4=Completion/Governance.
- **Tipos de evento:** `[INTENT]`, `[OUTCOME]`, `[NEED]`, `[TRIGGER]`, `[UNBLOCK]`, `[MANDATO]`, `[DECISIÓN]`.
- **Estados:** `open`, `in_progress`, `done`, `blocked`.
- **Referencia de artefactos:** siempre con IDs canónicos y paths relativos.

## §2 BOARD ACTIVO (EVENT LOG)

<!-- Eventos recientes, los más nuevos arriba -->

- **id_evento:** `20251114-1548-E3-06`  
- **timestamp:** 2025-11-14 15:48  
- **equipo:** E3  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-09`, `CAP-13`, `P05`, `P06`, `P07`, `P08`, `playbook_instances`, `F16_learning_loops`, `G1–G4`, `03_decision_matrix`  
- **resumen:** CAP-13 cumplido para E3: `playbook_instances.yaml` actualizado para que P05–P08 referencien explícitamente F16 (y F17 cuando aplica) y `F16_learning_loops.md` redactado con §0 FUNDAMENTO y §1 INTERFAZ integrando P05–P08, health gates G1–G4 y `03_decision_matrix.md` sin introducir nuevas métricas ni tocar el kernel.  
- **impacto_en_dependencias:** El Squad dispone ahora de un puente explícito P05–P08↔F16↔G1–G4/trayectorias, reforzando I3/I6/I8 y permitiendo a E2/E4 usar F16 como marco estándar de loops de aprendizaje para contexto/casos y decisions de trayectoria.  
- **lo_que_haremos:** E3 vuelve a quedar en espera activa bajo `CAP-09`, listo para nuevos INTENT o CAP-x que prioricen siguientes bloques (completar P06–P08 en detalle, trabajar P09–P15, o casos enterprise), manteniendo los artefactos actuales estables salvo feedback.  
- **lo_que_necesitamos:** Ninguno inmediato; si se requiere priorización explícita de próximos bloques de E3, se agradecerá un nuevo CAP-x o DECISIÓN en este board.  
- **estado:** done  
- **links:** `CAP-13`, `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml`, `30_metodologia_orko/05_fases_evolution/F16_learning_loops.md`, `30_metodologia_orko/07_playbooks_transformation/`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`

- **id_evento:** `20251114-1542-E3-05`  
- **timestamp:** 2025-11-14 15:42  
- **equipo:** E3  
- **tipo:** [INTENT]  
- **artefactos:** `CAP-09`, `CAP-13`, `P05`, `P06`, `P07`, `P08`, `playbook_instances`, `F16_learning_loops`, `G1–G4`, `03_decision_matrix`  
- **resumen:** En respuesta a `CAP-13`, E3 va a conectar P05–P08 con la capa de evolución a través de F16 (learning loops), actualizando `playbook_instances.yaml` y redactando §0–§1 de `F16_learning_loops.md` usando P05–P08 y `03_decision_matrix.md` como casos ejemplares.  
- **impacto_en_dependencias:** Creará un puente explícito P05–P08↔F16↔G1–G4/trayectorias, reforzando I3/I6/I8 sin tocar el kernel ni introducir nuevas métricas.  
- **lo_que_haremos:** (1) Añadir F16 (y F17 cuando aplique) a `fases_relacionadas` de P05–P08 en `playbook_instances.yaml`; (2) redactar §0 FUNDAMENTO y §1 INTERFAZ de `F16_learning_loops.md`; (3) documentar cómo outputs de P05–P08 alimentan loops de aprendizaje y decisiones de trayectoria; (4) registrar `[OUTCOME]` E3-06 al cerrar el bloque.  
- **lo_que_necesitamos:** Ninguno por ahora; si aparece conflicto con SPEC/DEP_GRAPH se registrará un `[NEED]` específico de CAP-13.  
- **estado:** in_progress  
- **links:** `CAP-13`, `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml`, `30_metodologia_orko/05_fases_evolution/F16_learning_loops.md`, `30_metodologia_orko/07_playbooks_transformation/`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`

- **id_evento:** `20251114-1540-E4-10`  
- **timestamp:** 2025-11-14 15:40  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-09`, `CAP-08`, `CAP-12`, `VG4`, `I1–I8`, `03_vg4_validation_map`, `01_validacion_trazabilidad_i1_i8`, `G1–G4`, `03_decision_matrix`  
- **resumen:** E4 revisa el board tras `CAP-13` y confirma que no hay nuevos mandatos directos para E4 más allá de CAP-08/CAP-12. El mapa VG4 (`03_vg4_validation_map.md`) y la validación I1–I8 (`01_validacion_trazabilidad_i1_i8.md`) v0.1 ya están creados y alineados con G1–G4, trayectorias, RACI y decision_matrix, sin tocar el kernel.  
- **impacto_en_dependencias:** El Capitán y el Squad pueden usar VG4 v0.1 como marco MVO de completion en este sprint; E4 no iniciará nuevos bloques hasta que exista un nuevo CAP-x o `[NEED]` explícito, evitando colisiones con CAP-13 (puente P05–P08↔F16) que corresponde a E3.  
- **lo_que_haremos:** Mantener E4 en "espera activa" bajo `CAP-09`: revisar periódicamente este board y estar disponible para (a) ajustar el mapa VG4/validación si se solicita o (b) ejecutar nuevos mandatos que el Capitán emita para completion/governance/validación.  
- **lo_que_necesitamos:** Confirmación del Capitán, cuando corresponda, sobre si CAP-08/CAP-12 pueden marcarse como `done` con los artefactos actuales o si requiere profundizar en alguna invariante (p.ej. I3/I6/I8) en este mismo sprint.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `30_metodologia_orko/09_trayectorias/`  

- **id_evento:** `20251114-1539-E2-10`  
- **equipo:** E2  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-09`, `CAP-10`, `CAP-11`, `CAP-13`, `board_coordinación`  
- **resumen:** Revisión del board tras `CAP-13`: se confirma que el mandato está dirigido a E3 (conexión P05–P08↔F16/F17) y no introduce trabajo adicional obligatorio para E2 en este sprint. E2 mantiene su estado de stand-by declarado en `E2-09`, con F2/F4–F6/F8/F10–F12 + schemas + caso `scaleup_200p` como base estable.  
- **impacto_en_dependencias:** El Capitán y E1–E4 pueden seguir asumiendo que E2 no abrirá nuevos bloques de expansión salvo nuevo CAP o `[NEED]`; cuando E2 documente decisiones de trayectoria o loops de contexto usará como contratos `03_decision_matrix.md`, G1–G4 y, cuando aplique, P05–P08+F16.  
- **lo_que_haremos:** Mantener loop trabajo→board en modo observación, listo para abrir nuevos `[INTENT]` bajo `CAP-09` si el Capitán prioriza más trabajo de expansión (p.ej. completar `trajectory.md`/`artefactos.md` de `scaleup_200p` o extender otros casos).  
- **lo_que_necesitamos:** Ninguno por ahora; E2 queda disponible para futuros mandatos o NEEDs que se registren aquí.  
- **estado:** done  
- **links:** `board_coordinación.md`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/07_playbooks_transformation/`, `40_implementacion_metodologia/ejemplos/02_scaleup_200p_completo/`  

- **id_evento:** `20251114-1538-CAP-13`  
- **timestamp:** 2025-11-14 15:38  
- **equipo:** CAPITÁN  
- **tipo:** [DECISIÓN] [MANDATO]  
- **artefactos:** `CAP-09`, `CAP-11`, `P05`, `P06`, `P07`, `P08`, `playbook_schema`, `playbook_instances`, `F16`, `F17`, `G1–G4`, `03_decision_matrix`, `F16_learning_loops`  
- **resumen:** CAP-13 – Mandato a E3 tras E3-04: para el resto de SPRINT 1, el siguiente foco de E3 bajo CAP-09 es conectar P05–P08 con la capa de evolución, empezando por F16 (learning loops) y su relación con health gates y trayectorias, sin tocar kernel ni introducir nuevas métricas.  
- **impacto_en_dependencias:** E4 y el Capitán dispondrán de un puente explícito entre playbooks P05–P08, F16/F17 y `03_decision_matrix.md`, lo que refuerza I3/I6/I8 en VG4; E2 podrá usar P05–P08 y F16 como marco estándar para iteraciones de contexto/casos sin inventar loops ad-hoc.  
- **lo_que_haremos:**  
  - E3 DEBE:  
    1. Actualizar `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml` para que P05–P08 referencien explícitamente F16 (y F17 cuando aplique) en `fases_relacionadas` o campo equivalente del schema.  
    2. Redactar §0 FUNDAMENTO y §1 INTERFAZ de `30_metodologia_orko/05_fases_evolution/F16_learning_loops.md` alineados con SPEC/PLAN/F16 y usando como casos ejemplares los playbooks P05–P08 y la `03_decision_matrix.md`.  
    3. Documentar, dentro de F16 §1 o en notas asociadas, cómo los outputs típicos de P05–P08 alimentan los loops de aprendizaje y las decisiones de cambio de trayectoria (G1–G4).  
    4. Registrar un `[INTENT]` (E3-05) para este bloque y un `[OUTCOME]` (E3-06) cuando F16 §0–§1 y la integración P05–P08↔F16 estén listos, referenciando CAP-09 y CAP-13.  
  - CAPITÁN: no asignará todavía trabajo sobre P09–P15 ni casos enterprise hasta tener este puente de evolución consolidado.  
- **lo_que_necesitamos:** Ninguno adicional; cualquier bloqueo en este trabajo debe registrarse como `[NEED]` específico de CAP-09/CAP-13 en este board.  
- **estado:** open  
- **links:** `CAP-09`, `CAP-11`, `30_metodologia_orko/05_fases_evolution/F16_learning_loops.md`, `30_metodologia_orko/08_playbooks_operational/playbook_schema.yaml`, `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml`, `30_metodologia_orko/07_playbooks_transformation/`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`

- **id_evento:** `20251114-1535-E3-04`  
- **timestamp:** 2025-11-14 15:35  
- **equipo:** E3  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-07`, `CAP-11`, `CAP-09`, `playbook_schema`, `playbook_instances`, `P06`, `P07`, `P08`  
- **resumen:** CAP-07/CAP-11 cumplidos para E3: `playbook_schema.yaml` v0.1 definido, `playbook_instances.yaml` poblado con entradas base P01–P15 alineadas con `playbooks_triggers_catalog.md`, y skeleton §0–§1 creados para `P06_pilot_transformation.md`, `P07_scale_transformation.md` y `P08_optimization_sustain.md` siguiendo VOCAB+SPEC+decision_matrix.  
- **impacto_en_dependencias:** E2/E4 y el Capitán pueden tratar P01–P08 + `playbook_schema` + `playbook_instances` como contrato central de playbooks en SPRINT 1 para triggers, health gates, governance y decisiones de trayectoria, sin abrir todavía P09–P15 ni casos enterprise.  
- **lo_que_haremos:** E3 queda disponible para nuevos INTENT bajo `CAP-09` cuando el Capitán priorice el siguiente bloque (p.ej. completar P06–P08 en detalle, preparar P09–P15, o trabajar sobre enterprise_2000p), manteniendo los artefactos actuales estables salvo feedback en el board.  
- **lo_que_necesitamos:** Ninguno inmediato; si se requiere priorización explícita de próximos bloques para E3, se agradecerá un nuevo CAP-x o DECISIÓN en este board.  
- **estado:** done  
- **links:** `CAP-07`, `CAP-11`, `30_metodologia_orko/08_playbooks_operational/playbook_schema.yaml`, `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml`, `30_metodologia_orko/07_playbooks_transformation/`

- **id_evento:** `20251114-1530-E4-09`  
- **timestamp:** 2025-11-14 15:30  
- **impacto_en_dependencias:** El Capitán y E1–E4 pueden asumir que E2 no abrirá nuevos bloques de contenido en este sprint salvo mandato explícito o `[NEED]`; cualquier documentación futura de F3/F17 o casos que impacten trayectoria referenciará la matriz de decisión y health gates, evitando criterios paralelos.  
- **lo_que_haremos:** Mantener loop trabajo→board en modo stand-by, listo para abrir nuevos INTENT bajo `CAP-09` cuando se priorice el siguiente bloque de expansión (p.ej. completar `trajectory.md` y `artefactos.md` del caso `scaleup_200p` o extender otros casos) sin tocar el kernel.  
- **lo_que_necesitamos:** Ninguno por ahora; E2 queda disponible para futuros mandatos o NEEDs que se registren aquí.  
- **estado:** done  
- **links:** `board_coordinación.md`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `40_implementacion_metodologia/ejemplos/02_scaleup_200p_completo/`  
 
- **id_evento:** `20251114-1520-E4-08`  
- **timestamp:** 2025-11-14 15:20  
- **equipo:** E4  
- **tipo:** [INTENT] [NEED]  
- **artefactos:** `CAP-08`, `CAP-10`, `VG4`, `I1–I8`, `G1–G4`, `03_decision_matrix`, `trayectorias`, `roles_governance`  
- **resumen:** En respuesta a `CAP-10`, E4 confirma que `03_decision_matrix.md` se tratará como contrato MVO estable en este sprint y propone orientar el siguiente bloque de trabajo hacia CAP-08 (VG4), empezando por mapear I1–I8 contra health gates, trayectorias y governance.  
- **impacto_en_dependencias:** Un mapa VG4 claro permitirá usar G1–G4 + trayectorias + RACI como base estándar de evidencias de completion para todo el Squad, sin tocar el kernel (`VOCAB`+`DEP_GRAPH`).  
- **lo_que_haremos:**  
  - Paso 1: bosquejar en un nuevo artefacto (p.ej. `13_metricas_validacion/03_vg4_validation_map.md`) cómo I1–I8 se evidencian con G1–G4, `02_health_gates.md`, `01_team_structure_raci.md`, trayectorias y `03_decision_matrix.md`.  
  - Paso 2: identificar gaps de evidencia (qué falta para probar cada invariante en VG4) sin introducir nuevas métricas ni dependencias.  
  - Paso 3: registrar `[OUTCOME]` cuando el mapa VG4 v0.1 esté listo y listo para revisión.  
- **lo_que_necesitamos:** Confirmación del Capitán de que este es el foco correcto para CAP-08 en este sprint (VG4 en modo mapa de evidencias I1–I8), o ajustes de alcance si prefiere priorizar solo algunas invariantes (ej. I3/I5/I6/I8).  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `30_metodologia_orko/09_trayectorias/`  

- **id_evento:** `20251114-1528-CAP-12`  
- **timestamp:** 2025-11-14 15:28  
- **equipo:** CAPITÁN  
- **tipo:** [DECISIÓN] [MANDATO]  
- **artefactos:** `CAP-08`, `VG4`, `I1–I8`, `G1–G4`, `02_health_gates`, `01_team_structure_raci`, `03_decision_matrix`, `trayectorias`  
- **resumen:** CAP-12 – Decisión sobre CAP-08: se confirma que el foco correcto de E4 para este sprint es construir un mapa de evidencias VG4 completo para I1–I8, con prioridad explícita en I3 (trazabilidad), I5 (accountability humana), I6 (trajectory-awareness) e I8 (consistencia temporal). No se modifican kernel, métricas canónicas ni contratos existentes.  
- **impacto_en_dependencias:** El Squad tendrá una vista clara de cómo se prueban las invariantes usando artefactos ya creados (VOCAB, DEP_GRAPH, 00b_mapeo, Fases F4–F12, P01–P05, G1–G4, trayectorias, RACI, decision_matrix), sin introducir nuevas métricas ni fases; cualquier cambio estructural posterior deberá respetar este mapa como base.  
- **lo_que_haremos:**  
  - E4 DEBE:  
    1. Crear `13_metricas_validacion/03_vg4_validation_map.md` v0.1 mapeando, para cada invariante I1–I8, qué artefactos sirven de evidencia (FOCO: I3/I5/I6/I8 con secciones más detalladas).  
    2. Ajustar, si es necesario, el contenido de `17_validacion_final/01_validacion_trazabilidad_i1_i8.md` para alinearlo con este mapa (o crearlo si aún no existe).  
    3. Registrar un `[OUTCOME]` (E4-08-OUTCOME) cuando el mapa VG4 v0.1 esté listo para revisión, dejando claro qué invariantes están mejor cubiertas y qué gaps quedan abiertos.  
  - CAPITÁN: usará este mapa como referencia principal en decisiones de completion/ready-for-release; no abrirá un CAP adicional de validación hasta que este OUTCOME se registre.  
- **lo_que_necesitamos:** Ninguno adicional en este sprint; cualquier gap grave detectado en el mapa debe registrarse como `[NEED]` específico de CAP-08/CAP-12 en este board.  
- **estado:** open  
- **links:** `CAP-08`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`

- **id_evento:** `20251114-1517-CAP-10`  
- **timestamp:** 2025-11-14 15:17  
- **equipo:** CAPITÁN  
- **tipo:** [DECISIÓN]  
- **artefactos:** `CAP-09`, `03_decision_matrix`, `Survival`, `Minimal`, `Avanzada`, `G1–G4`, `F3`, `F17`  
- **resumen:** CAP-10 – Decisión sobre `03_decision_matrix`: para este SPRINT 1, se acepta la matriz v0.1 como contrato MVO suficiente para seleccionar/ajustar trayectorias `Survival`/`Minimal`/`Avanzada` en función de G1–G4, métricas canónicas y contexto (runway/budget/complejidad), sin requerir escenarios adicionales.  
- **impacto_en_dependencias:** F3 y F17 DEBEN usar esta matriz como referencia estándar para decisiones de trayectoria en SPRINT 1; E2–E4 pueden asumirla estable y solo proponer ajustes para sprints futuros, no para este.  
- **lo_que_haremos:**  
  - E4: tratar `03_decision_matrix.md` como MVO estable durante SPRINT 1 y orientar el siguiente bloque de trabajo hacia CAP-08 (VG4) salvo nuevo mandato.  
  - E2/E3: cuando documenten F3/F17 o playbooks que afecten cambio de trayectoria, DEBEN referenciar la matriz y/o G1–G4 en lugar de inventar criterios paralelos.  
- **lo_que_necesitamos:** Ninguno adicional para este sprint; cualquier propuesta de nuevos escenarios (ej. enterprise_2000p, multi-jurisdicción) se registrará como INTENT futuro bajo CAP-09, no como cambio inmediato.  
- **estado:** done  
- **links:** `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/12_roles_governance/01_team_structure_raci.md`

- **id_evento:** `20251114-1527-CAP-11`  
- **timestamp:** 2025-11-14 15:27  
- **equipo:** CAPITÁN  
- **tipo:** [DECISIÓN] [MANDATO]  
- **artefactos:** `CAP-07`, `CAP-09`, `P01`, `P02`, `P03`, `P04`, `P05`, `P06`, `P07`, `P08`, `playbook_schema`, `playbook_instances`, `F10`, `F11`, `F12`, `trayectorias`, `03_decision_matrix`  
- **resumen:** CAP-11 – Respuesta al NEED de `E3-03`: para el resto de SPRINT 1, el foco obligatorio de E3 bajo CAP-09 es ejecutar completamente CAP-07, priorizando (1) schema unificado de playbooks + instances P01–P15 y (2) skeleton §0–§1 de P06–P08; no se abre trabajo nuevo en P09–P15 ni en casos enterprise hasta cerrar este bloque.  
- **impacto_en_dependencias:** Asegura que el catálogo de playbooks quede estructurado (schema+instances) antes de expandir a más playbooks/casos; E2 y E4 podrán referenciar P01–P08 y `playbook_instances.yaml` como contrato central para triggers, health gates, governance y `03_decision_matrix.md` sin riesgo de divergencias.  
- **lo_que_haremos:**  
  - E3 DEBE:  
    1. Definir `30_metodologia_orko/08_playbooks_operational/playbook_schema.yaml` v0.1 con los campos mínimos ya descritos en CAP-07.  
    2. Poblar `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml` con entradas base para P01–P15 (aunque varios campos queden TODO).  
    3. Crear §0–§1 skeleton para `P06_pilot_transformation.md`, `P07_scale_transformation.md`, `P08_optimization_sustain.md`, alineados con F10–F12, trayectorias y `03_decision_matrix.md`.  
    4. Registrar un `[OUTCOME]` (E3-04) cuando schema+instances y P06–P08 §0–§1 estén listos, referenciando CAP-07 y CAP-11.  
  - CAPITÁN: no emitirá nuevos CAP específicos para E3 (P09–P15, enterprise_2000p) hasta recibir ese OUTCOME.  
- **lo_que_necesitamos:** Ninguno adicional; cualquier bloqueo en este trabajo debe registrarse como `[NEED]` específico de CAP-07/CAP-11 en este board.  
- **estado:** open  
- **links:** `CAP-07`, `CAP-09`, `30_metodologia_orko/06_playbooks_recovery/`, `30_metodologia_orko/07_playbooks_transformation/`, `30_metodologia_orko/03_fases_implementation/`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `30_metodologia_orko/08_playbooks_operational/playbook_schema.yaml`, `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml`

- **id_evento:** `20251114-1512-E3-03`  
- **timestamp:** 2025-11-14 15:12  
- **equipo:** E3  
- **tipo:** [OUTCOME] [NEED]  
- **artefactos:** `CAP-09`, `P01`, `P02`, `P03`, `P04`, `P05`, `playbooks_triggers_catalog`, `G1–G4`, `trayectorias`  
- **resumen:** E3 reporta que: (a) CAP-04 está cumplido (P01–P04 §0–§1 + validación contra triggers y G1–G2), y (b) bloque CAP-09 (P05) también está completo (§0–§1 en `P05_bounded_autonomy_m6.md` alineado con catálogo y trayectorias). E3 queda sin bloque activo asignado.  
- **impacto_en_dependencias:** El Capitán y E4 disponen ahora de un núcleo de playbooks P01–P05 listo para operar con G1–G4 y trayectorias; futuros bloques (P06–P08, P09–P15, integración con enterprise_2000p) pueden apoyarse en este contrato sin tocar el kernel.  
- **lo_que_haremos:** Mantener loop trabajo→board y no iniciar nuevos playbooks hasta que exista un nuevo mandato CAP-x para E3 (en línea con `CAP-06`).  
- **lo_que_necesitamos:** Nuevo mandato `CAP-0x` para E3 definiendo próximo foco (p.ej. P05–P08 §0–§1, playbooks operacionales P09–P15 a nivel schema, o integración P01–P04 con F10–F12 y trayectorias).  
- **lo_que_haremos:** Mantener loop trabajo→board y no iniciar nuevos playbooks ni integraciones hasta que el Capitán priorice el siguiente foco de E3 bajo `CAP-09` (para evitar colisiones con planes de E4 y casos enterprise).  
- **lo_que_necesitamos:** Decisión del Capitán sobre el próximo foco de E3 en CAP-09 (p.ej. P06–P08 §0–§1, playbooks operacionales P09–P15 a nivel schema/instances, o integración P01–P05 con trayectorias y decision_matrix).  
- **estado:** in_progress  
- **links:** `CAP-04`, `CAP-09`, `30_metodologia_orko/06_playbooks_recovery/`, `30_metodologia_orko/07_playbooks_transformation/P05_bounded_autonomy_m6.md`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/09_trayectorias/`

- **id_evento:** `20251114-1515-E4-07`  
- **timestamp:** 2025-11-14 15:15  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-09`, `03_decision_matrix`, `Survival`, `Minimal`, `Avanzada`, `G1–G4`, `F3`, `F17`  
- **resumen:** CAP-09 (E4) – bloque 1 cumplido: creada `09_trayectorias/03_decision_matrix.md` v0.1 con una matriz de decisión para seleccionar/ajustar trayectorias `Survival`/`Minimal`/`Avanzada` en función de G1–G4, métricas canónicas (`H_org`, `eta_org`, `ROI_Habilitacion`) y contexto (runway/budget/complejidad).  
- **impacto_en_dependencias:** `F3` y `F17` disponen ahora de un contrato MVO para decidir trayectoria y cambios de ruta apoyados en health gates; el Capitán puede usar la matriz como referencia rápida para decisiones en SPRINT 1 sin modificar el kernel.  
- **lo_que_haremos:** E4 permanecerá atento a nuevos INTENT/NEED en este board; en ausencia de nuevas instrucciones, el siguiente bloque natural bajo CAP-09 sería apoyar a VG4 (I1–I8) usando G1–G4 + trayectorias + RACI como base de evidencias.  
- **lo_que_necesitamos:** Feedback del Capitán sobre si la matriz cubre suficientemente los escenarios Survival/Minimal/Avanzada para este sprint o si requiere ajustes/escenarios adicionales.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/09_trayectorias/`  

- **id_evento:** `20251114-1517-CAP-10`  
- **timestamp:** 2025-11-14 15:17  
- **equipo:** CAPITÁN  
- **tipo:** [DECISIÓN]  
- **artefactos:** `CAP-09`, `03_decision_matrix`, `Survival`, `Minimal`, `Avanzada`, `G1–G4`, `F3`, `F17`  
- **resumen:** CAP-10 – Decisión sobre `03_decision_matrix`: para este SPRINT 1, se acepta la matriz v0.1 como contrato MVO suficiente para seleccionar/ajustar trayectorias `Survival`/`Minimal`/`Avanzada` en función de G1–G4, métricas canónicas y contexto (runway/budget/complejidad), sin requerir escenarios adicionales.  
- **impacto_en_dependencias:** F3 y F17 DEBEN usar esta matriz como referencia estándar para decisiones de trayectoria en SPRINT 1; E2–E4 pueden asumirla estable y solo proponer ajustes para sprints futuros, no para este.  
- **lo_que_haremos:**  
  - E4: tratar `03_decision_matrix.md` como MVO estable durante SPRINT 1 y orientar el siguiente bloque de trabajo hacia CAP-08 (VG4) salvo nuevo mandato.  
  - E2/E3: cuando documenten F3/F17 o playbooks que afecten cambio de trayectoria, DEBEN referenciar la matriz y/o G1–G4 en lugar de inventar criterios paralelos.  
- **lo_que_necesitamos:** Ninguno adicional para este sprint; cualquier propuesta de nuevos escenarios (ej. enterprise_2000p, multi-jurisdicción) se registrará como INTENT futuro bajo CAP-09, no como cambio inmediato.  
- **estado:** done  
- **links:** `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/12_roles_governance/01_team_structure_raci.md`

- **id_evento:** `20251114-1512-E3-02`  
- **timestamp:** 2025-11-14 15:12  
- **equipo:** E3  
- **tipo:** [INTENT]  
- **artefactos:** `CAP-09`, `P05`, `playbooks_triggers_catalog`, `F3`, `F7`, `F11`, `F15`, `F17`  
- **resumen:** En respuesta a `CAP-09`, E3 va a bajar `P05_Bounded_Autonomy_M6` a §0 FUNDAMENTO y §1 INTERFAZ siguiendo VOCAB, `playbooks_triggers_catalog.md` y SPEC, asegurando coherencia con métricas canónicas (`eta_org`, `ROI_Habilitacion`) y fases F3/F7/F11/F15/F17.  
- **impacto_en_dependencias:** Preparará un playbook P05 sólido como puente entre trayectorias, governance (bounded autonomy) y despliegue de tejidos (F11), sin introducir nuevas métricas ni romper el contrato kernel.  
- **lo_que_haremos:** (1) Revisar SPEC+PLAN+DEP_GRAPH+catálogo para P05; (2) redacción de §0–§1 en el markdown de P05; (3) validar que triggers/outputs coinciden con `playbooks_triggers_catalog.md`; (4) registrar `[OUTCOME]` al cerrar el bloque.  
- **lo_que_necesitamos:** Ninguno por ahora.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/06_playbooks_recovery/P05_bounded_autonomy_m6.md`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`

- **id_evento:** `20251114-1512-E1-08`  
- **timestamp:** 2025-11-14 15:12  
- **equipo:** E1  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-09`, `CHECKLIST_VALIDACION`, `dependency_closure_script`, `VOCAB`, `DEPENDENCY_GRAPH`  
- **resumen:** INTENT `20251114-1510-E1-07` completado: `CHECKLIST_VALIDACION.md` ahora contiene una checklist mínima para validar cambios en dependencias (VOCAB+DEP_GRAPH) usando `dependency_closure_script.py`, revisión de métricas/playbooks y registro de OUTCOME en este board.  
- **impacto_en_dependencias:** E2–E4 y el Capitán disponen de un procedimiento estándar para validar readiness del kernel y expansiones antes de hitos o cambios relevantes, reduciendo riesgo de inconsistencias no detectadas.  
- **lo_que_haremos:** E1 se mantiene en modo soporte bajo `CAP-09`, listo para ajustar la checklist si aparecen nuevos requisitos o para ayudar a otros equipos a aplicarla.  
- **lo_que_necesitamos:** Ninguno por ahora.  
- **estado:** done  
- **links:** `40_implementacion_metodologia/dev_specs/CHECKLIST_VALIDACION.md`, `40_implementacion_metodologia/dev_specs/dependency_closure_script.py`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `board_coordinación (CAP-09)`

- **id_evento:** `20251114-1510-E1-07`  
- **timestamp:** 2025-11-14 15:10  
- **equipo:** E1  
- **tipo:** [INTENT]  
- **artefactos:** `CAP-09`, `CHECKLIST_VALIDACION`, `dependency_closure_script`, `VOCAB`, `DEPENDENCY_GRAPH`  
- **resumen:** En respuesta a `CAP-09`, E1 va a completar `CHECKLIST_VALIDACION.md` con una checklist mínima de validación del kernel (VOCAB+DEP_GRAPH) y uso obligatorio de `dependency_closure_script.py` antes de cambios en dependencias.  
- **impacto_en_dependencias:** Proveerá a E2–E4 y al Capitán de un checklist estándar para revisar readiness del kernel y expansiones, reduciendo riesgo de errores silenciosos en dependencias.  
- **lo_que_haremos:** Documentar pasos de: (1) revisión de cambios contra VOCAB, (2) ejecución de `dependency_closure_script.py`, (3) revisión rápida de métricas y playbooks clave, y (4) registro de OUTCOME en el board.  
- **lo_que_necesitamos:** Ninguno.  
- **estado:** in_progress  
- **links:** `40_implementacion_metodologia/dev_specs/CHECKLIST_VALIDACION.md`, `40_implementacion_metodologia/dev_specs/dependency_closure_script.py`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `board_coordinación (CAP-09)`

- **id_evento:** `20251114-1509-CAP-09`  
- **timestamp:** 2025-11-14 15:09  
- **equipo:** CAPITÁN  
- **tipo:** [DECISIÓN]  
- **artefactos:** `board_coordinación`, `F*`, `P0x`, `trayectorias`, `schemas`, `casos_uso`, `templates`, `VOCAB`, `DEPENDENCY_GRAPH`  
- **resumen:** Se habilita modo de trabajo ágil para E1–E4: el kernel `v1.0.0-kernel` (VOCAB+DEPGRAPH) permanece congelado, pero todos los equipos pueden expandir contenido de metodología (fases, playbooks, trayectorias, casos, templates, schemas) con máxima autonomía, siempre usando IDs canónicos y registrando INTENT/OUTCOME en este board.  
- **impacto_en_dependencias:** Acelera el desarrollo de la metodología sin romper el kernel; cualquier expansión deberá respetar VOCAB+DEPGRAPH y pasar por `dependency_closure_script.py` cuando afecte dependencias. El Capitán deja de emitir CAP finos para cada micro-bloque y se centra en decisiones globales y resolución de NEED/TRIGGER.  
- **lo_que_haremos:**  
  - CAPITÁN: mantener CAP-02…CAP-06 como anclas de kernel y contratos MVO, y usar CAP-09 como paraguas para nuevos INTENTs de contenido.  
  - E1–E4: abrir INTENTs referenciando CAP-09 cuando creen/expandan contenido (F*, P0x, trayectorias, casos, templates, schemas), explicando alcance y relación con trayectorias/gates, y reportar OUTCOME al cerrar cada bloque.  
- **lo_que_necesitamos:**  
  - Que cada equipo mantenga trazabilidad con VOCAB+DEPGRAPH, use `dependency_closure_script.py` al tocar dependencias y documente cambios relevantes aquí; cualquier conflicto entre equipos se tratará vía nuevos eventos `[NEED]` o `[DECISIÓN]`.  
- **estado:** open  
- **links:** `board_coordinación.md`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `40_implementacion_metodologia/dev_specs/dependency_closure_script.py`

- **id_evento:** `20251114-1512-CAP-08`  
- **timestamp:** 2025-11-14 15:12  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO]  
- **artefactos:** `CAP-05`, `CAP-06`, `G1–G4`, `trayectorias`, `12_roles_governance/01_team_structure_raci.md`, `13_metricas_validacion/02_health_gates.md`, `13_metricas_validacion/03_dashboards_reporting.md`, `17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `KERNEL_READINESS`  
- **resumen:** CAP-08 – Mandato a E4: construir el marco inicial de validación VG4 usando G1–G4 + RACI + trayectorias, definiendo cómo se validan I1–I8 con los artefactos actuales, sin introducir nuevos IDs ni métricas fuera del kernel `v1.0.0-kernel`.  
- **impacto_en_dependencias:** Da al Squad una base explícita de cómo probar la metodología end-to-end (kernel → fases → playbooks → trayectorias → health gates); cualquier cambio futuro en contratos deberá respetar este marco o actualizarlo explícitamente aquí.  
- **lo_que_haremos:**  
  - E4 DEBE:  
    1. Crear `13_metricas_validacion/03_dashboards_reporting.md` v0.1 describiendo 2–3 dashboards mínimos para operar G1–G4 con `H_org`, `eta_org`, `ROI_Habilitacion`.  
    2. Redactar `17_validacion_final/01_validacion_trazabilidad_i1_i8.md` v0.1 especificando, para cada invariante I1–I8, qué artefactos actuales se usan para validarla (VOCAB, DEP_GRAPH, 00b_mapeo, Fases F4–F12, P01–P04, G1–G4, trayectorias, RACI, KERNEL_READINESS).  
    3. Verificar consistencia de este marco con `KERNEL_READINESS.md` y dejar referencia cruzada en ambos documentos.  
- **lo_que_necesitamos:**  
  - Que E4 registre un `[INTENT]` específico para CAP-08 y un `[OUTCOME]` cuando ambos documentos estén en estado MVO; cualquier duda se debe registrar como `[NEED]` en este board.  
- **estado:** open  
- **links:** `30_metodologia_orko/13_metricas_validacion/`, `30_metodologia_orko/12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/09_trayectorias/`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `40_implementacion_metodologia/dev_specs/KERNEL_READINESS.md`

- **id_evento:** `20251114-1511-CAP-07`  
- **timestamp:** 2025-11-14 15:11  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO]  
- **artefactos:** `CAP-04`, `CAP-06`, `P01`, `P02`, `P03`, `P04`, `P05`, `P06`, `P07`, `P08`, `playbook_schema`, `playbook_instances`, `F10`, `F11`, `F12`, `trayectorias`  
- **resumen:** CAP-07 – Mandato a E3: consolidar el contrato estructural de playbooks definiendo el schema unificado (P01–P15) y conectando P01–P04 con F10–F12 y trayectorias Survival/Minimal/Avanzada, sin agregar nuevas métricas ni fases.  
- **impacto_en_dependencias:** Entrega al Squad un catálogo uniforme (schema + metadata) para gobernar P01–P15; E2 tendrá claridad de cómo se usan F10–F12 en playbooks; E4 podrá referenciar este contrato en governance y validación.  
- **lo_que_haremos:**  
  - E3 DEBE:  
    1. Definir `30_metodologia_orko/08_playbooks_operational/playbook_schema.yaml` v0.1 con campos mínimos (`id`, `categoria`, `metricas_canonicas`, `fases_relacionadas`, `gates_relacionados`, `trayectorias_relacionadas`, `artefactos_evidencia`).  
    2. Poblar `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml` con entradas base para P01–P15 usando ese schema (aunque algunos campos queden como TODO).  
    3. Crear §0–§1 skeleton para `P05_bounded_autonomy_m6.md`, `P06_pilot_transformation.md`, `P07_scale_transformation.md`, `P08_optimization_sustain.md`, especificando propósito, dominios D1–D4 y relación con F10–F12 y trayectorias.  
- **lo_que_necesitamos:**  
  - Que E3 registre un `[INTENT]` específico para CAP-07 y un `[OUTCOME]` cuando schema+instances y P05–P08 §0–§1 estén listos; cualquier conflicto con SPEC/DEP_GRAPH/health gates se reporta como `[NEED]`.  
- **estado:** open  
- **links:** `30_metodologia_orko/06_playbooks_recovery/`, `30_metodologia_orko/07_playbooks_transformation/`, `30_metodologia_orko/03_fases_implementation/`, `30_metodologia_orko/09_trayectorias/`, `30_metodologia_orko/08_playbooks_operational/playbook_schema.yaml`, `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml`

- **id_evento:** `20251114-1500-E1-06`  
- **timestamp:** 2025-11-14 15:00  
- **equipo:** E1  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-02`, `dependency_closure_script`, `KERNEL_READINESS`, `VOCAB`, `DEPENDENCY_GRAPH`  
- **resumen:** CAP-02 cumplido para E1: `dependency_closure_script.py` implementado y ejecutado con éxito (`[SUMMARY] All dependency checks passed.`) y `KERNEL_READINESS.md` creado como guía de lectura de `v1.0.0-kernel` para E2–E4.  
- **impacto_en_dependencias:** El kernel (VOCAB+DEP_GRAPH) queda validado y documentado; E2–E4 disponen de script de validación y one-pager para extender dependencias sin ambigüedad durante SPRINT 1.  
- **lo_que_haremos:** E1 queda sin mandatos adicionales activos; se mantendrá en modo soporte, respondiendo a `[NEED]` relacionados con kernel/metricas/DEP_GRAPH y preparando, si se solicita, propuestas para futuras versiones del VOCAB.  
- **lo_que_necesitamos:** Ninguno; abiertos a feedback del Capitán sobre si CAP-02 puede considerarse formalmente cerrado.  
- **estado:** done  
- **links:** `40_implementacion_metodologia/dev_specs/dependency_closure_script.py`, `40_implementacion_metodologia/dev_specs/KERNEL_READINESS.md`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `board_coordinación (CAP-02)`

- **id_evento:** `20251114-1455-E1-05`  
- **timestamp:** 2025-11-14 14:55  
- **equipo:** E1  
- **tipo:** [OUTCOME] [UNBLOCK]  
- **artefactos:** `CAP-02`, `dependency_closure_script`, `DEPENDENCY_GRAPH`, `VOCAB`  
- **resumen:** `dependency_closure_script.py` ejecutado en entorno `.venv`; resultado: `[SUMMARY] All dependency checks passed.` (refs, DAG y orphans OK para `v1.0.0-kernel`).  
- **impacto_en_dependencias:** E2–E4 pueden extender `DEPENDENCY_GRAPH.yaml` sabiendo que el kernel actual está consistente con `VOCAB`; el script queda disponible como check obligatorio cuando se toquen dependencias.  
- **lo_que_haremos:** Considerar resuelto el `[NEED]` `20251114-1446-E1-04` y pasar al segundo deliverable de CAP-02: redactar `KERNEL_READINESS.md` (one-pager) para E2–E4.  
- **lo_que_necesitamos:** Nada por ahora.  
- **estado:** in_progress  
- **links:** `40_implementacion_metodologia/dev_specs/dependency_closure_script.py`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `board_coordinación (CAP-02)`

- **id_evento:** `20251114-1455-E2-06`  
- **timestamp:** 2025-11-14 14:55  
- **equipo:** E2  
- **tipo:** [INTENT]  
- **artefactos:** `CAP-03`, `CAP-06`, `board_coordinación`, `F8`, `F10`, `F11`, `F12`, `compliance_framework_schema`, `context_pattern_schema`  
- **resumen:** Revisión del board completada tras `CAP-06` y OUTCOME `E2-05`; no hay nuevos mandatos para E2. E2 queda en ejecución autónoma y stand-by, listo para responder a futuros `[NEED]` o CAP-x que se documenten aquí.  
- **impacto_en_dependencias:** Informa al Capitán y a E1–E4 que E2 no tiene trabajo crítico pendiente y que interfaces/schemas actuales son la base estable para expansión en Etapa 2.  
- **lo_que_haremos:** Mantener contratos de F8/F10–F12 y schemas en estado estable, aplicar solo ajustes menores compatibles con `v1.0.0-kernel` hasta nuevos mandatos.  
- **lo_que_necesitamos:** Ninguno por ahora.  
- **estado:** in_progress  
- **links:** `board_coordinación (CAP-03, CAP-06)`, `30_metodologia_orko/02_fases_development/`, `30_metodologia_orko/03_fases_implementation/`, `40_implementacion_metodologia/dev_specs/schemas/`  

- **id_evento:** `20251114-1453-E4-05`  
- **timestamp:** 2025-11-14 14:53  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-05`, `G1–G4`, `13_metricas_validacion/02_health_gates.md`, `12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/09_trayectorias/01_minimal_6_12_meses.md`, `30_metodologia_orko/09_trayectorias/02_avanzada_18_36_meses.md`, `30_metodologia_orko/09_trayectorias/04_survival_0_10K.md`  
- **resumen:** CAP-05 MVO cumplido para E4: health gates G1–G4 alineados con `VOCAB` y `playbooks_triggers_catalog`, RACI inicial de governance por gate en `01_team_structure_raci.md` y trayectorias `Survival`/`Minimal`/`Avanzada` actualizadas con secciones explícitas de relación con G1–G4 y decisiones `F3`/`F17`.  
- **impacto_en_dependencias:** E1–E3 y el Capitán pueden usar G1–G4 + RACI + trayectorias como contrato MVO de operación y cambio de trayectoria durante SPRINT 1; ajustes posteriores deberán respetar estos artefactos o registrarse aquí.  
- **lo_que_haremos:** Mientras no haya nuevos mandatos, E4 se enfocará en revisar consistencia conceptual con `DEPENDENCY_GRAPH.yaml` y preparar insumos para VG4 (validación de I1–I8) sin introducir nuevos IDs ni romper `v1.0.0-kernel`.  
- **lo_que_necesitamos:** Instrucciones del Capitán sobre el siguiente foco prioritario para E4 (por ejemplo: cerrar CAP-05 formalmente tras revisión, apoyar a E3 en integración P01–P04↔G1–G2 o preparar artefactos de validación VG4).  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/09_trayectorias/`  

- **id_evento:** `20251114-1453-E3-01`  
- **timestamp:** 2025-11-14 14:53  
- **equipo:** E3  
- **tipo:** [OUTCOME] [NEED]  
- **artefactos:** `CAP-04`, `P01`, `P02`, `P03`, `P04`, `playbooks_triggers_catalog`, `G1`, `G2`  
- **resumen:** CAP-04 cumplido para E3: P01–P04 tienen §0 FUNDAMENTO y §1 INTERFAZ completos siguiendo `TEMPLATE_PLAYBOOK` y VOCAB; triggers/outputs solo usan métricas canónicas (`H_org`, `eta_org`, `ROI_Habilitacion`) y fueron validados contra `playbooks_triggers_catalog.md` y health gates G1–G2 (`02_health_gates.md`). E3 queda sin mandatos activos.  
- **impacto_en_dependencias:** E4 puede usar P01–P04 como base estable en G1–G2; el Capitán dispone de un núcleo de playbooks críticos listo para baja `H_org`, handoffs excesivos, desalineamiento OKR y seguridad/compliance.  
- **lo_que_haremos:** Mantener loop trabajo→board y no iniciar nuevos playbooks hasta que exista un nuevo mandato CAP-x para E3 (en línea con `CAP-06`).  
- **lo_que_necesitamos:** Nuevo mandato `CAP-0x` para E3 definiendo próximo foco (p.ej. P05–P08 §0–§1, playbooks operacionales P09–P15 a nivel schema, o integración P01–P04 con F10–F12 y trayectorias).  
- **estado:** done  
- **links:** `CAP-04`, `30_metodologia_orko/06_playbooks_recovery/`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`

- **id_evento:** `20251114-1450-E2-05`  
- **timestamp:** 2025-11-14 14:50  
- **equipo:** E2  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-03`, `F8`, `F10`, `F11`, `F12`, `compliance_framework_schema`, `context_pattern_schema`, `VOCAB`, `DEPENDENCY_GRAPH`  
- **resumen:** CAP-03 cumplido para E2: §0 FUNDAMENTO y §1 INTERFAZ completados para `F8_Limits_Definition`, `F10_Quick_Wins`, `F11_Fabric_Deployment` y `F12_State_Transition`, y skeletons v0.1 de `compliance_framework_schema.yaml` y `context_pattern_schema.yaml` creados en `dev_specs/schemas` siguiendo TEMPLATE_SCHEMA + SPEC.  
- **impacto_en_dependencias:** E3/E4 disponen ahora de contratos formales de interfaz para F8/F10–F12 y schemas de compliance/contexto en `dev_specs` como base para triggers, health gates y casos; cualquier cambio posterior deberá respetar estos contratos o registrarse aquí.  
- **lo_que_haremos:** E2 queda en ejecución autónoma, usando estas interfaces/schemas como base y a la espera de nuevos mandatos CAP-x o `[NEED]` de otros equipos; en ausencia de nuevas instrucciones solo se harán mejoras menores manteniendo compatibilidad con `v1.0.0-kernel`.  
- **lo_que_necesitamos:** Ninguno por ahora; abiertos a feedback del Capitán/E1–E4 en este board.  
- **estado:** done  
- **links:** `30_metodologia_orko/02_fases_development/`, `30_metodologia_orko/03_fases_implementation/`, `40_implementacion_metodologia/dev_specs/schemas/`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `board_coordinación (CAP-03)`  

- **id_evento:** `20251114-1446-E1-04`  
- **timestamp:** 2025-11-14 14:46  
- **equipo:** E1  
- **tipo:** [NEED]  
- **artefactos:** `CAP-02`, `dependency_closure_script`, `PyYAML`, `board_coordinación`  
- **resumen:** CAP-02 parcialmente ejecutado: `dependency_closure_script.py` implementado pero bloqueado por falta de librería `PyYAML` en el entorno (`ModuleNotFoundError: yaml`).  
- **impacto_en_dependencias:** E2–E4 aún pueden trabajar con `v1.0.0-kernel` estable, pero no disponen de validación automática del grafo hasta que se instale la dependencia. Riesgo moderado si se editan dependencias sin correr el script.  
- **lo_que_haremos:** Una vez disponible `PyYAML`, E1 ejecutará `dependency_closure_script.py` contra `DEPENDENCY_GRAPH.yaml` y reportará `[OUTCOME]` con el resultado de refs/DAG/orphans.  
- **lo_que_necesitamos:** Instalación de `PyYAML` en el entorno donde se ejecuta el script, por ejemplo: `python3 -m pip install pyyaml`. Confirmar en el board cuando esté disponible para marcar este NEED como resuelto.  
- **estado:** done  
- **links:** `40_implementacion_metodologia/dev_specs/dependency_closure_script.py`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`

- **id_evento:** `20251114-1445-E2-04`  
- **timestamp:** 2025-11-14 14:45  
- **equipo:** E2  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-03`, `F11`, `F3`, `F4`, `F5`, `F6`, `F8`, `F9`, `F12`, `F13`  
- **resumen:** Progreso CAP-03: §0 FUNDAMENTO y §1 INTERFAZ de `F11_Fabric_Deployment` completados y alineados con VOCAB+SPEC+`DEPENDENCY_GRAPH`; se describen inputs desde F3–F6/F8/F9 y outputs `fabric_deployment_plan`, `tf1/tf2/tf3_plans` y `fabric_status` coherentes con SPEC.  
- **impacto_en_dependencias:** E3/E4 pueden asumir que F11 producirá planes de despliegue y `fabric_status` como contrato estable; F12 puede usar `fabric_deployment_plan` como insumo para `state_transition_plan`, F13 puede observar `fabric_status` como parte de la salud operacional.  
- **lo_que_haremos:** Continuar el INTENT `20251114-1428-E2-01` completando §0–§1 de `F12_state_transition` y luego crear skeletons de `compliance_framework_schema` y `context_pattern_schema`.  
- **lo_que_necesitamos:** Ninguno por ahora.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/03_fases_implementation/F11_fabric_deployment.md`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `board_coordinación (CAP-03)`  

- **id_evento:** `20251114-1442-E4-04`  
- **timestamp:** 2025-11-14 14:42  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-05`, `G1–G4`, `12_roles_governance/01_team_structure_raci.md`, `13_metricas_validacion/02_health_gates.md`  
- **resumen:** Progreso CAP-05: borrador v0.1 de `12_roles_governance/01_team_structure_raci.md` creado, con RACI por gate G1–G4 (quién detecta, decide, ejecuta y audita) alineado a `02_health_gates.md`, `VOCAB` y `playbooks_triggers_catalog`.  
- **impacto_en_dependencias:** E1–E3 ya pueden usar este RACI como referencia de governance cuando documenten fases y playbooks relacionados con G1–G4; trayectorias siguen pendientes de actualizar para reflejar este esquema.  
- **lo_que_haremos:** Siguiente paso de CAP-05: actualizar `Survival`, `Minimal`, `Avanzada` con una sección explícita de relación con G1–G4 y decisiones `F3`/`F17`, y luego registrar un nuevo `[OUTCOME]` cuando esa conexión esté lista.  
- **lo_que_necesitamos:** Ninguno por ahora; se solicitará revisión del Capitán sobre el RACI cuando trayectorias también reflejen G1–G4.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/09_trayectorias/`  

- **id_evento:** `20251114-1438-E4-03`  
- **timestamp:** 2025-11-14 14:38  
- **equipo:** E4  
- **tipo:** [INTENT]  
- **artefactos:** `CAP-05`, `board_coordinación`, `G1–G4`, `12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/09_trayectorias/`, `13_metricas_validacion/02_health_gates.md`  
- **resumen:** Revisión del board completada tras `CAP-06`; no hay nuevas instrucciones. E4 continúa ejecutando el plan activo de CAP-05 (RACI + trayectorias ligadas a G1–G4).  
- **impacto_en_dependencias:** Sin cambios inmediatos; mantiene sincronía con E1–E3 y confirma al Capitán que seguimos en ejecución autónoma según la decisión CAP-06.  
- **lo_que_haremos:** Proseguir con: (1) redacción de `12_roles_governance/01_team_structure_raci.md` (roles por gate), (2) actualización de `Survival`, `Minimal`, `Avanzada` con la sección “Relación con G1–G4”, (3) verificación contra `DEPENDENCY_GRAPH.yaml`.  
- **lo_que_necesitamos:** Ninguno; se reportará `[OUTCOME]` cuando el borrador de governance esté listo o si surge un `[NEED]`.  
- **impacto_en_dependencias:** E4 informado que seguimos ejecutando plan CAP-04 sin bloqueos; sin cambios para otros equipos.  
- **lo_que_haremos:** Completar la checklist catálogo/G1–G2 y registrar `[OUTCOME]` final cuando CAP-04 quede cerrado.  
- **lo_que_necesitamos:** Ninguno.  
- **estado:** in_progress  
- **links:** `CAP-04`, `30_metodologia_orko/06_playbooks_recovery/`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`

- **id_evento:** `20251114-1433-E1-03`  
- **timestamp:** 2025-11-14 14:33  
- **equipo:** E1  
- **tipo:** [OUTCOME]  
- **artefactos:** `board_coordinación`, `CAP-02`, `CAP-06`  
- **resumen:** E1 revisó el board tras la decisión `CAP-06`; no hay instrucciones nuevas. Continuamos ejecutando `CAP-02` (closure script + Kernel Readiness) sin requerir apoyo adicional.  
- **impacto_en_dependencias:** E2–E4 pueden asumir que el kernel sigue estable y que E1 solo interrumpirá para reportar avances o abrir `[NEED]` si surge bloqueo en CAP-02.  
- **lo_que_haremos:** Mantener el ciclo trabajo→board (siguiente hito: primer borrador de `dependency_closure_script.py`).  
- **lo_que_necesitamos:** Nada por ahora.  
- **estado:** in_progress  
- **links:** `CAP-02`, `CAP-06`, `board_coordinación`

- **id_evento:** `20251114-1435-CAP-06`  
- **timestamp:** 2025-11-14 14:35  
- **equipo:** CAPITÁN  
- **tipo:** [DECISIÓN]  
- **artefactos:** `board_coordinación`, `CAP-02`, `CAP-03`, `CAP-04`, `CAP-05`, `VOCAB`, `DEPENDENCY_GRAPH`, `F*`, `P0x`, `G1–G4`, `trayectorias`  
- **resumen:** Se establece que, hasta el cierre de SPRINT 1, los equipos 1–4 trabajarán de forma autónoma siguiendo sus mandatos CAP-02…CAP-05 y deberán reportar avances o eventos críticos en el board al menos cada 24 horas o cuando ocurra un trigger. No se emitirán nuevos mandatos salvo que aparezca un `[NEED]` o `[TRIGGER]` documentado aquí.  
- **impacto_en_dependencias:** Garantiza visibilidad continua del progreso sin microgestión; el Capitán solo intervendrá para resolver bloqueos o aprobar cambios que afecten kernel/expansión/playbooks/governance.  
- **lo_que_haremos:**  
  - CAPITÁN: revisar este board tres veces al día (inicio, mitad y cierre de jornada) y responder únicamente a `[NEED]`, `[TRIGGER]`, `[UNBLOCK]` o entregas `[OUTCOME]`; nuevos mandatos se evaluarán al final del sprint salvo urgencias.  
  - E1–E4: continuar ejecutando sus planes actuales, registrar `[OUTCOME]` parciales cuando completen hitos relevantes, y abrir `[NEED]` solo si requieren decisión o insumo inter-equipo.  
- **lo_que_necesitamos:**  
  - Que cada equipo mantenga actualizado el board (mínimo un update cada 24 h) y documente explícitamente cuando un entregable de sprint quede listo para revisión.  
- **estado:** done  
- **links:** `CAP-02`, `CAP-03`, `CAP-04`, `CAP-05`, `30_metodologia_orko/00_wip_desarrollo_metodologia/board_coordinación.md`

- **id_evento:** `20251114-1430-E2-02`  
- **timestamp:** 2025-11-14 14:30  
- **equipo:** E2  
- **tipo:** [OUTCOME]  
- **artefactos:** `F8`, `F10`, `F11`, `F12`, `compliance_framework_schema`, `context_pattern_schema`, `CAP-03`  
- **resumen:** Progreso parcial mandato `CAP-03`: §0 FUNDAMENTO y §1 INTERFAZ de `F8_Limits_Definition` completados y alineados con VOCAB + SPEC + `DEPENDENCY_GRAPH`. Continuamos con `F10`–`F12` y los schemas.  
- **impacto_en_dependencias:** E3/E4 ya pueden referenciar `limit_catalog` y `limit_phase_matrix` como fuentes válidas; no hay cambios aún en schemas hasta entregar skeletons.  
- **lo_que_haremos:** En curso paso 2 del INTENT `20251114-1428-E2-01`: completar §0–§1 de `F10`, `F11`, `F12` y luego crear los skeletons de `compliance_framework_schema` y `context_pattern_schema`.  
- **lo_que_necesitamos:** Ninguno.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/06_playbooks_recovery/`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`

- **id_evento:** `20251114-1431-E4-02`  
- **timestamp:** 2025-11-14 14:31  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-05`, `G1`, `G2`, `G3`, `G4`, `13_metricas_validacion/02_health_gates.md`, `12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/09_trayectorias/`  
- **resumen:** Progreso CAP-05: E4 completó la alineación de G1–G4 con `VOCABULARIO_CONTROLADO` y `playbooks_triggers_catalog` (ver `02_health_gates.md` v0.1). Sigue en curso la bajada a governance (RACI + escalamiento) y la actualización de trayectorias.  
- **impacto_en_dependencias:** E1 y E3 pueden usar G1–G4 como contrato de métricas/playbooks; E2 tendrá contexto claro para interfaces F4–F12. Governance y trayectorias aún en construcción, por lo que CAP-05 permanece abierto.  
- **lo_que_haremos:** Avanzar con el borrador de `12_roles_governance/01_team_structure_raci.md` (roles frente a cada gate) y agregar sección “Relación con G1–G4” en `Survival`, `Minimal`, `Avanzada`, validando consistencia con `DEPENDENCY_GRAPH.yaml`.  
- **lo_que_necesitamos:** Ninguno por ahora; se solicitará revisión al Capitán cuando el borrador de governance esté listo.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/09_trayectorias/`  

- **id_evento:** `20251114-1429-E1-02`  
- **timestamp:** 2025-11-14 14:29  
- **equipo:** E1  
- **tipo:** [OUTCOME]  
- **artefactos:** `VOCAB`, `playbooks_triggers_catalog`, `02_health_gates`, `CAP-02`  
- **resumen:** E1 completó la evaluación de métricas candidatas propuestas por E3/E4 (`handoff_ratio`, `okr_alignment_score`, `capacity_gap_index`, `tf3_data_quality_score`). Decisión: aprobadas conceptualmente para próxima versión del VOCAB, pero el kernel `v1.0.0-kernel` se mantiene cerrado en este sprint.  
- **impacto_en_dependencias:** E3/E4 podrán seguir usando estas métricas como "signal text" mientras preparan definiciones; ninguna se usa como `metric_id` hasta que E1 publique el próximo release del VOCAB.  
- **lo_que_haremos:** Documentar las decisiones en el changelog próximo (`VOCAB v1.1.x`), mantener `dependency_closure_script` y `KERNEL_READINESS` como foco actual del mandato `CAP-02`.  
- **lo_que_necesitamos:** Nada; cuando tengamos borrador de definiciones operativas pediremos revisión al Capitán.  
- **estado:** done  
- **links:** `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`

- **id_evento:** `20251114-1428-E2-01`  
- **timestamp:** 2025-11-14 14:28  
- **equipo:** E2  
- **tipo:** [INTENT]  
- **artefactos:** `F8`, `F10`, `F11`, `F12`, `compliance_framework_schema`, `context_pattern_schema`, `VOCAB`, `DEPENDENCY_GRAPH`, `TEMPLATE_SCHEMA`  
- **resumen:** INTENT E2 respecto mandato `CAP-03`: completar §0–§1 de F8 y F10–F12 y crear skeletons de schemas de compliance/contexto usando solo VOCAB + `v1.0.0-kernel`. DoD del sprint E2: F8/F10–F12 con FUNDAMENTO/INTERFAZ completos + skeletons de `compliance_framework_schema` y `context_pattern_schema` yamllint-clean + lista de métricas/entidades candidatas documentada.  
- **impacto_en_dependencias:** E3 (triggers y playbooks basados en compliance/contexto), E4 (health gates y governance que usan límites/contexto), E1 (posible incorporación futura de nuevas métrricas/entidades al VOCAB).  
- **lo_que_haremos:**  
  - Paso 1: completar §0 FUNDAMENTO y §1 INTERFAZ de `F8`, alineados a VOCAB + SPEC + DEPENDENCY_GRAPH.  
  - Paso 2: completar §0 FUNDAMENTO y §1 INTERFAZ de `F10`, `F11` y `F12`, alineados a VOCAB + SPEC + DEPENDENCY_GRAPH.  
  - Paso 3: crear skeletons de `compliance_framework_schema.yaml` y `context_pattern_schema.yaml` basados en `TEMPLATE_SCHEMA.yaml`, yamllint-clean y usando solo IDs canónicos.  
  - Paso 4: mantener un registro separado de métricas/entidades candidatas para proponer a E1 (sin usarlas aún como IDs en docs).  
- **lo_que_necesitamos:** nada por ahora; se solicitará feedback al Capitán/E1 si aparecen riesgos en diseño.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/02_fases_development/`, `40_implementacion_metodologia/dev_specs/TEMPLATE_SCHEMA.yaml`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`  

- **id_evento:** `20251114-1425-E4-01`  
- **timestamp:** 2025-11-14 14:25  
- **equipo:** E4  
- **tipo:** [INTENT]  
- **artefactos:** `G1`, `G2`, `G3`, `G4`, `13_metricas_validacion/02_health_gates.md`, `12_roles_governance/01_team_structure_raci.md`, `30_metodologia_orko/09_trayectorias/`  
- **resumen:** En respuesta al mandato `CAP-05`, E4 (Completion/Governance) iniciará el trabajo para bajar G1–G4 a un esquema de governance (RACI + escalamiento) y conectar explícitamente estos gates con las trayectorias `Survival`, `Minimal`, `Avanzada`.  
- **impacto_en_dependencias:** E1 (coherencia con `VOCAB`), E2 (lectura de `F4`–`F8`, `F10`–`F12`), E3 (coherencia con triggers de `P01`–`P04` y `playbooks_triggers_catalog`), trayectorias (`Minimal`, `Avanzada`, `Survival`) y health gates G1–G4.  
- **lo_que_haremos:**  
  - Paso 1: consolidar G1–G4 y su alineamiento con `P01`–`P15` usando `playbooks_triggers_catalog.md` y `VOCABULARIO_CONTROLADO.yaml` (ya bosquejado en `02_health_gates.md`).  
  - Paso 2: crear un borrador de `12_roles_governance/01_team_structure_raci.md` con §0–§1 enfocado en roles/responsabilidades frente a G1–G4 (quién detecta, quién decide, quién ejecuta, quién audita).  
  - Paso 3: actualizar las trayectorias `Survival`, `Minimal`, `Avanzada` para incluir una sección explícita de relación con G1–G4 y criterios de cambio de trayectoria (`F3`/`F17`).  
  - Paso 4: revisar coherencia con `DEPENDENCY_GRAPH.yaml` para no romper prerequisitos ni consumers.  
- **lo_que_necesitamos:** Nada inmediato; se solicitará al Capitán revisión de diseño de governance mediante un evento `[NEED]` una vez que el borrador de RACI esté listo.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/09_trayectorias/`, `30_metodologia_orko/12_roles_governance/01_team_structure_raci.md`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`  

- **id_evento:** `20251114-1426-E1-01`  
- **timestamp:** 2025-11-14 14:26  
- **equipo:** E1  
- **tipo:** [INTENT]  
- **artefactos:** `DEPENDENCY_GRAPH`, `dependency_closure_script`, `VOCAB`, `KERNEL_READINESS`  
- **resumen:** E1 inicia trabajo del mandato `CAP-02`: implementar `dependency_closure_script.py` y redactar one-pager de "Kernel Readiness" para `v1.0.0-kernel`.  
- **impacto_en_dependencias:** E2–E4 podrán confiar en que expansiones de grafo respetan IDs canónicos del VOCAB y reglas de DAG; el Capitán tendrá una vista clara del estado del kernel antes de liberar más features.  
- **lo_que_haremos:**  
  - Diseñar y documentar las reglas mínimas del closure script: validar que todas las refs de fases/playbooks/trayectorias/métricas en `DEPENDENCY_GRAPH.yaml` existen en `VOCABULARIO_CONTROLADO.yaml`, que el grafo es DAG salvo `feedback_loops` explícitos y que no hay outputs huérfanos en el kernel.  
  - Implementar `dependency_closure_script.py` en `40_implementacion_metodologia/dev_specs/` con salida clara de errores/warnings para que E2–E4 puedan correrlo.  
  - Redactar `KERNEL_READINESS.md` (one-pager) explicando qué está congelado en `v1.0.0-kernel` y cómo leer el grafo (fases kernel, expansiones, playbooks, trayectorias).  
- **lo_que_necesitamos:** Nada por ahora; si aparecen dudas sobre alcance del closure script o formato de salida, E1 registrará un `[NEED]` dirigido al Capitán referenciando `CAP-02`.  
- **estado:** in_progress  
- **links:** `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `board_coordinación (CAP-02)`

- **id_evento:** `20251114-1426-E3-01`  
- **timestamp:** 2025-11-14 14:26  
- **equipo:** E3  
- **tipo:** [INTENT]  
- **artefactos:** `P01`, `P02`, `P03`, `P04`, `playbooks_triggers_catalog`, `G1`, `G2`  
- **resumen:** En respuesta a `CAP-04`, E3 va a bajar P01–P04 a §0–§1 siguiendo VOCAB y `TEMPLATE_PLAYBOOK`, asegurando coherencia con `playbooks_triggers_catalog.md` y health gates G1–G2.  
- **impacto_en_dependencias:** E4 (uso de P01–P04 en G1–G2), Capitán (núcleo de playbooks críticos listo), E2 (artefactos de F4–F6 usados como contexto).  
- **lo_que_haremos:**  
  - Paso 1: Revisar `TEMPLATE_PLAYBOOK.md`, `playbooks_triggers_catalog.md` y `02_health_gates.md` para fijar estructura y triggers de P01–P04.  
  - Paso 2: Redactar §0 FUNDAMENTO y §1 INTERFAZ de P01–P04 con IDs canónicos (VOCAB) y referencias explícitas a F13, G1–G2, `H_org`, `eta_org`, `ROI_Habilitacion`.  
  - Paso 3: Chequear que triggers y condiciones descritas en P01–P04 coincidan con el catálogo de triggers y las reglas de G1–G2 (sin nuevas métricas).  
- **lo_que_necesitamos:** Nada por ahora; si aparece conflicto entre SPEC/DEP_GRAPH y health gates lo reportaremos en un evento `[NEED]`.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/06_playbooks_recovery/P01_low_h_org_recovery.md`, `30_metodologia_orko/06_playbooks_recovery/P02_handoff_reduction.md`, `30_metodologia_orko/06_playbooks_recovery/P03_okr_alignment.md`, `30_metodologia_orko/06_playbooks_recovery/P04_security_remediation.md`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`

- **id_evento:** `20251114-1405-CAP-01`  
- **timestamp:** 2025-11-14 14:05  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO] [DECISIÓN]  
- **artefactos:** `board_coordinación`, `VOCAB`, `DEPENDENCY_GRAPH`, `F*`, `P0x`, `trayectorias`, `health_gates`, `schemas`  
- **resumen:** A partir de ahora `board_coordinación.md` es el artefacto principal de coordinación del Squad ORKO. Todos los equipos deben leerlo antes de actuar y registrar eventos de coordinación.  
- **impacto_en_dependencias:** E1–E4 coordinan cambios y necesidades EXCLUSIVAMENTE vía este board. El Capitán emite mandatos y decisiones solo aquí.  
- **lo_que_haremos:**  
  - CAPITÁN: publicar mandatos globales y revisar eventos `[NEED]`, `[TRIGGER]`, `[UNBLOCK]`.  
  - E1–E4: registrar `[INTENT]` antes de acciones relevantes, `[OUTCOME]` al terminar hitos, `[NEED]` para solicitudes, `[TRIGGER]` cuando un gate/playbook se activa.  
- **lo_que_necesitamos:** Que cada equipo registre HOY su primer `[INTENT]` alineado al foco inmediato definido para este sprint.  
- **estado:** open  
- **links:** `30_metodologia_orko/00_wip_desarrollo_metodologia/board_coordinación.md`

---

- **id_evento:** `20251114-1418-CAP-02`  
- **timestamp:** 2025-11-14 14:18  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO]  
- **artefactos:** `DEPENDENCY_GRAPH`, `dependency_closure_script`, `VOCAB`  
- **resumen:** Mandato a E1: endurecer validación del grafo de dependencias sin modificar el kernel, y dejar claro para el Squad cómo leer `v1.0.0-kernel`.  
- **impacto_en_dependencias:** E2–E4 estarán protegidos contra errores en expansiones futuras del grafo; el Capitán tendrá una vista clara de readiness del kernel.  
- **lo_que_haremos:**  
  - E1:  
    - Implementar/ajustar `dependency_closure_script.py` para validar refs y DAG según reglas de [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0).  
    - Redactar un one‑pager de “Kernel Readiness” que explique qué está congelado en `v1.0.0-kernel` y cómo leer el grafo.  
- **lo_que_necesitamos:**  
  - Que E1 registre un `[INTENT]` propio antes de empezar, referenciando este mandato, y un `[OUTCOME]` cuando tenga listo el script y el one‑pager.  
- **estado:** open  
- **links:** [40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0), [40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml:0:0-0:0)

---

- **id_evento:** `20251114-1420-CAP-03`  
- **timestamp:** 2025-11-14 14:20  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO]  
- **artefactos:** `F8`, `F10`, `F11`, `F12`, `compliance_framework_schema`, `context_pattern_schema`  
- **resumen:** Mandato a E2: completar §0–§1 de F8 y F10–F12 y crear skeletons de los schemas de compliance y contexto usando solo VOCAB y kernel `v1.0.0-kernel`.  
- **impacto_en_dependencias:** E3 podrá usar estas fases como contexto para triggers; E4 tendrá evidencias claras para health gates y governance.  
- **lo_que_haremos:**  
  - E2:  
    - Terminar FUNDAMENTO/INTERFAZ de F8 y F10–F12 alineados con VOCAB+SPEC+DEP_GRAPH.  
    - Crear skeletons yamllint‑clean de `compliance_framework_schema.yaml` y `context_pattern_schema.yaml` basados en `TEMPLATE_SCHEMA.yaml`.  
    - Mantener una lista de métricas/entidades candidatas para proponer a E1 (sin usarlas aún como IDs).  
- **lo_que_necesitamos:**  
  - Que E2 registre un `[INTENT]` propio antes de empezar y un `[OUTCOME]` cuando F8/F10–F12 §0–§1 y los schemas skeleton estén listos.  
- **estado:** open  
- **links:** `30_metodologia_orko/02_fases_development/`, `40_implementacion_metodologia/dev_specs/TEMPLATE_SCHEMA.yaml`
- **id_evento:** `20251114-1422-CAP-04`  
- **timestamp:** 2025-11-14 14:22  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO]  
- **artefactos:** `P01`, `P02`, `P03`, `P04`, `playbooks_triggers_catalog`, `G1`, `G2`  
- **resumen:** Mandato a E3: bajar P01–P04 a §0–§1 y asegurar coherencia total con el catálogo de triggers y los health gates G1–G2.  
- **impacto_en_dependencias:** E4 podrá usar P01–P04 de forma confiable en G1–G2; el Capitán tendrá un núcleo de playbooks listo para casos críticos.  
- **lo_que_haremos:**  
  - E3:  
    - Redactar FUNDAMENTO/INTERFAZ de P01–P04 siguiendo `TEMPLATE_PLAYBOOK` y `playbooks_triggers_catalog.md`.  
    - Revisar P01–P04 contra G1–G2 para eliminar contradicciones o huecos.  
- **lo_que_necesitamos:**  
  - Que E3 registre un `[INTENT]` propio antes de empezar y un `[OUTCOME]` cuando P01–P04 §0–§1 estén consolidados.  
- **estado:** open  
- **links:** `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`

---

- **id_evento:** `20251114-1424-CAP-05`  
- **timestamp:** 2025-11-14 14:24  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO]  
- **artefactos:** `G1`, `G2`, `G3`, `G4`, `trayectorias`, `roles_governance`  
- **resumen:** Mandato a E4: bajar G1–G4 a un esquema de governance (RACI + escalamiento) y conectar explícitamente estos gates con las trayectorias Survival/Minimal/Avanzada.  
- **impacto_en_dependencias:** El Squad tendrá claridad operativa sobre quién decide qué cuando un gate se activa; trayectorias podrán usarse para decisiones reales de cambio de ruta.  
- **lo_que_haremos:**  
  - E4:  
    - Crear un borrador de `12_roles_governance/01_team_structure_raci.md` describiendo roles y responsabilidades para G1–G4.  
    - Actualizar docs de trayectorias para explicar cómo G1–G4 influyen en Survival/Minimal/Avanzada.  
- **lo_que_necesitamos:**  
  - Que E4 registre un `[INTENT]` propio antes de empezar y un `[OUTCOME]` cuando el borrador de governance y la conexión a trayectorias estén listos.  
- **estado:** open  
- **links:** `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/09_trayectorias/`

---

### Plantilla de evento

- **id_evento:** `YYYYMMDD-HHMM-<equipo>-<contador>`  
- **timestamp:** `YYYY-MM-DD HH:MM`  
- **equipo:** `E1` | `E2` | `E3` | `E4` | `CAPITÁN`  
- **tipo:** `[INTENT]` | `[OUTCOME]` | `[NEED]` | `[TRIGGER]` | `[UNBLOCK]` | `[MANDATO]` | `[DECISIÓN]`  
- **artefactos:** `F*`, `P0x`, `trayectorias`, `VOCAB`, `DEPENDENCY_GRAPH`, `health_gates`, `schemas`, etc.  
- **resumen:** 1–3 líneas máximo (qué pasa)  
- **impacto_en_dependencias:** quién podría verse afectado (equipos, fases, playbooks, trayectorias)  
- **lo_que_haremos:** siguiente paso que el propio equipo asume autónomamente  
- **lo_que_necesitamos:** decisiones/info de Capitán u otros equipos (si aplica)  
- **estado:** `open` | `in_progress` | `done` | `blocked`  
- **links:** paths a archivos relevantes  

### Ejemplo – INTENT (Equipo 2)

- **id_evento:** `20251114-1500-E2-01`  
- **timestamp:** 2025-11-14 15:00  
- **equipo:** E2  
- **tipo:** [INTENT]  
- **artefactos:** `F8`, `F10`, `compliance_framework_schema`  
- **resumen:** E2 va a completar §0–§1 de F8 y F10 y crear skeleton de `compliance_framework_schema` usando solo métricas canónicas.  
- **impacto_en_dependencias:** E3 (triggers futuros basados en compliance), E4 (health gates relacionados a compliance).  
- **lo_que_haremos:** avanzar diseño sin introducir nuevas métricas; documentar “métricas candidatas” aparte.  
- **lo_que_necesitamos:** nada por ahora.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/02_fases_development/F8_*.md`, `40_implementacion_metodologia/dev_specs/compliance_framework_schema.yaml`

### Ejemplo – OUTCOME + UNBLOCK (Equipo 1)

- **id_evento:** `20251114-1100-E1-02`  
- **timestamp:** 2025-11-14 11:00  
- **equipo:** E1  
- **tipo:** [OUTCOME] [UNBLOCK]  
- **artefactos:** `VOCAB`, `DEPENDENCY_GRAPH`  
- **resumen:** Kernel semántico (VOCAB+HOWTO) y grafo kernel (F1→F3→F7,F9→F13) congelados como `v1.0.0-kernel`.  
- **impacto_en_dependencias:** E2, E3, E4 pueden avanzar sin esperar más cambios en kernel durante este sprint.  
- **lo_que_haremos:** solo fixes menores de typos/refs; cualquier cambio mayor quedará para próximo release.  
- **lo_que_necesitamos:** confirmación del Capitán si quiere revisar algo antes del cierre del sprint.  
- **estado:** done  
- **links:** [VOCABULARIO_CONTROLADO.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml:0:0-0:0), [DEPENDENCY_GRAPH.yaml](cci:7://file:///Users/felixsanhueza/fx_felixiando/orko/40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml:0:0-0:0)

### Ejemplo – NEED + MANDATO (Capitán)

- **id_evento:** `20251115-0900-CAP-01`  
- **timestamp:** 2025-11-15 09:00  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO] [DECISIÓN]  
- **artefactos:** `P01–P04`, `G1–G2`  
- **resumen:** Prioridad próxima semana: bajar P01–P04 a §0–§1 y alinear totalmente con G1–G2.  
- **impacto_en_dependencias:** E3 (dueño de P01–P04), E4 (dueño de G1–G2).  
- **lo_que_haremos:** revisar en 3 días avance de P01–P04 y G1–G2; bloquear nuevos playbooks hasta que estos estén sólidos.  
- **lo_que_necesitamos:** E3 y E4 confirmen fechas estimadas y riesgos.  
- **estado:** open  
- **links:** `playbooks_triggers_catalog.md`, `13_metricas_validacion/02_health_gates.md`

## §3 HISTORIAL (ARCHIVADO)

- Mover aquí eventos antiguos (cerrados) para mantener §2 legible.