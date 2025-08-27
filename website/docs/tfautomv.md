---
sidebar_position: 5
---

# tfautomv

## Intent

The tool offers automating the generation of Terraform `moved` blocks to ease the refactoring of your code base.

## Problem

The Terraform codebase usually evolves over time and refactoring is needed to improve the setup. However, refactoring of existing Terraform code are error prone as the state file needs to be updated accordingly. While the Terraform syntax provides the functionality of [`moved` blocks](https://developer.hashicorp.com/terraform/language/moved), these need to be created manually which is error-prone and often prevents users from refactoring their code or leads to higher efforts when doing the refactoring.

## Solution

**`tfautomv`** is a refactoing helper for Terraform code. It supports you when refactoring your code base by inspecting the output of the `terraform plan`. It detects creation/deletion pairs that appear upon refactoring and generates the corresponding `moved` block to trigger the address changes in the state file.

## License

Apache-2.0

## Further Reading

- [GitHub repository](https://github.com/busser/tfautomv)
- [Introduction blog post](https://cloud.theodo.com/en/blog/terraform-refactoring-tfautomv)
