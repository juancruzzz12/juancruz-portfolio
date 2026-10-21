import { education, experience, profile, projects, skills } from '@/data/portfolio';

function WorkLink({ href, children }: { href: string; children: React.ReactNode }) {
  return href ? <a className="work-link" href={href} target="_blank" rel="noopener noreferrer">{children}</a> : <span className="work-link unlinked">{children}</span>;
}

function SocialIcon({ name }: { name: 'github' | 'linkedin' }) {
  if (name === 'github') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9A11.1 11.1 0 0 0 8.49 22.5c.55.1.76-.24.76-.54v-2.1c-3.08.68-3.73-1.3-3.73-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.68.08-.68 1.11.08 1.69 1.14 1.69 1.14.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.46-.28-5.04-1.23-5.04-5.49 0-1.21.43-2.2 1.14-2.97-.11-.28-.49-1.41.11-2.93 0 0 .93-.3 3.05 1.13A10.6 10.6 0 0 1 12 6.47c.94 0 1.88.13 2.76.37 2.12-1.44 3.05-1.13 3.05-1.13.6 1.52.22 2.65.1 2.93.72.77 1.15 1.76 1.15 2.97 0 4.27-2.59 5.2-5.06 5.48.4.35.76 1.03.76 2.08v2.79c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>;
  if (name === 'linkedin') return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.94 18.75H4.96V9.2h2.98v9.55ZM6.45 7.89a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46Zm12.3 10.86h-2.98V14.1c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.77 1.2-1.77 2.44v4.73H9.48V9.2h2.86v1.3h.04c.4-.75 1.37-1.54 2.81-1.54 3 0 3.56 1.98 3.56 4.56v5.23Z"/></svg>;
}

export default function Home() {
  return <main id="top" className="page">
    <header className="topbar">
      <a href="#top" className="name">{profile.name}</a>
      <nav className="topnav" aria-label="Main navigation">
        <a href="#experience" className="active">experience</a>
        <a href="#about">about</a>
        <a href={`https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noopener noreferrer">contact</a>
        <a href={profile.resume || '#resume'} className="muted" target={profile.resume ? '_blank' : undefined} rel={profile.resume ? 'noopener noreferrer' : undefined}>resume <span aria-hidden="true">▤</span></a>
      </nav>
    </header>

    <div className="petal petal-one" aria-hidden="true"/><div className="petal petal-two" aria-hidden="true"/><div className="petal petal-three" aria-hidden="true"/><div className="petal petal-four" aria-hidden="true"/>

    <section className="content-section first" id="experience">
      <h2>work</h2>
      <div className="items">
        {experience.map(item => <article className="item" key={item.company}>
          <p>{item.description} at <WorkLink href={item.href}>{item.company}</WorkLink></p>
          <p className="subline">{item.period}{item.detail ? ` - ${item.detail}` : ''}</p>
        </article>)}
      </div>
    </section>

    <section className="content-section" id="projects">
      <h2>projects</h2>
      <div className="items">
        {projects.map(item => <article className="item" key={item.name}>
          <p><WorkLink href={item.href}>{item.name}</WorkLink> — {item.summary}</p>
          <p className="subline">{item.stack}</p>
        </article>)}
      </div>
    </section>

    <section className="content-section" id="about">
      <h2>about</h2>
      <div className="items about-copy">
        <p>hi, i'm juan! i'm a computer science graduate from {education.school}. i enjoy building software that solves real-world problems, especially tools for retail and logistics.</p>
        <p>outside of coding, i'm into traveling, music, and working on side projects.</p>
        <p className="subline">{education.degree} · {education.period} · {profile.location}</p>
      </div>
    </section>

    <section className="content-section" id="skills">
      <h2>technologies</h2>
      <p className="subline">{skills.join(', ')}</p>
    </section>

    <section className="content-section" id="contact">
      <h2>contact</h2>
      <p>feel free to connect with me through the links below{profile.email ? <> or <a className="work-link" href={`https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noopener noreferrer">email me</a></> : null}.</p>
    </section>
    {!profile.resume && <section className="visually-hidden" id="resume"><h2>resume</h2><p>add your resume.pdf to public and update data/portfolio.ts to enable the download.</p></section>}

    <footer className="socials" aria-label="Social links">
      <a href={profile.github || 'https://github.com/'} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><SocialIcon name="github"/></a>
      <a href={profile.linkedin || 'https://www.linkedin.com/'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><SocialIcon name="linkedin"/></a>
    </footer>
  </main>;
}