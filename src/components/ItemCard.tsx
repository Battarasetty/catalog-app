import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Box,
} from "@mui/material";
import { CatalogItem } from "@/types/catalog";

interface ItemCardProps {
  item: CatalogItem;
  onSelect: (item: CatalogItem) => void;
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

export default function ItemCard({ item, onSelect }: ItemCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: "primary.main",
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <CardActionArea onClick={() => onSelect(item)}>
        <CardMedia
          component="img"
          height="160"
          image={item.image}
          alt={item.itemname}
          sx={{ objectFit: "cover" }}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = "https://placehold.co/400x160?text=No+Image";
          }}
        />
        <CardContent>
          <Chip
            label={item.category}
            color={categoryColors[item.category] ?? "default"}
            size="small"
            sx={{ mb: 1, fontWeight: 600, fontSize: 11 }}
          />
          <Typography variant="subtitle1" fontWeight={600} noWrap>
            {item.itemname}
          </Typography>
          {item.itemprops[0] && (
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <Typography variant="caption" color="text.secondary">
                {item.itemprops[0].label}
              </Typography>
              <Typography variant="caption" fontWeight={500}>
                {item.itemprops[0].value}
              </Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
