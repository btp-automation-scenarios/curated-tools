import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manually defined sidebar structure with custom labels
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'terramate-generate',
      label: 'Terramate - Code Generation',
    },
    {
      type: 'doc',
      id: 'terramate-orchestrate',
      label: 'Terramate - Orchestration',
    },
    {
      type: 'doc',
      id: 'terramaid',
      label: 'terramaid',
    },
    {
      type: 'doc',
      id: 'tfautomv',
      label: 'tfautomv',
    },
    {
      type: 'doc',
      id: 'tflint',
      label: 'TFLint',
    },

    {
      type: 'doc',
      id: 'open-policy-agent',
      label: 'Open Policy Agent (OPA)',
    },

    {
      type: 'doc',
      id: 'skipped',
      label: 'Skipped Tools',
    },
  ],

  // Alternative: You can also organize with categories
  /*
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        {
          type: 'doc',
          id: 'subpage1',
          label: 'Open Policy Agent (OPA)',
        },
        {
          type: 'doc',
          id: 'subpage2',
          label: 'Tool 2',
        },
        {
          type: 'doc',
          id: 'subpage3',
          label: 'Tool 3',
        },
      ],
    },
  ],
  */
};

export default sidebars;
