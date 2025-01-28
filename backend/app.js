// Add this to your Express app
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
