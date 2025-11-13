# PARTE IV: CICLO FUNDAMENTAL

- [PARTE IV: CICLO FUNDAMENTAL](#parte-iv-ciclo-fundamental)
  - [Ciclo fundamental](#ciclo-fundamental)
    - [§1. CICLO SDA (Sense-Decide-Act)](#1-ciclo-sda-sense-decide-act)
    - [§2. CICLO WSLC (Work System Life Cycle)](#2-ciclo-wslc-work-system-life-cycle)

## Ciclo fundamental

### §1. CICLO SDA (Sense-Decide-Act)

```yaml
Derivación_Formal:
  Pregunta: "¿Patrón UNIVERSAL mínimo transformación intencional?"
  
  Desde_Primitivos:
    P1 (Capacidad) + P3 (Información) + P5 (Propósito)
    → 3 fases irreducibles:
      1. SENSE: Capturar estado (P3) con Capacidad sensor (P1 C0+)
      2. DECIDE: Evaluar opciones (P5 propósito) con Capacidad decisional (P1 C1+)
      3. ACT: Ejecutar transformación (P1 C0+) → Información nueva (P3)
  
  Conclusión: SDA = (Sense, Decide, Act) patrón universal

Estructura_SDA:
  ∀ transformación intencional:
    Input: Información I + Propósito P
    Process: Capacidad C ejecuta SDA
    Output: Información I' (estado nuevo)

Fases:

  SENSE (Capturar Estado):
    Subfases: Detectar (C0) → Comprender (C1) → Proyectar (C2)
    Observables:
      Externos (EX1-8): Demanda, competidores, regulación, tecnología,
                        feedback, disruptivos, sociales, económicos
      Internos (IN1-8): Velocidad decisión, salud talento, eficiencia flujos,
                        calidad outputs, utilización, alineación, compliance, debt
    Latencia: Microsegundos (detectar) a horas (proyectar)
    
  DECIDE (Evaluar Opciones):
    Modos: Directa (C1, ms) | Basada en reglas (C1, seg) |
           Asociativa (C1-C2, seg) | Analítica (C2-C3, min-h)
    Input: Comprensión + Propósito + Límites + Opciones
    Output: Plan + Justificación + Confianza
    Delegación: M2 (Informar) a M5 (Coproducir) según complejidad
    
  ACT (Ejecutar):
    Subfases: Planificar (C1) → Especificar (C1) → Ejecutar (C0)
    Monitoreo: SDA recursivo durante ejecución
    Límite_Recursión: Máximo 3 niveles (Miller 7±2)

Propiedades:
  P1_Universalidad: TODO trabajo intencional sigue SDA
  P2_Recursividad: SDA puede contener SDA (máx 3 niveles)
  P3_Aceleración: Algorítmicos aceleran 100x-100000x vs humanos

Fundamentos: OODA (Boyd), Control Theory, TSTI-SADE, Cognitive Science
```

### §2. CICLO WSLC (Work System Life Cycle)

```yaml
Derivación_Formal:
  Pregunta: "¿Ciclo vida UNIVERSAL unidad trabajo?"
  
  Complementariedad_SDA:
    SDA: Patrón OPERACIÓN (uso sistema existente)
    WSLC: Patrón EVOLUCIÓN (cambio sistema mismo)
    Analogía: SDA=metabolismo, WSLC=desarrollo orgánico

Fases_WSLC:

  W1_INITIATION (Concepción):
    Trigger: Necesidad/oportunidad detectada (Sense)
    Output: Visión + Caso negocio + Aprobación
    Capacidades: C1-C2 (discovery, strategy)
    Duración: 5-10% ciclo
    
  W2_DEVELOPMENT (Desarrollo):
    Input: Visión aprobada
    Output: Sistema funcional
    Subfases: Design → Build → Test
    Capacidades: C1-C3 (architecture, engineering)
    Duración: 5-10% ciclo
    
  W3_IMPLEMENTATION (Despliegue):
    Input: Sistema funcional
    Output: Sistema operativo en producción
    Subfases: Deploy → Train → Cutover
    Estrategias: Big bang | Canary | Blue-green | Feature flags
    Duración: 1-5% ciclo
    
  W4_OPERATION (Operación):
    Input: Sistema en producción
    Output: Valor continuo + Datos uso
    Relación_SDA: AQUÍ fase más larga, ejecuta SDA repetidamente
    Feedback: Informa W5 (retire) o W1 (mejora)
    Duración: 80-90% ciclo
    
  W5_RETIREMENT (Retiro):
    Trigger: Sistema obsoleto/ineficiente
    Output: Sistema desactivado, conocimiento preservado
    Transición: Migrar a sucesor (nuevo W1)

Integración_SDA_WSLC:
  - WSLC define CICLO largo (meses-años)
  - Cada fase WSLC ejecuta múltiples SDA
  - SDA opera DENTRO de sistema
  - WSLC evoluciona EL sistema
  - Recursión: L3_Transformation → L2_Platform → L1_Feature → L0_Task_SDA
  
Propiedades:
  P1_Universalidad: TODO work system sigue WSLC
  P2_No_Salteable: Saltar fases predice problemas
  P3_Múltiples_Paralelos: Org tiene N WSLC simultáneos
  P4_Feedback_Loop: Operation informa Initiation

Fundamentos: Alter (TSTI), SDLC, Agile Lifecycle, Change Management
```

**WSLC — precisión:** los porcentajes por fase son **rangos orientativos** y no deben tomarse como sumatorios estrictos; sirven para orden de magnitud.
