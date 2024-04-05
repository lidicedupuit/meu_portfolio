import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Description, ThemeButton, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Schorchi Hutschinski</Titulo>
      <Paragrafo type="secundario" fontSize={16}>
        schorchi-GH
      </Paragrafo>
      <Description type="principal" fontSize={12}>
        Python Full Stack Developer
      </Description>
      <ThemeButton onClick={props.changeTheme}>Dark & Light</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
