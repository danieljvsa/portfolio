import type { Project } from '../data/projects'
import styles from '../styles/Home.module.scss'

type Props = { project: Project; index: number; locale: 'en' | 'pt'; source: string; professional: string }

export default function ProjectCard({ project, index, locale, source, professional }: Props) {
  return <article className={styles.project}><span className={styles.projectIndex}>0{index + 1}</span><h3>{project.name}</h3><p>{project.description}</p><div className={styles.tags}>{project.stack.map(tag => <span className={styles.tag} key={tag}>{tag}</span>)}</div><div className={styles.projectFooter}><span className={styles.outcome}>{project.outcome}</span>{project.href ? <a className={styles.projectLink} href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.website ? (locale === 'en' ? 'Visit website' : 'Visitar website') : source}: ${project.name} (${locale === 'en' ? 'opens in a new tab' : 'abre num novo separador'})`}>{project.website ? (locale === 'en' ? 'Visit website' : 'Visitar website') : source} ↗</a> : <span className={styles.projectLink}>{professional}</span>}</div></article>
}
