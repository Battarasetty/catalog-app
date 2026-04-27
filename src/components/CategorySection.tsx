"use client";

import { Box, Divider, Typography } from "@mui/material";
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

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
          alignItems: "stretch",
        }}
      >
        {items.map((item) => (
          <Box key={item.itemname} sx={{ display: "flex" }}>
            <ItemCard item={item} onSelect={onSelectItem} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
