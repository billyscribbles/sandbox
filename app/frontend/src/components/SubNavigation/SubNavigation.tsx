import React from 'react';
import { Menu } from 'semantic-ui-react';

export type SubNavigationProps = {
    submenus?: string[];
    prepRequired?: boolean;
};

export default function SubNavigation({ submenus, prepRequired = false }: SubNavigationProps): JSX.Element {
    return (
        <Menu secondary pointing>
            {submenus?.map(submenu => {
                return <Menu.Item name={submenu} key={submenu} />;
            })}
            <Menu.Menu position="right">
                {prepRequired && <Menu.Item name="How to Prep" />}
                <Menu.Item name="FAQ" />
                <Menu.Item name="Contact Restaurant" />
            </Menu.Menu>
        </Menu>
    );
}
