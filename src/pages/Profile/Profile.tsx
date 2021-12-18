import { Button, Grid, Stack, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import dayjs from "dayjs";
import userProfile from "./userProfile.json";
import YoutubeEmbed from "components/YoutubeEmbed";

const DataPoint = ({ label, value }: { label: string; value: string }) => (
  <Box>
    <Typography
      variant="h6"
      sx={{
        textTransform: "uppercase",
      }}
      color="primary"
      fontSize={16}
    >
      {label}
    </Typography>
    <Typography
      sx={{
        textTransform: "uppercase",
      }}
    >
      {value}
    </Typography>
  </Box>
);

const Profile: FC = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={8}
        sx={{
          width: "100%",
          p: {
            xs: 1,
            md: 5,
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          order={{
            xs: 2,
            lg: 1,
          }}
        >
          <Box mb={2}>
            <Typography variant="h1" fontSize={48}>
              {userProfile.name}
            </Typography>
            <Typography variant="h2" fontSize={26} fontWeight={500}>
              {userProfile.occupation}
            </Typography>
          </Box>

          <Box mb={3}>
            <Typography sx={{ mb: 1 }} variant="subtitle1" fontWeight={500}>
              Descripción
            </Typography>
            <Typography>{userProfile.description}</Typography>
          </Box>

          <DataPoint
            label="Edad"
            value={`${dayjs().diff(
              dayjs(userProfile.birthDate),
              "y"
            )} años (${dayjs(userProfile.birthDate).format("DD/MM/YYYY")})`}
          />

          <DataPoint
            label="Altura"
            value={`${(userProfile.height / 100).toFixed(2)} m`}
          />

          <DataPoint label="Peso" value={`${userProfile.weight} kg`} />

          <Stack mt={4} direction="row" spacing={3}>
            <Button variant="contained">Contactar</Button>
            <Button variant="outlined">Añadir a favoritos</Button>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
            mb={3}
          >
            {userProfile.photos.map((photo) => (
              <Box key={photo.id} width={200} height={200}>
                <img
                  src={photo.url}
                  alt="profile"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            ))}
          </Stack>
          <Box>
            <YoutubeEmbed embedId="gA2GCF6v-s0" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Profile;
