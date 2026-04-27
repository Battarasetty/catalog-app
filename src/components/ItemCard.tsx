import {
  Card,
  CardActionArea,
  CardContent,
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
        height: "100%",
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: "primary.main",
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <CardActionArea
        onClick={() => onSelect(item)}
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            width: "100%",
            aspectRatio: "16/9", 
            overflow: "hidden",
            bgcolor: "grey.100",
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={item.image}
            alt={item.itemname}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src =
                "https://placehold.co/400x225?text=No+Image";
            }}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Chip
            label={item.category}
            color={categoryColors[item.category] ?? "default"}
            size="small"
            sx={{
              mb: 1,
              fontWeight: 600,
              fontSize: 11,
              alignSelf: "flex-start",
            }}
          />
          <Typography variant="subtitle1" fontWeight={600} noWrap>
            {item.itemname}
          </Typography>

          {item.itemprops[0] && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "auto",
                pt: 1,
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                {item.itemprops[0].label}
              </Typography>
              <Typography variant="caption" fontWeight={600}>
                {item.itemprops[0].value}
              </Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
