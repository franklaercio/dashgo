import { Stack } from '@chakra-ui/react';
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';


export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink href="/dashboard" icon={RiDashboardLine} title="Dashboard" />
          <NavLink href="/users" icon={RiContactsLine} title="Usuários" />
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink href="/forms" icon={RiInputMethodLine} title="Formulários" />
          <NavLink href="/automation" icon={RiGitMergeLine} title="Automação" />
        </NavSection>
    </Stack>
  );
}