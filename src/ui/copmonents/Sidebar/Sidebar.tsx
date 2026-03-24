import React from 'react';

import styles from './Sidebar.module.scss'
import Icon, { type IconPath } from '../Icon';
import Stack from '../Stack';
import Button from '../Button';

import { v4 as uuidv4 } from 'uuid';

export interface SidebarLinks {
    to: string;
    label: string;
    tooltip?: string;
    icon?: IconPath;
}

export interface SidebarSections {
    section?: string;
    links: SidebarLinks[]
}

export interface SidebarProps {
    items: SidebarSections[];
    logo: string;
    orgName: string;
    userPhoto: string;
    userName: string;
    userRole: string;
    logout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    items,
    logo,
    logout,
    orgName,
    userName,
    userPhoto,
    userRole
}) => {
    const [menuShrink, setMenuShrink] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(sessionStorage.getItem('activeTab') || 0);

    const toggleMenu = () => {
        setMenuShrink(!menuShrink);
    }

    const changeLink = (id: number) => {
        setActiveTab(id);
        sessionStorage.setItem('activeTab', id.toString());
    }

    const logoutHandler = () => {
        logout();
        sessionStorage.removeItem('activeTab');
    }

    let i = 0;

    const onKeyDownShrink = (event: React.KeyboardEvent<HTMLElement>) => {
        if(event.code === 'Space') {
            event.preventDefault();
            toggleMenu();
        }
        if(event.code === 'Escape') {
            setMenuShrink(true);
        }
    }

    const onKeyDownLogout = (event: React.KeyboardEvent<HTMLElement>) => {
        if(event.code === 'Enter') {
            event.preventDefault();
            logout();
        }
    }

    return (
        <nav className={menuShrink ? `${styles.wrapper} ${styles.shrink}` : styles.wrapper} onKeyDown={onKeyDownShrink}>

            <Stack 
                className={styles.header}
                direction='row' gap='sm' justify='flex-start' align='center' >
                <span className={styles.shrink_btn} onClick={toggleMenu}>
                    <Icon name='ARROWDOWN' color='primary' size='xl' />
                </span>
                <img src={logo} alt="" className={styles.logo}/>
                <h3 className={styles.hide}>{orgName}</h3>
            </Stack>

            <div className={styles.content} >

                {items.map((item, index) => {                 
                    return (
                        <>
                            {item.section && (
                                <div key={item.section} className={styles.split}>
                                    <h4 className={styles.hide}>{item.section}</h4>
                                    {menuShrink && <span></span>}
                                </div>
                            )}
                            <ul key={uuidv4()}>
                                {/* {index === 0 && (
                                    <div className={styles.activeTab} style={{top: `calc(${activeTab} * 70px + 10px)`}}></div>
                                )} */}
                                {item.links.map((el) => {
                                    const linkNumber = index + i;
                                    i++
                                    return (
                                        // <li className={styles.tooltipWrapper}>
                                        //     <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to={el.to} onClick={() => changeLink(linkNumber)}>
                                        //         {el.icon && el.icon}
                                        //         <p className={styles.hide}>{el.text}</p>
                                        //         <span className={styles.tooltip}>{el.tooltip}</span>
                                        //     </NavLink>
                                        // </li>
                                        <li key={el.to} className={styles.tooltipWrapper}>
                                            <a
                                                tabIndex={0}
                                                href={el.to}
                                                className={linkNumber === activeTab ? styles.active : ''}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    changeLink(linkNumber);
                                                }}
                                            >
                                                {el.icon && (
                                                    <div className={styles.iconWrapper}>
                                                        <Icon name={el.icon} />
                                                    </div>
                                                )}
                                                <p className={styles.hide}>{el.label}</p>
                                                {el.tooltip && (<span className={styles.tooltip}>{el.tooltip}</span>)}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                    )
                })}
            </div>
            <Stack 
                className={styles.footer}
                direction='column' gap='md' justify='center' align='stretch' >
                <Stack 
                    className={`${styles.profile} ${styles.tooltipWrapper}`}
                    direction='row' gap='md' justify='flex-start' align='center' >
                    <img src={userPhoto} alt=""/>
                    <Stack 
                        className={`${styles.info} ${styles.hide}`}
                        direction='column' gap='sm' justify='flex-start' align='stretch' >
                        <span className={styles.name}>{userName}</span>
                        <span className={styles.role}>{userRole}</span>
                    </Stack>
                    <span className={styles.tooltip}>{userName}</span>
                </Stack>
                <Button 
                    className={styles.tooltipWrapper}
                    variant={'secondary'} intent='destructive' icon='REMOVE'
                    onClick={logoutHandler} onKeyDown={onKeyDownLogout} >
                    <p className={styles.hide}>Выйти</p>
                    <span className={styles.tooltip}>Выйти</span>
                </Button>
            </Stack>
        </nav>
    );
};

export default Sidebar;