How Changes Flow Through the System (patent narrative)

    Propose a change

        New token, component, or icon

    Open a pull request

        Change is introduced in the monorepo

    Automated checks run

        Lint, type-check, tests, accessibility, markdown/docs

    Design system packages update

        Tokens/components/icons built and versioned

    Demo app rebuilds

        apps/demo-app consumes latest packages

    Cloud deploy

        CI deploys to magic2u.org

    Audit + metrics

        CI logs, deploy logs, version history visible on /metrics and /audit

    This is your “machine”: a repeatable, governed pipeline from design change → code → cloud → audit.
