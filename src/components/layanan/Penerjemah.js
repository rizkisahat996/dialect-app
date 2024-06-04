import React from "react";
import Tiptap from "./TipTap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

export default function Penerjemah(params) {
  const [language, setLanguage] = React.useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <section className="penerjemah pd-container">
      <Box
        sx={{
          minWidth: 120,
          minHeight: 500,
          border: "3px solid #508CAE",
          borderRadius: 10,
          p: 10,
        }}
      >
        <FormControl
          sx={{ minWidth: 360, border: "3px solid #508CAE", borderRadius: 5 }}
        >
          <InputLabel sx={{ minHeight: 200 }} id="demo-simple-select-label">
            Choose a Language
          </InputLabel>
          <Select
            value={language}
            label="Choose a Language"
            onChange={handleChange}
          >
            <MenuItem value={10}>Bahasa Indonesia</MenuItem>
            <MenuItem value={20}>English</MenuItem>
            <MenuItem value={30}>France</MenuItem>
          </Select>
        </FormControl>
        <Tiptap />
      </Box>
      <span>Jumlah Kata: 500/5000</span>
      <Box sx={{ maxWidth: 400, minHeight: 70 }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="row"
          useFlexGap
          spacing={{ xs: 2 }}
        >
          <Box
            sx={{
              minWidth: 170,
              border: "3px solid #508CAE",
              borderRadius: 2,
              background: "#fff",
            }}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
            >
              <Typography variant="button" display="block" gutterBottom>
                Hapus Teks
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              minWidth: 240,
              border: "3px solid #508CAE",
              borderRadius: 2,
              background: "#508CAE",
            }}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
            >
              <Typography variant="button" display="block" gutterBottom>
                Terjemahkan
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </section>
  );
}
