/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css'

export function Profile() {
  return (
    <div>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/ViniSouza32.png"
          alt="Foto de Vinícius Schafer"
        />
        <h1 className={styles.name}>Vinícius Schafer</h1>
      </div>
      <h2>Especializações</h2>
      <span>
        Software Engineer | Frontend | Javascript | Java |Typescript | React | CSS |
        HTML
      </span>
    </div>
  );
}