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

- **id_evento:** `20251118-0145-E4-20`  
- **timestamp:** 2025-11-18 01:45  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-21`, `CAP-17`, `CAP-19`, `CAP-20`, `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md`, `40_implementacion_metodologia/CHANGELOG.md`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`  
- **resumen:** E4 ejecuta el mandato CAP-21 para la comunicación de RELEASE ORKO v1.0.0: (1) verifica que `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md` y `40_implementacion_metodologia/CHANGELOG.md` incluyen una sección explícita de "Release ORKO v1.0.0" con el estado de invariantes I1–I8 (`PASSED`/`CONDITIONAL`), un enlace directo a `validation_final_report.md` y una mención a que los gaps de §5 son backlog post‑1.0.0; (2) corrige un desalineamiento editorial en `validation_final_report.md` §4 para que el resumen de I1–I8 coincida con la clasificación detallada de §3 y con los READMEs/`CHANGELOG` (I3/I5/I6 como **PASSED**, I1/I2/I4/I7/I8 como **CONDITIONAL**); (3) deja trazado que CAP-17, CAP-19 y CAP-20 quedan cerrados para ORKO v1.0.0 bajo la decisión de RELEASE CAP-21, sin cambios en kernel, VOCAB, DEP_GRAPH, playbooks ni métricas canónicas.  
- **impacto_en_dependencias:** CAP-17 (VG4) y CAP-19 (criterios de RELEASE) quedan cristalizados en `validation_final_report.md` como fuente de verdad para ORKO v1.0.0, y CAP-20 queda reflejado en los READMEs 01–16 y en el `CHANGELOG` solo a nivel documental. La comunicación de RELEASE en `30_metodologia_orko/` y `40_implementacion_metodologia/` es consistente con el estado real del repositorio y con los gaps G1–G7 listados en §5; cualquier cambio posterior relevante deberá entrar como nuevo CAP-x post‑1.0.0 o como `[NEED]` específico ligado a CAP-21.  
- **lo_que_haremos:** Desde E4, pasar a modo stand-by post‑release: mantener `validation_final_report.md` como referencia estable de ORKO v1.0.0, apoyar ajustes editoriales menores en READMEs/`CHANGELOG.md` si se detectan erratas y, cuando el Capitán abra nuevos CAP-x post‑1.0.0, usar este baseline (CAP-14–CAP-21) como punto de partida para diseño, métricas y validaciones futuras. No se abrirán nuevos trabajos de diseño ni cambios de contrato sin mandato explícito.  
- **lo_que_necesitamos:** Ningún insumo adicional inmediato; si el Capitán detecta incoherencias entre la comunicación de RELEASE y los contratos/kernel/VG3/VG4, E4 las tratará como `[NEED]` específico ligado a CAP-21 para decidir si corresponde un hotfix o backlog. La marcación formal de CAP-21 como `done` queda a discreción del Capitán en este board.  
- **estado:** done  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md`, `40_implementacion_metodologia/CHANGELOG.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`  

- **id_evento:** `20251118-0130-CAP-21`  
- **timestamp:** 2025-11-18 01:30  
- **equipo:** CAPITÁN  
- **tipo:** [DECISIÓN] [MANDATO]  
- **artefactos:** `CAP-14`, `CAP-15`, `CAP-16`, `CAP-17`, `CAP-18`, `CAP-19`, `CAP-20`, `VG3`, `VG4`, `validation_final_report`, `READMEs`, `CHANGELOG`, `RELEASE_ORKO_v1.0.0`  
- **resumen:** CAP-21 – Decisión de RELEASE ORKO v1.0.0: el Capitán acepta la recomendación de E4 basada en `validation_final_report.md` (CAP-17/CAP-19) y declara ORKO v1.0.0 como RELEASE válida, aceptando como no bloqueantes los gaps documentados en §5 (fases `CONDITIONAL`, profundidad limitada de templates/calculadoras/casos, ausencia de validación empírica), y considera CAP-20 como cumplido a nivel MVO 1.0.0 sin exigir completar más documentación antes de la RELEASE.  
- **impacto_en_dependencias:** Para ORKO v1.0.0, el baseline queda fijado en: kernel/VOCAB/DEP_GRAPH validados y congelados (CAP-14), 6 casos de ejemplo completos (CAP-15), VG3/playbooks P01–P15 cerrados como contrato estable (CAP-16/CAP-18), VG4 auditada y sintetizada (CAP-17/CAP-19) y READMEs 01–16 en estado MVO 1.0.0 (CAP-20) sin cambios en contratos. A partir de esta decisión, cualquier evolución de kernel, playbooks, trayectorias, governance, métricas o casos deberá entrar mediante nuevos CAP-x post-1.0.0, tratando el estado actual como baseline de referencia.  
- **lo_que_haremos:**  
  - **CAPITÁN:**  
    - Considerar CAP-14, CAP-15, CAP-16, CAP-17, CAP-18, CAP-19 y CAP-20 como **cerrados** para ORKO v1.0.0, salvo ajustes editoriales menores o `[NEED]` críticos que puedan detectarse en la comunicación de la RELEASE.  
    - No abrir nuevos CAP de diseño sobre kernel/VG3/VG4 hasta después de la RELEASE; el siguiente conjunto de CAP-x se focalizará en el backlog de `validation_final_report.md` §5 (sin definir todavía IDs, solo ejes de trabajo).  
  - **E4:**  
    - Tratar `validation_final_report.md` como documento de referencia oficial de RELEASE ORKO v1.0.0; cualquier ajuste posterior deberá ser incremental y no reabrirá CAP-17/CAP-19 salvo NEED crítico.  
    - Asegurar que `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md` y `40_implementacion_metodologia/CHANGELOG.md` incluyen: (a) una sección breve de "Release ORKO v1.0.0" con resumen de estado de invariantes I1–I8 (`PASSED`/`CONDITIONAL`), (b) un enlace directo a `validation_final_report.md` como fuente de verdad de la validación, y (c) una mención explícita a que los gaps de §5 son conocidos y forman parte del backlog post-1.0.0.  
    - Coordinar con E1–E3 solo ajustes editoriales en READMEs/CHANGELOG necesarios para esta comunicación, sin modificar contratos ni métricas canónicas.  
  - **E1:**  
    - Mantener el kernel `v1.0.0-kernel` congelado; cualquier trabajo sobre `VOCABULARIO_CONTROLADO.yaml`, `DEPENDENCY_GRAPH.yaml`, nuevas métricas canónicas o `VOCAB_v1.1.x` se tratará en futuros CAP-x post-1.0.0, tomando como insumo el backlog de métricas/entidades candidatas ya listado en `VOCAB_v1.1.x_NOTAS.md` y en `validation_final_report.md` §5 (G2/G5).  
  - **E2:**  
    - Mantener los 6 casos `*_completo` y los READMEs de fases/templates/casos/instrumentación en estado MVO 1.0.0; cualquier ampliación de narrativa o nuevas variantes de caso se tratará como backlog post-1.0.0 (eje G3/G4 de §5), no como parte de esta RELEASE.  
  - **E3:**  
    - Mantener VG3 (P01–P15 + `playbook_schema.yaml` + `playbook_instances.yaml`) congelada como contrato de ORKO v1.0.0; cualquier cambio en playbooks, triggers o mapeos a health gates/trayectorias se realizará en CAP-x futuros, guiados por uso en producción y por el backlog de métricas/validación empírica (G3/G5/G6).  
- **lo_que_necesitamos:**  
  - **(R1)** Que E4 registre un `[OUTCOME]` final marcando CAP-17, CAP-19 y CAP-20 como efectivamente cerrados bajo CAP-21, una vez que las secciones de RELEASE en READMEs/`CHANGELOG.md` estén ajustadas según este mandato.  
  - **(R2)** Que E1, E2 y E3 no abran nuevos `[INTENT]` de diseño antes de los siguientes CAP-x post-1.0.0; si durante la comunicación de la RELEASE aparece algún conflicto entre documentación y contratos que suponga un riesgo real, debe registrarse como `[NEED]` acotado ligado a CAP-21 para decidir si se trata como hotfix o backlog.  
  - **(R3)** En la próxima ronda de planificación, el Capitán propondrá un pequeño set de CAP-x priorizando 2–3 ejes del backlog de §5 (por ejemplo: completar `§0 FUNDAMENTO` de fases `CONDITIONAL`, profundizar templates/calculadoras y auditorías por caso, avanzar VOCAB v1.1.x y validaciones empíricas, automatizar checks VG4), pero esos CAP-x no forman parte de esta decisión.  
- **estado:** open  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md`, `40_implementacion_metodologia/CHANGELOG.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `40_implementacion_metodologia/dev_specs/VOCAB_v1.1.x_NOTAS.md`

- **id_evento:** `20251118-0140-E4-20`  
- **timestamp:** 2025-11-18 01:40  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-21`, `CAP-14`, `CAP-15`, `CAP-16`, `CAP-17`, `CAP-18`, `CAP-19`, `CAP-20`, `VG3`, `VG4`, `validation_final_report`, `READMEs`, `CHANGELOG`, `RELEASE_ORKO_v1.0.0`  
- **resumen:** En ejecución de `CAP-21`, E4 verifica que las secciones de RELEASE están presentes y alineadas en `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md` y `40_implementacion_metodologia/CHANGELOG.md` (estado de invariantes I1–I8, referencia directa a `17_validacion_final/validation_final_report.md` y mención explícita de que los gaps de §5 son backlog post-1.0.0). Con esto, E4 declara efectivamente **cerrados CAP-17, CAP-19 y CAP-20 bajo CAP-21**, tomando el contenido de `validation_final_report.md` como referencia oficial de RELEASE ORKO v1.0.0 y considerando kernel/VG3/VG4 como baseline congelado para esta versión.  
- **impacto_en_dependencias:** ORKO v1.0.0 queda fijado con: kernel/VOCAB/DEP_GRAPH validado y congelado (CAP-14), 6 casos completos (CAP-15), VG3/playbooks P01–P15 estable (CAP-16/CAP-18), VG4 auditada y sintetizada (CAP-17/CAP-19) y documentación de metodología/implementación en estado MVO 1.0.0 (CAP-20), más las secciones de RELEASE agregadas según CAP-21. No se modifican contratos ni métricas canónicas; cualquier evolución posterior deberá entrar vía nuevos CAP-x post-1.0.0.  
- **lo_que_haremos:** Mantener E4 en **modo soporte/stand-by** tras la RELEASE: responder dudas sobre `validation_final_report.md`, ayudar a coherenciar documentación y participar en el diseño de los próximos CAP-x orientados al backlog de §5 (sin abrir nuevos trabajos de diseño ni tocar contratos hasta que el Capitán defina esos CAP-x).  
- **lo_que_necesitamos:** Ningún insumo adicional inmediato; si durante la comunicación de la RELEASE se detecta un conflicto relevante entre documentación y contratos, E4 lo registrará como `[NEED]` ligado a CAP-21 para decidir si se trata como hotfix o como backlog post-1.0.0.  
- **impacto_en_dependencias:** `validation_final_report.md` queda establecido como documento oficial de referencia para la RELEASE ORKO v1.0.0, y la comunicación de la versión en READMEs/`CHANGELOG.md` cumple los criterios de CAP-21. CAP-17, CAP-19 y CAP-20 se consideran efectivamente cerrados desde la perspectiva de E4 bajo esta decisión; cualquier evolución futura de kernel, VG3, VG4 o documentación deberá entrar por nuevos CAP-x post‑1.0.0, apoyándose en este baseline.  
- **lo_que_haremos:** E4 pasa formalmente a modo soporte/stand-by post‑RELEASE: responderá solo a `[NEED]` explícitos relacionados con clarificaciones de `validation_final_report.md`, ajustes editoriales menores en documentación o coordinación de futuros CAP-x, sin modificar kernel, VG3 ni contratos de metodología hasta que el Capitán emita nuevos mandatos.  
- **lo_que_necesitamos:** Ningún insumo adicional inmediato; en la próxima ronda de planificación, el Capitán definirá los CAP-x post‑1.0.0 priorizando 2–3 ejes del backlog de `validation_final_report.md` §5 (fases `CONDITIONAL`, profundización de templates/calculadoras/casos, VOCAB v1.1.x/validación empírica, automatización de checks VG4, etc.). Mientras tanto, E1–E3 mantienen sus contratos congelados y disponibles para soporte acotado según CAP-21.  
- **estado:** done  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md`, `40_implementacion_metodologia/CHANGELOG.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `40_implementacion_metodologia/dev_specs/VOCAB_v1.1.x_NOTAS.md`  

- **id_evento:** `20251118-0130-CAP-21`  
- **timestamp:** 2025-11-18 01:30  
- **equipo:** CAPITÁN  
- **tipo:** [DECISIÓN] [MANDATO]  
- **artefactos:** `CAP-14`, `CAP-15`, `CAP-16`, `CAP-17`, `CAP-18`, `CAP-19`, `CAP-20`, `VG3`, `VG4`, `validation_final_report`, `READMEs`, `CHANGELOG`, `RELEASE_ORKO_v1.0.0`  
- **resumen:** CAP-21 – Decisión de RELEASE ORKO v1.0.0: el Capitán acepta la recomendación de E4 basada en `validation_final_report.md` (CAP-17/CAP-19) y declara ORKO v1.0.0 como RELEASE válida, aceptando como no bloqueantes los gaps documentados en §5 (fases `CONDITIONAL`, profundidad limitada de templates/calculadoras/casos, ausencia de validación empírica sistemática), y considera CAP-20 como cumplido a nivel MVO 1.0.0 sin exigir completar más documentación antes de la RELEASE.  
- **impacto_en_dependencias:** Para ORKO v1.0.0, el baseline queda fijado en: kernel/VOCAB/DEP_GRAPH validados y congelados (CAP-14), 6 casos de ejemplo completos (CAP-15), VG3/playbooks P01–P15 cerrados como contrato estable (CAP-16/CAP-18), VG4 auditada y sintetizada (CAP-17/CAP-19) y READMEs 01–16 en estado MVO 1.0.0 (CAP-20) sin cambios en contratos. A partir de esta decisión, cualquier evolución de kernel, playbooks, trayectorias, governance, métricas o casos deberá entrar mediante nuevos CAP-x post-1.0.0, tratando el estado actual como baseline de referencia.  
- **lo_que_haremos:**  
  - **CAPITÁN:**  
    - Considerar CAP-14, CAP-15, CAP-16, CAP-17, CAP-18, CAP-19 y CAP-20 como **cerrados** para ORKO v1.0.0, salvo ajustes editoriales menores o `[NEED]` críticos que puedan detectarse en la comunicación de la RELEASE.  
    - No abrir nuevos CAP de diseño sobre kernel/VG3/VG4 hasta después de la RELEASE; el siguiente conjunto de CAP-x se focalizará en el backlog de `validation_final_report.md` §5 (sin definir todavía IDs, solo ejes de trabajo).  
  - **E4:**  
    - Tratar `validation_final_report.md` como documento de referencia oficial de RELEASE ORKO v1.0.0; cualquier ajuste posterior deberá ser incremental y no reabrirá CAP-17/CAP-19 salvo NEED crítico.  
    - Asegurar que `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md` y `40_implementacion_metodologia/CHANGELOG.md` incluyen: (a) una sección breve de "Release ORKO v1.0.0" con resumen de estado de invariantes I1–I8 (`PASSED`/`CONDITIONAL`), (b) un enlace directo a `validation_final_report.md` como fuente de verdad de la validación, y (c) una mención explícita a que los gaps de §5 son conocidos y forman parte del backlog post-1.0.0.  
    - Coordinar con E1–E3 solo ajustes editoriales en READMEs/CHANGELOG necesarios para esta comunicación, sin modificar contratos ni métricas canónicas.  
  - **E1:**  
    - Mantener el kernel `v1.0.0-kernel` congelado; cualquier trabajo sobre `VOCABULARIO_CONTROLADO.yaml`, `DEPENDENCY_GRAPH.yaml`, nuevas métricas canónicas o `VOCAB_v1.1.x` se tratará en futuros CAP-x post-1.0.0, tomando como insumo el backlog de métricas/entidades candidatas ya listado en `VOCAB_v1.1.x_NOTAS.md` y en `validation_final_report.md` §5 (G2/G5).  
  - **E2:**  
    - Mantener los 6 casos `*_completo` y los READMEs de fases/templates/casos/instrumentación en estado MVO 1.0.0; cualquier ampliación de narrativa o nuevas variantes de caso se tratará como backlog post-1.0.0 (eje G3/G4 de §5), no como parte de esta RELEASE.  
  - **E3:**  
    - Mantener VG3 (P01–P15 + `playbook_schema.yaml` + `playbook_instances.yaml`) congelada como contrato de ORKO v1.0.0; cualquier cambio en playbooks, triggers o mapeos a health gates/trayectorias se realizará en CAP-x futuros, guiados por uso en producción y por el backlog de métricas/validación empírica (G3/G5/G6).  
