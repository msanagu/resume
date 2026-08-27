import {
  PiEnvelopeSimpleBold,
  PiLinkedinLogoBold,
  PiMapPinBold,
} from "react-icons/pi";
import {
  Alert,
  Button,
  Card,
  Icon,
  Row,
  Stack,
  Tag,
  Text,
  color,
} from "@msanagu/design-system";
import "./App.css";
import { contact, summary, experience, skills, education } from "./resume";

function App() {
  return (
    <>
      <Row
        justify="end"
        gap="sm"
        className="no-print toolbar"
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

      <div className="page">
        <Stack as="header" gap="lg" className="intro">
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

          <Row gap="lg" className="contact-row">
            <Row gap="xs" align="center">
              <Icon
                icon={PiMapPinBold}
                size={16}
                style={{ color: color.textSubtle }}
              />
              <Text typeScale="bodySm" prominence="subtle">
                {contact.location}
              </Text>
            </Row>
            <Row gap="xs" align="center">
              <Icon
                icon={PiEnvelopeSimpleBold}
                size={16}
                style={{ color: color.textSubtle }}
              />
              <a href={`mailto:${contact.email}`} className="plain-link">
                <Text typeScale="bodySm" prominence="subtle">
                  {contact.email}
                </Text>
              </a>
            </Row>
            <Row gap="xs" align="center">
              <Icon
                icon={PiLinkedinLogoBold}
                size={16}
                style={{ color: color.textSubtle }}
              />
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="plain-link"
              >
                <Text typeScale="bodySm" prominence="subtle">
                  {contact.linkedin}
                </Text>
              </a>
            </Row>
          </Row>
        </Stack>

        <Card className="summary">
          <Card.Body>
            <Text as="p" typeScale="bodyLg">
              {summary}
            </Text>
          </Card.Body>
        </Card>

        <Stack as="section" gap="lg" className="block">
          <Text as="h2" typeScale="headingMd">
            Experience
          </Text>
          <Stack gap="md">
            {experience.map((job) => (
              <Card key={job.title + job.dates} className="job-card">
                <Card.Header>
                  <Row
                    justify="between"
                    align="start"
                    wrap
                    className="job-header"
                  >
                    <Text as="h3" typeScale="headingSm">
                      {job.title} · {job.company}
                    </Text>
                    <Text
                      typeScale="bodySm"
                      prominence="subtle"
                      className="job-dates"
                    >
                      {job.dates}
                    </Text>
                  </Row>
                  <Text typeScale="bodySm" prominence="subtle">
                    {job.location}
                  </Text>
                </Card.Header>
                <Card.Body>
                  <ul className="bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>
                        <Text as="span" typeScale="bodyMd">
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

        <Stack as="section" gap="lg" className="block">
          <Text as="h2" typeScale="headingMd">
            Skills
          </Text>
          <div className="skills-grid">
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

        <Stack as="section" gap="lg" className="block">
          <Text as="h2" typeScale="headingMd">
            Education
          </Text>
          <Stack gap="sm">
            {education.map((e) => (
              <Row
                justify="between"
                align="end"
                key={e.school}
                className="education-item"
              >
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

        <Alert variant="info" className="no-print colophon">
          Built with Pearl — every component on this page is a real, shipped
          component from a design system exploring AI-native infrastructure, not
          a mockup.
        </Alert>

        <Text
          as="footer"
          typeScale="bodySm"
          prominence="subtle"
          className="no-print page-footer"
        >
          {contact.name} · {contact.title}
        </Text>
      </div>
    </>
  );
}

export default App;
