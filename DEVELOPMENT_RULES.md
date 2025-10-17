# DFOS Development Rules & Guidelines

## Overview
This document outlines the development standards and best practices for the DFOS prototype project to ensure consistency, maintainability, and scalability.

---

## 1. Framework & Styling

### ✅ Tailwind CSS Standards
- **Primary Styling**: Use Tailwind CSS for all styling needs
- **Design Tokens**: Follow existing Tailwind design tokens for:
  - Spacing: `p-4`, `m-6`, `gap-3`, etc.
  - Colors: `slate-900`, `neutral-950`, `blue-600`, etc.
  - Typography: `text-lg`, `font-medium`, `leading-relaxed`, etc.
  - Border Radius: `rounded-lg`, `rounded-xl`, `rounded-t-3xl`, etc.
- **Avoid**: Inline styles (`style={{}}`) or CSS modules unless absolutely required
- **Custom Values**: Use square bracket notation sparingly: `w-[384px]`, `bg-[#fcfcfc]`

### Example ✅
```tsx
<div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
  <h1 className="text-2xl font-semibold text-slate-900">Title</h1>
</div>
```

### Example ❌
```tsx
<div style={{ backgroundColor: 'white', borderRadius: '12px' }}>
  <h1 style={{ fontSize: '24px', fontWeight: '600' }}>Title</h1>
</div>
```

---

## 2. UI Components

### 🎨 ShadCN/UI First Approach
- **Base Library**: Always use shadcn/ui as the foundation for UI elements
- **Component Priority Order**:
  1. Use existing shadcn/ui component
  2. Search for open-source analogue (Radix, Headless UI, Tailwind-based)
  3. Adapt and restyle to fit our design system
  4. Build custom only as last resort

### 🔍 Component Research Process
When a new component is needed:
1. **Check shadcn/ui catalog**: https://ui.shadcn.com
2. **Search component libraries**: Radix Primitives, Headless UI, Ariakit
3. **Community resources**: shadcn/ui community components
4. **Adapt & customize** to match DFOS design tokens

### 🎯 Consistency Requirements
- Follow existing spacing patterns (`space-y-4`, `gap-3`)
- Use consistent typography scale (`text-sm`, `text-base`, `text-lg`)
- Apply standard motion patterns (hover states, transitions)
- Maintain color palette consistency

---

## 3. Components Library Structure

### 📁 Directory Organization
```
components/
├── ui/                 # Base shadcn/ui components
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   └── ...
├── shared/            # Reusable business components
│   ├── email-domain-suggestions.tsx
│   ├── otp-input.tsx
│   └── viewport-controls.tsx
├── layout/            # Layout-specific components
│   ├── header.tsx
│   ├── sidebar.tsx
│   └── ...
└── icons/             # Custom icons and illustrations
```

### 🧩 Component Design Principles
- **Atomic Design**: Keep components small and focused
- **Reusability**: Avoid screen-specific logic inside UI components
- **Composition**: Build complex UIs by composing simple components
- **Props Interface**: Clean, well-typed props with sensible defaults

### Example Component Structure ✅
```tsx
interface EmailDomainSuggestionsProps {
  className?: string;
  onDomainSelect?: (domain: string) => void;
  domains?: string[];
}

export function EmailDomainSuggestions({ 
  className,
  onDomainSelect,
  domains = ["@gmail.com", "@icloud.com", "@outlook.com"]
}: EmailDomainSuggestionsProps) {
  // Component logic here
}
```

---

## 4. Design System Alignment

### 🎨 Figma ↔ Code Sync
- **Source of Truth**: Figma designs are the primary reference
- **Token Consistency**: Keep design tokens synchronized between Figma and code
- **Regular Updates**: Update design system documentation when designs change

### 🔄 Implementation Workflow
When implementing new designs:
1. **Audit Existing**: Check `/design-system` and `/components` for existing solutions
2. **Component Inventory**: Review current component library before creating new ones
3. **Design System Impact**: If component diverges from system, flag for discussion
4. **Documentation**: Update design system showcase with new components

### 📋 Component Checklist
- [ ] Does this component exist in our system?
- [ ] Does it follow our design tokens?
- [ ] Is it documented in `/design-system`?
- [ ] Is it added to `/components` catalog?
- [ ] Does it work in both mobile and desktop viewports?

---

## 5. Development Principles

### 🏗️ Code Organization
- **Composition over Duplication**: Reuse and compose rather than copy-paste
- **Clean Interfaces**: Well-defined props and TypeScript types
- **Meaningful Names**: Descriptive component and prop names

### 📛 Naming Conventions
- **Folders**: `kebab-case` → `email-domain-suggestions/`
- **Components**: `PascalCase` → `EmailDomainSuggestions.tsx`
- **Props**: `camelCase` → `onDomainSelect`, `className`
- **Constants**: `UPPER_SNAKE_CASE` → `DEFAULT_DOMAINS`

### 📝 Commit Messages
Follow conventional commit format:
```
feat(ui): add dropdown component with keyboard navigation
fix(signup): resolve OTP input focus issue
docs(design-system): update button variants documentation
refactor(components): extract email validation logic
```

### 🧪 Quality Standards
- **TypeScript**: All components must be properly typed
- **Accessibility**: Follow ARIA guidelines and keyboard navigation
- **Responsive**: Components work across mobile and desktop
- **Performance**: Optimize for bundle size and runtime performance

---

## 6. Current Project Status

### ✅ Already Implemented
- [x] Tailwind CSS with design tokens
- [x] ShadCN/UI base components
- [x] Proper component structure (`/components/ui/`)
- [x] Design system documentation page
- [x] Mobile-first responsive approach
- [x] TypeScript throughout
- [x] Consistent naming conventions

### 🎯 Components Library Inventory
- **UI Foundation**: `Button`, `Input`, `Card`, `Badge`, `Label`, `Separator`
- **Custom Components**: `EmailDomainSuggestions`, `OTPInput`, `ViewportControls`
- **Layout**: `MobileConstraint` responsive wrapper

### 📈 Design System Features
- Color system documentation
- Typography scale
- Component showcase with interactive examples
- Usage guidelines and best practices

---

## 7. Enforcement & Maintenance

### 🔍 Code Review Checklist
- [ ] Follows Tailwind-first styling approach
- [ ] Uses existing components before creating new ones
- [ ] Proper component structure and location
- [ ] TypeScript types and interfaces defined
- [ ] Responsive design considerations
- [ ] Accessibility requirements met
- [ ] Design system updated if needed

### 🔄 Regular Maintenance
- **Weekly**: Review new component additions
- **Monthly**: Audit design system alignment with Figma
- **Per Release**: Update component documentation
- **Continuous**: Maintain consistency across prototypes

---

## 8. Resources & References

### 📚 Documentation Links
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN/UI Components](https://ui.shadcn.com)
- [Radix Primitives](https://www.radix-ui.com/primitives)
- [Next.js 15 Documentation](https://nextjs.org/docs)

### 🛠️ Development Tools
- **Design System**: `/design-system` page for component showcase
- **Component Catalog**: `/components` page for inventory
- **Viewport Testing**: Built-in mobile/desktop preview controls
- **Type Safety**: Full TypeScript coverage

---

*Last Updated: October 2025 | Version: 1.0*
*Next Review: Monthly or when major design changes occur*
