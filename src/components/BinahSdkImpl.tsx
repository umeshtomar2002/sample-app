import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import BinahMonitor from './BinahMonitor';
import SettingsBars from './SettingsBars';
import { Flex } from './shared/Flex';
import { useCameras, useDisableZoom } from '../hooks';
import UAParser from 'ua-parser-js';
import Sidebar from './SidebarOld';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import SidebarNew from './SidebarNew';

const Container = styled(Flex) <{ isSettingsOpen: boolean }>`
  height: 100%;
  width: 100%;
  position: relative;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${({ isSettingsOpen }) =>
    isSettingsOpen && 'rgba(0, 0, 0, 0.5)'};
`;

const BinahSdkImpl = () => {
  let navigate = useNavigate();
  const cameras = useCameras();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [cameraId, setCameraId] = useState<string>();
  const [isLicenseValid, setIsLicenseValid] = useState(false);
  const [isMobile] = useState(
    UAParser(navigator.userAgent).device.type === 'mobile',
  );
  useDisableZoom();

  const onSettingsClickedHandler = useCallback((event) => {
    const settingsBars = document.getElementById('settingsBars');
    const isSettingsButtonClicked = event.target.id === 'settingsButton';

    const isInsideSettingsClicked =
      settingsBars.contains(event.target as Node) || isSettingsButtonClicked;

    if (!isInsideSettingsClicked) {
      setIsSettingsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', onSettingsClickedHandler);
    return () => {
      document.removeEventListener('click', onSettingsClickedHandler);
    };
  }, []);

  const updateLicenseStatus = useCallback((valid) => {
    setIsLicenseValid(valid);
  }, []);

  const toggleSettingsClick = useCallback(() => {
    setIsSettingsOpen(!isSettingsOpen);
  }, [isSettingsOpen]);

  const handleCloseSettings = useCallback(({ cameraId }) => {
    setCameraId(cameraId);
    setIsSettingsOpen(false);
  }, []);

  useEffect(() => {
    if (!cameras?.length) return;
    setCameraId(cameras[0].deviceId);
  }, [cameras]);

  function backButton() {
    navigate(-1)
  }

  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <header id="header1">
            <ul className="icons">
              {/* <li><a href="#" className="icon"><i className="fa fa-language" aria-hidden="true"></i></a></li> */}
            </ul>
          </header>
          <section id="inside">
            <div className="content">
              <header>
                <h2 className="align-center hideonmobile">Ready to measure your vitals.</h2>
                <p className="align-center mobMargin">Relax sit still, breathe normally. Ensure your face is evenly illuminated and there is no direct light source in front or behind you.</p>
              </header>
              <article className="align-center">
                <a href="#" className="image align-center"></a>
                {/* <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p> */}
              </article>

            </div>
          </section>
          <div className="content">
            <Container isSettingsOpen={isSettingsOpen}>
              <BinahMonitor
                showMonitor={!(isMobile && isSettingsOpen)}
                cameraId={cameraId}
                onLicenseStatus={updateLicenseStatus}
                onSettingsClick={toggleSettingsClick}
                isSettingsOpen={isSettingsOpen}
              />
              <SettingsBars
                open={isSettingsOpen}
                onClose={handleCloseSettings}
                cameras={cameras}
                isLicenseValid={isLicenseValid}
              />
            </Container>
          </div>
          <div className="align-center" id="noteInfo">
              <p><strong>Note : </strong> Please click on black button to start scan</p>
          </div>
        </div>
      </div>
      <SidebarNew />
    </div>
  );
};

export default BinahSdkImpl;
