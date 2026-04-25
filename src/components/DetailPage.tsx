"use client";

import { Box, Button, Chip, Divider, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CatalogItem } from "@/types/catalog";

interface DetailPageProps {
  item: CatalogItem;
  onBack: () => void;
}

const categoryColors: Record<
  string,
  "error" | "success" | "secondary" | "info"
> = {
  Cars: "error",
  Phones: "success",
  Bikes: "secondary",
  Computers: "info",
};

export default function DetailPage({ item, onBack }: DetailPageProps) {
  return (
    <Box sx={{ py: 4 }}>
      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={onBack}
        sx={{ mb: 3, textTransform: "none", fontWeight: 600 }}
        variant="outlined"
        color="primary"
      >
        Back to Catalog
      </Button>

      {/* Two column layout — CSS grid, no MUI Grid needed */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // mobile — stacked
            md: "1fr 1fr", // desktop — side by side
          },
          gap: 4,
        }}
      >
        {/* LEFT — Image */}
        <Box>
          <Box
            component="img"
            src={item.image}
            alt={item.itemname}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src =
                "https://placehold.co/600x400?text=No+Image";
            }}
            sx={{
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: 3,
              display: "block",
            }}
          />
        </Box>

        {/* RIGHT — Details */}
        <Box>
          {/* Category Badge */}
          <Chip
            label={item.category}
            color={categoryColors[item.category] ?? "default"}
            sx={{ mb: 2, fontWeight: 600 }}
          />

          {/* Item Name */}
          <Typography variant="h4" fontWeight={800} sx={{ mb: 3 }}>
            {item.itemname}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Specifications label */}
          <Typography
            variant="overline"
            color="text.secondary"
            fontWeight={600}
          >
            Specifications
          </Typography>

          {/* Dynamic props table — core of assignment */}
          <Paper
            elevation={0}
            sx={{
              mt: 1,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {item.itemprops.length > 0 ? (
              item.itemprops.map((prop, index) => (
                <Box
                  key={prop.label}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 3,
                    py: 1.8,
                    bgcolor: index % 2 === 0 ? "grey.50" : "white",
                    borderBottom:
                      index < item.itemprops.length - 1 ? "1px solid" : "none",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={500}
                    sx={{ minWidth: "140px" }}
                  >
                    {prop.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={700}
                    sx={{ textAlign: "right" }}
                  >
                    {prop.value}
                  </Typography>
                </Box>
              ))
            ) : (
              <Box sx={{ px: 3, py: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  No specifications available.
                </Typography>
              </Box>
            )}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
