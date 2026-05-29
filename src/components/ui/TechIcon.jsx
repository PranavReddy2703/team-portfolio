import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
} from 'react-icons/fa'
import {
  SiFastapi,
  SiTensorflow,
  SiScikitlearn,
  SiSqlite,
  SiMysql,
} from 'react-icons/si'
import { TbBrain, TbBinaryTree, TbDatabase } from 'react-icons/tb'

const MAP = {
  java: FaJava,
  python: FaPython,
  react: FaReact,
  fastapi: SiFastapi,
  ml: TbBrain,
  dl: TbBinaryTree,
  tensorflow: SiTensorflow,
  sklearn: SiScikitlearn,
  git: FaGitAlt,
  github: FaGithub,
  sql: TbDatabase,
  sqlite: SiSqlite,
  mysql: SiMysql,
  docker: FaDocker,
  linux: FaLinux,
}

export function TechIcon({ name, className }) {
  const Cmp = MAP[name] || TbBrain
  return <Cmp className={className} aria-hidden="true" />
}
