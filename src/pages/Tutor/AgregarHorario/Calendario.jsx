import * as React from "react";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box } from "@mui/material";
import es from "date-fns/locale/es";


const Calendario = ({ fecha, setFecha }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <Box
        sx={{
          height: "100%", 
          backgroundColor: "white", 
          borderRadius: "20px",
          border: "none",
          overflow: "hidden",
          width: "60%" 
        }}
      >
        <StaticDatePicker
          value={fecha}
          onChange={(newValue) => setFecha(newValue)}
          displayStaticWrapperAs="desktop"
          slotProps={{
            layout: {
              sx: {
                height: "100%",
                backgroundColor: "white",
              },
            },
            day: {
              sx: {
                "&.Mui-selected": {
                  backgroundColor: "#28AD56 !important",
                },
              },
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default Calendario;
