# FreNiMiGuard — security engineering evidence

FreNiMiGuard is a proprietary security-posture and vulnerability-management application built by FreNiMi. This note separates the live service check from local engineering validation; neither is a certification or independent security assessment.

## Live service

Checked 1 October 2026: `GET https://frenimiguard.com/api/v1/health` returned HTTP 200 and reported the API and database as online, version `1.0.0`. This confirms that the health route responded at that time. The endpoint does not disclose a deployment commit, so it does not establish that the production instance runs the local feature branch described below.

## Local engineering validation

Validation was run on the private `feature/endpoint-agent` branch at commit `1537c09`, with pre-existing, uncommitted feature work still present in the working tree. The source is proprietary and not available in a public repository, and that feature work is not part of the cited commit; the results are therefore not independently reproducible from this profile repository.

- Backend: 222 tests passed, 1 skipped after dependency updates and the JWT-library migration.
- Frontend: 196 tests passed across 27 files.
- Frontend production build: passed.
- Frontend dependency audit: zero known vulnerabilities.
- Backend dependency audit: no known vulnerabilities in the Windows-installable dependency set. SQLCipher is marked non-Windows because its binary package has no Windows distribution; audit that runtime dependency in Linux CI before release.

## Security boundaries

- The deployment health check is not evidence of customer use, production feature parity, or a penetration test.
- Automated tests and dependency checks do not establish that the product itself complies with NIST, HIPAA, CMMC, FISMA, or FedRAMP requirements.
- No independent penetration test, authorization to operate, or agency deployment is claimed here.
- A NIST control dashboard is not itself a certification or an authority decision.

Product overview: [frenimiguard.com](https://frenimiguard.com). The profile links this case study as supporting security-engineering evidence; it does not present private source as open source.
