import Select from 'react-select';
import styled from 'styled-components';
export const Selectors = styled(Select)`
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radii.m};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.liteWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: 0;
  width: 120px;
  height: 46px;
  padding: 14px;

  &.css-b62m3t-container {
    position: absolute !important;
    top: 45px;
    right: 39px;
    cursor: default;
  }

  .react-select__control {
    background-color: transparent !important;
    border: none !important;
    outline: none;
    box-shadow: none;
    display: flex;
  }
  /* .react-select__control--is-focused {
    background-color: transparent !important;
    border: none !important;
    outline: none;
    box-shadow: none;
    display: flex;
  } */
  .css-art2ul-ValueContainer2 {
    /* overflow: visible !important;
    padding: 0; */
  }
  .css-1dimb5e-singleValue {
    color: ${({ theme }) => theme.colors.white} !important;
  }

  .css-1u9des2-indicatorSeparator {
    display: none;
  }
  .css-1xc3v61-indicatorContainer2 {
    padding: 0;
  }

  .css-13cymwt-control:hover {
    border: none;
  }
  .css-1nmdiq5-menu {
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: ${({ theme }) => theme.radii.m};

    width: 153px;
    padding: 14px;
    border: none;
    left: -1px;
  }
  /* .react-select__input {
    display: none;
  } */

  .css-d7l1ni-option {
    background-color: transparent !important;
  }
  /* .css-w9q2zk-Input2 {
    display: block;
  } */
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
  }
  @media screen and (min-width: 1440px) {
    width: 153px;
    position: absolute;

    right: 39px;
  }
`;
