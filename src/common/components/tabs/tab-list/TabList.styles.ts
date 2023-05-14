import { SxProps, Theme } from "@mui/system";

export const tabList: SxProps<Theme> = {
  width: "fit-content",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  ".Mui-selected": {
    color: "blue.400",
  },
};