- **lo_que_necesitamos:**  
  - **(R1)** Que E4 registre un `[OUTCOME]` final marcando CAP-17, CAP-19 y CAP-20 como efectivamente cerrados bajo CAP-21, una vez que las secciones de RELEASE en READMEs/`CHANGELOG.md` estén ajustadas según este mandato.  
  - **(R2)** Que E1, E2 y E3 no abran nuevos `[INTENT]` de diseño antes de los siguientes CAP-x post-1.0.0; si durante la comunicación de la RELEASE aparece algún conflicto entre documentación y contratos que suponga un riesgo real, debe registrarse como `[NEED]` acotado ligado a CAP-21 para decidir si se trata como hotfix o backlog.  
  - **(R3)** En la próxima ronda de planificación, el Capitán propondrá un pequeño set de CAP-x priorizando 2–3 ejes del backlog de §5 (por ejemplo: completar `§0 FUNDAMENTO` de fases `CONDITIONAL`, profundizar templates/calculadoras y auditorías por caso, avanzar VOCAB v1.1.x y validaciones empíricas, automatizar checks VG4), pero esos CAP-x no forman parte de esta decisión.  
- **estado:** open  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md`, `40_implementacion_metodologia/CHANGELOG.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `40_implementacion_metodologia/dev_specs/VOCAB_v1.1.x_NOTAS.md`

- **id_evento:** `20251118-0050-E4-19`  
- **timestamp:** 2025-11-18 00:50  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-14`, `CAP-15`, `CAP-16`, `CAP-17`, `CAP-18`, `CAP-19`, `CAP-20`, `VG3`, `VG4`, `validation_final_report`, `03_vg4_validation_map`, `01_validacion_trazabilidad_i1_i8`, `40_implementacion_metodologia/ejemplos/`, `30_metodologia_orko/01–05_fases_*`, `11_artefactos_templates/README.md`, `14_casos_uso/README.md`, `15_instrumentacion/README.md`, `board_coordinación.md`  
- **resumen:** Reporte de situación E4 tras cierre de CAP-20/E2: (1) CAP-14, CAP-15 y CAP-16 siguen declarados DONE (kernel/VOCAB/DEP_GRAPH validados y congelados; casos completos; catálogo P01–P15 estable); (2) CAP-17/CAP-19 están reflejados en `validation_final_report.md` (§2.1–§2.5, §3–§5) con clasificación I1–I8 `PASSED/CONDITIONAL` y recomendación explícita de RELEASE 1.0.0; (3) CAP-20 avanzó hasta dejar, para E2, los READMEs de Development (02), Implementation (03), Operation (04), Evolution (05), templates (11), casos de uso (14) e instrumentación (15) en estado MVO 1.0.0, alineados con el kernel, VG3 y `validation_final_report.md`. No se han modificado contratos ni métricas canónicas durante estos trabajos.  
- **impacto_en_dependencias:** El stack ORKO v1.0.0 tiene ahora: kernel/DEP_GRAPH consistente (E1/CAP-14), 6 casos de ejemplo completos (E2/CAP-15), VG3/playbooks estables (E3/CAP-16/CAP-18), VG4 auditada y sintetizada (E4/CAP-17/CAP-19) y la mayoría de los READMEs 01–16 en MVO 1.0.0 (CAP-20). Los riesgos residuales relevantes están concentrados en el backlog ya documentado en `validation_final_report.md` §5 (fases `CONDITIONAL`, profundidad de templates/calculadoras/casos, validaciones empíricas futuras).  
- **dudas_abiertas:** (Q1) ¿Confirma el Capitán la recomendación de E4 de declarar **RELEASE ORKO v1.0.0** aceptando como no bloqueantes los gaps listados en §5 de `validation_final_report.md` (fases `CONDITIONAL`, profundidad limitada de templates/calculadoras/casos, ausencia de validación empírica)? (Q2) ¿Desea el Capitán algún chequeo adicional **antes** de la decisión (por ejemplo, revisión focalizada de algún caso, bloque de fases o playbooks, o auditoría narrativa de un subconjunto de artefactos)? (Q3) En caso de aprobarse la RELEASE, ¿qué ejes del backlog deberían priorizarse en los próximos CAP-x post‑1.0.0: completar `§0 FUNDAMENTO` de fases `CONDITIONAL`, profundizar contenido de templates/calculadoras, enriquecer narrativa y auditorías por caso, avanzar VOCAB v1.1.x y métricas empíricas, automatizar checks VG4, u otro foco? (Q4) ¿Tiene el Capitán requisitos específicos sobre cómo comunicar la RELEASE en READMEs/`CHANGELOG.md` (por ejemplo, resumen ejecutivo de I1–I8, sección de “Gaps aceptados”, guía para consumidores externos)?  
- **propuesta_de_avance:** (P1) Tratar la decisión de go/no-go de RELEASE 1.0.0 como siguiente movimiento crítico, usando `validation_final_report.md` como documento base; (P2) mantener E1–E3–E4 sin nuevos trabajos de diseño ni cambios de contrato hasta recibir la decisión y, en paralelo, limitarse a aclaraciones o ajustes editoriales menores; (P3) una vez tomada la decisión, abrir un conjunto acotado de CAP-x post‑1.0.0 enfocados en los ejes de backlog que el Capitán priorice (por ejemplo, formalizar §0 de fases `CONDITIONAL`, profundizar casos/templates/calculadoras o preparar VOCAB v1.1.x/validación empírica); (P4) coordinar desde E4 los ajustes mínimos necesarios en READMEs/`CHANGELOG.md` para reflejar la RELEASE y sus límites, sin tocar el kernel ni VG3.  
- **lo_que_haremos:** E4 permanecerá en modo soporte/stand-by, sin abrir nuevos diseños ni tocar contratos mientras espera instrucciones del Capitán; responderá dudas sobre `validation_final_report.md`, ayudará a mantener la coherencia documental y, una vez exista decisión de RELEASE y prioridades de backlog, propondrá el desglose técnico de los CAP-x siguientes.  
- **lo_que_necesitamos:** Instrucciones explícitas del Capitán sobre: (1) decisión de go/no-go de RELEASE ORKO v1.0.0 bajo CAP-19; (2) necesidad (o no) de chequeos adicionales previos y su alcance si los hubiera; (3) priorización de 2–3 ejes de backlog de §5 para los próximos CAP-x; y (4) lineamientos para la comunicación de la RELEASE en documentación y `CHANGELOG.md`.  
- **estado:** open  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `30_metodologia_orko/01–16_*`, `40_implementacion_metodologia/README.md`, `40_implementacion_metodologia/CHANGELOG.md`, `board_coordinación.md`  

- **id_evento:** `20251118-0045-E2-25`  
- **timestamp:** 2025-11-18 00:45  
- **equipo:** E2  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-20`, `30_metodologia_orko/05_fases_evolution/README.md`, `30_metodologia_orko/14_casos_uso/README.md`, `30_metodologia_orko/15_instrumentacion/README.md`, `validation_final_report`  
- **resumen:** E2 completa el trabajo pendiente de CAP-20 para su scope: los READMEs de `05_fases_evolution`, `14_casos_uso` y `15_instrumentacion` quedan en estado MVO 1.0.0, describiendo (a) el rol del bloque Evolution (F16–F18) como cierre de learning loops/adaptación/convergence check, (b) cómo se usan los casos `*_completo/` de `40_implementacion_metodologia/ejemplos/` y los patrones de contexto como evidencia de aplicación, y (c) el marco de instrumentación (adopción, efectividad y auditorías de coherencia) conectado con métricas canónicas y health gates. No se introducen nuevos contratos ni métricas canónicas; se deja explícito qué aspectos permanecen en estado MVO/backlog post‑1.0.0.  
- **impacto_en_dependencias:** CAP-20 queda cubierto para E2 sin alterar kernel/VOCAB/DEP_GRAPH ni el contrato de VG3/VG4; los bloques de Development, Implementation, Operation, Evolution, casos de uso e instrumentación tienen ahora READMEs alineados con `validation_final_report.md` y `03_vg4_validation_map.md`, facilitando la revisión de RELEASE 1.0.0.  
- **lo_que_haremos:** E2 pasa a modo soporte respecto de CAP-20 y de la decisión de RELEASE, disponible para aclarar estos READMEs o corregir inconsistencias menores que se detecten en la revisión final.  
- **lo_que_necesitamos:** Ningún insumo adicional por ahora; si el Capitán o E4 detectan incoherencias entre estos READMEs y los contratos/kernel/casos durante la revisión de RELEASE, E2 las atenderá como ajustes menores o backlog post‑1.0.0 según criticidad.  
- **estado:** done  
- **links:** `30_metodologia_orko/05_fases_evolution/README.md`, `30_metodologia_orko/14_casos_uso/README.md`, `30_metodologia_orko/15_instrumentacion/README.md`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `40_implementacion_metodologia/ejemplos/`  

- **id_evento:** `20251118-0040-E4-18`  
- **timestamp:** 2025-11-18 00:40  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-14`, `CAP-15`, `CAP-16`, `CAP-17`, `CAP-18`, `CAP-19`, `CAP-20`, `VG3`, `VG4`, `30_metodologia_orko/README.md`, `30_metodologia_orko/01–05_fases_*`, `06–08_playbooks_*`, `09_trayectorias`, `10_integracion_tejidos`, `11_artefactos_templates`, `12_roles_governance`, `13_metricas_validacion`, `14_casos_uso`, `15_instrumentacion`, `16_evolucion_metodologia`, `17_validacion_final/validation_final_report.md`  
- **resumen:** Reporte de situación E4 post CAP-17/CAP-19/CAP-20: (1) kernel, VOCAB y DEP_GRAPH validados y congelados por E1 (CAP-14, `validation_kernel_report.md`, `validation_expansion_report.md`, `VOCAB_v1.1.x_NOTAS.md`); (2) casos y contextos completos por E2 (CAP-15); (3) playbooks P01–P15 y VG3 congelados por E3 (CAP-16/CAP-18); (4) auditorías VG4 I1–I8 y recomendación de RELEASE 1.0.0 documentadas en `validation_final_report.md` (§2.1–§2.5, §3–§5) según CAP-17/CAP-19; (5) CAP-20 avanza: E1 y E3 dejan sus READMEs en estado MVO 1.0.0, y E2 completa ya Development, Implementation, Operation y templates (quedando pendiente solo Evolution, casos de uso e instrumentación).  
- **impacto_en_dependencias:** Para ORKO v1.0.0, el stack queda así: kernel y arquitectura congelados (E1), 6 casos de ejemplo documentados (E2), catálogo VG3 estable y documentado (E3), VG4 trazada y recomendada para RELEASE (E4), y la mayoría de los READMEs 01–16 en estado MVO 1.0.0. No se han introducido cambios en contratos ni métricas canónicas durante CAP-20; los riesgos residuales corresponden a profundidad de contenido (§0 FUNDAMENTO en fases `CONDITIONAL`, enriquecimiento de templates/calculadoras/casos, métricas empíricas) ya registrados como backlog en `validation_final_report.md` §5.  
- **dudas_abiertas:** (Q1) ¿Debe considerarse **CAP-20** como condición dura para declarar la RELEASE 1.0.0, o basta con el estado actual (E1/E3 DONE, E2 casi completo) dejando los READMEs restantes como backlog post‑1.0.0? (Q2) ¿Confirma el Capitán la recomendación de E4 de declarar **ORKO v1.0.0** aceptando los gaps de §5 de `validation_final_report.md` como no bloqueantes, o espera algún chequeo adicional (y de qué tipo: auditoría extra de casos, revisión puntual de algún bloque de fases/playbooks/tejidos, etc.)? (Q3) En caso de aprobarse la RELEASE, ¿qué ejes del backlog deberían priorizarse en los próximos CAP-x: completar `§0 FUNDAMENTO` de fases `CONDITIONAL`, profundizar templates/calculadoras, ampliar narrativa de casos, avanzar VOCAB v1.1.x/métricas empíricas, automatizar auditorías VG4, u otro? (Q4) ¿Desea el Capitán alguna forma específica de comunicar la RELEASE en READMEs/`CHANGELOG.md` (por ejemplo, resumen ejecutivo de invariantes I1–I8, sección de "Gaps aceptados" o instrucciones para consumidores externos)?  
- **propuesta_de_avance:** (P1) Tratar la decisión de RELEASE 1.0.0 como siguiente paso crítico, usando `validation_final_report.md` como base; (P2) en paralelo, permitir que E2 complete el resto de READMEs de CAP-20 sin bloquear la decisión de RELEASE, dado que el contenido pendiente es documental y no contractual; (P3) una vez tomada la decisión, abrir un set acotado de CAP-x post‑1.0.0 para atacar los ejes priorizados del backlog (§5) y, en particular, para diseñar la ruta hacia VOCAB v1.1.x y hacia validaciones empíricas; (P4) coordinar desde E4 los ajustes mínimos en READMEs/`CHANGELOG.md` necesarios para reflejar la RELEASE y los límites conocidos de la versión.  
- **lo_que_haremos:** Mantener E4 en modo soporte/stand-by a nivel de diseño, respondiendo dudas sobre `validation_final_report.md`, ayudando a coherenciar READMEs/`CHANGELOG.md` y acompañando la finalización de CAP-20 por E2, pero sin abrir nuevos bloques de diseño ni cambiar contratos hasta recibir instrucciones explícitas sobre la decisión de RELEASE y las prioridades de los siguientes CAP-x.  
- **lo_que_necesitamos:** Instrucciones explícitas del Capitán sobre: (1) decisión de go/no-go para **RELEASE ORKO v1.0.0** bajo los criterios de CAP-19; (2) si CAP-20 debe considerarse parte del criterio de cierre o si puede concluirse en paralelo como documentación complementaria; (3) qué ejes del backlog de `validation_final_report.md` §5 priorizar en los próximos CAP-x; y (4) cualquier requerimiento adicional sobre cómo presentar la RELEASE en READMEs/`CHANGELOG.md` para consumidores internos/externos.  
- **estado:** open  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `30_metodologia_orko/README.md`, `30_metodologia_orko/01–16_*`, `40_implementacion_metodologia/README.md`, `40_implementacion_metodologia/CHANGELOG.md`  

- **id_evento:** `20251118-0038-E2-24`  
- **timestamp:** 2025-11-18 00:38  
- **equipo:** E2  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-20`, `30_metodologia_orko/04_fases_operation/README.md`, `13_metricas_validacion/02_health_gates.md`, `validation_final_report`  
- **resumen:** E2 deja el README de `04_fases_operation` en estado MVO 1.0.0: se documenta el propósito del bloque Operation (F13–F15), el rol de cada fase (Health Monitoring, Incident Response, Continuous Execution), su relación con health gates, playbooks y casos, y el estado `CONDITIONAL` de F13–F15 según `validation_final_report.md` §2.3, sin introducir nuevos contratos ni métricas canónicas.  
- **impacto_en_dependencias:** Mejora la legibilidad de `30_metodologia_orko` para el Capitán y E4 al revisar VG4/RELEASE 1.0.0, sin afectar al kernel ni a VG3; el bloque Operation queda descrito como contrato de diseño tal como fue auditado en CAP-17/CAP-19.  
- **lo_que_haremos:** Continuar CAP-20 para E2 completando los READMEs restantes (`05_fases_evolution`, `14_casos_uso`, `15_instrumentacion`), registrando nuevos OUTCOMEs parciales conforme se alcancen estados MVO 1.0.0.  
- **impacto_en_dependencias:** Mejora la legibilidad de cómo ORKO opera día a día usando health gates y playbooks P01–P15 sin alterar el kernel ni VG3; deja explícito que F13–F15 son críticas para VG4 pero permanecen `CONDITIONAL` a nivel de fundamentación en v1.0.0.  
- **lo_que_haremos:** Continuar CAP-20 para E2 completando `05_fases_evolution/README.md` y los READMEs de `14_casos_uso` y `15_instrumentacion`, registrando nuevos OUTCOMEs parciales conforme se alcancen estados MVO 1.0.0.  
- **lo_que_necesitamos:** Ningún apoyo inmediato; si en la revisión de RELEASE se detecta alguna incoherencia entre este README y los contratos/kernel, E2 la tratará como ajuste menor o backlog post‑1.0.0 según criticidad.  
- **estado:** done  
- **links:** `30_metodologia_orko/04_fases_operation/README.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`  
- **impacto_en_dependencias:** E1 mantiene kernel/VOCAB/DEP_GRAPH congelados, E2 mantiene los 6 casos completos y avanza documentación, E3 mantiene VG3 (P01–P15 + `playbook_instances.yaml`) congelada y documentada, y E4 ya sintetizó I1–I8 y la recomendación de RELEASE en `validation_final_report.md`. El siguiente movimiento crítico depende ahora de una decisión explícita del Capitán sobre RELEASE y sobre qué partes del backlog de §5 se priorizarán en CAP-x post‑1.0.0.  
- **lo_que_haremos:** Mantener E4 en modo soporte, respondiendo aclaraciones sobre `validation_final_report.md` y ayudando a coherenciar READMEs/`CHANGELOG.md` según se requiera, sin abrir nuevos bloques de diseño ni cambiar contratos hasta tener instrucciones explícitas sobre RELEASE y sobre la siguiente ola de CAP (ej. completar §0 FUNDAMENTO en fases `CONDITIONAL`, profundizar templates/calculadoras, automatizar auditorías VG4, diseñar validación empírica).  
- **lo_que_necesitamos:**  
  - (Q1) ¿Confirma el Capitán la recomendación de E4 de declarar **ORKO v1.0.0** como RELEASE válida, aceptando los gaps de §5 de `validation_final_report.md` como backlog no bloqueante, o espera algún chequeo adicional antes de la decisión (y cuál)?  
  - (Q2) En caso de aprobar la RELEASE, ¿qué CAP-x post‑1.0.0 deberían priorizarse primero: completar `§0 FUNDAMENTO` de fases `CONDITIONAL`, profundizar contenido de templates/calculadoras/casos, avanzar VOCAB v1.1.x/métricas empíricas, u otro foco?  
  - (Q3) ¿Desea el Capitán algún ajuste adicional en READMEs/`CHANGELOG.md` previo a anunciar la versión (p.ej. sección de "Estado de invariantes I1–I8" o resumen ejecutivo de gaps) que E4 deba coordinar?  
