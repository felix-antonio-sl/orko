# F9 – Target State Design

## §0 FUNDAMENTO

```yaml
fase_id: F9
nombre_canonico: "Target State Design"
vocabulos_referencia:
  wslc_phase: "VOCABULARIO_CONTROLADO.layer_3.wslc_phases.F9"
  axiomas:
    - "VOCABULARIO_CONTROLADO.layer_0.axiomas.A1_Organizacion"
    - "VOCABULARIO_CONTROLADO.layer_0.axiomas.A4_Contexto"
  primitivos:
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P2_Flujo"
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P1_Capacidad"
    - "VOCABULARIO_CONTROLADO.layer_0.primitivos.P3_Informacion"
  invariantes:
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I4_Clasificacion_Contextual"
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I7_Coherencia"
    - "VOCABULARIO_CONTROLADO.layer_0.invariantes.I8_Adaptacion_Contextual"
  dominios:
    - "VOCABULARIO_CONTROLADO.layer_1.dominios.D1_Arquitectura"
    - "VOCABULARIO_CONTROLADO.layer_1.dominios.D4_Operacion"
  metricas_canonicas:
    - "VOCABULARIO_CONTROLADO.layer_1.metricas_canonicas.H_org"
relacion_kernel:
  depende_de:
    - "F3"
    - "F4"
    - "F5"
  prepara_a:
    - "F10"
    - "F11"
trayectorias_soportadas:
  - "Minimal"
  - "Avanzada"
estado_fundamento: "STABLE"
notas_fundamento: |
  F9 produce E6_target (target architectural state) y target patterns de TF1/TF2/TF3.
  Entregables: F9.target_state.yaml, e6_target_schema.json, target_components.drawio
  Metodología: use TEMPLATE_FASE_WSLC.md y DEPENDENCY_GRAPH para trazabilidad.
referencias_formales:
  - "SPEC_ARQUITECTURA_DEFINITIVA.§1.4.Target_State_Design"
```
