# 05_fases_evolution – Bloque Evolution (F16–F18)

Este directorio agrupa las fases de **Evolution** del WSLC ORKO. Su función es cerrar loops de aprendizaje, adaptar trayectorias y verificar convergencia del sistema de trabajo a lo largo del tiempo.

---

## §0 Propósito del bloque

- Capturar **aprendizajes estructurados** sobre el efecto de decisiones y playbooks en las métricas canónicas (F16).
- Traducir esos aprendizajes en decisiones de **adaptación de trayectoria y diseño** (F17).
- Verificar periódicamente la **convergencia** del sistema hacia estados aceptables de salud y desempeño (F18).

En ORKO v1.0.0, este bloque es clave para los invariantes I3 (trazabilidad), I6 (trajectory awareness) e I8 (consistencia temporal), pero sus fichas de fase están parcialmente definidas; por eso F16–F18 se clasifican como `CONDITIONAL` en `validation_final_report.md` §2.3.

---

## §1 Fases incluidas

> Nota: las descripciones siguientes son de alto nivel y no constituyen contratos formales adicionales; el contrato sigue siendo el kernel (VOCAB + DEP_GRAPH) y lo ya descrito en SPEC/health gates. Cualquier formalización adicional de §0/§1 para F16–F18 deberá hacerse en CAP futuros post‑1.0.0.

### F16 – Learning Loops

- Fase encargada de **cerrar loops de aprendizaje** entre:
  - Resultados medidos por F13 (`H_org`, `eta_org`, `ROI_Habilitacion`).
  - Decisiones de trayectoria (F3, `09_trayectorias/03_decision_matrix.md`).
  - Outputs de playbooks de transformación P05–P08 y recovery P01–P04.
  - Decisiones de governance (`01_team_structure_raci.md`).
- Según `F16_learning_loops.md`, refuerza especialmente:
  - `I3` – Trazabilidad (cambios en métricas rastreables a playbooks/decisiones).
  - `I6` – Trajectory-awareness (aprendizajes que informan cambios de trayectoria).
  - `I8` – Consistencia temporal (ventanas de tiempo alineadas con health gates G1–G4).
- Produce artefactos conceptuales como:
  - `learning_loops_log` (registro de hipótesis/experimentos/resultados).
  - `playbook_improvement_backlog`.
  - Recomendaciones de ajuste de trayectoria.

### F17 – Adaptation

- Fase que toma los insumos de F13, F16 y los health gates G1–G4 para **decidir ajustes** en:
  - Trayectoria (`Survival`/`Minimal`/`Avanzada`).
  - Intensidad y combinación de playbooks.
  - Priorización de cambios en capacidades, flujos, información o límites.
- Se conecta directamente con F3 (Trajectory Selection) para documentar cambios de trayectoria y con F10–F12 para ajustar planes de quick wins, deployment y transición.
- En ORKO v1.0.0 su rol está descrito a nivel de arquitectura y en `validation_final_report.md` (§2.5, §3), pero la ficha F17 carece aún de `§0 FUNDAMENTO` formal, por lo que se mantiene en estado `CONDITIONAL`.

### F18 – Convergence Check

- Fase que realiza **chequeos periódicos de convergencia** del sistema de trabajo:
  - Compara el estado observado (F13/F16/F17) con los estados objetivo definidos en F9/F12.
  - Evalúa si las trayectorias y playbooks actuales están acercando o alejando al sistema de sus metas.
- Provee insumos para decisiones de governance sobre:
  - Mantener la trayectoria y el set de playbooks.
  - Cambiar la estrategia (por ejemplo, volver a `Minimal` desde `Avanzada` en escenarios de stress prolongado).
- En v1.0.0 su definición es principalmente conceptual; la formalización de interfaces, artefactos y cadencias queda como backlog post‑1.0.0.

---

## §2 Relación con health gates, trayectorias, playbooks y casos

- **Health gates (G1–G4):**
  - F16 consume el estado de G1–G4 y los snapshots de métricas de F13 para evaluar la efectividad de playbooks.
  - F17/F18 usan cambios en G1–G4 como señales clave para decidir ajustes de trayectoria y evaluar convergencia.

- **Playbooks P01–P08:**
  - F16 está explícitamente conectado con P05–P08 (transformación) y P01–P04 (recovery), registrando resultados y mejoras potenciales.
  - F17 utiliza las recomendaciones de F16 para decidir qué playbooks activar o ajustar en función de G1–G4 y de la decisión de trayectoria.

