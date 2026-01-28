import React, { useState } from 'react';
import { Container, TextField, Grid, Button, Typography, Box, InputAdornment } from '@mui/material';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    isRented: false,
    parentalIncome: '',
    selfIncome: '',
    qualification: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: 3, borderRadius: 2, boxShadow: 2, backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4" gutterBottom align="center">Magic Bus Registration</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Location of House"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Is the house rented or owned?"
                name="isRented"
                value={formData.isRented}
                onChange={handleChange}
                SelectProps={{
                  native: true
                }}
                required
              >
                <option value={false}>Owned</option>
                <option value={true}>Rented</option>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Parental Income"
                name="parentalIncome"
                type="number"
                value={formData.parentalIncome}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">₹</InputAdornment>
                }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Self Income (if any)"
                name="selfIncome"
                type="number"
                value={formData.selfIncome}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">₹</InputAdornment>
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} align="center">
              <Button type="submit" variant="contained" color="primary" sx={{ padding: '10px 20px' }}>
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default App;