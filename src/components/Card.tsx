import '@styles/Card.scss'
import IconLink from '@components/IconLink.tsx'
import avatarUrl from '@assets/avatar.jpg'
import vkLogo from '@assets/logo/vk.svg'
import tgLogo from '@assets/logo/telegram.svg'
import ghLogo from '@assets/logo/github.svg'
import { differenceInYears } from 'date-fns'

const Card = () => {
  const formatAge = (n: number) => {
    const values = ['год', 'года', 'лет'];
    return n + ' ' + values[(n % 100 > 4 && n % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][ (n % 10 < 5) ? n % 10 : 5]];
  }

  return (
    <div className="card">
      <div className="avatar">
        <img src={avatarUrl} alt="Аватар"/>
      </div>

      <h1 className="card-name">Александр Коновалов</h1>
      <p className="card-short-about">
        Go-разработчик, {formatAge(differenceInYears(Date.now(), new Date(2004, 0, 24)))}
      </p>

      <div className="links">
        <IconLink iconUrl={ghLogo} alt="GitHub" href="https://github.com/shuryak"/>
        <IconLink iconUrl={tgLogo} alt="Telegram" href="https://t.me/shuryak"/>
        <IconLink iconUrl={vkLogo} alt="ВКонтакте" href="https://vk.com/sql"/>
      </div>
    </div>
  )
}

export default Card