- **Trayectorias:**
  - F16 y F17 operan sobre trayectorias `Survival`/`Minimal`/`Avanzada` tal como se definen en `09_trayectorias` y `03_decision_matrix.md`.
  - F18 verifica si, a lo largo del tiempo, el sistema converge hacia estados saludables dentro de la trayectoria elegida o si se requiere un cambio de trayectoria.

- **Casos de ejemplo:**
  - En los 6 casos de `40_implementacion_metodologia/ejemplos`, la lógica de evolución se refleja en cómo se usan health gates y playbooks a lo largo del tiempo (especialmente en las secciones de `trajectory.md` que describen decisiones F17 y en los artefactos ligados a aprendizaje/ajuste).
  - CAP-17 usa estos casos como evidencia cualitativa de que el bloque Evolution está razonablemente representado, aunque sus fichas no estén completamente formalizadas.

---

## §3 Estado en ORKO v1.0.0

- Según `validation_final_report.md` (§2.3), las fases F16, F17 y F18 se encuentran en estado **`CONDITIONAL`** debido a la ausencia o incompletitud de `§0 FUNDAMENTO` en sus archivos.
- A pesar de esto, el diseño del bloque Evolution es fundamental para VG4 y ya se utiliza conceptualmente en casos y en la síntesis de invariantes I1–I8.
- CAP-20 se limita a documentar de forma descriptiva el rol de F16–F18 y su relación con el resto del WSLC, sin modificar kernel, VOCAB, DEP_GRAPH ni contratos de playbooks/trayectorias/health gates; la formalización adicional queda como backlog post‑1.0.0.
- `30_metodologia_orko/17_validacion_final/validation_final_report.md` (§3, backlog de evolución post‑1.0.0).

---

### §1 Fases incluidas

#### F16 – Learning Loops

- Sistematiza **learning loops** a partir de datos de operación (F13–F15), incidentes (F14) y resultados de cambios (F10–F12).
- Consume artefactos como retros, registros de incidentes, métricas de H_org y resultados de playbooks.
- Produce recomendaciones y propuestas de cambio que pueden afectar trayectorias, diseño de capacidades/flujo/información y uso de playbooks.

#### F17 – Adaptation

- Toma las evidencias de F16 y decide **adaptaciones controladas** a trayectorias (`Survival`/`Minimal`/`Avanzada`), al uso de playbooks y, eventualmente, a partes del diseño.
- Es la fase donde se aplican cambios de trayectoria documentados en `09_trayectorias/` y en `03_decision_matrix.md`.
- Se coordina con F3 y F9 para mantener coherencia entre visión, contexto y estado objetivo.

#### F18 – Convergence Check

- Evalúa si, tras varios ciclos de cambios, el sistema está **convergiendo** hacia estados aceptables de salud, eficiencia y alineamiento con propósito.
- Usa snapshots de estado (E6), métricas canónicas y evidencias de casos para decidir si:
  - Se mantiene la trayectoria y se siguen ajustes incrementales.
  - Se requiere un cambio más profundo (por ejemplo, redefinir contexto o reabrir fases tempranas).
- Alimenta el backlog y las decisiones de futuros CAP para evolución de ORKO.

---

### §2 Relación con trayectorias, health gates y VG4

- **Trayectorias:** F16–F18 son responsables de revisar si la trayectoria actual sigue siendo adecuada y, si no, proponer cambios fundamentados.
- **Health gates:** usan la información de G1–G4 (definidos en `02_health_gates.md`) no solo para reaccionar, sino para aprender qué patrones llevan a estados sanos o críticos.
- **VG4:** la evidencia de cómo se usan estos bucles en los casos de `40_implementacion_metodologia/ejemplos/*_completo/` contribuye a la evaluación de invariantes como I6 (trajectory awareness) e I7/I8 (emergencia y consistencia temporal).

---

### §3 Estado en ORKO v1.0.0

- En ORKO v1.0.0, el bloque Evolution está definido principalmente a nivel de **diseño conceptual** y de dependencias en DEP_GRAPH; parte de su instrumentación detallada se considera aún incipiente.
- `validation_final_report.md` y `VOCAB_v1.1.x_NOTAS.md` tratan la evolución de métricas, contratos y procesos como backlog controlado post‑1.0.0.
- Este README deja claro el rol del bloque sin introducir cambios en el kernel ni en los contratos existentes; cualquier modificación futura deberá entrar vía nuevos CAP.

