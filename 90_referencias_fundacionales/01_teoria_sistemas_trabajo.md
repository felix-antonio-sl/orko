# Teoría de Sistemas de Trabajo

**ID**: ORKO-REF-TST-01  
**Fuentes**: Alter WST (2013), TSTI Axiomática  

---

## §1. PRIMITIVO BASE

### Sistema de Trabajo (9-tupla)
```
WS := ⟨P, A, I, T, V, C, E, S, R⟩

P: Participantes (H ∪ AA)
A: Actividades/Procesos
I: Información
T: Tecnologías
V: Valor (productos/servicios)
C: Clientes
E: Entorno
S: Estrategias
R: Recursos compartidos
```

**Definición**: Sistema donde participantes humanos/máquinas realizan trabajo usando información, tecnología y recursos para producir productos/servicios para clientes.

---

## §2. AXIOMAS FUNDAMENTALES

**A1. Existencia**: `∀Contexto_Org: ∃WS`

**A2. Transformación**: `∀WS: ∃φ: (P × A × I × T) → V`

**A3. Entrega**: `∀WS: ∃ψ: V → C`

**A4. Restricción**: `∀WS: φ opera bajo (E, S, R)`

**A5. Agencia Dual**: `P = H ∪ AA` (humanos ∪ agentes algorítmicos)

**A6. Ciclo Cognitivo**: `∀WS: SENSE → DECIDE → EXECUTE`

**A7. No Optimalidad**: No existe configuración óptima para todos los criterios simultáneamente

**A8. Incompletitud**: Todo diseño genera comportamientos emergentes no especificados

**A9. Cambio Dual**: `Evolución = Planificado ⊕ Emergente`

---

## §3. TAXONOMÍA

### Clasificación por Agencia
- **WS_Sociotécnico**: `H ≠ ∅` (al menos un humano)
- **WS_Automatizado**: `H = ∅ ∧ AA ≠ ∅` (solo agentes)
- **Sistema de Información**: `IS ⊂ WS` donde actividades son operaciones informacionales
- **CHS**: Sistema ciber-humano con interacción consciente H-AA

---

## §4. CICLO DE VIDA (WSLC)

```
Operación ⟷ (Iniciación → Desarrollo → Implementación) ⟷ Operación
```

**Dinámica de Workarounds**:
```
Improvisación → Bricolage → Aprendizaje → Proyecto_Formal → Método_Sistemático
```

**Teorema**: `Frecuencia(Workarounds) ∝ Gap(Diseño, Necesidad)`

---

## §5. TEORÍA DE USO (ISUT)

### Roles IS (6 tipos)
- R1: Monitorear
- R2: Proveer información
- R3: Habilitar capacidades
- R4: Controlar
- R5: Co-producir
- R6: Ejecutar

### Facetas de Trabajo (18)
Decisión, Comunicación, Procesamiento, Pensamiento, Representación, Provisión Info, Conocimiento, Aprendizaje, Planificación, Control, Improvisación, Coordinación, Trabajo Físico, Soporte, Interacción Social, Servicio, Creación Valor, Seguridad

### Tensor de Uso
```
Uso_Efectivo(IS, WS) = ∑(i,j) Rol_i × Faceta_j × Contexto
AR: R × F → {NR, Bajo, Medio, Alto, Crítico}
Dimensionalidad = 6 × 18 = 108 vectores
```

---

## §6. SUPERPOSICIÓN IS-WS

```
Tipo 1: [IS]─interface─[WS]     (Simple)
Tipo 2: [IS]∩ε[WS]               (Mínima)
Tipo 3: [IS ∩∩ WS]               (Sustancial)
Tipo 4: [IS ⊂ WS]                (Completa)
```

**Teorema**: `Complejidad_Coordinación ∝ Grado_Superposición`

---

## §7. ECUACIÓN MAESTRA

```
Valor(WS) = F(
  Alineación_Interna(P, A, I, T, V, C),
  Distribución_SADE(H, AA),
  Tensor_AR(R × F),
  Balance_Criterios(Eval),
  Conjunto_Patrones(Patterns),
  Acceso_KO
) bajo restricciones(E, S, R, Path_Dependency)
```

---

## §8. METATEOREMAS

**Consistencia**: TSTI no contiene contradicciones derivables

**Decidibilidad**: Toda proposición sobre WS específico es decidible en tiempo finito

**Completitud**: Framework describe completamente cualquier WS

**Minimalidad**: No se pueden eliminar axiomas sin pérdida de cobertura

**Ortogonalidad**: Dimensiones {SADE, AR, Eval, WSLC, Patterns} son independientes

---

**Aplicación en ORKO**: Esta teoría provee los primitivos (P1-P5) y axiomas (A1-A5) del Layer 0, fundamentando toda la arquitectura.
