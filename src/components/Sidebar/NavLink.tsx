import { Link, Icon, Text, LinkProps as ChakaraLinkProps } from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLinkProps extends ChakaraLinkProps{
  icon: ElementType;
  title: string;
}

export function NavLink({icon, title, ...rest}: NavLinkProps) {
  return(
    <Link display="flex" aling="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{title}</Text>
    </Link>
  );
}