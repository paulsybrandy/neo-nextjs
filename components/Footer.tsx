import * as React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  pageId: string
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ pageId, isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const notionUrl = `https://notion.so/${config.name}/${pageId.replace(
    /-/g,
    ''
  )}`

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        {new Date().getFullYear()} ©{' '}
        <a
          href={`mailto:${config.email}?subject=Hey ${config.authorNickname}!`}
        >
          {config.author}
        </a>
        {config.showViewInNotion && (
          <>
            ·{' '}
            <a
              style={{ textDecoration: 'underline' }}
              href={notionUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              View in Notion
            </a>
          </>
        )}
      </div>

      <div className={styles.social}>
        {hasMounted ? (
          <>
            <a
              className={styles.toggleDarkMode}
              onClick={toggleDarkModeCb}
              title='Tottle dark mode'
            >
              {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
            </a>
            <span className={styles.darkModeDivider}>|</span>
          </>
        ) : null}
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}
      </div>
    </footer>
  )
}
