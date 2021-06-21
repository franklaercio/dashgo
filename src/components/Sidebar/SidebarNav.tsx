import { Stack } from '@chakra-ui/react';
import { NavSection } from './NavSection';
import { NavLink } from './NavLink';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';


export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} title="Dashboard" />
        <NavLink icon={RiContactsLine} title="Usuários" />
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} title="Formulários" />
        <NavLink icon={RiGitMergeLine} title="Automação" />
        </NavSection>
    </Stack>
  );
}