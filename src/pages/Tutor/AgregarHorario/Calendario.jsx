import * as React from "react";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box } from "@mui/material";
import es from "date-fns/locale/es";
import { he } from "date-fns/locale";

const boxStyles ={
  height: "100%", 
  backgroundColor: "white", 
  borderRadius: "20px", 
  border: "none",
  overflow: "hidden",
  width: "60%"
}

const layautStyles = {
  height: "100%",
  backgroundColor: "white",
}


const dataStyles = {
  "&.Mui-selected": {
    backgroundColor: "#28AD56 !important",
  },
}

const Calendario = ({ fecha, setFecha }) => {

  const handleChange = (nuevoValor) =>{
    if(nuevoValor){
      setFecha(nuevoValor)
    }

  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <Box

        sx={{
    backgroundColor: "white",
    borderRadius: "20px",
    overflow: "hidden",
    width: "100%",
    maxWidth: "320px", // Limita el ancho del calendario
    margin: "0 auto", // Centrado
    transform: "scale(0.9)", // Escalado para móvil
    transformOrigin: "top center", // Escala desde arriba
  }}

      >
        <StaticDatePicker
          value={fecha}
          onChange={handleChange}
          displayStaticWrapperAs="desktop"
          slotProps={{
            layout: {sx: layautStyles},
            day: {sx: dataStyles},
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default Calendario;
