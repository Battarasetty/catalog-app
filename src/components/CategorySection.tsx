import { Box, Grid, Typography, Divider } from "@mui/material";
import { CatalogItem } from "@/types/catalog";
import ItemCard from "./ItemCard";

interface CategorySectionProps {
  category: string;
  items: CatalogItem[];
  onSelectItem: (item: CatalogItem) => void;
}

export default function CategorySection({
  category,
  items,
  onSelectItem,
}: CategorySectionProps) {
  return (
    <Box sx={{ mb: 6 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography variant="h5" fontWeight={700}>
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {items.length} {items.length === 1 ? "item" : "items"}
        </Typography>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.itemname}>
            <ItemCard item={item} onSelect={onSelectItem} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
