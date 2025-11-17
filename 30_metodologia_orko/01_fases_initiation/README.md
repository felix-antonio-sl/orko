# 01_fases_initiation – Initiation (F1–F3)

## Propósito del bloque

- Asegurar que antes de diseñar o ejecutar transformaciones exista:
  - una lectura explícita del contexto organizacional,
  - una definición compartida de propósito y visión,
  - una selección consciente de trayectoria (`Survival`, `Minimal`, `Avanzada`).
- Conectar el GENOME (axiomas, primitivos, invariantes y dominios) con el FENOTIPO (fases WSLC, artefactos y casos) en un contexto específico.

## Fases del bloque

- **F1_context_assessment**  
  - Levanta un perfil de contexto usando el patrón `context_pattern_schema.yaml` (`30_metodologia_orko/14_casos_uso/`).  
  - Conecta con arquitectura y tejidos (`10_arquitectura_orko/`, `20_tejidos/`) para identificar capacidades, flujos, información y límites relevantes.  
  - Produce insumos para health gates y selección de trayectoria (por ejemplo, baseline de `H_org` y principales constraints P4).

- **F2_vision_definition**  
  - Trabaja sobre el FENOTIPO deseado: propósito, visión y objetivos de transformación para el contexto levantado en F1.  
  - Proyecta axiomas y primitivos sobre el caso concreto (qué significa "buena salud organizacional" aquí).  
  - Prepara decisiones de trade-off que luego se materializan en F3/F9 (ADRs, trayectoria, quick wins).

- **F3_trajectory_selection**  
  - Toma los outputs de F1/F2 y aplica la matriz `09_trayectorias/03_decision_matrix.md` junto con los health gates (`13_metricas_validacion/02_health_gates.md`).  
  - Decide la trayectoria inicial (`Survival`, `Minimal`, `Avanzada`) y deja trazabilidad explícita hacia GENOME (I3, I6).  
  - Genera un artefacto de decisión de trayectoria; en los casos de `40_implementacion_metodologia/ejemplos/*` esto queda reflejado en `trajectory.md`.

## GENOME ↔ FENOTIPO en Initiation

- **GENOME**  
  - Vive en `00_fundamentos_teoricos/` (axiomas, primitivos, invariantes) y `10_arquitectura_orko/` (dominios, contratos, tejidos).  
- **FENOTIPO**  
  - F1–F3 son el primer punto donde ese GENOME se instancia en un contexto organizacional específico.  
  - Las decisiones tomadas aquí condicionan el resto del WSLC (F4–F18), las trayectorias y la activación de playbooks P01–P15.
