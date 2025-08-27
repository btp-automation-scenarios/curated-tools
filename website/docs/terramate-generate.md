---
sidebar_position: 2
---

# Terramate - Code Generation

## Intent

The **code generation feature** of Terramate bridges the gap between generic reusable infrastructure code that could become complex due to extensive parameterization and copy-pasting the same infrastructure code multiple times with slight variations with contradicts the "Don't repeat yourself" (DRY) principle. It allows you to generate concrete Terraform code from generic templates, making it easier to manage and maintain infrastructure as code.

## Problem

When developing infrastructure as code, you aim at reusability and modularity. The code base should be following the DRY principle and avoid duplicate code. This comes at the price of complexity as the code needs to generic with many parameters to steer the behavior. This can become complex to understand and maintain.
Consequently, the velocity of provisioning and managing infrastructure can decrease.

The alternative of duplicating code with slight variations leads to a code base that is hard to maintain and evolve. Any change needs to be applied in multiple places which is error-prone and time-consuming leading to the same problem of decreased velocity.

## Solution

**Terramate** offers a code generation feature that enables you to generate concrete Terraform code from generic templates. This allows you to maintain a clean and reusable code base while still being able to deploy specific configurations as needed.

The code generation feature offers additional functions and features that allows a sophisticated approach to design the code templates leading to tailored generated code.

:::note

Terramate is non-invasive to your Terraform code. You can on- and off-board the tool at any time without impacting your code base.

   :::

## License

MPL 2.0

## Further Reading

- Terramate [official documentation](https://terramate.io/docs/)
- Terramate [code generations documentation](https://terramate.io/docs/cli/code-generation/)
- Terramate [GitHub repository](https://github.com/terramate-io/terramate)
- Terramate Blog Posts for SAP BTP:
   - [Terramate this SAP BTP!](https://dev.to/lechnerc77/terramate-this-sap-btp-5a8p)
   - [Experimenting with Terramate and SAP BTP](https://dev.to/lechnerc77/experimenting-with-terramate-and-sap-btp-22m1)
