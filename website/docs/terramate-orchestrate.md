---
sidebar_position: 3
---

# Terramate - Orchestration

## Intent

The **orchestration feature** of Terramate enables you to orchestrate Terraform commands across multiple stages including the handling of dependencies. This is particularly useful when managing complex infrastructures that span multiple environments or regions.

## Problem

Infrastructure as code often involves multiple environments (e.g., development, staging, production) and regions. Modularizing the Terraform code brings in another dimension to the complexity due to dependencies that need to be respected upon deployment.

The Terraform/OpenTofu CLI contains no feature to handle this. Consequently, the orchestration needs to be handled in the CI/CD pipelines. This handling must be implemented statically or with additional scripting to allow for a more dynamic behavior.
Dependencies cannot be modelled implicitly and the knowledge about needs to be documented explicitly in other tools or formats.

Overall, this leads to high complexity in real-life scenarios.

## Solution

**Terramate** offers an *orchestration feature* that is built upon so called [*stacks*](https://terramate.io/docs/cli/stacks/). Each stack is a is a collection of infrastructure resources that you configure, provision and manage as a unit. They can contain metadata like tags and information about dependencies.

based on these stacks the orchestration feature allows you to orchestrate the execution of Terraform commands based on the stacks and their dependencies. This allows you to manage complex infrastructures with multiple environments and regions more easily.

In addition, Terramate offers a change detection feature that allow you to run Terraform/OpenTofu commands only on stacks that are affected by changes. This further simplifies the management of complex infrastructures.

:::note

Terramate is non-invasive to your Terraform code. You can on- and off-board the tool at any time without impacting your code base.

:::

## License

MPL 2.0

## Further Reading

- Terramate [official documentation](https://terramate.io/docs/)
- Terramate [orchestration documentation](https://terramate.io/docs/cli/orchestration/)
- Terramate [GitHub repository](https://github.com/terramate-io/terramate)
- Terramate Blog Posts for SAP BTP:
   - [Terramate this SAP BTP!](https://dev.to/lechnerc77/terramate-this-sap-btp-5a8p)
   - [Experimenting with Terramate and SAP BTP](https://dev.to/lechnerc77/experimenting-with-terramate-and-sap-btp-22m1)
