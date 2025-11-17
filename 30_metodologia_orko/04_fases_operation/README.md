## 04_fases_operation – Bloque Operation (F13–F15)

Este directorio agrupa las fases de **Operation** del WSLC ORKO. Su función es operar el sistema de trabajo diseñado en Development (F4–F9) e implementado en Implementation (F10–F12), monitoreando la salud organizacional, respondiendo a incidentes y manteniendo la ejecución continua.

---

### §0 Propósito del bloque

- Mantener una **visión en tiempo casi real** del estado del sistema (`H_org`, `eta_org`, señales de riesgo) y de la ejecución de cambios.
- Coordinar la **respuesta a incidentes** que comprometen la estabilidad del sistema de trabajo (operacional, seguridad, cumplimiento, confianza).
- Asegurar que la ejecución diaria se mantiene **alineada** con el diseño objetivo (F9) y con las limitaciones de contexto (F1/F3/F8), sirviendo de puente hacia las fases de Evolution (F16–F18).

Este bloque se apoya en los contratos formales descritos en:

- `VOCABULARIO_CONTROLADO.yaml` (fase_id F13–F15, métricas canónicas, entidades como `H_org`).
- `DEPENDENCY_GRAPH.yaml` (relaciones `reads_from`/`writes_to` entre Operation, Development, Implementation y Evolution).
- `30_metodologia_orko/13_metricas_validacion/02_health_gates.md` (definición de G1–G4 y uso de métricas canónicas).

---

### §1 Fases incluidas

#### F13 – Health Monitoring

- Monitorea la **salud organizacional** (H_org y métricas relacionadas) y el desempeño del sistema de trabajo.
- Consume artefactos generados en F1/F4–F12 (contexto, capacidades, flujos, información, quick wins, despliegue de tejidos, planes de transición) y produce dashboards y señales de gates.
- Es la fase principal donde se evalúan y disparan los health gates G1–G4 descritos en `02_health_gates.md`.

#### F14 – Incident Response

- Coordina la **respuesta a incidentes** relevantes para el sistema ORKO: fallas operacionales críticas, incidentes de seguridad, desviaciones graves de diseño, incumplimientos regulatorios, etc.
- Utiliza playbooks de la familia Recovery/Operational (P01–P04, P10–P15) definidos en `06_playbooks_recovery/` y `08_playbooks_operational/`.
- Asegura que los incidentes quedan documentados y que se cierran bucles hacia F16/F17 (aprendizajes y ajustes de trayectoria).

#### F15 – Continuous Execution

- Se encarga de la **ejecución continua** del sistema de trabajo bajo los límites, capacidades y flujos diseñados.
- Orquesta el uso rutinario de playbooks, templates y calculadoras para mantener la operación dentro de las bandas definidas por los health gates.
- Provee insumos a F16/F17 sobre cómo se están usando los artefactos y qué fricciones o patrones emergen en la práctica.

---

### §2 Relación con trayectorias, health gates y casos

- **Trayectorias (`Survival`/`Minimal`/`Avanzada`):**
  - F13–F15 operan bajo la trayectoria elegida en F3, ajustando la agresividad de cambios y la tolerancia al riesgo.
  - En contextos `Survival`, el foco está en estabilizar H_org y reducir riesgo antes de aplicar cambios mayores.

- **Health gates (G1–G4):**
  - F13 evalúa continuamente las condiciones de G1–G4 y dispara playbooks adecuados (Recovery/Transformation/Operational) según `02_health_gates.md`.
  - F14 y F15 ejecutan y consolidan las respuestas asociadas a esos gates.

- **Casos de ejemplo:**
  - En casos como `startup_50p`, `scaleup_200p` y `gore_nuble`, Operation se refleja en los dashboards y decisiones descritas en `artefactos.md`, donde H_org y otros indicadores condicionan la activación de playbooks y ajustes de trayectoria.

---

### §3 Estado en ORKO v1.0.0

- Según `validation_final_report.md` (§2.3), el bloque Operation está **definido como contrato de diseño/operación** a nivel de fases WSLC y alineado con VOCAB/DEP_GRAPH y health gates.
- Algunas piezas (por ejemplo, contenido detallado de dashboards o runbooks de incidentes) se consideran aún en estado **MVO** y se tratan como backlog post‑1.0.0.
- Este README solo describe el rol del bloque y sus relaciones; cualquier cambio en métricas canónicas o contratos deberá entrar por nuevos CAP posteriores a la RELEASE.

# 04_fases_operation – Bloque Operation (F13–F15)

Este directorio agrupa las fases de **Operation** del WSLC ORKO. Su función es operar el sistema de trabajo día a día, monitorear su salud, responder a incidentes y sostener la ejecución continua sobre el diseño definido en Development/Implementation.

