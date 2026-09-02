import {
  PiEnvelopeSimpleBold,
  PiLinkedinLogoBold,
  PiMapPinBold,
  PiPhoneBold,
} from "react-icons/pi";
import {
  Alert,
  Button,
  Card,
  Icon,
  Link,
  Row,
  Stack,
  Tag,
  Text,
  color,
} from "@msanagu/pearl";
import * as styles from "./App.css";
import { contact, summary, experience, skills, education } from "./resume";

function App() {
  return (
    <>
      <Row
        justify="end"
        gap="sm"
        className={`${styles.noPrint} ${styles.toolbar}`}
        style={{
          background: color.background,
          borderBottom: `1px solid ${color.border}`,
        }}
      >
        <Button
          variant="secondary"
          onClick={() => (window.location.href = `mailto:${contact.email}`)}
        >
          Email me
        </Button>
        <Button variant="primary" onClick={() => window.print()}>
          Download PDF
        </Button>
      </Row>

      <div className={styles.page}>
        <Stack as="header" gap="lg">
          <Stack gap="xs">
            <Text as="h1" typeScale="displaySm">
              {contact.name}
            </Text>
            <Text
              as="p"
              typeScale="headingSm"
              weight="regular"
              role="inlineEmphasis"
            >
              {contact.title}
            </Text>
          </Stack>

          <Row gap="lg" wrap className={styles.contactRow}>
            <Row gap="xs" align="center" className={styles.contactItem}>
              <Icon
                icon={PiMapPinBold}
                size={16}
                style={{ color: color.textSubtle }}
              />
              <Text typeScale="bodySm" prominence="subtle">
                {contact.location}
              </Text>
            </Row>
            <Row gap="xs" align="center" className={styles.contactItem}>
              <Icon
                icon={PiEnvelopeSimpleBold}
                size={16}
                style={{ color: color.textSubtle }}
              />
              <a href={`mailto:${contact.email}`} className={styles.plainLink}>
                <Text typeScale="bodySm" prominence="subtle">
                  {contact.email}
                </Text>
              </a>
            </Row>
            <Row gap="xs" align="center" className={styles.contactItem}>
              <Icon
                icon={PiPhoneBold}
                size={16}
                style={{ color: color.textSubtle }}
              />
              <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className={styles.plainLink}>
                <Text typeScale="bodySm" prominence="subtle">
                  {contact.phone}
                </Text>
              </a>
            </Row>
            <Row gap="xs" align="center" className={styles.contactItem}>
              <Icon
                icon={PiLinkedinLogoBold}
                size={16}
                style={{ color: color.textSubtle }}
              />
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className={styles.plainLink}
              >
                <Text typeScale="bodySm" prominence="subtle">
                  {contact.linkedin}
                </Text>
              </a>
            </Row>
          </Row>
        </Stack>

        <Card className={styles.summary}>
          <Card.Body>
            <Text as="p" typeScale="bodyMd">
              {summary}
            </Text>
          </Card.Body>
        </Card>

        <Stack as="section" gap="lg" className={styles.block}>
          <Text as="h2" typeScale="headingMd">
            Experience
          </Text>
          <Stack gap="md">
            {experience.map((job) => (
              <Card key={job.title + job.dates} className={styles.jobCard}>
                <Card.Header>
                  <Row justify="between" align="start" wrap>
                    <Text as="h3" typeScale="headingSm">
                      {job.title} · {job.company}
                    </Text>
                    <Text typeScale="bodySm" prominence="subtle">
                      {job.dates}
                    </Text>
                  </Row>
                  <Text typeScale="bodySm" prominence="subtle">
                    {job.location}
                  </Text>
                </Card.Header>
                <Card.Body>
                  <ul>
                    {job.bullets.map((b) => (
                      <li key={b}>
                        <Text as="span" typeScale="bodySm">
                          {b}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            ))}
          </Stack>
        </Stack>

        <Stack as="section" gap="lg" className={styles.block}>
          <Text as="h2" typeScale="headingMd">
            Skills
          </Text>
          <div className={styles.skillsGrid}>
            {Object.entries(skills).map(([group, items]) => (
              <Stack gap="sm" key={group}>
                <Text as="h4" typeScale="bodySm" weight="semibold">
                  {group}
                </Text>
                <Row gap="xs" wrap>
                  {items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </Row>
              </Stack>
            ))}
          </div>
        </Stack>

        <Stack as="section" gap="lg" className={styles.block}>
          <Text as="h2" typeScale="headingMd">
            Education
          </Text>
          <Stack gap="sm">
            {education.map((e) => (
              <Row justify="between" align="end" key={e.school}>
                <Text typeScale="bodyMd">
                  <Text as="span" typeScale="bodyMd" weight="semibold">
                    {e.school}
                  </Text>
                  {e.program && ` — ${e.program}`}
                </Text>
                {e.dates && (
                  <Text typeScale="bodySm" prominence="subtle">
                    {e.dates}
                  </Text>
                )}
              </Row>
            ))}
          </Stack>
        </Stack>

        <Alert
          variant="info"
          className={`${styles.noPrint} ${styles.colophon}`}
        >
          Built with Pearl — every component on this page is a real, shipped
          component from a design system exploring AI-forward infrastructure. Try the components yourself in the{' '}
          <Link href="https://msanagu.github.io/pearl-playground/" target="_blank" rel="noopener noreferrer">
            Pearl Playground
          </Link>
          .
        </Alert>

        <Text
          as="footer"
          typeScale="bodySm"
          prominence="subtle"
          className={`${styles.noPrint} ${styles.pageFooter}`}
        >
          {contact.name} · {contact.title}
        </Text>
      </div>
    </>
  );
}

export default App;
