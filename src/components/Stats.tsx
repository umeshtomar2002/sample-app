import React from 'react';
import styled from 'styled-components';
import StatsBox from './StatsBox';
import { Flex } from './shared/Flex';
import { isMobile } from '@binah/web-sdk';

const Wrapper = styled(Flex)`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  padding: 13px 50px;
  bottom: 30px;
  box-sizing: border-box;
`;

const BoxesWrapper = styled(Flex)`
  gap: 30px;
`;

interface VitalSign<T> {
  value: T;
  isEnabled: boolean;
}

interface IStats {
  /**
   *  Object - contains health stats info
   */
  vitalSigns: {
    heartRate: VitalSign<number>;
    breathingRate: VitalSign<number>;
    stress: VitalSign<number>;
    hrvSdnn: VitalSign<number>;
    spo2: VitalSign<number>;
    bloodPressure: VitalSign<BloodPressureValue>;
  };
}

export type BloodPressureValue = {
  systolic: number;
  diastolic: number;
};

const Stats = ({ vitalSigns }: IStats) => {
  const bloodPressureToDisplay =
    vitalSigns.bloodPressure.value?.systolic &&
    vitalSigns.bloodPressure.value?.diastolic
      ? vitalSigns.bloodPressure.value.systolic +
        '/' +
        vitalSigns.bloodPressure.value.diastolic
      : '--';

  return (
    <Wrapper>
      <BoxesWrapper>
        <StatsBox
          title={'HR'}
          value={
            vitalSigns.heartRate.isEnabled
              ? vitalSigns.heartRate.value || '--'
              : 'N/A'
          }
        />
        <StatsBox
          title={'BR'}
          value={
            vitalSigns.breathingRate.isEnabled
              ? vitalSigns.breathingRate.value || '--'
              : 'N/A'
          }
        />
        <StatsBox
          title={'SL'}
          value={
            vitalSigns.stress.isEnabled
              ? vitalSigns.stress.value || '--'
              : 'N/A'
          }
        />
        <StatsBox
          title={'SDNN'}
          value={
            vitalSigns.hrvSdnn.isEnabled
              ? vitalSigns.hrvSdnn.value || '--'
              : 'N/A'
          }
        />
        {/*<StatsBox*/}
        {/*  title={'SpO2'}*/}
        {/*  value={*/}
        {/*    vitalSigns.spo2.isEnabled ? vitalSigns.spo2.value || '--' : 'N/A'*/}
        {/*  }*/}
        {/*/>*/}
        {isMobile() && (
          <StatsBox
            title={'BP'}
            value={
              vitalSigns.bloodPressure.isEnabled
                ? bloodPressureToDisplay
                : 'N/A'
            }
          />
        )}
      </BoxesWrapper>
    </Wrapper>
  );
};

export default Stats;