---

## §0 Propósito del bloque

- Monitorear la **salud organizacional y del sistema de trabajo** (F13) usando métricas canónicas y señales derivadas de la operación.
- Responder de forma estructurada a **incidentes** que puedan afectar capacidades, flujos, información o límites (F14).
- Coordinar la **ejecución continua** (F15) alineando las actividades diarias con el diseño y los objetivos definidos en bloques anteriores.

En ORKO v1.0.0 el rol de este bloque está descrito a nivel conceptual en `SPEC_ARQUITECTURA_DEFINITIVA.md` y en `13_metricas_validacion/02_health_gates.md`, pero las fichas de fase (F13–F15) no tienen aún `§0 FUNDAMENTO` formalizado; por eso se clasifican como `CONDITIONAL` en `validation_final_report.md` §2.3.

---

## §1 Fases incluidas

> Nota: las descripciones siguientes son de alto nivel y no constituyen contratos formales; el contrato sigue siendo el kernel (VOCAB + DEP_GRAPH) más lo ya definido en SPEC/health gates. Cualquier formalización adicional de §0/§1 para F13–F15 deberá hacerse en CAP futuros post‑1.0.0.

### F13 – Health Monitoring

- Fase encargada de **leer y consolidar señales de salud** del sistema de trabajo:
  - Métricas canónicas (H_org, eficiencia, ROI de habilitación) según `13_metricas_validacion`.
  - Señales derivadas de la ejecución de quick wins (F10), despliegue de tejidos (F11) y transición de estado (F12).
- Provee dashboards y artefactos de seguimiento que sirven como entrada para:
  - Decisiones de adaptación (F17) y chequeos de convergencia (F18).
  - Priorización de quick wins futuros o acciones de recuperación.

### F14 – Incident Response

- Fase que coordina la **respuesta a incidentes** que afecten la operación del sistema:
  - Incidentes de capacidad (ej., caídas de throughput o cuellos de botella críticos).
  - Incidentes de flujo (interrupciones, bloqueos sostenidos).
  - Incidentes de información o límites (brechas de datos, incumplimientos de restricciones relevantes).
- Se apoya en playbooks de recuperación y operación (catálogo P01–P15, especialmente P01–P02 y otros definidos en `06_playbooks_recovery/` y `08_playbooks_operational/`) sin alterar sus contratos.

### F15 – Continuous Execution

- Fase que orquesta la **ejecución continua** del trabajo, conectando:
  - El diseño de capacidades/flujo/información (F4–F6, F8, F9).
  - Los planes de quick wins, despliegue y transición (F10–F12).
  - Las señales de salud y eventos de incidentes (F13, F14).
- Su objetivo es mantener un ciclo estable de ejecución que respete trayectorias y límites, y que provea input constante a fases de evolución (F16–F18).

---

## §2 Relación con health gates, playbooks y casos

- **Health gates (G1–G4):**
  - F13 se apoya directamente en las definiciones de `02_health_gates.md` para evaluar si la organización está en bandas G1–G4.
  - Cambios de gate (por ejemplo, entrar en G1 o salir de G1 hacia G2/G3) disparan ajustes en F10–F12 y decisiones de F17/F18.

- **Playbooks P01–P15:**
  - F14 activa playbooks de recuperación y operación según el tipo de incidente, usando el catálogo P01–P15 cerrado en CAP-16/CAP-18.
  - F15 coordina la aplicación de playbooks en cadencias operativas (por ejemplo, check-ins, retros, seguimiento de planes), sin redefinir sus contratos.

- **Casos de ejemplo:**
  - En los casos `startup_50p`, `scaleup_200p` y `gore_nuble`, la lógica de operación se refleja en cómo se usan health gates y playbooks de recuperación/optimización a lo largo del tiempo (descritos en `trajectory.md` y `artefactos.md`).
  - CAP-17 usa estos casos para verificar que las decisiones de operación son coherentes con las trayectorias y con el diseño de F4–F12, aunque las fichas F13–F15 no estén aún formalizadas.

---

## §3 Estado en ORKO v1.0.0

- Según `validation_final_report.md` (§2.3), las fases F13, F14 y F15 se encuentran en estado **`CONDITIONAL`** porque sus archivos no tienen todavía `§0 FUNDAMENTO` explícito.
- A nivel de diseño, su rol es esencial para VG4 (especialmente I3, I5, I6 e I8), pero su contrato formal queda como trabajo pendiente para futuras iteraciones (CAP post‑1.0.0).
- CAP-20 se limita a documentar este bloque de forma descriptiva, sin modificar kernel, VOCAB, DEP_GRAPH ni contratos de playbooks/trayectorias/health gates.

