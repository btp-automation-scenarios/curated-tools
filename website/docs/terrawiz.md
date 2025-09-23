---
sidebar_position: 8
---

# terrawiz

## Intent

It is a good practice to modularize the Terraform code. Modules can have different sources, e.g. the local filesystem, a Git repository or the Terraform Registry. However, it can be hard to get an overview of all modules and their version used in an enterprise.

## Problem

While modularization of Terraform code is a good practice, it can be hard to get an overview of all modules and their version used in a larger setup. This can lead to issues like:

- Using different versions of the same module in different places
- Using modules with known vulnerabilities
- Using deprecated modules
- Lack of visibility into module usage across the organization

## Solution

**terrawiz** is a CLI tool that creates an inventory of modules used in a Terraform setup. It analyzes the Terraform files and generates a report in various formats (command line, JSON, CSV) that lists all modules, their sources, versions, and other relevant information.

Possible sources are:

- Local filesystem
- GitHub
- GitLab

The CLI tool requires Node.js to be installed. It can be installed via npm.

## License

MIT License

## Further Reading

- [GitHub repository](https://github.com/efemaer/terrawiz)
