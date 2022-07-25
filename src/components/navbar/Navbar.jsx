import { useState } from 'react';
import { Text, Button, Tooltip, Modal, Switch } from '@nextui-org/react';
import Link from 'next/link';
import useMediaQuery from '../../hooks/useMediaQuery';

import styles from '../../styles/components/Navbar.module.css';
import HeritageLogo from '../icons/HeritageLogo';
import MoonIcon from '../icons/MoonIcon';
import PeruIcon from '../icons/PeruIcon';
import PhoneIcon from '../icons/PhoneIcon';
import DarkModeIcon from '../icons/DarkModeIcon';
import TranslationIcon from '../icons/TranslationIcon';
import UsaIcon from '../icons/UsaIcon';
import SunIcon from '../icons/SunIcon';

const Navbar = () => {

    // mediaqueries con js
    const isDesktop = useMediaQuery('(min-width: 1000px)')

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div className={styles.navbar_wrapper}>
            <nav className={styles.navbar}>
                <Tooltip content={`Asesora Comercial`} color={'invert'} placement={'bottom'} hideArrow>
                    <Link href="/">
                        <a className={styles.logo_container}>
                            <HeritageLogo/>
                            {
                                <div className={styles.logo_text}>
                                    <Text className={styles.logotitle}>Yovanna</Text>
                                    <Text className={styles.logosubtitle}>Torres</Text>
                                </div>
                            }
                        </a>
                    </Link>
                </Tooltip>
                {isDesktop ?
                    <>
                        {
                            <>
                                <div className={styles.navigations}>
                                    <Link href="/">
                                        <a className={styles.navigation_item}>
                                            <Text className={styles.navigation_item_text}>Inicio</Text>
                                        </a>
                                    </Link>
                                    <Link href="/sobremi">
                                        <a className={styles.navigation_item}>
                                            <Text className={styles.navigation_item_text}>Sobre mí</Text>
                                        </a>
                                    </Link>
                                    <Link href="/telas">
                                        <a className={styles.navigation_item}>
                                            <Text className={styles.navigation_item_text}>Telas</Text>
                                        </a>
                                    </Link>
                                    <Link href="/nosotros">
                                        <a className={styles.navigation_item}>
                                            <Text className={styles.navigation_item_text}>Nosotros</Text>
                                        </a>
                                    </Link>
                                    <Link href="/contacto">
                                        <a className={styles.navigation_item}>
                                            <Text className={styles.navigation_item_text}>Contacto</Text>
                                        </a>
                                    </Link>
                                </div>
                            </>
                        }
                        <div className={styles.navOptions}>
                            <Tooltip content={"Lenguaje Español Perú"} color={'invert'} placement={'bottom'} hideArrow>
                                <div className={styles.navOption}>
                                    <PeruIcon />
                                    ES
                                </div>
                            </Tooltip>
                            <Tooltip content={"Ir a modo oscuro"} color={'invert'} placement={'bottom'} hideArrow>
                                <div className={styles.navOption}>
                                    <MoonIcon fill={'#555'}/>
                                </div>
                            </Tooltip>
                            <Button
                                auto
                                css={{
                                    '&:hover': {
                                        boxShadow: '0 4px 12px -5px var(--nextui-colors-primaryShadow)',
                                    },
                                }}
                                icon={<PhoneIcon/>}
                            >
                                <Text css={{fontSize: '1rem', color: 'text'}}>Llámame</Text>
                            </Button>
                        </div>
                    </>
                    :
                    <div 
                        className={styles.burgerMenu}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className={`${styles.linea} ${styles.linea1}`}></div>
                        <div className={`${styles.linea} ${styles.linea2}`}></div>
                        <div className={`${styles.linea} ${styles.linea3}`}></div>
                    </div>
                }
            </nav>
        </div>
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            blur={true}
            width={'100%'}
            autoMargin={false}
            // noPadding
            scroll
            fullScreen={true}
            css={{
                borderRadius: '0px',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }}
        >
            <Modal.Body>
                <div className={styles.menuGrid}>
                    <div>
                        <Text css={{marginBottom: '.8rem'}} h3>Enlaces</Text>
                        <div className={styles.menuDrop}>
                            <div className={styles.mobileMenu_navigations}>
                                <Link href="/">
                                    <a className={styles.mobileMenu_navigations_item}>
                                        <Text className={styles.mobileMenu_navigations_text}>Inicio</Text>
                                    </a>
                                </Link>
                                <Link href="/sobremi">
                                    <a className={styles.mobileMenu_navigations_item}>
                                        <Text className={styles.mobileMenu_navigations_text}>Sobre mí</Text>
                                    </a>
                                </Link>
                                <Link href="/telas">
                                    <a className={styles.mobileMenu_navigations_item}>
                                        <Text className={styles.mobileMenu_navigations_text}>Telas</Text>
                                    </a>
                                </Link>
                                <Link href="/nosotros">
                                    <a className={styles.mobileMenu_navigations_item}>
                                        <Text className={styles.mobileMenu_navigations_text}>Nosotros</Text>
                                    </a>
                                </Link>
                                <Link href="/contacto">
                                    <a className={styles.mobileMenu_navigations_item}>
                                        <Text className={styles.mobileMenu_navigations_text}>Contacto</Text>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Text css={{marginBottom: '.8rem'}} h3>Preferencias</Text>
                        <div className={styles.menuDrop}>
                            <MenuOption
                                icon={<DarkModeIcon />}
                                valor1={<SunIcon />}
                                valor2={<MoonIcon />}
                                item={<Switch color={'success'} />}
                            >
                                Modo Oscuro
                            </MenuOption>
                            <MenuOption
                                icon={<TranslationIcon />}
                                valor1={<PeruIcon />}
                                valor2={<UsaIcon />}
                                item={<Switch color={'success'} />}
                            >
                                Lenguaje
                            </MenuOption>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}

const MenuOption = ({children, icon, item, valor1, valor2}) => {
    return (
        <div className={styles.menuOption}>
            <div className={styles.menuOption_left}>
                <div className={styles.toolIcon}>
                    {icon}
                </div>
                <Text b>{children}</Text>
            </div>
            <div className={styles.menuOption_right}>
                {valor1}
                {item}
                {valor2}
            </div>
        </div>
    )
}

export default Navbar;