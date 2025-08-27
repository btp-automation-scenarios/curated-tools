---
sidebar_position: 6
---

# TFLint

## Intent

The tool provides a pluggable framework for linting Terraform code, helping to identify potential issues, enforce best practices, and ensure code quality in Infrastructure as Code (IaC) projects.

## Problem

The Terraform/OpenTofu CLI provides basic feature to canonically format and validate the code. While this provides a solid baseline some additional checks on best practices not covered. Custom rules may be required in addition that cannot be covered by the default tools.

## Solution

**TFLint** provides a framework based on plugins to lint your Terraform code to:

- Find possible errors
- Warn about deprecated syntax, unused declarations
- Enforce best practices, naming conventions

This way it closes the gap between the basic validation provided by the Terraform/OpenTofu CLI and the need for more advanced checks.

In addition, TFLint can be extended with custom plugins to cover specific needs.

## License

MPL-2.0

## Further Reading

- [GitHub repository](https://github.com/terraform-linters/tflint)
- [TFLint default rules](https://github.com/terraform-linters/tflint-ruleset-terraform/blob/main/docs/rules/README.md)
