import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 200 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={1000}
        step={10}
        marks
        min={0}
        max={100000}
      />
    </Box>
  );
}

