---
sidebar_position: 8
---

# Conftest

## Intent

Conftest enables you to write tests against structured configuration data using the Open Policy Agent Rego query language.

## Problem

When crafting HCL code it is beneficial to enforce certain policies on the code to stay compliant with the project setup in an organization. This becomes even more important if the code is crafted by agentic AI to enforce deterministic guardrails.

There are options to include validations like `tflint`, but if you have already implemented rules via Rego query language you might want to stick to this ecosystem.

## Solution

**Conftest** provides a policy engine on to of Open Policy Agent that can be used to enforce policies in various contexts based on a high-level declarative language called *Rego*. In the context of Terraform/OpenTofu it can be used to validate the Terraform configuration against defined policies.

It can be easily integrated into CI/CD pipelines.

## License

Apache-2.0

## Further Reading

- [Conftest Homepage](https://www.conftest.dev/)
- [GitHub Repository](https://github.com/open-policy-agent/conftest)
