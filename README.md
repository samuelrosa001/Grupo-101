# Desarrollo de Diamantes en 90 Días 💎

Plataforma empresarial de capacitación y captación de distribuidores independientes Oriflame respaldada por el patrocinador **Eduardo Cruz Alcántara**.

Diseñada con una arquitectura **Headless CMS Ready**, **Feature Flags**, **Sistema de Roles**, **Next.js 15 (App Router)**, **React 19**, **TypeScript** y **TailwindCSS v4**.

---

## 🛠️ Stack Tecnológico

- **Core**: Next.js 15 (App Router), React 19, TypeScript
- **Estilos & Animaciones**: TailwindCSS v4, Framer Motion, Lucide React
- **Formularios & Validaciones**: React Hook Form, Zod
- **Arquitectura**: Feature Based Architecture, Headless CMS Ready Service Layer
- **Hosting & Backend Preparedness**: Firebase Hosting, Firebase Auth Ready, Firestore Ready

---

## 📂 Arquitectura del Proyecto

```text
app/                  # Rutas Next.js 15 App Router
components/           # Componentes UI reutilizables y layouts
  ui/                 # Design System (Buttons, Cards, Particles, 3D HeroIllustration)
  layout/             # Navbar y Footer
features/             # Módulos basados en funcionalidades (Hero, Benefits, Steps, Resources, Blog, FAQ)
lib/services/         # Capa de Servicios Abstraídos (Headless CMS Ready)
content/              # Estructura inicial de datos JSON
config/               # Configuración global y Feature Flags (config/features.ts)
types/                # Definiciones de TypeScript y Sistema de Roles (types/roles.ts)
```

---

## 🚀 Comandos Principales

### 1. Desarrollo Local
```bash
npm run dev
```

### 2. Compilación de Producción
```bash
npm run build
```

### 3. Despliegue en Firebase Hosting
```bash
firebase deploy --only hosting
```

---

## 📝 Avisos Legales
Este sitio tiene fines informativos y de acompañamiento para personas interesadas en conocer la oportunidad de negocio de Oriflame. Los resultados dependen del esfuerzo, dedicación y cumplimiento de las políticas vigentes de la compañía. No se garantizan ingresos específicos.