- **estado:** open  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `30_metodologia_orko/`, `40_implementacion_metodologia/README.md`, `40_implementacion_metodologia/CHANGELOG.md`  

- **id_evento:** `20251118-0035-E2-23`  
- **timestamp:** 2025-11-18 00:35  
- **equipo:** E2  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-20`, `30_metodologia_orko/03_fases_implementation/README.md`, `VOCABULARIO_CONTROLADO`, `DEPENDENCY_GRAPH`, `validation_final_report`  
- **resumen:** E2 deja el README de `03_fases_implementation` en estado MVO 1.0.0: se documenta el propósito del bloque Implementation (F10–F12), el rol de cada fase (F10–Quick Wins, F11–Fabric Deployment, F12–State Transition), su relación con trayectorias/health gates/casos y el estado `PASSED` de F10–F12 según `validation_final_report.md` §2.3, sin introducir nuevos contratos ni métricas canónicas.  
- **impacto_en_dependencias:** Mejora la legibilidad de `30_metodologia_orko` para el Capitán y E4 al revisar VG4/RELEASE 1.0.0, mostrando cómo el diseño de Development se lleva a ejecución mediante quick wins, despliegue de tejidos y transición de estado. No afecta al kernel ni a VG3.  
- **lo_que_haremos:** Continuar CAP-20 para E2 completando los READMEs restantes (`04_fases_operation`, `05_fases_evolution`, `14_casos_uso`, `15_instrumentacion`), registrando nuevos OUTCOMEs parciales conforme se alcancen estados MVO 1.0.0.  
- **lo_que_necesitamos:** Ningún apoyo inmediato; si en la revisión de RELEASE se detecta alguna incoherencia entre este README y los contratos/kernel, E2 la tratará como ajuste menor o backlog post‑1.0.0 según criticidad.  
- **estado:** done  
- **links:** `30_metodologia_orko/03_fases_implementation/README.md`, `40_implementacion_metodologia/ejemplos/`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`  

- **id_evento:** `20251118-0034-E1-12`  
- **timestamp:** 2025-11-18 00:34  
- **equipo:** E1  
- **tipo:** [INTENT]  
- **artefactos:** `CAP-20`, `30_metodologia_orko/README.md`, `30_metodologia_orko/01_fases_initiation/README.md`, `30_metodologia_orko/10_integracion_tejidos/README.md`, `30_metodologia_orko/16_evolucion_metodologia/README.md`  
- **resumen:** En respuesta a `CAP-20`, E1 declara intención de completar los READMEs asignados (README raíz de metodología, Initiation, integración de tejidos y evolución de metodología) hasta estado MVO 1.0.0, usando solo información consolidada de `out/30_metodologia_orko.md`, `KERNEL_READINESS.md`, `VOCAB_v1.1.x_NOTAS.md` y `validation_final_report.md`, sin tocar kernel, VOCAB, DEP_GRAPH ni contratos de playbooks/trayectorias/health gates.  
- **impacto_en_dependencias:** Ninguno sobre kernel ni VG3; el trabajo se limita a documentación descriptiva y a mejorar la legibilidad de la metodología para el Capitán y E4 durante la revisión de RELEASE 1.0.0.  
- **impacto_en_dependencias:** Ninguno sobre kernel ni VG3/VG4; el trabajo se limita a documentación descriptiva y a mejorar la legibilidad de la metodología para el Capitán y E4 durante la revisión de RELEASE 1.0.0.  
- **lo_que_haremos:** Redactar y/o completar los READMEs indicados, verificando consistencia con el estado validado del kernel y con los resultados de CAP-14–CAP-19 antes de declarar OUTCOME.  
- **lo_que_necesitamos:** Ningún insumo adicional; si al documentar se detecta un conflicto con el kernel o con DEP_GRAPH, E1 registrará un `[NEED]` específico ligado a CAP-20/CAP-14 antes de proponer cambios.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/README.md`, `30_metodologia_orko/01_fases_initiation/README.md`, `30_metodologia_orko/10_integracion_tejidos/README.md`, `30_metodologia_orko/16_evolucion_metodologia/README.md`, `40_implementacion_metodologia/dev_specs/KERNEL_READINESS.md`, `40_implementacion_metodologia/dev_specs/VOCAB_v1.1.x_NOTAS.md`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`  

- **id_evento:** `20251118-0035-E1-13`  
- **timestamp:** 2025-11-18 00:35  
- **equipo:** E1  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-20`, `30_metodologia_orko/README.md`, `30_metodologia_orko/01_fases_initiation/README.md`, `30_metodologia_orko/10_integracion_tejidos/README.md`, `30_metodologia_orko/16_evolucion_metodologia/README.md`, `KERNEL_READINESS`, `VOCAB_v1.1.x_NOTAS`, `validation_final_report`  
- **resumen:** E1 completa el trabajo de CAP-20: el README raíz de `30_metodologia_orko` ahora explica cómo leer el árbol 01–16 y su relación con el kernel y VG4; `01_fases_initiation/README.md` describe el propósito de F1–F3 y su rol como primer puente GENOME↔FENOTIPO; `10_integracion_tejidos/README.md` documenta cómo los tejidos TF1/TF2/TF3 se conectan con fases y playbooks; `16_evolucion_metodologia/README.md` describe los ejes de evolución post‑1.0.0 basados en `VOCAB_v1.1.x_NOTAS.md` y el backlog de `validation_final_report.md`. No se modifican IDs, métricas canónicas ni contratos del kernel o de playbooks/trayectorias/gates.  
- **impacto_en_dependencias:** La estructura de `30_metodologia_orko` queda mejor documentada para la revisión de RELEASE 1.0.0, sin afectar el estado validado de CAP-14–CAP-19 ni el freeze de VG3. Futuros CAP que toquen evolución de metodología podrán referenciar directamente estos READMEs como punto de partida.  
- **lo_que_haremos:** Volver a modo soporte/stand-by desde E1, manteniendo el kernel congelado; cualquier cambio futuro sobre VOCAB/DEP_GRAPH o contratos de metodología deberá entrar por nuevos CAP posteriores a la decisión de RELEASE.  
- **lo_que_necesitamos:** Ninguno inmediato; si el Capitán o E4 detectan inconsistencias entre estos READMEs y el kernel o los reportes de validación, E1 las tratará como `[NEED]` acotados o backlog post‑1.0.0 según su criticidad.  
- **estado:** done  
- **links:** `30_metodologia_orko/README.md`, `30_metodologia_orko/01_fases_initiation/README.md`, `30_metodologia_orko/10_integracion_tejidos/README.md`, `30_metodologia_orko/16_evolucion_metodologia/README.md`, `40_implementacion_metodologia/dev_specs/KERNEL_READINESS.md`, `40_implementacion_metodologia/dev_specs/VOCAB_v1.1.x_NOTAS.md`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`  

- **id_evento:** `20251118-0030-E2-22`  
- **timestamp:** 2025-11-18 00:30  
- **equipo:** E2  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-20`, `30_metodologia_orko/02_fases_development/README.md`, `VOCABULARIO_CONTROLADO`, `DEPENDENCY_GRAPH`, `validation_final_report`  
- **resumen:** E2 deja el README de `02_fases_development` en estado MVO 1.0.0: se documenta el propósito del bloque Development (F4–F9), el rol de cada fase (F4–Capability Mapping, F5–Flow Design, F6–Information Architecture, F7–Purpose Cascade, F8–Limits Definition, F9–Target State Design), su relación con trayectorias/health gates/casos y su estado `PASSED`/`CONDITIONAL` según `validation_final_report.md` §2.3, sin introducir nuevos contratos ni métricas canónicas.  
- **impacto_en_dependencias:** Mejora la legibilidad de `30_metodologia_orko` para el Capitán y para E4 al revisar VG4/RELEASE 1.0.0, sin afectar al kernel ni a VG3; el bloque Development queda descrito como contrato de diseño tal como fue auditado en CAP-17/CAP-19.  
- **lo_que_haremos:** Continuar CAP-20 para E2 completando los READMEs restantes (`03_fases_implementation`, `04_fases_operation`, `05_fases_evolution`, `14_casos_uso`, `15_instrumentacion`), abriendo nuevos OUTCOMEs parciales conforme se alcancen estados MVO 1.0.0.  
- **lo_que_necesitamos:** Ningún apoyo inmediato; si en la revisión de RELEASE se detecta alguna incoherencia entre este README y los contratos/kernel, E2 la tratará como ajuste menor o backlog post‑1.0.0 según criticidad.  
- **estado:** done  
- **links:** `30_metodologia_orko/02_fases_development/README.md`, `40_implementacion_metodologia/ejemplos/`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`  

- **id_evento:** `20251118-0028-E3-14`  
- **timestamp:** 2025-11-18 00:28  
- **equipo:** E3  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-20`, `06_playbooks_recovery/README.md`, `07_playbooks_transformation/README.md`, `08_playbooks_operational/README.md`, `09_trayectorias/README.md`, `12_roles_governance/README.md`, `13_metricas_validacion/README.md`  
- **resumen:** CAP-20 cumplido para E3: los READMEs de playbooks Recovery/Transformation/Operational, trayectorias y governance/métricas fueron llevados a estado MVO 1.0.0, describiendo el catálogo P01–P15, las trayectorias Survival/Minimal/Avanzada, la estructura de governance y el rol de health gates/VG4 sin modificar contratos (VOCAB, DEP_GRAPH, P01–P15, `playbook_instances.yaml`, `03_decision_matrix.md`, `02_health_gates.md`).  
- **impacto_en_dependencias:** E4 y el Capitán disponen ahora de documentación de alto nivel coherente con `validation_final_report.md` para entender cómo se usan playbooks, trayectorias y métricas en ORKO v1.0.0; los cambios se limitan a texto descriptivo y no alteran el freeze de VG3 ni los resultados de CAP-14–CAP-19. Cualquier futura evolución de estos bloques deberá entrar como nuevo CAP o backlog post-1.0.0.  
- **lo_que_haremos:** Dejar los READMEs de E3 en modo mantenimiento (ajustes editoriales menores si aparecen) y volver a modo soporte/stand-by respecto a VG3, respondiendo solo a `[NEED]` explícitos relacionados con playbooks/trayectorias/métricas mientras dure CAP-20/CAP-19/CAP-18.  
- **lo_que_necesitamos:** Ninguno inmediato; si, durante la revisión final de RELEASE, se detecta alguna inconsistencia entre READMEs y contratos, se tratará como `[NEED]` acotado o backlog post-1.0.0 según su criticidad.  
- **estado:** done  
- **links:** `30_metodologia_orko/06_playbooks_recovery/README.md`, `30_metodologia_orko/07_playbooks_transformation/README.md`, `30_metodologia_orko/08_playbooks_operational/README.md`, `30_metodologia_orko/09_trayectorias/README.md`, `30_metodologia_orko/12_roles_governance/README.md`, `30_metodologia_orko/13_metricas_validacion/README.md`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`  

- - **id_evento:** `20251118-0013-E2-15`  
- **timestamp:** 2025-11-18 00:13  
- **equipo:** E2  
- **tipo:** [INTENT]  
- **artefactos:** `CAP-20`, `02_fases_development/README.md`, `03_fases_implementation/README.md`, `04_fases_operation/README.md`, `05_fases_evolution/README.md`, `11_artefactos_templates/README.md`, `14_casos_uso/README.md`, `15_instrumentacion/README.md`  
- **resumen:** En respuesta a `CAP-20`, E2 declara intención de completar los READMEs asignados (fases Development/Implementation/Operation/Evolution, artefactos/templates, casos de uso, instrumentación) hasta estado MVO 1.0.0, describiendo el rol de cada bloque y su relación con casos/metrics sin modificar schemas ni contratos. El primer objetivo concreto es dejar `11_artefactos_templates/README.md` en estado utilizable para v1.0.0.  
- **impacto_en_dependencias:** Ninguno sobre kernel/VOCAB/DEP_GRAPH ni sobre contratos de P01–P15; el trabajo se limita a documentación descriptiva y alineamiento con el estado actual del repositorio.  
- **lo_que_haremos:** Redactar `11_artefactos_templates/README.md` en línea con `30_metodologia_orko/README.md` y `validation_final_report.md` (§2.4), asegurando que el directorio de templates quede documentado como parte de la RELEASE 1.0.0.  
- **lo_que_necesitamos:** Ninguno inmediato; si al documentar se detecta algún gap relevante (p.ej. template referenciado en casos que no existe en disco), se registrará un `[NEED]` específico ligado a CAP-20/CAP-17.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/11_artefactos_templates/README.md`, `40_implementacion_metodologia/templates/`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`  

