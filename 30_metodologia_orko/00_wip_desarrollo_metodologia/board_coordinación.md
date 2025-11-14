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