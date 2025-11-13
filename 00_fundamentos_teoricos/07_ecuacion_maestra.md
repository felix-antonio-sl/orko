# PARTE VII: ECUACIÓN MAESTRA

- [PARTE VII: ECUACIÓN MAESTRA](#parte-vii-ecuación-maestra)
  - [Ecuación maestra](#ecuación-maestra)
    - [§10. ECUACIÓN MAESTRA VALOR ORGANIZACIONAL](#10-ecuación-maestra-valor-organizacional)

## Ecuación maestra

### §10. ECUACIÓN MAESTRA VALOR ORGANIZACIONAL

```yaml
Definición_Valor_Org:

  V_org(t) = Σ_i outcome_bruto_i(t) - (Σ_i cost_producción_i(t) + Σ_j cost_habilitación_j(t))
  
  Donde:
    outcome_bruto_i(t): Valor bruto entregado flujo producción i
    cost_producción_i(t): Costos directos flujo producción i (capacidades, materiales)
    cost_habilitación_j(t): Costos flujos habilitación j (DevOps, HR, etc.)
  
  Nota_Contable:
    "Ecuación usa costeo completo (absorción). Outcomes son BRUTOS
     (revenue/valor percibido), costos incluyen producción + habilitación.
     f_evaluate mide CALIDAD/ADECUACIÓN, no financiamiento."
    
Descomposición_Outcome:

  outcome_i(t) = f_evaluate(output_i(t), propósito_i) × volume_i(t)
  
  Componentes:
    output_i(t): Información producida por flujo i
    propósito_i: Outcome deseado (P5)
    f_evaluate: Función evalúa CALIDAD output contra propósito (no financiera)
    volume_i(t): Throughput flujo (unidades/tiempo)
    
  Aclaración:
    f_evaluate retorna factor calidad (0.0 - 2.0+):
      < 1.0: Output no cumple propósito (degradación)
      = 1.0: Output cumple propósito exactamente
      > 1.0: Output excede propósito (valor premium)
    
  Ejemplo:
    Flujo: OrderFulfillment
    output(Q1): 5000 orders entregados
    propósito: NPS > 70
    f_evaluate(orders, NPS=75) = 1.07 (7% sobre target)
    outcome = 5000 × 1.07 = 5350 "value units"
    
Descomposición_Cost:

  cost(t) = Σ_k (capacity_k × time_k(t) × unit_cost_k)
  
  Componentes:
    capacity_k: Capacidad usada en flujo (producción o habilitación)
    time_k(t): Tiempo uso en periodo t
    unit_cost_k: Costo unitario capacidad ($/hora)
    
  Ejemplos:
  
    A) Flujo_Producción: OrderFulfillment
       Capacidades: {SalesRep, WarehouseWorker, DeliveryTruck}
       time_use: {2h, 1h, 0.5h} × 5000 orders/trimestre
       unit_cost: {$40/h, $25/h, $60/h}
       cost_producción = (40×2 + 25×1 + 60×0.5) × 5000 = $682.5K
       
    B) Flujo_Habilitación: CI/CD_Pipeline
       Capacidades: {BuildServer, TestEnv, DeployService}
       time_use: {40h, 60h, 20h} × 100 pipelines/mes × 3 meses
       unit_cost: {$50/h, $100/h, $30/h}
       cost_habilitación = (50×40 + 100×60 + 30×20) × 300 = $2.58M

Métricas_Derivadas:

  Eficiencia_Global:
    η_org(t) = V_org(t) / Total_Capacity_Cost(t)
    
    Target: η > 1.5
      Cada $1 habilitación genera $1.5 producción
      
  ROI_Habilitación:
    ROI_j = ΔOutcome_habilitado / Cost_j
    
    Ejemplo:
      CI/CD permite 10x más deploys
      Deploys generan features más rápido
      Features generan $5M incrementales
      CI/CD cuesta $860K/mes × 12 = $10M/año
      ROI = $5M / $10M = 0.5 (Break‑even: depende de periodicidad. Si CAPEX único $10M y beneficio $5M/año ⇒ ≈ año 2; si OPEX $10M/año vs beneficio $5M/año ⇒ no hay break‑even en régimen estacionario
      
  Value_Flow_Velocity:
    VFV = Σ outcome_i / Σ cycle_time_i
    
    Mide: Valor entregado por unidad tiempo
    Target: Maximizar sosteniblemente

Optimización_Portfolio:

  Problema:
    max V_org(t)
    
    Subject to:
      Σ capacity_allocated ≤ capacity_available
      cost_total ≤ budget
      H_org(t) ≥ 70 (salud mínima) — véase *05_dominios*, sección **Health Score integrado**.
      
  Solución:
    Priorización D3 usando RICE/WSJF
    Asignación capacidades a mayor ROI
    Balanceo producción/habilitación (heurística **70/30** configurable por contexto)
    
Invariante_Health:

  IF H_org < 70 THEN V_org degradará futuro
  
  Justificación:
    Salud baja → debt acumula → velocity decae
    Mejor: Invertir en health antes que nuevas features
```

> **Nota:** La proporción 70/30 es una *heurística* parametrizable; se ajusta según H_org y señales de deuda/ritmo.