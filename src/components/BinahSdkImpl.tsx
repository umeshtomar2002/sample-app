import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import BinahMonitor from './BinahMonitor';
import SettingsBars from './SettingsBars';
import { Flex } from './shared/Flex';
import { useCameras, useDisableZoom } from '../hooks';
import UAParser from 'ua-parser-js';
import Sidebar from './Sidebar';
import { Button } from 'antd';
import {useNavigate} from "react-router-dom";

const Container = styled(Flex)<{ isSettingsOpen: boolean }>`
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
          <header id="header">
							<ul className="icons">
								<li><a href="#" className="icon"><i className="fa fa-language" aria-hidden="true"></i></a></li>
                                <li><Button onClick={()=> backButton()}> Reset </Button></li>
							</ul>
						</header>
           </div> 
           </div>
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
      <Sidebar />
    </div>
  );
};

export default BinahSdkImpl;
