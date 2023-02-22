import { Box, Button, styled } from "@mui/material";
import { useState } from 'react';
import './App.css';

type MyModel = {
  id: number;
  color: string;
}

const getRandomColor = (): string => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const StyledBox1 = styled(Box)(({ theme }) => ({
  backgroundColor: "red"
}));

const StyledBox2 = styled(Box, { shouldForwardProp: prop => prop !== "currentColor" })<{
  currentColor: string;
}>(({ theme, currentColor }) => ({
  backgroundColor: currentColor
}));

function App() {
  const [models, setModels] = useState<MyModel[]>([
    { id: 1, color: getRandomColor() },
    { id: 2, color: getRandomColor() },
    { id: 3, color: getRandomColor() },
    { id: 4, color: getRandomColor() },
    { id: 5, color: getRandomColor() },
    { id: 6, color: getRandomColor() },
    { id: 7, color: getRandomColor() },
    { id: 8, color: getRandomColor() },
    { id: 9, color: getRandomColor() },
    { id: 10, color: getRandomColor() },
  ]);

  const clickHandler = () => {
    const newModels: MyModel[] = [...models];
    newModels[0].color = getRandomColor();
    setModels(newModels);
  }

  return (
    <div className="App">
      {/* ✅ */}
      {/* {models.map(model => <Box key={model.id}>{model.id}</Box>)} */}

      {/* ✅ */}
      {/* {models.map(model => <StyledBox1 key={model.id}>{model.id}</StyledBox1>)} */}

      {/* ❌ */}
      {models.map(model => <StyledBox2 key={model.id} currentColor={model.color}>{model.id}</StyledBox2>)}

      {/* ❌ */}
      {/* <StyledBox2 currentColor={models[0].color}>{models[0].id}</StyledBox2>
      <StyledBox2 currentColor={models[1].color}>{models[1].id}</StyledBox2>
      <StyledBox2 currentColor={models[2].color}>{models[2].id}</StyledBox2>
      <StyledBox2 currentColor={models[3].color}>{models[3].id}</StyledBox2>
      <StyledBox2 currentColor={models[4].color}>{models[4].id}</StyledBox2>
      <StyledBox2 currentColor={models[5].color}>{models[5].id}</StyledBox2>
      <StyledBox2 currentColor={models[6].color}>{models[6].id}</StyledBox2>
      <StyledBox2 currentColor={models[7].color}>{models[7].id}</StyledBox2>
      <StyledBox2 currentColor={models[8].color}>{models[8].id}</StyledBox2>
      <StyledBox2 currentColor={models[9].color}>{models[9].id}</StyledBox2> */}

      {/* ❌ */}
      {/* <Box sx={{ backgroundColor: models[0].color }}>{models[0].id}</Box>
      <Box sx={{ backgroundColor: models[1].color }}>{models[1].id}</Box>
      <Box sx={{ backgroundColor: models[2].color }}>{models[2].id}</Box>
      <Box sx={{ backgroundColor: models[3].color }}>{models[3].id}</Box>
      <Box sx={{ backgroundColor: models[4].color }}>{models[4].id}</Box>
      <Box sx={{ backgroundColor: models[5].color }}>{models[5].id}</Box>
      <Box sx={{ backgroundColor: models[6].color }}>{models[6].id}</Box>
      <Box sx={{ backgroundColor: models[7].color }}>{models[7].id}</Box>
      <Box sx={{ backgroundColor: models[8].color }}>{models[8].id}</Box>
      <Box sx={{ backgroundColor: models[9].color }}>{models[9].id}</Box> */}

      {/* ✅ */}
      {/* <div style={{ backgroundColor: models[0].color }}>{models[0].id}</div>
      <div style={{ backgroundColor: models[1].color }}>{models[1].id}</div>
      <div style={{ backgroundColor: models[2].color }}>{models[2].id}</div>
      <div style={{ backgroundColor: models[3].color }}>{models[3].id}</div>
      <div style={{ backgroundColor: models[4].color }}>{models[4].id}</div>
      <div style={{ backgroundColor: models[5].color }}>{models[5].id}</div>
      <div style={{ backgroundColor: models[6].color }}>{models[6].id}</div>
      <div style={{ backgroundColor: models[7].color }}>{models[7].id}</div>
      <div style={{ backgroundColor: models[8].color }}>{models[8].id}</div>
      <div style={{ backgroundColor: models[9].color }}>{models[9].id}</div> */}

      <Button variant="contained" onClick={clickHandler}>Update Color</Button>
    </div>
  );
}

export default App;
