import { Box, Typography } from "@mui/material";
import { CatalogItem, GroupedCatalog } from "@/types/catalog";
import CategorySection from "./CategorySection";

interface HomePageProps {
  data: CatalogItem[];
  onSelectItem: (item: CatalogItem) => void;
}

function groupByCategory(data: CatalogItem[]): GroupedCatalog {
  return data.reduce((acc: GroupedCatalog, item: CatalogItem) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

export default function HomePage({ data, onSelectItem }: HomePageProps) {
  const grouped = groupByCategory(data);

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
        Product Catalog
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
        Browse products across {Object.keys(grouped).length} categories
      </Typography>

      {Object.entries(grouped).map(([category, items]) => (
        <CategorySection
          key={category}
          category={category}
          items={items}
          onSelectItem={onSelectItem}
        />
      ))}
    </Box>
  );
}