- **id_evento:** `20251118-0025-E2-21`  
- **timestamp:** 2025-11-18 00:25  
- **equipo:** E2  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-20`, `30_metodologia_orko/11_artefactos_templates/README.md`, `40_implementacion_metodologia/templates/`, `validation_final_report`  
- **resumen:** E2 completa el README de `11_artefactos_templates` a estado MVO 1.0.0: se documenta el propósito del directorio (templates de soporte a F1–F18 y P01–P15), la estructura por subcarpetas (`assessment/`, `planning/`, `execution/`, `evolution/`, `compliance/`, `context_specific/`) y su relación con casos y con las auditorías de CAP-17 (§2.4 de `validation_final_report.md`). No se introducen nuevas métricas ni se modifican contratos; se explicita que muchos templates son placeholders operativos aceptables para v1.0.0 y que su enriquecimiento futuro queda en backlog post‑1.0.0.  
- **impacto_en_dependencias:** El árbol de templates queda trazado y descrito dentro de `30_metodologia_orko`, facilitando la lectura de `validation_final_report.md` y de los casos de ejemplo. Este OUTCOME contribuye al objetivo de CAP-20 de dejar los READMEs clave en estado MVO 1.0.0 sin romper el freeze de kernel/VG3.  
- **lo_que_haremos:** Mantener E2 disponible para completar el resto de READMEs asignados en CAP-20 (fases 02–05, `14_casos_uso`, `15_instrumentacion`), abriendo nuevos `[INTENT]` cuando corresponda.  
- **lo_que_necesitamos:** Ningún insumo adicional por ahora; si el Capitán o E4 detectan inconsistencias entre el README y el estado real de templates/casos durante la revisión de RELEASE, E2 las tratará como ajustes menores o backlog según la criticidad.  
- **estado:** done  
- **links:** `30_metodologia_orko/11_artefactos_templates/README.md`, `40_implementacion_metodologia/templates/`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`  

- **id_evento:** `20251118-0013-E3-13`  
- **timestamp:** 2025-11-18 00:13  
- **equipo:** E3  
- **tipo:** [INTENT]  
- **artefactos:** `CAP-20`, `06_playbooks_recovery/README.md`, `07_playbooks_transformation/README.md`, `08_playbooks_operational/README.md`, `09_trayectorias/README.md`, `12_roles_governance/README.md`, `13_metricas_validacion/README.md`  
- **resumen:** En respuesta a `CAP-20`, E3 asume el mandato de llevar a estado MVO 1.0.0 los READMEs de playbooks (P01–P15), trayectorias y governance/métricas, describiendo el estado actual de VG3 y su relación con WSLC, health gates y casos, sin modificar kernel, VOCAB, DEP_GRAPH ni contratos de playbooks/trayectorias/gates.  
- **impacto_en_dependencias:** Estos READMEs deberían facilitar a E4, al Capitán y a futuros lectores entender cómo usar P01–P15, trayectorias y health gates en el contexto de ORKO v1.0.0, sin introducir cambios en el contrato existente. Cualquier conflicto detectado entre documentación y contratos se tratará como `[NEED]` o backlog post-1.0.0, no como cambio silencioso.  
- **lo_que_haremos:** Redactar contenido MVO para los 6 READMEs asignados a E3 (`06`, `07`, `08`, `09`, `12`, `13`), anclado en `VOCABULARIO_CONTROLADO.yaml`, `playbook_schema.yaml`, `playbook_instances.yaml`, `03_decision_matrix.md`, `02_health_gates.md`, `01_team_structure_raci.md`, `03_vg4_validation_map.md` y `validation_final_report.md`, verificando que no se agregan nuevos IDs ni métricas canónicas.  
- **lo_que_necesitamos:** Ninguno inmediato; si al documentar se detecta un conflicto entre READMEs y contratos (p.ej. referencia a playbook inexistente), se registrará un `[NEED]` acotado ligado a CAP-20/CAP-19/CAP-18 antes de proponer cambios a VG3.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/06_playbooks_recovery/README.md`, `30_metodologia_orko/07_playbooks_transformation/README.md`, `30_metodologia_orko/08_playbooks_operational/README.md`, `30_metodologia_orko/09_trayectorias/README.md`, `30_metodologia_orko/12_roles_governance/README.md`, `30_metodologia_orko/13_metricas_validacion/README.md`

- **id_evento:** `20251118-0009-CAP-20`  
- **timestamp:** 2025-11-18 00:09  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO] [DECISIÓN]  
- **artefactos:** `CAP-18`, `CAP-19`, `CAP-17`, `30_metodologia_orko/README.md`, `01_fases_initiation/README.md`, `02_fases_development/README.md`, `03_fases_implementation/README.md`, `04_fases_operation/README.md`, `05_fases_evolution/README.md`, `06_playbooks_recovery/README.md`, `07_playbooks_transformation/README.md`, `08_playbooks_operational/README.md`, `09_trayectorias/README.md`, `10_integracion_tejidos/README.md`, `11_artefactos_templates/README.md`, `12_roles_governance/README.md`, `13_metricas_validacion/README.md`, `14_casos_uso/README.md`, `15_instrumentacion/README.md`, `16_evolucion_metodologia/README.md`  
- **resumen:** CAP-20 – Mandato de documentación READMEs: mientras E4 cierra CAP-17/CAP-18/CAP-19 y prepara RELEASE 1.0.0, se activa a los equipos en stand-by (E1–E3) para llevar los READMEs de `30_metodologia_orko` (01–16 + README raíz) a un estado MVO 1.0.0, sin modificar kernel, VOCAB, DEP_GRAPH ni contratos de playbooks/trayectorias/health gates.  
- **impacto_en_dependencias:** Este CAP agrega trabajo de documentación paralelo que no debe alterar el resultado de CAP-14–CAP-19 ni introducir cambios en contratos; el objetivo es que la estructura de la metodología (fases, playbooks, trayectorias, governance, métricas, casos, instrumentación, evolución) tenga READMEs claros y alineados con el estado actual del repositorio, sin abrir scope funcional nuevo antes de ORKO v1.0.0.  
- **lo_que_haremos:**  
  - **E1 (Kernel/arquitectura/invariantes):**  
    - Completar los READMEs de:  
      - `30_metodologia_orko/README.md` (visión general de la metodología, capas, cómo leer el árbol 01–16, anclado a `out/30_metodologia_orko.md` y `KERNEL_READINESS.md`).  
      - `01_fases_initiation/README.md` (propósito del bloque de Initiation y relación con F1–F3, contextos y GENOME/FENOTIPO).  
      - `10_integracion_tejidos/README.md` (cómo se conectan tejidos/arquitectura con WSLC y playbooks).  
      - `16_evolucion_metodologia/README.md` (cómo se espera que ORKO evolucione post-1.0.0, referenciando `VOCAB_v1.1.x_NOTAS.md`, backlog de I1–I8 y CAP-x futuros).  
    - En todos los casos, usar solo información ya consolidada (out/, SPEC, CAP-14–CAP-19) y **no cambiar contratos**; si se detecta un conflicto con kernel/DEP_GRAPH, levantar `[NEED]` antes de ajustar contenidos.  
  - **E2 (Fases/expansión/schemas/casos/instrumentación):**  
    - Completar los READMEs de:  
      - `02_fases_development/README.md`, `03_fases_implementation/README.md`, `04_fases_operation/README.md`, `05_fases_evolution/README.md` (explicar el rol de cada bloque de fases, referencias a F4–F12/F13–F18 y cómo se relacionan con contextos/casos).  
      - `11_artefactos_templates/README.md` (panorama de templates y artefactos clave, anclado a lo que ya existe en `40_implementacion_metodologia/templates/` y a las auditorías de CAP-17).  
      - `14_casos_uso/README.md` (cómo se usan los casos de `40_implementacion_metodologia/ejemplos` como evidencia de aplicación de la metodología).  
      - `15_instrumentacion/README.md` (visión de instrumentación y relación con métricas canónicas, calculadoras y dashboards descritos en `13_metricas_validacion/`).  
    - No introducir nuevas métricas ni modificar schemas; si al documentar se descubren gaps relevantes, registrarlos como backlog o `[NEED]` según corresponda, sin cambiar el kernel.  
  - **E3 (Playbooks/trayectorias/governance/métricas):**  
    - Completar los READMEs de:  
      - `06_playbooks_recovery/README.md`, `07_playbooks_transformation/README.md`, `08_playbooks_operational/README.md` (explicar el rol de cada familia de playbooks P01–P15 y su relación con WSLC y VG3).  
      - `09_trayectorias/README.md` (resumen de trayectorias `Survival`/`Minimal`/`Avanzada` y de `03_decision_matrix.md`, referencia a cómo se usan en F3/F17 y en casos).  
      - `12_roles_governance/README.md`, `13_metricas_validacion/README.md` (visión general de governance y métricas desde la perspectiva de playbooks/gates, coordinando el contenido con E4 sin redefinir contratos).  
    - Mantener VG3 congelada a nivel de contratos; los READMEs deben describir el catálogo actual sin agregar nuevos playbooks ni modificar `playbook_schema.yaml`/`playbook_instances.yaml`.  
  - **E4:** no se le asignan nuevos READMEs en este CAP; E4 solo revisará/coherenciará, cuando corresponda, texto crítico de READMEs que impacte directamente en CAP-17/CAP-19, como parte del bloque final de documentación de RELEASE.  
- **lo_que_necesitamos:**  
  - Que E1, E2 y E3 abran `[INTENT]` específicos bajo CAP-20 cuando comiencen a trabajar en cada grupo de READMEs y registren `[OUTCOME]` cuando los dejen en estado MVO 1.0.0.  
  - Que ningún equipo cambie contratos (VOCAB, DEP_GRAPH, P01–P15, `playbook_instances.yaml`, `03_decision_matrix.md`, `02_health_gates.md`) como parte de este CAP; cualquier conflicto detectado al documentar debe registrarse como `[NEED]` ligado a CAP-17/CAP-18/CAP-19/CAP-20, y se tratará como backlog post-1.0.0 salvo que bloquee la RELEASE.  
- **estado:** open  
- **links:** `30_metodologia_orko/README.md`, `30_metodologia_orko/01_fases_initiation/README.md`, `30_metodologia_orko/02_fases_development/README.md`, `30_metodologia_orko/03_fases_implementation/README.md`, `30_metodologia_orko/04_fases_operation/README.md`, `30_metodologia_orko/05_fases_evolution/README.md`, `30_metodologia_orko/06_playbooks_recovery/README.md`, `30_metodologia_orko/07_playbooks_transformation/README.md`, `30_metodologia_orko/08_playbooks_operational/README.md`, `30_metodologia_orko/09_trayectorias/README.md`, `30_metodologia_orko/10_integracion_tejidos/README.md`, `30_metodologia_orko/11_artefactos_templates/README.md`, `30_metodologia_orko/12_roles_governance/README.md`, `30_metodologia_orko/13_metricas_validacion/README.md`, `30_metodologia_orko/14_casos_uso/README.md`, `30_metodologia_orko/15_instrumentacion/README.md`, `30_metodologia_orko/16_evolucion_metodologia/README.md`  

- **id_evento:** `20251118-0008-E4-17`  
- **timestamp:** 2025-11-18 00:08  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-19`, `CAP-18`, `CAP-17`, `VG4`, `I1–I8`, `validation_final_report`, `03_vg4_validation_map`, `01_validacion_trazabilidad_i1_i8`, `READMEs`, `CHANGELOG`  
- **resumen:** E4 declara **CAP-17 completado**: (1) auditorías globales §2.1–§2.5 de `validation_final_report.md` están en estado v0.1 (VOCAB vs docs, DEP_GRAPH vs YAML, §0 FUNDAMENTO por fase, templates/calculadoras, casos) sin detectar blockers críticos para RELEASE 1.0.0; (2) §3 sintetiza I1–I8 con estados `PASSED`/`CONDITIONAL` alineados a `01_validacion_trazabilidad_i1_i8.md` y `03_vg4_validation_map.md`; (3) §4–§5 documentan la recomendación de E4 de declarar ORKO v1.0.0 (con varios invariantes/fases en estado CONDITIONAL) y explicitan los gaps/backlog post-1.0.0. Además se actualizan READMEs y `CHANGELOG.md` en 30/40 para reflejar la existencia de VG4, la RELEASE 1.0.0 y el rol de los artefactos de validación/casos.  
- **impacto_en_dependencias:** VG4 queda trazada y documentada a nivel de diseño para ORKO v1.0.0: kernel/VOCAB/DEP_GRAPH (CAP-14), casos (CAP-15), playbooks/VG3 (CAP-16) y auditorías CAP-17/CAP-19 están integrados en `validation_final_report.md`. A partir de ahora, el camino crítico para declarar formalmente la RELEASE 1.0.0 pasa por la revisión del Capitán de §3–§5 y por la eventual aparición de nuevos `[NEED]` si se consideran inaceptables algunos gaps. E2 y E3 se mantienen en modo soporte/stand-by; E1 conserva el kernel congelado.  
- **lo_que_haremos:** Desde E4, no se abrirán nuevos trabajos de diseño/metodología antes de la decisión de RELEASE; el foco se limitará a aclaraciones puntuales o a registrar `[NEED]` si el Capitán o el Squad detectan inconsistencias críticas adicionales en la revisión de `validation_final_report.md` o de los casos. Una vez tomada la decisión de RELEASE, se podrán abrir nuevos CAP para abordar el backlog de §5 (completar §0 FUNDAMENTO, profundizar templates/calculadoras, auditorías por caso, métricas empíricas, etc.).  
- **lo_que_necesitamos:** Que el Capitán revise `validation_final_report.md` (especialmente §3–§5) y, bajo CAP-19, confirme si con esta evidencia recomienda declarar ORKO v1.0.0 (aceptando invariantes/fases `CONDITIONAL` como no bloqueantes) o si requiere algún `[NEED]` adicional antes de la decisión.  
- **estado:** done  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md`, `40_implementacion_metodologia/CHANGELOG.md`  

- **id_evento:** `20251117-2355-E4-16`  
- **timestamp:** 2025-11-17 23:55  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-19`, `CAP-18`, `CAP-17`, `VG4`, `I1–I8`, `validation_final_report`, `templates`, `calculadoras`, `casos_ejemplo`  
- **resumen:** E4 aplica los criterios de CAP-19 y completa las auditorías v0.1 de `validation_final_report.md` §2.4 (templates y calculadoras) y §2.5 (casos de ejemplo). §2.4 pasa de un check de mera existencia de archivos a documentar `estructura + wiring`: se confirma la presencia de las 6 calculadoras (`budget_parametric_allocator.xlsx`, `context_decision_matrix.xlsx`, `convergence_tracker.xlsx`, `health_score_calculator.xlsx`, `regulatory_compliance_tracker.xlsx`, `roi_estimator.xlsx`), se valida su rol como placeholders conectados a fases kernel (F1/F3/F7/F9/F13) según `PLAN_ETAPA_1_KERNEL.md` y `SPEC_ARQUITECTURA_DEFINITIVA.md`, y se comprueba que el árbol de templates T01–T20 está alineado con la arquitectura publicada. §2.5 deja de ser solo un check estructural y documenta una revisión profunda v0.1 de 3 casos representativos (`01_startup_50p_completo`, `02_scaleup_200p_completo`, `06_gore_nuble_completo`), verificando que `trajectory.md` y `artefactos.md` son coherentes con `03_decision_matrix.md`, `02_health_gates.md`, el catálogo P01–P15 y el uso real de templates/calculadoras en esos contextos.  
- **impacto_en_dependencias:** Con estas auditorías v0.1, CAP-17 dispone de evidencia concreta de que: (a) el ecosistema de templates/calculadoras existe y está cableado de forma consistente con fases kernel y casos; (b) al menos 3 de los 6 casos recorren de forma coherente la cadena `context`→`trajectory`→`artefactos`→P01–P15→templates/calculadoras sin introducir artefactos fuera de catálogo. No se detectan blockers críticos para RELEASE 1.0.0 en este nivel de revisión; los riesgos residuales quedan acotados a profundidad de contenido (fórmulas internas de calculadoras, completitud de todos los templates T01–T25 y narrativa detallada de los 6 casos).  
- **lo_que_haremos:** Mantener CAP-17 en ejecución avanzando al siguiente bloque de CAP-19: (1) completar §3 de `validation_final_report.md` con una clasificación PASSED/CONDITIONAL por invariante I1–I8, apoyada en `01_validacion_trazabilidad_i1_i8.md`, CAP-14–CAP-16 y las auditorías de casos/templates/calculadoras; (2) redactar §4 (conclusión de RELEASE) y §5 (backlog post-1.0.0), documentando explícitamente los gaps aceptados (fases en estado `CONDITIONAL`, coverage incompleta de VOCAB/DEP_GRAPH vs archivos, profundidad limitada de calculadoras y casos); (3) preparar el bloque final de CAP-17 para actualizar READMEs y `CHANGELOG.md` una vez que el Capitán haya revisado §3–§5.  
- **lo_que_necesitamos:** Ningún apoyo inmediato adicional mientras no se detecten inconsistencias nuevas; si en la síntesis I1–I8 o en la redacción de la conclusión de RELEASE aparece un bloqueo directo (p.ej. un invariante que no pueda calificarse al menos como `CONDITIONAL` sin tocar kernel/VG3), E4 registrará un `[NEED]` explícito ligado a CAP-17/CAP-19 antes de recomendar ORKO v1.0.0.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `40_implementacion_metodologia/templates/`, `40_implementacion_metodologia/calculadoras/`, `40_implementacion_metodologia/ejemplos/`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`  

- **id_evento:** `20251117-2355-E3-12`  
- **timestamp:** 2025-11-17 23:55  
- **equipo:** E3  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-19`, `VG3`, `P01–P15`, `playbook_instances`, `validation_final_report`, `CAP-16`, `CAP-17`, `CAP-18`  
- **resumen:** En respuesta a `CAP-19`, E3 ejecuta el **sanity check proactivo limitado** autorizado sobre `validation_final_report.md`, revisando todas las referencias a P01–P15 y `playbook_instances.yaml` (§1.3 CAP-16, §2.5 casos). No se detectan incoherencias obvias: el reporte describe correctamente que P01–P15 están cerrados a nivel de contratos según OUTCOME E3-08/CAP-16, que `playbook_instances.yaml` mapea escenarios de `03_decision_matrix.md` sin huecos y que este catálogo se usa como base para auditorías de VG4, sin introducir nuevos playbooks ni modificar el contrato de VG3. No surge ningún `[NEED]` hacia E4 ni hacia el Capitán a partir de esta revisión.  
- **impacto_en_dependencias:** E4 puede seguir completando CAP-17 aplicando estos criterios en `validation_final_report.md` (§2.4–§2.5, §3, §4, §5) y que E3 limite cualquier cambio a ajustes editoriales o a propuestas via `[NEED]` sin modificar contratos; cualquier auditoría que revele un bloqueo real para RELEASE debe registrarse como `[NEED]` ligado a CAP-17/CAP-18/CAP-19 antes de recomendar ORKO v1.0.0.  
- **lo_que_haremos:** Mantener VG3 (P01–P15 + `playbook_instances.yaml`) congelada a nivel de contratos durante CAP-17/CAP-18, limitar cualquier intervención a ajustes editoriales permitidos en P01–P15/`playbook_instances.yaml` y responder solo a `[NEED]` explícitos que E4 o el Capitán levanten si las auditorías de VG4 detectan gaps que realmente afecten a playbooks. E3 seguirá monitoreando este board como fuente de verdad.  
- **impacto_en_dependencias:** E4 puede seguir completando CAP-17/CAP-19 apoyándose en `validation_final_report.md` sabiendo que las menciones a P01–P15/`playbook_instances.yaml` son consistentes con el estado real de VG3 y con el board (CAP-16/CAP-18), y que cualquier gap futuro deberá provenir de auditorías más profundas sobre casos/templates/calculadoras, no de un desalineamiento documental básico respecto a VG3.  
- **lo_que_haremos:** Mantener VG3 (P01–P15 + `playbook_instances.yaml`) congelada a nivel de contratos durante CAP-17/CAP-19, limitar cualquier intervención a ajustes editoriales permitidos en P01–P15/`playbook_instances.yaml` y responder solo a `[NEED]` explícitos que E4 o el Capitán levanten si las auditorías de VG4 detectan gaps que realmente afecten a playbooks. E3 seguirá monitoreando este board como fuente de verdad.  
- **lo_que_necesitamos:** Ninguno inmediato desde auditoría de `validation_final_report.md`; si en las siguientes rondas de CAP-17 E4 identifica incoherencias entre casos, gates y P01–P15/`playbook_instances.yaml`, se solicita que se registren como `[NEED]` acotados para permitir a E3 reaccionar sin romper el freeze de contratos más allá de lo estrictamente necesario.  
- **estado:** done  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml`, `30_metodologia_orko/07_playbooks_transformation/`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`

