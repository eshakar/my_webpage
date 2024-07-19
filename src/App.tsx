import But from "./Components/but";
import CheckboxPage from './Components/CheckBoxPage';
import React, { useState } from 'react';
import {
  Container,
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Button,
  Divider
} from '@mui/material';

interface PageItem {
  label: string;
  checked: boolean;
}

const App: React.FC = () => {
  const [pages, setPages] = useState<PageItem[]>([
    { label: "All pages", checked: false },
    { label: "Page 1", checked: false },
    { label: "Page 2", checked: false },
    { label: "Page 3", checked: false },
    { label: "Page 4", checked: false },
  ]);

  const handleCheck = (index: number) => {
    setPages(prev => prev.map((page, i) =>
      i === index ? { ...page, checked: !page.checked } : page
    ));
  };

  const handleDone = () => {
    console.log("Done clicked");
    // Add your logic here for what should happen when "Done" is clicked
  };
  return (
    <div>
      <But />
      <CheckboxPage />
      <Container maxWidth="sm">
        <Box sx={{ my: 4, boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
          <Stack spacing={0} divider={<Divider />}>
            {pages.map((page, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={page.checked}
                    onChange={() => handleCheck(index)}
                    sx={{
                      color: '#bdbdbd',
                      '&.Mui-checked': {
                        color: '#1976d2',
                      },
                    }}
                  />
                }
                label={page.label}
                labelPlacement="start"
                sx={{
                  margin: 0,
                  padding: '8px 8px',
                  justifyContent: 'space-between',
                  width: '100%',
                  '& .MuiFormControlLabel-label': {
                    color: '#333',
                    fontWeight: index === 0 ? 'bold' : 'normal',
                  }
                }}
              />
            ))}
          </Stack>
          <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: '#ffd600',
                color: '#000',
                '&:hover': {
                  bgcolor: '#ffea00',
                }
              }}
              onClick={handleDone}
            >
              Done
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;