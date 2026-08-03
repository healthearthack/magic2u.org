# 📄 Documentation Primitives — DocLayout & CodeBlock

This section documents two foundational components used throughout the Magic2U documentation experience:

- **DocLayout** — the structural wrapper for documentation pages  
- **CodeBlock** — the styled container for rendering code examples  

Together, they form the backbone of your documentation UI, ensuring consistency, readability, and a polished developer experience.

---

# 🧱 DocLayout

`DocLayout` provides consistent spacing and structural framing for all documentation pages. It ensures that every page inherits the same layout rhythm and visual identity.

### **Purpose**

- Centralizes page-level spacing  
- Keeps documentation pages clean and layout-agnostic  
- Establishes a unified reading experience  
- Serves as the foundation for future documentation features  

### **Code Summary**

```tsx
export function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: 40 }}>
      {children}
    </div>
  );
}

