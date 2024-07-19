import React, { useState } from 'react';
import {
  Container,
  Box,
  Checkbox,
  FormControlLabel,
  Stack
} from '@mui/material';

const CheckBoxPage: React.FC = () => {
  const [checkedButtons, setCheckedButtons] = useState<boolean[]>(Array(8).fill(false));

  const handleCheck = (index: number) => {
    setCheckedButtons((prev: boolean[]) => {
      const newChecked = [...prev];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Stack 
            spacing={1} 
            sx={{ 
              border: '2px dashed #e0e0ff', 
              borderRadius: 2,
              p: 2 
            }}
          >
            {checkedButtons.map((checked, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => handleCheck(index)}
                    sx={{
                      color: '#e0e0ff',
                      '&.Mui-checked': {
                        color: '#4285f4',
                      },
                    }}
                  />
                }
                label="All pages"
                labelPlacement="start"
                sx={{
                  margin: 0,
                  justifyContent: 'space-between',
                  '& .MuiFormControlLabel-label': {
                    color: '#666',
                  }
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default CheckBoxPage;