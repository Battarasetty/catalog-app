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
      {/* Category Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography variant="h5" fontWeight={700}>
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {items.length} {items.length === 1 ? "item" : "items"}
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Responsive grid using CSS — no MUI Grid needed */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", // mobile — 2 columns
            sm: "repeat(2, 1fr)", // tablet — 2 columns
            md: "repeat(3, 1fr)", // medium — 3 columns
            lg: "repeat(4, 1fr)", // desktop — 4 columns
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
