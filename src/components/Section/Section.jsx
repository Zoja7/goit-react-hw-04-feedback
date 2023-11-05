import css from './Section.module.css';
export default function Section({ children, title = ' ' }) {
  return (
    <section className={css.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
