# F17 – Adaptation

## §0 FUNDAMENTO

```yaml
fase_id: F17
nombre_canonico: "Adaptation"
vocabulos_referencia:
  wslc_phase: "VOCABULARIO_CONTROLADO.layer_3.wslc_phases.F17"
  axiomas:
    - "VOCABULARIO_CONTROLADO.layer_0.axiomas.A5_Cambio"
  primitivos:
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P4_Limite"
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P5_Proposito"
  invariantes:
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I8_Adaptacion_Contextual"
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I3_Trazabilidad"
  dominios:
    - "VOCABULARIO_CONTROLADO.layer_1.dominios.D3_Decision"
    - "VOCABULARIO_CONTROLADO.layer_1.dominios.D2_Percepcion"
  metricas_canonicas:
    - "VOCABULARIO_CONTROLADO.layer_1.metricas_canonicas.H_org"
relacion_kernel:
  depende_de:
    - "F16"
    - "F13"
  prepara_a:
    - "F18"
trayectorias_soportadas:
  - "Minimal"
  - "Avanzada"
estado_fundamento: "STABLE"
notas_fundamento: |
  F17 formaliza la adaptación (policy/ADR) ante drift o shock contextual. Entregables: adaptation_policy.yaml, ADRs, decision_log.
  Integración con learning_loops (F16) y health gates (F13). Es responsable la junta de gobernanza.
referencias_formales:
  - "30_metodologia_orko/16_evolucion_metodologia/01_feedback_loops_metodologia.md"
```
