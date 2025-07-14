# NodeGoat Vulnerability Analysis – Software Security Final Project

Final project for the Software Security course: analysis and exploitation of security vulnerabilities in the intentionally insecure OWASP NodeGoat application, developed using Node.js and Express.  

The project includes:
- **Static analysis** using ESLint with `eslint-plugin-security` and GitHub's CodeQL
- **Exploitation of server-side vulnerabilities**, including:
  - Server-Side Request Forgery (SSRF)
  - Session Hijacking (HTTP cookie interception)
  - Server-Side JavaScript Injection (using `eval`)
  - NoSQL Injection
- **Exploitation of client-side vulnerabilities**, including:
  - Cross-Site Request Forgery (CSRF)
  - Stored Cross-Site Scripting (XSS)
- **Security countermeasures**: implementation of mitigations using secure development practices
- **CTI mapping**: formal classification of vulnerabilities according to [CWE](https://cwe.mitre.org/) and OWASP Top Ten
- **Fuzzing tests**: custom script for fuzz testing of the `/profile` endpoint, instrumentation with `clinic doctor`

## Technologies
- Node.js + Express.js
- MongoDB (NoSQL)
- Swig template engine
- Docker & Docker Compose
- Static analysis: ESLint, CodeQL
- Fuzzing & instrumentation: Node.js `fuzzer`, `winston`, `clinic doctor`

## Usage
This repository contains:
- Source code of the vulnerable NodeGoat application
- Scripts and configuration files for static analysis and fuzzing
- Docker environment for demonstration of exploits (optional)
- Full report (see `main.pdf`)

## Author
Pasquale Angelino  
Matricola: M63001481  
Academic Year: 2024/2025  
Course: Software Security – Computer Engineering
