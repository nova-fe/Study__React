import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

function App() {
  const cards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Card 1",
      description: "This is a description for card 1.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 2",
      description: "This is a description for card 2.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 3",
      description: "This is a description for card 3.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 4",
      description: "This is a description for card 4.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 5",
      description: "This is a description for card 5.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Card 6",
      description: "This is a description for card 6.",
    },
  ];
  return (
    <>
      {" "}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}
      >
        <Container maxWidth="md">
          <Grid container spacing={3} justifyContent="center">
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia component="img" height="140" image={card.image} alt={card.title} />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;
