import React from 'react';
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

import { GlitchText } from "../components/GlitchText/GlitchText";
import InstaLogo from "../img/logos/instaLogo.png";
import TelegramLogo from "../img/logos/telegramLogo.png";
import SoundcloudLogo from "../img/logos/soundcloudLogo.png";
import EmailLogo from "../img/logos/emailLogo.png";

import './Main.less';

export const Main = () => {

    const { t } = useTranslation();

    return (
        <>
            <GlitchText glitchText={'State of Confusion'} overText={'Techno | Raves | Berlin'} />
            <div className="socialsContainer">
                <a
                    className="link"
                    href="https://instagram.com/stateofconfusionberlin"
                    target="_blank"
                >
                    <Tooltip
                        placement="bottom"
                        title={
                            <>
                                <i>State of Confusion</i> {t("general.on")} Instagram
                            </>
                        }
                    >
                        <img className="instaLogo" src={InstaLogo} id="insta" />
                    </Tooltip>
                </a >
                <a
                    className="link"
                    href="https://t.me/stateofconfusion"
                    target="_blank"
                >
                    <Tooltip
                        placement="bottom"
                        title={
                            <>
                                <i>State of Confusion</i> {t("general.on")} Telegram
                            </>
                        }
                    >
                        <img className="telegramLogo" src={TelegramLogo} id="telegram" />
                    </Tooltip>
                </a >
                <a
                    className="link"
                    href="https://soundcloud.com/stateofconfusion"
                    target="_blank"
                >
                    <Tooltip
                        placement="bottom"
                        title={
                            <>
                                <i>State of Confusion</i> {t("general.on")} Soundcloud
                            </>
                        }
                    >
                        <img className="soundcloudLogo" src={SoundcloudLogo} id="soundcloud" />
                    </Tooltip>
                </a >
                <Tooltip
                    placement="bottom"
                    title={
                        <>
                            {t("general.emailUs")}
                        </>
                    }
                >
                    <a className="link" href="mailto:mail@stateofconfusion.de">
                        <img className="emailLogo" src={EmailLogo} id="email" />
                    </a>
                </Tooltip>
            </div>
        </>
    )
}