- **id_evento:** `20251117-2348-CAP-19`  
- **timestamp:** 2025-11-17 23:48  
- **equipo:** CAPITÁN  
- **tipo:** [DECISIÓN]  
- **artefactos:** `CAP-18`, `CAP-17`, `VG3`, `VG4`, `P01–P15`, `playbook_instances`, `validation_final_report`, `I1–I8`, `F1–F18`, `templates`, `calculadoras`, `casos_ejemplo`  
- **resumen:** CAP-19 – Criterios de cierre para VG3/VG4 y RELEASE 1.0.0: se fijan reglas explícitas para el freeze de VG3, la aceptabilidad de fases `CONDITIONAL` en §0 FUNDAMENTO, la profundidad mínima de auditorías de templates/calculadoras/casos y la forma de reportar I1–I8 en `validation_final_report.md`.  
- **impacto_en_dependencias:** E3 mantiene VG3 (P01–P15 + `playbook_instances.yaml`) congelada a nivel de contratos pero puede hacer una revisión proactiva limitada del uso de playbooks en `validation_final_report.md`; E4 dispone de criterios formales para cerrar auditorías (§2.4–§2.5) y la sección I1–I8 (§3), y el Squad puede declarar ORKO v1.0.0 aun con fases `CONDITIONAL` y gaps documentados en backlog (§5), sin tocar el kernel ni abrir scope nuevo.  
- **lo_que_haremos:**  
  - E3:  
    - Permanecerá en modo soporte/stand-by, **reactivo a `[NEED]`**, pero se autoriza un **sanity check proactivo limitado** de referencias a P01–P15/`playbook_instances.yaml` dentro de `validation_final_report.md` (solo para detectar incoherencias obvias); cualquier hallazgo relevante se comunicará a E4 o se registrará como `[NEED]` acotado, sin cambiar contratos directamente.  
    - Podrá realizar **ajustes puramente editoriales** (typos, ortografía, pequeñas mejoras de claridad) en los textos de P01–P15 y `playbook_instances.yaml`, siempre que **no se modifiquen contratos** (IDs, campos del schema, triggers, métricas, `fases_relacionadas`, `gates_relacionados`, etc.). Cualquier cambio que toque contratos se tratará como backlog post-1.0.0.  
  - E4:  
    - Tratará como **aceptable para RELEASE 1.0.0** que algunas fases F1–F18 estén en estado `CONDITIONAL` respecto a `§0 FUNDAMENTO`, siempre que: (a) el kernel/VOCAB/DEP_GRAPH permanezcan validados (CAP-14 DONE), y (b) todos esos `CONDITIONAL` queden listados y explicados en una sección de backlog (p.ej. §5) de `validation_final_report.md`.  
    - Completar las auditorías de §2.4 y §2.5 con un enfoque de **estructura + muestras profundas**: (a) verificar a nivel estructural la existencia y wiring básico de templates y calculadoras y su alineamiento con contratos (IDs, tipos de inputs/outputs); (b) seleccionar al menos 2–3 casos representativos (por ejemplo `startup_50p`, `scaleup_200p`, `gore_nuble`) y recorrerlos end-to-end (`context` → `trajectory` → `artefactos` → P01–P15 → templates/calculadoras), documentando fricciones sin rediseñar la metodología.  
    - Completar §3 de `validation_final_report.md` con una **clasificación explícita por invariante** I1–I8 (`PASSED` o `CONDITIONAL`), evitando `OPEN` salvo que exista un bloqueo real para RELEASE; la síntesis cualitativa puede acompañar, pero el reporte DEBE incluir este estado por invariante apoyado en CAP-14–CAP-16, los 6 casos y las auditorías de CAP-17.  
  - CAPITÁN: usará estos criterios para evaluar §3–§5 de `validation_final_report.md` y decidir formalmente la RELEASE 1.0.0, aceptando invariantes/fases `CONDITIONAL` solo cuando los riesgos y próximos pasos estén documentados en backlog de forma explícita.  
- **lo_que_necesitamos:** Que E4 continúe CAP-17 aplicando estos criterios en `validation_final_report.md` (§2.4–§2.5, §3, §4, §5) y que E3 limite cualquier cambio a ajustes editoriales o a propuestas via `[NEED]` sin modificar contratos; cualquier auditoría que revele un bloqueo real para RELEASE debe registrarse como `[NEED]` ligado a CAP-17/CAP-18/CAP-19 antes de recomendar ORKO v1.0.0.  
- **estado:** open  
- **links:** `CAP-18`, `CAP-17`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml`, `30_metodologia_orko/07_playbooks_transformation/`, `40_implementacion_metodologia/ejemplos/`

- **id_evento:** `20251117-1045-E3-11`  
- **timestamp:** 2025-11-17 10:45  
- **equipo:** E3  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-09`, `CAP-14`, `CAP-15`, `CAP-16`, `CAP-17`, `CAP-18`, `VG3`, `VG4`, `P01–P15`, `playbook_instances`, `validation_final_report`, `board_coordinación`  
- **resumen:** Reporte de situación E3 post CAP-18: (1) Kernel y expansión validados por E1 (`E1-10`/CAP-14); (2) Casos y contextos completados por E2 (`E2-12`/`E2-13`/CAP-15); (3) VG3/playbooks P01–P15 cerrados por E3 (`E3-08`/CAP-16) y declarados contrato estable en CAP-18; (4) VG4 y auditorías globales en curso por E4 (`E4-12`, `E4-13`, `E4-14`, `validation_final_report.md`). No hay `[NEED]` abiertos dirigidos a E3 ni mandatos nuevos desde CAP-18: E3 opera en modo soporte/stand-by manteniendo VG3 estable mientras CAP-17 avanza.  
- **impacto_en_dependencias:** El Squad cuenta con: kernel+DEP_GRAPH consistentes (E1), 6 casos completos como evidencia (E2), catálogo P01–P15 consolidado (E3) y auditorías globales en marcha (E4). Desde VG3, el riesgo principal está en gaps que E4 pudiera detectar ex-post entre casos/auditorías y `playbook_instances.yaml` o P01–P15; mientras esos gaps no existan o no se etiqueten como `[NEED]`, E3 no debería introducir cambios que rompan trazabilidad de CAP-14/15/16.  
- **lo_que_haremos:** Mantener P01–P15 y `playbook_instances.yaml` sin cambios hasta RELEASE 1.0.0, respondiendo solo a `[NEED]` explícitos que E4 o el Capitán levanten durante CAP-17/CAP-18. Propuesta (no ejecutada, sujeta a nuevo CAP/post-1.0.0): (a) abrir un CAP-x E3 para profundizar secciones avanzadas de P01–P15 (implementación, anti-patrones, checklists operativos) usando evidencia de los 6 casos; (b) coordinar con E1/E4 un CAP-y para iterar sobre `playbooks_triggers_catalog.md` y calibrar triggers/umbrales a partir de métricas observadas en producción, respetando el proceso de VOCAB v1.1.x; (c) explorar, junto a E2, nuevos contextos/casos donde VG3 pueda demostrar robustez (también post-1.0.0).  
- **lo_que_necesitamos:** Dudas hacia Capitán/E4: (1) Confirmar si E3 debe permanecer 100% reactivo a `[NEED]` durante CAP-17 o si se espera alguna revisión proactiva limitada (p.ej. sanity check de referencias a P01–P15 en `validation_final_report.md`); (2) Aclarar si, antes de RELEASE, se permiten ajustes puramente editoriales en textos de P01–P15/`playbook_instances.yaml` (sin cambiar contratos) o si VG3 debe entenderse como freeze total; (3) Validar si las propuestas CAP-x/CAP-y (post-1.0.0) son alineadas con la visión de evolución o si E3 debería enfocarse en otros frentes después de la RELEASE.  
- **estado:** done  
- **links:** `30_metodologia_orko/07_playbooks_transformation/`, `30_metodologia_orko/08_playbooks_operational/`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `40_implementacion_metodologia/ejemplos/`

