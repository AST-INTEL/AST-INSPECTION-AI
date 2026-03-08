// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

export default defineConfig({
  integrations: [
    starlight({
      title: 'AST Inspection AI',
      description: 'AI-powered inspection intelligence — CANAR Advanced Systems & Technology',
      plugins: [starlightThemeRapide()],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AST-INTEL/AST-INSPECTION-AI' }],
      sidebar: [
        { label: '⚡ Overview', items: [
          { label: 'What This Is', slug: 'overview/what-this-is' },
          { label: 'The Problem', slug: 'overview/the-problem' },
          { label: 'POC vs Production', slug: 'overview/poc-vs-production' },
          { label: 'Architecture', slug: 'overview/architecture' },
          { label: 'Timeline', slug: 'overview/timeline' },
        ]},
        { label: '🔬 POC — Home Machine', items: [
          { label: 'POC Overview', slug: 'poc/overview' },
          { label: 'Phase 0 · Data Audit', slug: 'poc/phase-0-data-audit' },
          { label: 'Phase 1 · Environment & LLMs', slug: 'poc/phase-1-environment' },
          { label: 'Phase 2 · Data Pipeline', slug: 'poc/phase-2-data-pipeline' },
          { label: 'Phase 3 · Vision Pipeline', slug: 'poc/phase-3-vision' },
          { label: 'Phase 4 · Intelligence Layer', slug: 'poc/phase-4-intelligence' },
          { label: 'Phase 5 · Integration & UI', slug: 'poc/phase-5-integration' },
          { label: 'Phase 6 · Security Verification', slug: 'poc/phase-6-security' },
          { label: 'Phase 7 · Transfer Package', slug: 'poc/phase-7-transfer' },
        ]},
        { label: '🏭 Production — Requires Approval', collapsed: true, items: [
          { label: 'Production Overview', slug: 'production/overview' },
          { label: 'POC → Production Delta', slug: 'production/delta' },
          { label: 'IT Brief · VLAN Isolation', slug: 'production/it-brief' },
          { label: 'Work Machine Requirements', slug: 'production/machine-requirements' },
          { label: 'Phase 8 · LIS Integration', slug: 'production/phase-8-lis' },
          { label: 'Deployment Runbook', slug: 'production/deployment-runbook' },
        ]},
        { label: '📐 Reference', collapsed: true, items: [
          { label: 'Decision Log', slug: 'reference/decision-log' },
          { label: 'Security Architecture', slug: 'reference/security-architecture' },
          { label: 'Data Assets', slug: 'reference/data-assets' },
          { label: 'Model Specs & Upgrade Path', slug: 'reference/model-specs' },
        ]},
      ],
    }),
  ],
});
