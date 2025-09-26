import Select from 'react-select';

import styled from 'styled-components';

export const Selectors = styled(Select)`
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radii.m};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.liteWhite};
  outline: 0;
  position: absolute !important;
  right: 0;
  cursor: none;

  .react-select__control {
    background-color: transparent !important;
    border: none !important;
    padding: 12px;
    width: 120px;
    height: 46px;
    outline: 0;
    box-shadow: none;
  }

  .css-art2ul-ValueContainer2 {
    padding: 0;
  }
  .css-1dimb5e-singleValue {
    color: ${({ theme }) => theme.colors.white} !important;
  }

  .css-1u9des2-indicatorSeparator {
    display: none;
  }
  .react-select__indicator {
    padding: 0;
  }

  .css-1xc3v61-indicatorContainer2 {
    padding: 0;
    align-items: start;
  }
  .css-1xc3v61-indicatorContainer {
    padding: 0;
  }
  .css-13cymwt-control:hover {
    border: none;
  }
  .css-1nmdiq5-menu {
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: ${({ theme }) => theme.radii.m};
    border-color: transparent;
    padding: 14px;
    border: none;
    left: -1px;
  }

  .css-d7l1ni-option {
    background-color: transparent !important;
  }

  .css-tr4s17-option:active {
    background-color: transparent !important;
  }
  .css-1dimb5e-singleValue {
    max-width: 100%;
    overflow: visible;
    text-overflow: none;
    white-space: nowrap;
    color: none;
    margin: 0;
  }

  .react-select__option {
    color: ${({ theme }) => theme.colors.grey}!important;
  }
  .react-select__option--is-selected {
    background-color: transparent !important;
    color: ${({ theme }) => theme.colors.white}!important;
  }
  .css-tj5bde-Svg {
    display: inline-block;
    fill: currentColor;
    line-height: 1;
    stroke: currentColor;
    stroke-width: 0;
    width: 14px;
    height: 14px;
  }

  .react-select__control--menu-is-open .react-select__indicator svg {
    transform: rotate(180deg);
    transition-property: rotate;
    transition-duration: 250ms;
  }

  .css-tj5bde-Svg {
    fill: #fff;
  }
  @media screen and (min-width: 1440px) {
    width: 153px;

    .react-select__control {
      background-color: transparent !important;
      border: none !important;
      padding: 12px;
      width: 100%;
      height: 46px;
    }
  }
`;