- **id_evento:** `20251117-1100-E4-15`  
- **timestamp:** 2025-11-17 11:00  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-17`, `CAP-18`, `VG4`, `I1–I8`, `validation_final_report`, `board_coordinación`, `CAP-14`, `CAP-15`, `CAP-16`  
- **resumen:** Reporte de situación CAP-17/CAP-18: (a) CAP-14 está cerrado para E1 (`validation_kernel_report.md`, `validation_expansion_report.md`, `VOCAB_v1.1.x_NOTAS.md` y §1.1 de `validation_final_report.md` marcan el kernel/expansión como consistentes); (b) CAP-15 y CAP-16 están cerrados y tratados como contratos estables (casos + playbooks/WSLC), con E2 y E3 en modo stand-by bajo CAP-09/CAP-18; (c) CAP-17 avanzó el bloque de auditorías estructurales v0.1: §2.1 (VOCAB vs docs), §2.2 (DEP_GRAPH vs YAML) y §2.3 (`§0 FUNDAMENTO` PASSED/CONDITIONAL por fase) ya están documentados en `validation_final_report.md`.  
- **impacto_en_dependencias:** El camino crítico hacia RELEASE 1.0.0 se concentra ahora en E4/CAP-17–CAP-18: las piezas de kernel (E1), casos (E2) y playbooks (E3) se consideran estables a menos que surja un `[NEED]` crítico; VG4 y la decisión de RELEASE dependen de completar auditorías sobre templates/calculadoras/casos y de sintetizar el estado de I1–I8 y la recomendación final en `validation_final_report.md`.  
- **dudas_abiertas:** (1) ¿Es aceptable declarar RELEASE 1.0.0 con varias fases F1–F18 en estado `CONDITIONAL` respecto a `§0 FUNDAMENTO`, siempre que el contrato kernel/VOCAB/DEP_GRAPH esté congelado y documentemos estos gaps en §5 (backlog post-1.0.0)? (2) ¿Hasta qué profundidad deben llegar las auditorías de templates/calculadoras y de narrativa de casos para considerar VG4 “suficientemente” cerrada (estructura vs contenido detallado)? (3) ¿Se espera para 1.0.0 una clasificación explícita PASSED/CONDITIONAL por invariante I1–I8 o basta con una síntesis cualitativa basada en casos + diseño?  
- **propuesta_de_avance:** (1) Completar §2.4 y §2.5 de `validation_final_report.md` con auditorías mínimas pero explícitas de templates, calculadoras y coherencia básica de los 6 casos (estructura y alineamiento con P01–P15 y gates), levantando `[NEED]` solo si se detecta un gap que rompa kernel/VG3; (2) llenar §3 con una síntesis I1–I8 (PASSED/CONDITIONAL por invariante) apoyada en `01_validacion_trazabilidad_i1_i8.md`, CAP-14–CAP-16 y los 6 casos; (3) redactar §4 con una recomendación clara sobre RELEASE 1.0.0 y listar en §5 los gaps aceptados como backlog post-1.0.0 (p.ej. enriquecimiento de §0 en fases `CONDITIONAL`, coverage completo de VOCAB/DEP_GRAPH vs archivos, mejoras en casos).  
- **lo_que_haremos:** E4 seguirá CAP-17 ejecutando la propuesta anterior y solo levantará `[NEED]` hacia E1/E2/E3 si, durante las auditorías, aparece un bloqueo directo sobre kernel/VOCAB/DEP_GRAPH, casos o playbooks que impida recomendar RELEASE 1.0.0. En paralelo, preparará el plan de cambios en READMEs/`CHANGELOG.md` para cuando la decisión de RELEASE esté tomada.  
- **lo_que_necesitamos:** Feedback del Capitán (o del Squad) sobre las dudas anteriores, especialmente sobre el criterio aceptable para marcar invariantes I1–I8 como PASSED/CONDITIONAL en 1.0.0 y sobre el nivel de exigencia requerido para `§0 FUNDAMENTO` en las fases que hoy están en estado `CONDITIONAL`. Mientras no haya nuevas directrices, E4 asumirá que es válido cerrar RELEASE con estos gaps documentados en §5 como backlog.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `40_implementacion_metodologia/ejemplos/`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `board_coordinación.md`  

- **id_evento:** `20251117-2342-E4-15`  
- **timestamp:** 2025-11-17 23:42  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-17`, `CAP-18`, `CAP-14`, `VG4`, `I1–I8`, `validation_final_report`, `VOCABULARIO_CONTROLADO`, `DEPENDENCY_GRAPH`, `validation_kernel_report`, `validation_expansion_report`  
- **resumen:** Reporte de situación CAP-17/CAP-18 desde E4: CAP-14, CAP-15 y CAP-16 están declarados DONE y reflejados en `validation_final_report.md` (§1.1–§1.3). CAP-17 ha avanzado en dos bloques: (1) evidencias de VG4 documentadas en `03_vg4_validation_map.md` y `01_validacion_trazabilidad_i1_i8.md` usando los 6 casos; (2) auditorías globales v0.1 en `validation_final_report.md` (§2.1 VOCAB vs docs, §2.2 DEP_GRAPH vs YAML, §2.3 §0 FUNDAMENTO por fase). El kernel (`VOCABULARIO_CONTROLADO.yaml` + `DEPENDENCY_GRAPH.yaml`) queda congelado por CAP-14; E4 opera ahora sobre expansión, casos y documentación de release sin tocar el kernel.  
- **impacto_en_dependencias:** VG4 cuenta ya con: (a) kernel y expansión validados estructuralmente (CAP-14); (b) 6 casos completos validados por E2 (CAP-15); (c) catálogo de playbooks P01–P15 estable (CAP-16); y (d) auditorías globales v0.1 que reducen el riesgo semántico (términos prohibidos, métricas canónicas vs candidatas, DAG y refs del grafo, presencia de §0 FUNDAMENTO en 8/18 fases). Los riesgos residuales para la decisión de RELEASE se concentran en: cobertura incompleta Layer 0–3 en docs, ausencia de §0 FUNDAMENTO en 10/18 fases (estado CONDITIONAL) y profundidad limitada de auditorías sobre templates/calculadoras/casos.  
- **lo_que_haremos:** Mantener CAP-17 en ejecución con el siguiente plan de avance, sin modificar kernel/VOCAB/DEP_GRAPH:  
  1) Completar auditorías de implementación en `validation_final_report.md` §2.4–§2.5: (a) revisar el mapeo entre templates y calculadoras reales vs lo planificado (al menos un chequeo de presencia/uso por categoría); (b) seleccionar uno o dos casos de ejemplo (p.ej. `01_startup_50p_completo`) y auditar la coherencia de `trajectory.md` y `artefactos.md` con `03_decision_matrix.md`, `02_health_gates.md` y `playbook_instances.yaml`.  
  2) Rellenar §3 (síntesis por invariante I1–I8) en `validation_final_report.md` usando `01_validacion_trazabilidad_i1_i8.md`, los reportes de CAP-14 y el estado real de casos/playbooks, marcando cada invariante como `PASSED` o `CONDITIONAL` con ejemplos concretos.  
  3) Redactar §4 (conclusión de RELEASE) y §5 (backlog post-1.0.0), proponiendo una recomendación explícita de E4 sobre declarar ORKO v1.0.0 (incluyendo condiciones y gaps aceptados).  
  4) Si la recomendación es favorable, ejecutar el bloque final de CAP-17: actualizar READMEs y `CHANGELOG.md` para reflejar la RELEASE 1.0.0, sin introducir cambios de diseño en kernel ni en la expansión más allá de documentación y housekeeping.  
- **lo_que_necesitamos:**  
  - (Q1) Confirmación del Capitán de que el estado `CONDITIONAL` en §2.3 (10/18 fases sin `§0 FUNDAMENTO` explícito) puede considerarse **no bloqueante** para RELEASE 1.0.0 si: (a) está documentado como tal en `validation_final_report.md`, y (b) se traslada a backlog explícito en §5.  
  - (Q2) Criterio de profundidad esperado para las auditorías de templates/calculadoras/casos en esta versión: ¿basta con verificación de presencia, mapeo básico y 1–2 casos revisados en detalle, o se espera una cobertura más amplia antes de recomendar RELEASE?  
  - (Q3) Confirmación de que la conclusión de VG4/RELEASE en §4 debe limitarse a la evidencia estructural/contractual (sin datos operativos), tal como ya se describe en CAP-14 y en `01_validacion_trazabilidad_i1_i8.md`, y que cualquier validación empírica se pospone a una futura `VOCAB v1.1.x` / releases posteriores.  
  - (Q4) Si el Capitán tiene algún criterio adicional para etiquetar I1–I8 como `PASSED` vs `CONDITIONAL` en §3 (por ejemplo, umbrales mínimos de ejemplos o de cobertura de docs) se solicita que lo deje explícito aquí para que E4 lo use al redactar la síntesis.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `40_implementacion_metodologia/ejemplos/`, `40_implementacion_metodologia/dev_specs/`  

- **id_evento:** `20251117-1035-E4-14`  
- **timestamp:** 2025-11-17 10:35  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-17`, `CAP-18`, `CAP-14`, `VG4`, `I1–I8`, `validation_final_report`, `VOCABULARIO_CONTROLADO`, `DEPENDENCY_GRAPH`, `validation_kernel_report`, `validation_expansion_report`  
- **resumen:** E4 utiliza los reportes de CAP-14 (`validation_kernel_report.md`, `validation_expansion_report.md`) para consolidar el bloque de auditorías globales v0.1 en `validation_final_report.md`: §2.1 documenta la auditoría de términos prohibidos y uso de métricas candidatas vs canónicas; §2.2 documenta la ejecución de `dependency_closure_script.py` sobre `VOCABULARIO_CONTROLADO.yaml` y `DEPENDENCY_GRAPH.yaml`; §2.3 queda actualizado con un estado `PASSED/CONDITIONAL` por fase F1–F18 según la presencia de `§0 FUNDAMENTO`.  
- **impacto_en_dependencias:** CAP-17 dispone ahora de una línea base explícita de auditoría estructural (VOCAB vs docs, DEP_GRAPH vs YAML, §0 por fase) apoyada en CAP-14, lo que reduce la incertidumbre sobre la coherencia semántica antes de VG4/RELEASE. El foco siguiente de E4 pasa a profundizar auditorías sobre templates, calculadoras y casos, y a sintetizar los resultados por invariante I1–I8 y en la conclusión de RELEASE.  
- **lo_que_haremos:** Mantener CAP-17 en ejecución completando las auditorías pendientes de §2.4 (templates y calculadoras) y §2.5 (casos de ejemplo), luego llenar §3 (síntesis I1–I8) y §4 (conclusión de RELEASE) a partir de `01_validacion_trazabilidad_i1_i8.md` y de los reportes de CAP-14–CAP-16. Preparar en paralelo el terreno para las actualizaciones de READMEs y `CHANGELOG.md` una vez que VG4 quede formalmente cerrada.  
- **lo_que_necesitamos:** Ningún apoyo inmediato adicional de E1/E2/E3 mientras no se detecten inconsistencias críticas nuevas; si las auditorías de templates/calculadoras/casos revelan gaps que afecten directamente a kernel, VOCAB o VG3, E4 abrirá un `[NEED]` explícito dirigido al equipo correspondiente antes de recomendar la RELEASE 1.0.0.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `40_implementacion_metodologia/dev_specs/validation_kernel_report.md`, `40_implementacion_metodologia/dev_specs/validation_expansion_report.md`  

- **id_evento:** `20251117-1000-E3-10`  
- **timestamp:** 2025-11-17 10:00  
- **equipo:** E3  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-09`, `CAP-18`, `VG3`, `P01–P15`, `playbook_instances`, `board_coordinación`, `validation_final_report`  
- **resumen:** Tras los OUTCOME `E1-10` y `E4-13`, E3 revisa el board y confirma que no existen nuevos `[NEED]` ni mandatos directos hacia E3: CAP-16 y VG3 siguen tratados como contratos estables y no se han registrado huecos críticos de playbooks en auditorías/casos. E3 se mantiene en modo soporte/stand-by, sin abrir nuevos `[INTENT]` hasta que aparezca un `[NEED]` explícito.  
- **impacto_en_dependencias:** E4 y el Capitán pueden asumir que no hay trabajo pendiente sobre P01–P15/`playbook_instances.yaml` más allá de responder a futuros `[NEED]`; cualquier ajuste en VG3 posterior a las validaciones CAP-14/CAP-17 deberá entrar por este board dirigido a E3.  
- **lo_que_haremos:** Mantener P01–P15 + `playbook_instances.yaml` sin cambios, monitorear este board como fuente de verdad y abrir un nuevo `[INTENT]` solo si E4 o el Capitán levantan un `[NEED]` que afecte a VG3.  
- **lo_que_necesitamos:** Ninguno inmediato; si durante auditorías finales se detecta un hueco crítico en playbooks, se solicita que se registre como `[NEED]` etiquetado para E3 (CAP-17/CAP-18).  
- **estado:** done  
- **links:** `board_coordinación.md`, `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`  

- **id_evento:** `20251117-0930-E1-10`  
- **timestamp:** 2025-11-17 09:30  
- **equipo:** E1  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-14`, `VOCABULARIO_CONTROLADO`, `DEPENDENCY_GRAPH`, `dependency_closure_script`, `validation_kernel_report`, `validation_expansion_report`, `VOCAB_v1.1.x_NOTAS`, `validation_final_report`, `I1–I8`  
- **resumen:** CAP-14 cumplido para E1: `validation_kernel_report.md` documenta que el kernel semántico `v1.0.0-kernel` (`VOCABULARIO_CONTROLADO.yaml` + `DEPENDENCY_GRAPH.yaml`) es internamente consistente (refs, DAG, fases kernel no huérfanas) según `dependency_closure_script.py`, sin introducir métricas más allá de `H_org`, `eta_org` y `ROI_Habilitacion`; `validation_expansion_report.md` confirma que la expansión (docs, playbooks, health gates, casos) no viola el contrato del kernel ni usa `terminos_prohibidos` en contratos núcleo, y que las métricas candidatas se usan solo como señal de diseño; `VOCAB_v1.1.x_NOTAS.md` consolida el backlog de métricas/entidades candidatas sin modificar el VOCAB actual. La sección CAP-14 de `validation_final_report.md` queda actualizada como DONE.  
- **impacto_en_dependencias:** El Squad dispone ahora de evidencia formal de consistencia del kernel y la expansión antes de RELEASE 1.0.0; E4 puede apoyarse en estos reportes para CAP-17/CAP-18 (VG4 + RELEASE) sin tocar el kernel, y futuras extensiones de VOCAB deberán pasar por el proceso controlado descrito en `VOCAB_v1.1.x_NOTAS.md` y `dependency_closure_script.py`.  
- **lo_que_haremos:** E1 pasa a modo stand-by bajo `CAP-09`/`CAP-18`, disponible para aclaraciones puntuales sobre kernel/VOCAB si E4 o el Capitán levantan un `[NEED]` durante auditorías o preparación de RELEASE, pero sin modificar `VOCABULARIO_CONTROLADO.yaml` ni `DEPENDENCY_GRAPH.yaml` en esta versión.  
- **lo_que_necesitamos:** Ninguno inmediato; cualquier inconsistencia crítica que se detecte a partir de ahora en kernel/expansión deberá registrarse como `[NEED]` de CAP-14/CAP-17/CAP-18 antes de reconsiderar la declaración de ORKO v1.0.0.  
- **estado:** done  
- **links:** `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `40_implementacion_metodologia/dev_specs/dependency_closure_script.py`, `40_implementacion_metodologia/dev_specs/validation_kernel_report.md`, `40_implementacion_metodologia/dev_specs/validation_expansion_report.md`, `40_implementacion_metodologia/dev_specs/VOCAB_v1.1.x_NOTAS.md`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`  

- **id_evento:** `20251116-2216-E4-13`  
- **timestamp:** 2025-11-16 22:16  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-17`, `CAP-18`, `CAP-15`, `CAP-16`, `VG4`, `I1–I8`, `validation_final_report`, `03_vg4_validation_map`, `01_validacion_trazabilidad_i1_i8`, `casos_ejemplo`, `playbook_instances`  
- **resumen:** En respuesta a `CAP-18`, E4 actualiza `validation_final_report.md` para reflejar que CAP-15 (casos) y CAP-16 (playbooks/WSLC) están cumplidos: CAP-15 se marca DONE con los 6 casos completos (`context`+`trajectory`+`artefactos`) y CAP-16 se marca DONE con P01–P15 cerrados a nivel de contratos y `playbook_instances.yaml` mapeando escenarios de `03_decision_matrix.md` sin huecos. Además, se deja documentada la auditoría estructural de calculadoras, templates y casos (existencia de archivos y árboles por categoría).  
- **impacto_en_dependencias:** VG4 pasa a tener como insumo un catálogo P01–P15 completo y 6 casos consolidados como evidencia de aplicación, alineados con CAP-18; el foco de cierre se concentra ahora en CAP-14 (validaciones kernel/expansión) y en las auditorías finales de CAP-17 (VOCAB vs docs, DEP_GRAPH vs archivos, §0 en 18/18 fases, coherencia narrativa de casos/playbooks) antes de declarar RELEASE 1.0.0.  
- **lo_que_haremos:** Mantener CAP-17 bloque (2) en ejecución: (a) esperar los reportes `validation_kernel_report.md` y `validation_expansion_report.md` de E1 para completar la sección CAP-14 de `validation_final_report.md`; (b) avanzar, en paralelo y cuando sea posible, auditorías adicionales de VG4 (p.ej. revisiones selectivas de `trajectory.md`/`artefactos.md` contra P01–P15 y gates) sin tocar el kernel; (c) preparar el terreno para las actualizaciones de READMEs y `CHANGELOG.md` en el bloque (3).  
- **lo_que_necesitamos:** Que E1 registre OUTCOME de CAP-14 y comparta los reportes de kernel/expansión; en caso de detectar gaps críticos durante auditorías (términos prohibidos, referencias rotas, fases sin §0, incoherencias graves en casos/playbooks), E4 registrará un `[NEED]` específico de CAP-17/CAP-18 antes de recomendar RELEASE 1.0.0.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `40_implementacion_metodologia/ejemplos/`, `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml`  

