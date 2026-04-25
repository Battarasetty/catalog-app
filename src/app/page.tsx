"use client";

import { useState } from "react";
import { Container } from "@mui/material";
import { CatalogItem } from "@/types/catalog";
import catalogData from "@/data/data.json";
import HomePage from "@/components/HomePage";
import DetailPage from "@/components/DetailPage";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);

  return (
    <Container maxWidth="lg">
      {selectedItem === null ? (
        <HomePage
          data={catalogData as CatalogItem[]}
          onSelectItem={setSelectedItem}
        />
      ) : (
        <DetailPage item={selectedItem} onBack={() => setSelectedItem(null)} />
      )}
    </Container>
  );
}
