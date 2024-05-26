"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { addProducts } from "../../_actions/products";
import SubmitButton from "../../_components/SubmitButton";
import { useFormState } from "react-dom";
import { Textarea } from "@/components/ui/textarea";

const ProductForm = () => {
  const [priceInCents, setPriceInCents] = useState<number>();
  const [error, action] = useFormState(addProducts, {});
  return (
    <form action={action} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name" id="name" required />
        {error.name && <div className="text-error">{error.name}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price in cents</Label>
        <Input
          type="number"
          name="priceInCents"
          id="priceInCents"
          required
          value={priceInCents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
        {error.priceInCents && (
          <div className="text-error">{error.priceInCents}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea name="description" id="description" required />
        {error.description && (
          <div className="text-error">{error.description}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input type="file" name="file" id="file" required />
        {error.file && <div className="text-error">{error.file}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <Input type="file" name="image" id="image" required />
        {error.image && <div className="text-error">{error.image}</div>}
      </div>
      <SubmitButton />
    </form>
  );
};

export default ProductForm;