- **id_evento:** `20251116-2211-E3-09`  
- **timestamp:** 2025-11-16 22:11  
- **equipo:** E3  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-09`, `CAP-16`, `CAP-18`, `VG3`, `P01–P15`, `playbook_instances`  
- **resumen:** E3 acusa recibo de `CAP-18`: CAP-16 (VG3/playbooks) se mantiene cerrado a nivel de contratos P01–P15 + `playbook_instances.yaml`. E3 entra formalmente en modo soporte/stand-by bajo `CAP-09`/`CAP-18`, sin abrir nuevos playbooks ni escenarios hasta después de RELEASE 1.0.0 o nuevo CAP.  
- **impacto_en_dependencias:** E1/E4 pueden tratar VG3 como contrato estable durante CAP-14/CAP-17; E2 y VG4 pueden usar P01–P15/`playbook_instances.yaml` y los 6 casos como base de evidencia sin riesgo de cambios silenciosos. Cualquier hueco crítico de playbooks detectado en auditorías o casos deberá levantarse como `[NEED]` dirigido a E3 antes de cualquier ajuste.  
- **lo_que_haremos:** Mantener P01–P15 + `playbook_instances.yaml` sin modificaciones mientras dure CAP-18, y responder a `[NEED]` explícitos de CAP-14/CAP-17/CAP-18 si aparecen (p.ej. playbook faltante, trigger inconsistente, gap entre casos y catálogo).  
- **lo_que_necesitamos:** Ninguno inmediato; E3 queda a la espera de `[NEED]` o nuevo CAP que priorice trabajo adicional sobre playbooks o su integración con casos/governance.  
- **estado:** in_progress  
- **links:** `CAP-18`, `30_metodologia_orko/06_playbooks_recovery/`, `30_metodologia_orko/07_playbooks_transformation/`, `30_metodologia_orko/08_playbooks_operational/playbook_instances.yaml`

- **id_evento:** `20251116-2208-CAP-18`  
- **timestamp:** 2025-11-16 22:08  
- **equipo:** CAPITÁN  
- **tipo:** [DECISIÓN] [MANDATO]  
- **artefactos:** `CAP-14`, `CAP-15`, `CAP-16`, `CAP-17`, `VG4`, `I1–I8`, `validation_kernel_report`, `validation_expansion_report`, `VOCAB_v1.1.x_NOTAS`, `validation_final_report`, `READMEs`, `CHANGELOG`, `casos_ejemplo`  
- **resumen:** CAP-18 – Orden de cierre VG4/RELEASE: se declaran cumplidos CAP-15 (casos) y CAP-16 (playbooks/WSLC) y se establece que el foco del Squad pasa a cerrar CAP-14 (validaciones kernel/expansión) y CAP-17 (auditorías VG4 + documentación de release), usando los 6 casos completos como evidencia, mientras E2 y E3 quedan en modo stand-by bajo CAP-09 salvo nuevos NEED.  
- **impacto_en_dependencias:** E1 y E4 quedan en el camino crítico para declarar ORKO v1.0.0 (kernel validado + VG4 cerrada + READMEs/CHANGELOG actualizados); E2 mantiene estables los 6 casos (`context`+`trajectory`+`artefactos`) como evidencia de aplicación para I1–I8 y ejemplos F3/F17, y E3 mantiene estable el catálogo P01–P15/`playbook_instances.yaml` como contrato operativo para casos y VG4. Cualquier gap crítico detectado en auditorías o en la revisión de casos/playbooks deberá tratarse como NEED específico sin tocar el kernel.  
- **lo_que_haremos:**  
  - E1 DEBE completar CAP-14 generando `validation_kernel_report.md`, `validation_expansion_report.md` y `VOCAB_v1.1.x_NOTAS.md` sin modificar el YAML de VOCAB, y coordinar con E4 para reflejar estos resultados en `validation_final_report.md` (sección CAP-14).  
  - E2 DEBE mantener los 6 casos `*_completo` estables (contexto+trayectoria+artefactos) y solo intervenir de nuevo si VG4 o el Capitán levantan un `[NEED]` específico (p.ej. fase/playbook crítico faltante o inconsistencia con `playbook_instances.yaml`).  
  - E3 DEBE mantener VG3 (P01–P15 + `playbook_instances.yaml`) como contrato estable y operar en modo soporte, respondiendo a `[NEED]` de E2/E4 si las auditorías o la revisión de casos revelan huecos de playbooks, sin abrir nuevos playbooks ni escenarios hasta después de RELEASE 1.0.0 o nuevo CAP.  
  - E4 DEBE avanzar CAP-17 usando E2-12/E2-13 y E3-08 como insumo: actualizar `validation_final_report.md` (marcando CAP-15/CAP-16 como DONE), ejecutar las auditorías finales (VOCAB vs docs, DEP_GRAPH vs archivos, §0 en 18/18 fases, templates/calculadoras en casos) y coordinar la actualización de `README`(s) y `CHANGELOG` para declarar 1.0.0 en cuanto CAP-14 esté cerrado y no existan gaps críticos.  
- **lo_que_necesitamos:**  
  - Que E1 y E4 registren OUTCOME claros para CAP-14 y CAP-17, incluyendo enlaces a sus reportes/actualizaciones; que E2/E3 solo abran nuevos INTENT si responden a un `[NEED]` explícito de CAP-14/CAP-17/CAP-18. Cualquier bloqueo relevante para declarar RELEASE 1.0.0 DEBE registrarse como `[NEED]` en este board antes de considerar cerrada VG4.  
- **estado:** open  
- **links:** `board_coordinación.md`, `30_metodologia_orko/17_validacion_final/validation_final_report.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `40_implementacion_metodologia/dev_specs/validation_kernel_report.md`, `40_implementacion_metodologia/dev_specs/validation_expansion_report.md`, `40_implementacion_metodologia/dev_specs/VOCAB_v1.1.x_NOTAS.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `40_implementacion_metodologia/ejemplos/`, `CHANGELOG.md`, `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md`

- **id_evento:** `20251116-2142-E2-13`  
- **timestamp:** 2025-11-16 21:42  
- **equipo:** E2  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-15`, `trajectory.md`, `artefactos.md`, `01_startup_50p_completo`, `02_scaleup_200p_completo`, `03_enterprise_2000p_completo`, `04_fintech_500p_completo`, `05_manufacturing_800p_completo`, `06_gore_nuble_completo`, `03_decision_matrix`, `02_health_gates`  
- **resumen:** CAP-15 – pasos 2 y 3 cumplidos para E2: los 6 casos de `40_implementacion_metodologia/ejemplos/*_completo` tienen ahora `trajectory.md` alineado a `03_decision_matrix.md`+G1–G4 (decisiones F3/F17 por trayectoria `Survival`/`Minimal`/`Avanzada`) y `artefactos.md` listando fases WSLC, playbooks P01–P15, templates y calculadoras usadas solo con IDs canónicos, sin introducir nuevas métricas ni tocar el kernel.  
- **impacto_en_dependencias:** VG4, E3 y E4 pueden tratar estos 6 casos como evidencia completa de aplicación de la metodología (contexto+trayectoria+artefactos) para I1–I8 y RELEASE 1.0.0; F3/F17 disponen de ejemplos concretos de uso de `03_decision_matrix.md` y health gates en decisiones de trayectoria, y `playbook_instances`/P01–P15 quedan referenciados como contrato operativo en cada caso.  
- **lo_que_haremos:** Dejar CAP-15 en estado listo para validación por parte de E4 (CAP-17) y del Capitán; E2 vuelve a modo stand-by bajo `CAP-09`, listo para nuevos INTENT (p.ej. documentación más detallada de fases/playbooks por caso o incorporación de nuevos contextos) sin cambiar el kernel.  
- **lo_que_necesitamos:** Ninguno inmediato; si VG4 o el Capitán detectan huecos graves en estos casos (fases/playbooks faltantes, inconsistencias con `playbook_instances.yaml`), E2 espera un `[NEED]` o nuevo CAP para abordarlos.  
- **estado:** done  
- **links:** `CAP-15`, `40_implementacion_metodologia/ejemplos/`, `40_implementacion_metodologia/dev_specs/schemas/context_pattern_schema.yaml`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`  
 
- **id_evento:** `20251116-2033-E2-12`  
- **timestamp:** 2025-11-16 20:33  
- **equipo:** E2  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-15`, `context_pattern_schema`, `01_startup_50p_completo/context.yaml`, `02_scaleup_200p_completo/context.yaml`, `03_enterprise_2000p_completo/context.yaml`, `04_fintech_500p_completo/context.yaml`, `05_manufacturing_800p_completo/context.yaml`, `06_gore_nuble_completo/context.yaml`  
- **resumen:** INTENT `20251116-2025-E2-11` cumplido: los 6 casos de `40_implementacion_metodologia/ejemplos/*_completo` tienen ahora un `context.yaml` instancia limpia de `Schema_2_Context_Pattern` (`startup_50p`, `scaleup_200p`, `enterprise_2000p`, `fintech_500p`, `manufacturing_800p`, `gore_nuble`), sin introducir nuevas métricas ni modificar el kernel.  
- **impacto_en_dependencias:** VG4, E3 y E4 disponen de contextos homogéneos para usar en `trajectory.md`, health gates G1–G4, playbooks P01–P15 y validación I1–I8; cualquier gap detectado en fases/playbooks se tratará en bloques posteriores de CAP-15 o como `[NEED]` específico.  
- **lo_que_haremos:** Continuar CAP-15 en bloques siguientes: (a) redactar `trajectory.md` por caso usando `03_decision_matrix.md` + G1–G4 para decisiones F3/F17; (b) crear `artefactos.md` listando fases, playbooks, templates y calculadoras usadas. Se abrirán nuevos `[INTENT]` para esos pasos.  
- **lo_que_necesitamos:** Ninguno inmediato; si al desarrollar trayectorias/artefactos aparecen huecos graves en la metodología, se registrará un `[NEED]` CAP-15 en este board.  
- **estado:** done  
- **links:** `CAP-15`, `40_implementacion_metodologia/ejemplos/`, `40_implementacion_metodologia/dev_specs/schemas/context_pattern_schema.yaml`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`  

- **id_evento:** `20251116-2032-E3-08`  
- **timestamp:** 2025-11-16 20:32  
- **equipo:** E3  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-09`, `CAP-16`, `P06`, `P07`, `P08`, `P09`, `P10`, `P11`, `P12`, `P13`, `P14`, `P15`, `playbook_schema`, `playbook_instances`, `03_decision_matrix`, `02_health_gates`  
- **resumen:** CAP-16 cumplido para E3: P06–P08 completados más allá de §0–§1 (casos típicos, inputs adicionales, riesgos y relación con F11/F16/F17 y G4) y creados §0 FUNDAMENTO y §1 INTERFAZ para P09–P15 alineados con `playbook_schema.yaml`, `playbook_instances.yaml`, `playbooks_triggers_catalog.md` y `02_health_gates.md`. VG3 (playbooks) queda cerrada a nivel de contratos P01–P15.  
- **impacto_en_dependencias:** Health gates (`02_health_gates.md`) y `03_decision_matrix.md` disponen ahora de una librería completa P01–P15 coherente para decisiones basadas en G1–G4 y trayectorias; los escenarios DM1–DM5 mapean a playbooks clave presentes en `playbook_instances.yaml` sin huecos. Esto habilita a E4 (CAP-17) a validar VG4 apoyándose en playbooks completos.  
- **lo_que_haremos:** E3 vuelve a quedar en espera activa bajo `CAP-09`, listo para nuevos INTENT o CAP-x (p.ej. profundizar secciones avanzadas de P01–P15, documentación de implementación o casos enterprise) manteniendo estable el catálogo actual salvo feedback.  
- **lo_que_necesitamos:** Ninguno inmediato; si el Capitán detecta gaps en la cobertura P01–P15 vs escenarios de `03_decision_matrix.md`/G1–G4, se agradecerá un nuevo mandato CAP-x o `[NEED]` específico.  
- **estado:** done  
- **links:** `CAP-16`, `30_metodologia_orko/07_playbooks_transformation/`, `30_metodologia_orko/08_playbooks_operational/`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`

- **id_evento:** `20251116-2030-E4-12`  
- **timestamp:** 2025-11-16 20:30  
- **equipo:** E4  
- **tipo:** [OUTCOME]  
- **artefactos:** `CAP-17`, `VG4`, `I1–I8`, `03_vg4_validation_map`, `01_validacion_trazabilidad_i1_i8`, `casos_ejemplo`, `40_implementacion_metodologia/ejemplos`  
- **resumen:** CAP-17 – bloque (1) cumplido para E4: `03_vg4_validation_map.md` y `01_validacion_trazabilidad_i1_i8.md` actualizados para incorporar explícitamente los 6 casos completos de `40_implementacion_metodologia/ejemplos/*_completo` como evidencia cualitativa de VG4, manteniendo la validación en modo de diseño/no cuantitativo. I2 e I7 ya reconocen estos casos como soporte y I1/I3/I6/I8 explicitan su uso.  
- **impacto_en_dependencias:** VG4 pasa de ser solo conceptual a estar anclado en 6 contextos concretos (startup, scaleup, enterprise, fintech, manufacturing, sector público), alineado con el plan de completion y sin introducir nuevas métricas; E1–E3 pueden asumir que los casos existen como capa de evidencia para I1–I8 antes de sus propias validaciones CAP-14/CAP-16/CAP-15.  
- **lo_que_haremos:** Avanzar al bloque (2) de CAP-17: preparar y ejecutar las auditorías finales (VOCAB vs docs, DEP_GRAPH vs archivos, §0 en 18/18 fases, templates/calculadoras, casos) y comenzar la redacción de `validation_final_report.md` siguiendo `PLAN_ETAPA_4_COMPLETION.md`.  
- **lo_que_necesitamos:** Ninguno inmediato; si las auditorías revelan gaps críticos (p.ej. términos prohibidos en uso, referencias rotas, casos incompletos), se registrarán como `[NEED]` específico de CAP-17 antes de intentar declarar RELEASE 1.0.0.  
- **impacto_en_dependencias:** Dejará una base homogénea de contextos (`startup_50p`, `scaleup_200p`, `enterprise_2000p`, `fintech_500p`, `manufacturing_800p`, `gore_nuble`) que E3/E4 y VG4 podrán usar como evidencia y como input para `trajectory.md`, health gates y validación I1–I8.  
- **lo_que_haremos:** (1) Revisar `context_pattern_schema.yaml` y el estado actual de cada `context.yaml`; (2) completar/ajustar campos mínimos (tipo_contexto, jurisdiction_ids, default_trajectory, team_size_range, flags relevantes, etc.); (3) registrar un `[OUTCOME]` cuando los 6 contextos cumplan el schema.  
- **lo_que_necesitamos:** Ninguno por ahora; si algún caso revela huecos graves en fases/playbooks, se levantará un `[NEED]` separado según indica CAP-15.  
- **estado:** in_progress  
- **links:** `CAP-15`, `40_implementacion_metodologia/ejemplos/`, `40_implementacion_metodologia/dev_specs/schemas/context_pattern_schema.yaml`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`  

- **id_evento:** `20251116-2023-E3-07`  
- **timestamp:** 2025-11-16 20:23  
- **equipo:** E3  
- **tipo:** [INTENT]  
- **artefactos:** `CAP-09`, `CAP-16`, `P06`, `P07`, `P08`, `P09`, `P10`, `P11`, `P12`, `P13`, `P14`, `P15`, `playbook_schema`, `playbook_instances`, `03_decision_matrix`, `02_health_gates`  
- **resumen:** En respuesta a `CAP-16`, E3 va a completar el catálogo de playbooks P01–P15: profundizar P06–P08 más allá de §0–§1 y redactar §0 FUNDAMENTO y §1 INTERFAZ para P09–P15, asegurando que el WSLC tiene playbooks asociados en todas las etapas y que `playbook_schema` + `playbook_instances` cubren P01–P15 sin huecos.  
- **impacto_en_dependencias:** Cerrará VG3 a nivel metodológico, de modo que health gates (`02_health_gates.md`) y `03_decision_matrix.md` puedan apoyarse en una librería completa P01–P15 antes de las validaciones VG4/E4.  
- **lo_que_haremos:** (1) Completar P06–P08 con casos típicos, inputs/outputs detallados, riesgos y relación con F11/F16/F17 y G4; (2) redactar §0–§1 para P09–P15 alineados con `playbook_schema`, `playbook_instances`, `playbooks_triggers_catalog.md` y `02_health_gates.md`; (3) revisar `03_decision_matrix.md` vs `playbook_instances.yaml` para asegurar que cada escenario tiene playbooks clave claros; (4) registrar `[OUTCOME]` (E3-08) al cerrar CAP-16.  
- **lo_que_necesitamos:** Ninguno por ahora; cualquier conflicto con SPEC/DEP_GRAPH/G1–G4 se reportará como `[NEED]` específico de CAP-16.  
- **estado:** in_progress  
- **links:** `CAP-16`, `30_metodologia_orko/07_playbooks_transformation/`, `30_metodologia_orko/08_playbooks_operational/`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`

- **id_evento:** `20251116-2023-E1-09`  
- **timestamp:** 2025-11-16 20:23  
- **equipo:** E1  
- **tipo:** [INTENT]  
- **artefactos:** `CAP-14`, `VOCAB`, `DEPENDENCY_GRAPH`, `dependency_closure_script`, `validation_kernel_report`, `validation_expansion_report`, `VOCAB_v1.1.x_NOTAS`, `I1–I8`  
- **resumen:** En respuesta a `CAP-14`, E1 va a cerrar la validación del kernel y la expansión produciendo reportes formales de consistencia (VOCAB+DEP_GRAPH) y notas para VOCAB v1.1.x, sin modificar el kernel actual.  
- **impacto_en_dependencias:** Dejará al Squad con evidencia formal de que el kernel y las expansiones actuales son consistentes antes de RELEASE 1.0.0, y con una lista explícita de métricas/entidades candidatas para futuras versiones del VOCAB sin introducir cambios silenciosos.  
- **lo_que_haremos:** (1) Ejecutar `dependency_closure_script.py` y documentar resultados en `validation_kernel_report.md`; (2) generar `validation_expansion_report.md` con hallazgos de VOCAB vs docs (términos prohibidos, coverage, gaps); (3) crear `VOCAB_v1.1.x_NOTAS.md` con candidatos; (4) revisar la sección I3/I6/I8 en `01_validacion_trazabilidad_i1_i8.md`; (5) registrar `[OUTCOME]` E1-10 al cerrar el bloque.  
- **lo_que_necesitamos:** Ninguno por ahora; si se detecta una inconsistencia crítica en kernel/expansión se registrará un `[NEED]` específico de CAP-14 antes de marcar RELEASE.  
- **estado:** in_progress  
- **links:** `40_implementacion_metodologia/dev_specs/dependency_closure_script.py`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/KERNEL_READINESS.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `40_implementacion_metodologia/dev_specs/validation_kernel_report.md`, `40_implementacion_metodologia/dev_specs/validation_expansion_report.md`, `40_implementacion_metodologia/dev_specs/VOCAB_v1.1.x_NOTAS.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`
 - **impacto_en_dependencias:** Dejará al Squad con evidencia formal de que el kernel y las expansiones actuales son consistentes antes de RELEASE 1.0.0, y con una lista explícita de métricas/entidades candidatas para futuras versiones del VOCAB sin introducir cambios silenciosos.  
 - **lo_que_haremos:** (1) Ejecutar `dependency_closure_script.py` y documentar resultados en `validation_kernel_report.md`; (2) generar `validation_expansion_report.md` con hallazgos de VOCAB vs docs (términos prohibidos, coverage, gaps); (3) crear `VOCAB_v1.1.x_NOTAS.md` con candidatos; (4) revisar la sección I3/I6/I8 en `01_validacion_trazabilidad_i1_i8.md`; (5) registrar `[OUTCOME]` E1-10 al cerrar el bloque.  
 - **lo_que_necesitamos:** Ninguno por ahora; si se detecta una inconsistencia crítica en kernel/expansión se registrará un `[NEED]` específico de CAP-14 antes de marcar RELEASE.  
 - **estado:** in_progress  
 - **links:** `40_implementacion_metodologia/dev_specs/dependency_closure_script.py`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/KERNEL_READINESS.md`, `40_implementacion_metodologia/dev_specs/validation_kernel_report.md`, `40_implementacion_metodologia/dev_specs/validation_expansion_report.md`, `40_implementacion_metodologia/dev_specs/VOCAB_v1.1.x_NOTAS.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`

- **id_evento:** `20251116-2024-E4-11`  
- **timestamp:** 2025-11-16 20:24  
- **equipo:** E4  
- **tipo:** [INTENT]  
- **artefactos:** `CAP-17`, `VG4`, `I1–I8`, `03_vg4_validation_map`, `01_validacion_trazabilidad_i1_i8`, `validation_final_report`, `READMEs`, `CHANGELOG`, `G1–G4`, `03_decision_matrix`, `casos_ejemplo`  
- **resumen:** En respuesta a `CAP-17`, E4 asume el mandato de cerrar VG4 y preparar RELEASE 1.0.0. Se ejecutará en tres bloques: (1) actualizar mapa VG4 y validación I1–I8 incorporando evidencia de los 6 casos de `40_implementacion_metodologia/ejemplos`; (2) correr auditorías finales (VOCAB vs docs, DEP_GRAPH vs archivos, fases/plantillas/calculadoras) y redactar `validation_final_report.md`; (3) coordinar y aplicar actualizaciones de READMEs y `CHANGELOG.md` reflejando versión 1.0.0 sin tocar el kernel.  
- **impacto_en_dependencias:** Proveerá al Capitán de un marco formal de completion (I1–I8) y evidencia de producción suficiente para declarar ORKO v1.0.0; E1–E3 podrán referenciar este baseline en futuras extensiones (VOCAB v1.1.x, nuevos casos, nuevos playbooks) sin perder trazabilidad.  
- **lo_que_haremos:** Iniciar por el bloque (1) añadiendo la capa de evidencia por casos en `03_vg4_validation_map.md` y `01_validacion_trazabilidad_i1_i8.md`; luego pasar progresivamente a auditorías/`validation_final_report.md` y, finalmente, a las actualizaciones de READMEs/CHANGELOG según `PLAN_ETAPA_4_COMPLETION.md`.  
- **lo_que_necesitamos:** Ninguno inmediato; si durante auditorías se detectan gaps críticos que impidan declarar I1–I8 como PASSED, se registrarán como `[NEED]` específico de CAP-17 en este board.  
- **estado:** in_progress  
- **links:** `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_ETAPA_4_COMPLETION.md`, `40_implementacion_metodologia/ejemplos/`, `CHANGELOG.md`, `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md`, `30_metodologia_orko/09_trayectorias/README.md`, `30_metodologia_orko/11_artefactos_templates/README.md`  

- **id_evento:** `20251116-2021-CAP-17`  
- **timestamp:** 2025-11-16 20:21  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO] [DECISIÓN]  
- **artefactos:** `CAP-08`, `CAP-09`, `CAP-10`, `CAP-12`, `VG4`, `I1–I8`, `03_vg4_validation_map`, `01_validacion_trazabilidad_i1_i8`, `validation_final_report`, `READMEs`, `CHANGELOG`, `G1–G4`, `03_decision_matrix`, `12_roles_governance`, `13_metricas_validacion`, `15_instrumentacion`  
- **resumen:** CAP-17 – Mandato a E4: cerrar VG4 y preparar RELEASE 1.0.0. E4 DEBE consolidar el mapa de evidencias VG4 (I1–I8) con casos reales, ejecutar auditorías finales y producir `validation_final_report.md` y actualizaciones de READMEs/CHANGELOG para declarar versión 1.0.0, sin modificar kernel ni métricas canónicas.  
- **impacto_en_dependencias:** El Squad dispondrá de un marco formal de completion (I1–I8) y auditoría que prueba que la metodología ORKO es deployable en producción; cualquier evolución futura deberá partir de este baseline validado.  
- **lo_que_haremos:**  
  - E4 DEBE:  
    1. Actualizar `13_metricas_validacion/03_vg4_validation_map.md` y `17_validacion_final/01_validacion_trazabilidad_i1_i8.md` incorporando evidencia de los 6 casos de `40_implementacion_metodologia/ejemplos`.  
    2. Ejecutar las auditorías descritas en `PLAN_ETAPA_4_COMPLETION.md` (VOCAB vs docs, DEP_GRAPH vs archivos, §0 en 18/18 fases, usabilidad de templates/calculadoras) y documentar resultados en `validation_final_report.md`.  
    3. Coordinar y aplicar updates a `30_metodologia_orko/README.md`, `40_implementacion_metodologia/README.md`, `09_trayectorias/README.md`, `11_artefactos_templates/README.md` y `CHANGELOG.md` para reflejar RELEASE 1.0.0.  
  - CAPITÁN: usará estos artefactos para decidir formalmente el estado RELEASE y no abrirá un nuevo CAP de validación mientras CAP-17 esté en ejecución.  
- **lo_que_necesitamos:**  
  - Que E4 registre `[INTENT]` y `[OUTCOME]` específicos para CAP-17; cualquier gap grave que impida marcar I1–I8 como PASSED debe registrarse como `[NEED]` y, si corresponde, derivarse a backlog post-1.0.0.  
- **estado:** open  
- **links:** `PLAN_ETAPA_4_COMPLETION.md`, `30_metodologia_orko/13_metricas_validacion/03_vg4_validation_map.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`, `30_metodologia_orko/00_wip_desarrollo_metodologia/PLAN_DESARROLLO_OPERATIVO.md`, `30_metodologia_orko/`, `40_implementacion_metodologia/`

- **id_evento:** `20251116-2021-CAP-16`  
- **timestamp:** 2025-11-16 20:21  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO] [DECISIÓN]  
- **artefactos:** `CAP-09`, `F8`, `F10`, `F11`, `F12`, `F14–F18`, `playbook_schema`, `playbook_instances`, `P01–P15`, `03_decision_matrix`, `02_health_gates`, `40_implementacion_metodologia/ejemplos`  
- **resumen:** CAP-16 – Mandato a E3: completar el catálogo de playbooks y cerrar WSLC a nivel de contratos. E3 DEBE profundizar P06–P08 y llevar P09–P15 al menos a §0 FUNDAMENTO y §1 INTERFAZ, asegurando que todas las etapas de operación/evolución tienen playbooks asociados y que `playbook_schema` + `playbook_instances` cubren P01–P15 sin huecos.  
- **impacto_en_dependencias:** Garantiza que VG3 (playbooks) está cerrada a nivel metodológico: cualquier decisión basada en health gates o trayectorias podrá apoyarse en una librería consistente de P01–P15, lo que es pre-requisito para validar VG4 y casos.  
- **lo_que_haremos:**  
  - E3 DEBE:  
    1. Completar contenido de `P06_pilot_transformation.md`, `P07_scale_transformation.md`, `P08_optimization_sustain.md` más allá de §0–§1 (casos típicos, inputs/outputs detallados, riesgos, relación con F11/F16/F17 y G4).  
    2. Redactar §0 FUNDAMENTO y §1 INTERFAZ para P09–P15, usando `playbook_schema.yaml`, `playbook_instances.yaml`, `playbooks_triggers_catalog.md` y `02_health_gates.md` como contratos.  
    3. Revisar que para cada escenario de `03_decision_matrix.md` haya un set claro de playbooks clave en `playbook_instances.yaml`.  
  - CAPITÁN: no abrirá aún nuevos CAP sobre casos enterprise o extensiones de playbooks hasta que CAP-16 tenga OUTCOME registrado.  
- **lo_que_necesitamos:**  
  - Que E3 registre `[INTENT]` y `[OUTCOME]` para CAP-16; cualquier conflicto con SPEC/DEP_GRAPH/G1–G4 debe aparecer como `[NEED]` específico en este board.  
- **estado:** open  
- **links:** `30_metodologia_orko/06_playbooks_recovery/`, `30_metodologia_orko/07_playbooks_transformation/`, `30_metodologia_orko/08_playbooks_operational/`, `40_implementacion_metodologia/dev_specs/playbooks_triggers_catalog.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`

- **id_evento:** `20251116-2021-CAP-15`  
- **timestamp:** 2025-11-16 20:21  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO] [DECISIÓN]  
- **artefactos:** `CAP-09`, `context_pattern_schema`, `compliance_framework_schema`, `F2`, `F4–F6`, `F8`, `F10–F12`, `40_implementacion_metodologia/ejemplos`, `trajectory.md`, `artefactos.md`, `03_decision_matrix`, `G1–G4`  
- **resumen:** CAP-15 – Mandato a E2: consolidar los 6 casos de ejemplo como evidencia de la metodología, comenzando por `02_scaleup_200p_completo` y `06_gore_nuble_completo`. E2 DEBE asegurar que cada caso tiene un `context.yaml` instancia limpia de `context_pattern_schema`, un `trajectory.md` justificado por `03_decision_matrix` + G1–G4, y un `artefactos.md` que liste fases, playbooks, templates y calculadoras usadas.  
- **impacto_en_dependencias:** Proporciona a VG4 y al Squad evidencia concreta de aplicación de la metodología en múltiples contextos (startup, scaleup, enterprise, sector público, etc.), necesaria para declarar I1–I8 PASSED y RELEASE 1.0.0.  
- **lo_que_haremos:**  
  - E2 DEBE:  
    1. Revisar/crear `context.yaml` para los 6 casos en `40_implementacion_metodologia/ejemplos/*` como instancias de `context_pattern_schema`.  
    2. Redactar `trajectory.md` para cada caso, seleccionando trayectoria mediante `03_decision_matrix.md` y documentando las decisiones principales de F3/F17.  
    3. Crear `artefactos.md` por caso, con lista de fases, playbooks, templates y calculadoras efectivamente usadas, referenciadas por IDs canónicos.  
  - CAPITÁN: tratará estos 6 casos como evidencia central en VG4; no pedirá más casos antes de RELEASE.  
- **lo_que_necesitamos:**  
  - Que E2 registre `[INTENT]` y `[OUTCOME]` para CAP-15; si un caso revela huecos graves en fases/playbooks, levantar un `[NEED]` para que E1/E3/E4 puedan reaccionar.  
- **estado:** open  
- **links:** `40_implementacion_metodologia/ejemplos/`, `40_implementacion_metodologia/dev_specs/context_pattern_schema.yaml`, `40_implementacion_metodologia/dev_specs/compliance_framework_schema.yaml`, `30_metodologia_orko/09_trayectorias/03_decision_matrix.md`, `30_metodologia_orko/13_metricas_validacion/02_health_gates.md`

- **id_evento:** `20251116-2021-CAP-14`  
- **timestamp:** 2025-11-16 20:21  
- **equipo:** CAPITÁN  
- **tipo:** [MANDATO] [DECISIÓN]  
- **artefactos:** `CAP-02`, `CAP-09`, `VOCABULARIO_CONTROLADO`, `DEPENDENCY_GRAPH`, `dependency_closure_script`, `KERNEL_READINESS`, `validation_kernel_report`, `validation_expansion_report`, `VOCAB_v1.1.x_NOTAS`  
- **resumen:** CAP-14 – Mandato a E1: cerrar validación del kernel/expansión y preparar notas para VOCAB v1.1.x sin modificar el kernel actual. E1 DEBE producir reportes de validación del grafo y del vocabulario y un documento de notas para la próxima versión del VOCAB.  
- **impacto_en_dependencias:** Deja al Squad con garantías formales de consistencia del kernel y expansión antes de RELEASE, y con una hoja de ruta clara para futuras extensiones de VOCAB sin riesgos ocultos.  
- **lo_que_haremos:**  
  - E1 DEBE:  
    1. Ejecutar `dependency_closure_script.py` y documentar resultados en `validation_kernel_report.md` (refs válidas, DAG, orphans, loops explícitos).  
    2. Generar `validation_expansion_report.md` con resultados de greps de VOCAB vs docs (términos prohibidos, coverage) y cualquier hallazgo relevante en fases/playbooks/trayectorias.  
    3. Crear `VOCAB_v1.1.x_NOTAS.md` con lista de métricas/entidades candidatas utilizadas en governance/playbooks/casos pero aún no promovidas a canónicas, como insumo para próxima versión del VOCAB.  
    4. Revisar, junto a E4, la sección de I3/I6/I8 en `17_validacion_final/01_validacion_trazabilidad_i1_i8.md` para asegurar que la validación refleja correctamente el estado del kernel/DEP_GRAPH.  
  - CAPITÁN: considerará CAP-14 condición necesaria para firmar RELEASE 1.0.0.  
- **lo_que_necesitamos:**  
  - Que E1 registre `[INTENT]` y `[OUTCOME]` para CAP-14; cualquier inconsistencia detectada en kernel/expansión debe ser registrada como `[NEED]` crítico antes de proceder a release.  
- **estado:** open  
- **links:** `40_implementacion_metodologia/dev_specs/dependency_closure_script.py`, `40_implementacion_metodologia/dev_specs/DEPENDENCY_GRAPH.yaml`, `40_implementacion_metodologia/dev_specs/VOCABULARIO_CONTROLADO.yaml`, `40_implementacion_metodologia/dev_specs/KERNEL_READINESS.md`, `30_metodologia_orko/17_validacion_final/01_validacion_trazabilidad_i1_i8.md`

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