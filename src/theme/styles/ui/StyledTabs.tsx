import { TabList, TabPanel } from '@mui/lab';
import { List } from '@mui/material';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledTabsList = styled(TabList)`
  .css-cat43h-MuiButtonBase-root-MuiTab-root {
    text-transform: capitalize;
  }
  .css-1pyy021-MuiTabs-flexContainer {
    gap: 56px;
  }
  .css-cat43h-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: #212121;
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  ${tw`w-[690px] h-[230px] overflow-auto`}
`;
export const StyledList = styled(List)`
  ${tw`grid grid-cols-2 gap-x-5 mb-4`}
  .MuiListItemText-root{
    margin: 0 0 0 0;
      }
  .MuiTypography-root{
    font-size: 14px;
    line-height: 140%';
  }
`;
