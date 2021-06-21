import { Link as ChakraLink, Icon, Text, LinkProps as ChakaraLinkProps } from '@chakra-ui/react';
import { ElementType } from 'react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakaraLinkProps{
  icon: ElementType;
  title: string;
  href: string;
}

export function NavLink({icon, title, href,...rest}: NavLinkProps) {
  return(
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" aling="center" {...rest}>
          <Icon as={icon} fontSize="20" />
          <Text ml="4" fontWeight="medium">{title}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}