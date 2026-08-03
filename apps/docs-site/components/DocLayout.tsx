// ------------------------------------------------------------
// DocLayout Component
// ------------------------------------------------------------
// DocLayout is a foundational layout primitive used across the
// Magic2U documentation experience. Its purpose is to provide a
// consistent structural wrapper for all documentation pages.
//
// Why this matters:
//   - Documentation must feel unified and predictable
//   - Layout consistency improves readability and onboarding
//   - Page authors should not repeat spacing or layout logic
//
// This component acts as the "page shell" for documentation
// surfaces, ensuring that every page inherits the same padding,
// spacing rhythm, and structural framing.
//
// In a more advanced system, DocLayout might also include:
//   - typography rules
//   - max-width constraints
//   - navigation sidebars
//   - breadcrumbs
//   - table of contents anchors
//   - theme-aware styling
//
// For now, it provides a clean, minimal layout wrapper that
// centralizes spacing and keeps page components focused purely
// on content.
// ------------------------------------------------------------
export function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    // --------------------------------------------------------
    // Layout Container
    // --------------------------------------------------------
    // The <div> serves as the structural wrapper for all
    // documentation content. The inline padding ensures that
    // pages have consistent breathing room around their content. 
    // 
    // This avoids duplicated padding logic across pages and 
    // establishes a predictable reading experience.
    // 
    // In a full design system, this would likely be replaced by: 
    // - a Layout component // - spacing tokens (e.g., p-xl) 
    // - responsive container primitives 
    // --------------------------------------------------------
    <div style={{ padding: 40 }}> 
      {/* ---------------------------------------------- 
        Children Slot 
        ---------------------------------------------- 
        The layout renders whatever content is passed into 
        it. This pattern allows DocLayout to wrap any page 
        without needing to know what that page contains. 
        
        This is the essence of layout composition: 
        pages define content, layouts define structure. 
        */} 
        {children} 
    </div> 
  );
}
