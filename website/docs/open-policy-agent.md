---
sidebar_position: 7
---

# Open Policy Agent (OPA)

## Intent

The Open Policy Agent is a generic policy engine to evaluate policies in various contexts. It provides a high-level declarative language (Rego) to author and enforce policies. One scenario is the enforcement of policies for Infrastructure as Code (IaC) projects.

## Problem

When automating the deployment of infrastructure via Terraform/OpenTofu it is beneficial to enforce certain policy upon deployment and have some safeguard in place to e.g., avoid unwanted deletions of a database.

There is not built-in mechanism to validate these policies in the Terraform/OpenTofu CLI or in the CI/CD infrastructure, so users must find a way to implement this.

## Solution

The **Open Policy Agent** (OPA) provides a generic policy engine that can be used to enforce policies in various contexts based on a high-level declarative language called *Rego*. In the context of Terraform/OpenTofu it can be used to validate the Terraform plan output against defined policies to safeguard deployments and support the review of changes to an existing deployment.

It can be easily integrated into CI/CD pipelines.

As it is a generic framework it can also be used to create custom policies for [TFLint](./tflint.md).

## License

Apache-2.0

Open Policy Agent is a *graduated* [CNCF project](https://www.cncf.io/projects/open-policy-agent-opa/)

## Further Reading

- [Open Policy Agent Homepage](https://www.openpolicyagent.org/)
- [GitHub Repository](https://github.com/open-policy-agent/opa)
- [Documentation](https://www.openpolicyagent.org/docs)
- [Open Policy Agent and Terraform](https://www.openpolicyagent.org/docs/terraform)
- Blog Post [SAP BTP, Terraform and Open Policy Agent](https://dev.to/lechnerc77/sap-btp-terraform-and-open-policy-agent-243m)
