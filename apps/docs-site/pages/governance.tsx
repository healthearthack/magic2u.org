// ------------------------------------------------------------
// Import: GovernanceModel
// ------------------------------------------------------------
// GovernanceModel is the feature‑level component responsible for
// rendering the governance structure of the Magic2U ecosystem.
// This may include:
//
//   - decision‑making frameworks
//   - contribution rules
//   - versioning and release governance
//   - ownership models
//   - escalation paths
//
// By importing it here, the page remains a clean, declarative
// wrapper whose sole responsibility is to expose the governance
// model at a route level.
//
// This separation keeps your architecture predictable:
//
//   Page → Feature → Component
//
// …and ensures that routing concerns never leak into feature logic.
import { GovernanceModel } from "../governance/GovernanceModel";


// ------------------------------------------------------------
// Governance Page Component
// ------------------------------------------------------------
// This component represents the page‑level surface for governance
// documentation. In a routing system, this would map to:
//
//     /governance
//
// The page itself contains no logic, no state, and no layout
// complexity. It simply delegates rendering to GovernanceModel.
//
// This is intentional: page components should be thin wrappers
// that compose layout and features, not implement business logic.
// ------------------------------------------------------------
export default function Governance() {
  // ----------------------------------------------------------
  // Render
  // ----------------------------------------------------------
  // Returning <GovernanceModel /> directly keeps the page clean
  // and declarative. If you later introduce:
  //
  //   - documentation layouts
  //   - navigation shells
  //   - breadcrumbs
  //   - authentication or role‑based access
  //
  // …this page is the correct place to integrate those concerns.
  // ----------------------------------------------------------
  return <GovernanceModel />;
}
