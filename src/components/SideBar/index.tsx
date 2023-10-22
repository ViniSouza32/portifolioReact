/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";
import { Link } from "@/components/Link";
import { Profile } from "@/components/Profile";
import { WorkExperience } from '../WorkExperience';


export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <Profile />
      <div className={styles.socialMedia}>
        <Link
          to="https://www.linkedin.com/in/vinicius-schafer-07a474292/"
          title="Linkedin"
          isExternal
        />
        <Link to="https://github.com/ViniSouza32" title="GitHub" isExternal />
        <Link to="#" title="Instagram" isExternal />
      </div>
      <div className={styles.workExperience}>
        <span>Experiência</span>
        <WorkExperience
          rule="Assistente de Administração"
          year="2021"
          company="Minuano"
        />
      </div>
    </aside>
  );
}
